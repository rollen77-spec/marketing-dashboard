/**
 * GA4 Data API client. Requires @google-analytics/data and
 * GOOGLE_APPLICATION_CREDENTIALS + GA4_PROPERTY_ID in env.
 */

const PROPERTY_ID = process.env.GA4_PROPERTY_ID;
const CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;

export function isGa4Configured(): boolean {
  return Boolean(PROPERTY_ID && CREDENTIALS);
}

export interface Ga4SessionsResult {
  sessions: number;
  users: number;
  dateRange: { start: string; end: string };
}

export async function getGa4Sessions(daysBack = 30): Promise<Ga4SessionsResult | null> {
  if (!isGa4Configured()) return null;

  try {
    const { BetaAnalyticsDataClient } = await import("@google-analytics/data");
    const client = new BetaAnalyticsDataClient();
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - daysBack);

    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: start.toISOString().slice(0, 10),
          endDate: end.toISOString().slice(0, 10),
        },
      ],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
      ],
    });

    const row = response.rows?.[0];
    if (!row) return null;

    return {
      sessions: Number(row.metricValues?.[0]?.value ?? 0),
      users: Number(row.metricValues?.[1]?.value ?? 0),
      dateRange: {
        start: start.toISOString().slice(0, 10),
        end: end.toISOString().slice(0, 10),
      },
    };
  } catch (e) {
    console.error("GA4 getGa4Sessions error:", e);
    return null;
  }
}

export async function getGa4SessionsByDate(daysBack = 7): Promise<{ date: string; sessions: number; users: number }[]> {
  if (!isGa4Configured()) return [];

  try {
    const { BetaAnalyticsDataClient } = await import("@google-analytics/data");
    const client = new BetaAnalyticsDataClient();
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - daysBack);

    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [
        {
          startDate: start.toISOString().slice(0, 10),
          endDate: end.toISOString().slice(0, 10),
        },
      ],
      dimensions: [{ name: "date" }],
      metrics: [{ name: "sessions" }, { name: "activeUsers" }],
    });

    return (response.rows ?? []).map((row) => ({
      date: row.dimensionValues?.[0]?.value ?? "",
      sessions: Number(row.metricValues?.[0]?.value ?? 0),
      users: Number(row.metricValues?.[1]?.value ?? 0),
    }));
  } catch (e) {
    console.error("GA4 getGa4SessionsByDate error:", e);
    return [];
  }
}

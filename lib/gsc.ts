/**
 * Google Search Console API client. Requires googleapis and
 * GOOGLE_APPLICATION_CREDENTIALS + GSC_SITE_URL in env.
 */

const SITE_URL = process.env.GSC_SITE_URL;
const CREDENTIALS = process.env.GOOGLE_APPLICATION_CREDENTIALS;

export function isGscConfigured(): boolean {
  return Boolean(SITE_URL && CREDENTIALS);
}

export interface GscQueryRow {
  query: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export async function getGscTopQueries(limit = 10, daysBack = 28): Promise<GscQueryRow[]> {
  if (!isGscConfigured()) return [];

  try {
    const { google } = await import("googleapis");
    const auth = new google.auth.GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
    });
    const searchconsole = google.searchconsole({ version: "v1", auth });
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - daysBack);

    const { data } = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL!,
      requestBody: {
        startDate: start.toISOString().slice(0, 10),
        endDate: end.toISOString().slice(0, 10),
        dimensions: ["query"],
        rowLimit: limit,
      },
    });

    return (data.rows ?? []).map((row) => ({
      query: (row.keys?.[0] as string) ?? "",
      clicks: row.clicks ?? 0,
      impressions: row.impressions ?? 0,
      ctr: row.ctr ?? 0,
      position: row.position ?? 0,
    }));
  } catch (e) {
    console.error("GSC getGscTopQueries error:", e);
    return [];
  }
}

export interface GscPageRow {
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

export async function getGscTopPages(limit = 10, daysBack = 28): Promise<GscPageRow[]> {
  if (!isGscConfigured()) return [];

  try {
    const { google } = await import("googleapis");
    const auth = new google.auth.GoogleAuth({
      scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
    });
    const searchconsole = google.searchconsole({ version: "v1", auth });
    const end = new Date();
    const start = new Date();
    start.setDate(start.getDate() - daysBack);

    const { data } = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL!,
      requestBody: {
        startDate: start.toISOString().slice(0, 10),
        endDate: end.toISOString().slice(0, 10),
        dimensions: ["page"],
        rowLimit: limit,
      },
    });

    return (data.rows ?? []).map((row) => ({
      page: (row.keys?.[0] as string) ?? "",
      clicks: row.clicks ?? 0,
      impressions: row.impressions ?? 0,
      ctr: row.ctr ?? 0,
      position: row.position ?? 0,
    }));
  } catch (e) {
    console.error("GSC getGscTopPages error:", e);
    return [];
  }
}

/**
 * Email marketing detail: campaigns and metrics for drill-down page.
 * Replace with real API (Mailchimp, SendGrid, etc.) when ready.
 */

export interface EmailCampaign {
  id: string;
  name: string;
  sentAt: string; // ISO date
  subject?: string;
}

export interface EmailMetrics {
  sent: number;
  opened: number;
  bounced: number;
  unsubscribes: number;
  clicks: number;
  openRate: number; // 0-100
  clickRate: number; // 0-100
  bounceRate: number; // 0-100
  timeframe: string; // e.g. "LAST 30 DAYS"
  changeVsPrevious?: number; // percent
}

export interface EmailTimeSeriesPoint {
  date: string;
  sent?: number;
  opened?: number;
  clicks?: number;
  openRate?: number;
  clickRate?: number;
}

/** Mock campaigns */
export const EMAIL_CAMPAIGNS: EmailCampaign[] = [
  { id: "all", name: "All campaigns", sentAt: "" },
  { id: "c1", name: "Q1 Product Launch", sentAt: "2025-02-15", subject: "Introducing our new suite" },
  { id: "c2", name: "Weekly Digest #12–16", sentAt: "2025-02-20", subject: "Your weekly roundup" },
  { id: "c3", name: "Re-engagement", sentAt: "2025-02-28", subject: "We miss you" },
  { id: "c4", name: "Partner Newsletter", sentAt: "2025-03-01", subject: "Partner updates" },
];

/** Aggregate metrics (All campaigns) — LAST 30 DAYS */
export const EMAIL_AGGREGATE_METRICS: EmailMetrics = {
  sent: 45200,
  opened: 15639,
  bounced: 226,
  unsubscribes: 128,
  clicks: 2622,
  openRate: 34.6,
  clickRate: 5.8,
  bounceRate: 0.5,
  timeframe: "LAST 30 DAYS",
  changeVsPrevious: 2.1,
};

const CAMPAIGN_FACTORS: Record<string, { k: number; openRate: number; clickRate: number; change: number }> = {
  c1: { k: 1.2, openRate: 36, clickRate: 6.2, change: 3 },
  c2: { k: 0.9, openRate: 33, clickRate: 5.5, change: 1.5 },
  c3: { k: 0.7, openRate: 32, clickRate: 5.1, change: 0.8 },
  c4: { k: 0.85, openRate: 34, clickRate: 5.7, change: 2 },
};

/** Per-campaign metrics (mock) for selector */
export function getEmailMetricsForCampaign(
  campaignId: string,
  _siteId?: string
): EmailMetrics {
  if (campaignId === "all") return EMAIL_AGGREGATE_METRICS;
  const campaign = EMAIL_CAMPAIGNS.find((c) => c.id === campaignId);
  if (!campaign) return EMAIL_AGGREGATE_METRICS;
  const f = CAMPAIGN_FACTORS[campaignId] ?? { k: 0.8, openRate: 33, clickRate: 5.5, change: 1 };
  return {
    sent: Math.round(EMAIL_AGGREGATE_METRICS.sent * f.k * 0.25),
    opened: Math.round(EMAIL_AGGREGATE_METRICS.opened * f.k * 0.25),
    bounced: Math.round(EMAIL_AGGREGATE_METRICS.bounced * f.k * 0.25),
    unsubscribes: Math.round(EMAIL_AGGREGATE_METRICS.unsubscribes * f.k * 0.25),
    clicks: Math.round(EMAIL_AGGREGATE_METRICS.clicks * f.k * 0.25),
    openRate: f.openRate,
    clickRate: f.clickRate,
    bounceRate: EMAIL_AGGREGATE_METRICS.bounceRate,
    timeframe: "LAST 30 DAYS",
    changeVsPrevious: f.change,
  };
}

/** Time series for charts — daily or weekly points */
export const EMAIL_CHART_DATA: EmailTimeSeriesPoint[] = [
  { date: "Mon 3 Feb", sent: 4200, opened: 1450, clicks: 240, openRate: 34.5, clickRate: 5.7 },
  { date: "Mon 10 Feb", sent: 4800, opened: 1680, clicks: 278, openRate: 35.0, clickRate: 5.8 },
  { date: "Mon 17 Feb", sent: 5100, opened: 1785, clicks: 296, openRate: 35.0, clickRate: 5.8 },
  { date: "Mon 24 Feb", sent: 4900, opened: 1694, clicks: 285, openRate: 34.6, clickRate: 5.8 },
  { date: "Mon 3 Mar", sent: 5200, opened: 1820, clicks: 302, openRate: 35.0, clickRate: 5.8 },
];

export function getEmailChartData(
  campaignId: string,
  _siteId?: string
): EmailTimeSeriesPoint[] {
  if (campaignId === "all") return EMAIL_CHART_DATA;
  // Scale down for single campaign
  return EMAIL_CHART_DATA.map((d, i) => ({
    ...d,
    sent: Math.round((d.sent ?? 0) * (0.2 + (i * 0.15))),
    opened: Math.round((d.opened ?? 0) * (0.2 + (i * 0.15))),
    clicks: Math.round((d.clicks ?? 0) * (0.2 + (i * 0.15))),
  }));
}

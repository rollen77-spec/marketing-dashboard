/**
 * Social media detail: platforms (X, Facebook, LinkedIn) and metrics for drill-down page.
 * Replace with real APIs (Meta, X, LinkedIn) when ready.
 */

export type SocialPlatformId = "x" | "facebook" | "linkedin";

export interface SocialPlatform {
  id: SocialPlatformId;
  name: string;
  label: string; // display name, e.g. "X (Twitter)"
  icon?: string; // emoji or icon name
}

export interface SocialPlatformMetrics {
  platformId: SocialPlatformId;
  followers: number;
  impressions: number;
  engagements: number;
  engagementRate: number; // 0-100
  mentions?: number;
  tweetsOrPosts?: number;
  timeframe: string; // e.g. "ALL TIME", "LAST 7 DAYS"
  changeVsPrevious?: number;
}

export interface SocialTimeSeriesPoint {
  date: string;
  impressions?: number;
  engagements?: number;
  followers?: number;
}

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  { id: "x", name: "X", label: "X (Twitter)" },
  { id: "facebook", name: "Facebook", label: "Facebook" },
  { id: "linkedin", name: "LinkedIn", label: "LinkedIn" },
];

/** Mock metrics per platform — by siteId you could switch data */
export function getSocialMetricsForPlatform(
  platformId: SocialPlatformId,
  _siteId?: string
): SocialPlatformMetrics {
  const data: Record<SocialPlatformId, SocialPlatformMetrics> = {
    x: {
      platformId: "x",
      followers: 972,
      impressions: 28400,
      engagements: 1204,
      engagementRate: 4.2,
      mentions: 406,
      tweetsOrPosts: 12300,
      timeframe: "LAST 7 DAYS",
      changeVsPrevious: 12,
    },
    facebook: {
      platformId: "facebook",
      followers: 564,
      impressions: 18900,
      engagements: 892,
      engagementRate: 4.7,
      timeframe: "LAST 7 DAYS",
      changeVsPrevious: 8,
    },
    linkedin: {
      platformId: "linkedin",
      followers: 1670,
      impressions: 12400,
      engagements: 534,
      engagementRate: 4.3,
      timeframe: "LAST 7 DAYS",
      changeVsPrevious: 5,
    },
  };
  return data[platformId];
}

/** Time series for line charts per platform */
export const SOCIAL_CHART_DATA: Record<SocialPlatformId, SocialTimeSeriesPoint[]> = {
  x: [
    { date: "Thu 1 Jun", impressions: 3200, engagements: 134 },
    { date: "Fri 2 Jun", impressions: 4100, engagements: 172 },
    { date: "Sat 3 Jun", impressions: 3800, engagements: 160 },
    { date: "Sun 4 Jun", impressions: 4500, engagements: 189 },
    { date: "Mon 5 Jun", impressions: 4200, engagements: 176 },
    { date: "Tue 6 Jun", impressions: 4600, engagements: 193 },
    { date: "Wed 7 Jun", impressions: 4000, engagements: 180 },
  ],
  facebook: [
    { date: "Thu 1 Jun", impressions: 2400, engagements: 113 },
    { date: "Fri 2 Jun", impressions: 2700, engagements: 127 },
    { date: "Sat 3 Jun", impressions: 2600, engagements: 122 },
    { date: "Sun 4 Jun", impressions: 2900, engagements: 136 },
    { date: "Mon 5 Jun", impressions: 2500, engagements: 118 },
    { date: "Tue 6 Jun", impressions: 2800, engagements: 132 },
    { date: "Wed 7 Jun", impressions: 2600, engagements: 122 },
  ],
  linkedin: [
    { date: "Thu 1 Jun", impressions: 1600, engagements: 69 },
    { date: "Fri 2 Jun", impressions: 1800, engagements: 77 },
    { date: "Sat 3 Jun", impressions: 1700, engagements: 73 },
    { date: "Sun 4 Jun", impressions: 1750, engagements: 75 },
    { date: "Mon 5 Jun", impressions: 1900, engagements: 82 },
    { date: "Tue 6 Jun", impressions: 1850, engagements: 80 },
    { date: "Wed 7 Jun", impressions: 1800, engagements: 78 },
  ],
};

export function getSocialChartData(
  platformId: SocialPlatformId,
  _siteId?: string
): SocialTimeSeriesPoint[] {
  return SOCIAL_CHART_DATA[platformId] ?? [];
}

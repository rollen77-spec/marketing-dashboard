/**
 * Social media detail: platforms (X, Facebook, LinkedIn, Instagram) and metrics for drill-down page.
 * Includes video metrics: views, avg watch time, top videos, likes, shares, comments, CTR.
 * Replace with real APIs (Meta, X, LinkedIn) when ready.
 */

export type SocialPlatformId = "x" | "facebook" | "linkedin" | "instagram";

export interface SocialPlatform {
  id: SocialPlatformId;
  name: string;
  label: string; // display name, e.g. "X (Twitter)"
  icon?: string; // emoji or icon name
}

export interface SocialVideoRow {
  title: string;
  views: number;
  avgWatchTimeSeconds: number;
  likes: number;
  shares: number;
  comments: number;
  ctr: number; // click-through rate %
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
  // Video metrics (Reels, video posts, etc.)
  videoViews?: number;
  avgWatchTimeSeconds?: number;
  likes?: number;
  shares?: number;
  comments?: number;
  ctr?: number; // click-through rate %
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
  { id: "instagram", name: "Instagram", label: "Instagram" },
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
      videoViews: 18400,
      avgWatchTimeSeconds: 42,
      likes: 892,
      shares: 312,
      comments: 204,
      ctr: 3.8,
    },
    facebook: {
      platformId: "facebook",
      followers: 564,
      impressions: 18900,
      engagements: 892,
      engagementRate: 4.7,
      timeframe: "LAST 7 DAYS",
      changeVsPrevious: 8,
      videoViews: 12200,
      avgWatchTimeSeconds: 68,
      likes: 654,
      shares: 198,
      comments: 142,
      ctr: 4.2,
    },
    linkedin: {
      platformId: "linkedin",
      followers: 1670,
      impressions: 12400,
      engagements: 534,
      engagementRate: 4.3,
      timeframe: "LAST 7 DAYS",
      changeVsPrevious: 5,
      videoViews: 8200,
      avgWatchTimeSeconds: 95,
      likes: 412,
      shares: 88,
      comments: 76,
      ctr: 3.2,
    },
    instagram: {
      platformId: "instagram",
      followers: 2340,
      impressions: 42100,
      engagements: 2104,
      engagementRate: 5.0,
      timeframe: "LAST 7 DAYS",
      changeVsPrevious: 18,
      videoViews: 28900,
      avgWatchTimeSeconds: 52,
      likes: 1654,
      shares: 420,
      comments: 312,
      ctr: 4.8,
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
  instagram: [
    { date: "Thu 1 Jun", impressions: 5200, engagements: 268 },
    { date: "Fri 2 Jun", impressions: 5800, engagements: 298 },
    { date: "Sat 3 Jun", impressions: 6100, engagements: 312 },
    { date: "Sun 4 Jun", impressions: 6200, engagements: 318 },
    { date: "Mon 5 Jun", impressions: 5900, engagements: 302 },
    { date: "Tue 6 Jun", impressions: 6400, engagements: 328 },
    { date: "Wed 7 Jun", impressions: 6600, engagements: 338 },
  ],
};

export function getSocialChartData(
  platformId: SocialPlatformId,
  _siteId?: string
): SocialTimeSeriesPoint[] {
  return SOCIAL_CHART_DATA[platformId] ?? [];
}

/** Top videos per platform (Reels, native video posts) */
export const SOCIAL_TOP_VIDEOS: Record<SocialPlatformId, SocialVideoRow[]> = {
  x: [
    { title: "Product launch clip", views: 4200, avgWatchTimeSeconds: 38, likes: 312, shares: 89, comments: 42, ctr: 4.1 },
    { title: "How-to tutorial", views: 3100, avgWatchTimeSeconds: 72, likes: 256, shares: 54, comments: 38, ctr: 3.9 },
    { title: "Customer story", views: 2800, avgWatchTimeSeconds: 95, likes: 198, shares: 41, comments: 28, ctr: 3.5 },
  ],
  facebook: [
    { title: "Live Q&A replay", views: 5800, avgWatchTimeSeconds: 125, likes: 420, shares: 112, comments: 68, ctr: 4.5 },
    { title: "Behind the scenes", views: 3600, avgWatchTimeSeconds: 58, likes: 288, shares: 76, comments: 44, ctr: 4.0 },
    { title: "Event highlight", views: 2400, avgWatchTimeSeconds: 42, likes: 182, shares: 48, comments: 32, ctr: 3.8 },
  ],
  linkedin: [
    { title: "Thought leadership", views: 2100, avgWatchTimeSeconds: 98, likes: 165, shares: 32, comments: 28, ctr: 3.2 },
    { title: "Company culture", views: 1800, avgWatchTimeSeconds: 75, likes: 142, shares: 28, comments: 22, ctr: 3.0 },
    { title: "Industry trends", views: 1500, avgWatchTimeSeconds: 110, likes: 128, shares: 24, comments: 18, ctr: 2.9 },
  ],
  instagram: [
    { title: "Reel: Quick tip", views: 12400, avgWatchTimeSeconds: 48, likes: 892, shares: 234, comments: 156, ctr: 5.2 },
    { title: "Reel: Demo", views: 8200, avgWatchTimeSeconds: 62, likes: 654, shares: 168, comments: 98, ctr: 4.8 },
    { title: "Story highlight", views: 5600, avgWatchTimeSeconds: 35, likes: 412, shares: 112, comments: 72, ctr: 4.4 },
  ],
};

export function getTopVideosForPlatform(
  platformId: SocialPlatformId,
  _siteId?: string
): SocialVideoRow[] {
  return SOCIAL_TOP_VIDEOS[platformId] ?? [];
}

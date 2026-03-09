/**
 * Website Traffic drill-down: KPIs, device/country/source breakdowns, actions, video.
 * Replace with real GA4/analytics data when ready.
 */

import type { MetricSummary } from "@/lib/sites-data";

// ---------- Core KPIs ----------

export const TRAFFIC_DETAIL_KPIS: MetricSummary[] = [
  { label: "Unique visitors", value: "42.8K", change: 14.2, trend: "up", subtitle: "Last 30 days" },
  { label: "Sessions", value: "124.2K", change: 12.4, trend: "up", subtitle: "Last 30 days" },
  { label: "Bounce rate", value: "38.5%", change: -4.1, trend: "down", subtitle: "Lower is better" },
  { label: "Avg. session duration", value: "2m 34s", change: 8.0, trend: "up", subtitle: "Last 30 days" },
  { label: "Pageviews", value: "318.5K", change: 9.2, trend: "up", subtitle: "Last 30 days" },
  { label: "Pages per session", value: "2.6", change: 2.1, trend: "up", subtitle: "Last 30 days" },
  { label: "New vs returning", value: "62% new", change: 3.0, trend: "up", subtitle: "New visitors" },
  { label: "Conversion rate", value: "3.2%", change: 0.5, trend: "up", subtitle: "Goal completions" },
];

// ---------- Traffic by device ----------

export interface DeviceRow {
  device: string;
  sessions: number;
  share: number;
}

export const TRAFFIC_BY_DEVICE: DeviceRow[] = [
  { device: "Desktop", sessions: 58_200, share: 46.8 },
  { device: "Mobile", sessions: 52_100, share: 41.9 },
  { device: "Tablet", sessions: 13_900, share: 11.2 },
];

// ---------- Traffic by country ----------

export interface CountryTrafficRow {
  country: string;
  sessions: number;
  uniqueVisitors: number;
  bounceRate: number;
}

export const TRAFFIC_BY_COUNTRY: CountryTrafficRow[] = [
  { country: "United States", sessions: 52_400, uniqueVisitors: 28_100, bounceRate: 36.2 },
  { country: "Canada", sessions: 18_200, uniqueVisitors: 9_800, bounceRate: 39.1 },
  { country: "United Kingdom", sessions: 14_600, uniqueVisitors: 8_200, bounceRate: 40.5 },
  { country: "Australia", sessions: 9_100, uniqueVisitors: 5_400, bounceRate: 38.8 },
  { country: "Germany", sessions: 7_200, uniqueVisitors: 4_100, bounceRate: 42.1 },
  { country: "India", sessions: 5_800, uniqueVisitors: 3_600, bounceRate: 45.2 },
  { country: "France", sessions: 4_100, uniqueVisitors: 2_400, bounceRate: 41.0 },
  { country: "Brazil", sessions: 3_200, uniqueVisitors: 1_900, bounceRate: 44.0 },
];

// ---------- Top pages by traffic ----------

export interface TopPageRow {
  path: string;
  title: string;
  sessions: number;
  pageviews: number;
  avgTimeOnPage: string;
  bounceRate: number;
}

export const TOP_PAGES_BY_TRAFFIC: TopPageRow[] = [
  { path: "/", title: "Home", sessions: 28_400, pageviews: 35_200, avgTimeOnPage: "1m 12s", bounceRate: 42.1 },
  { path: "/solutions", title: "Solutions overview", sessions: 18_200, pageviews: 24_100, avgTimeOnPage: "2m 05s", bounceRate: 35.2 },
  { path: "/pricing", title: "Pricing", sessions: 14_600, pageviews: 18_900, avgTimeOnPage: "1m 48s", bounceRate: 38.0 },
  { path: "/blog", title: "Blog", sessions: 12_100, pageviews: 28_400, avgTimeOnPage: "3m 22s", bounceRate: 32.5 },
  { path: "/resources/guide", title: "Resource guide", sessions: 9_800, pageviews: 14_200, avgTimeOnPage: "2m 30s", bounceRate: 36.8 },
  { path: "/about", title: "About us", sessions: 8_200, pageviews: 9_100, avgTimeOnPage: "1m 15s", bounceRate: 45.0 },
  { path: "/contact", title: "Contact", sessions: 6_400, pageviews: 6_800, avgTimeOnPage: "0m 58s", bounceRate: 48.2 },
  { path: "/partners", title: "Partners", sessions: 4_100, pageviews: 5_200, avgTimeOnPage: "1m 40s", bounceRate: 40.1 },
];

// ---------- Traffic sources (organic, paid, LLM, reviews, backlinks, etc.) ----------

export interface TrafficSourceRow {
  source: string;
  sessions: number;
  share: number;
  trend: "up" | "down" | "neutral";
}

export const TRAFFIC_SOURCES: TrafficSourceRow[] = [
  { source: "Organic search", sessions: 48_200, share: 38.8, trend: "up" },
  { source: "Direct", sessions: 32_100, share: 25.8, trend: "up" },
  { source: "Paid search", sessions: 18_400, share: 14.8, trend: "up" },
  { source: "Referral / backlinks", sessions: 12_200, share: 9.8, trend: "up" },
  { source: "Social", sessions: 6_800, share: 5.5, trend: "neutral" },
  { source: "LLM / AI referrals", sessions: 3_200, share: 2.6, trend: "up" },
  { source: "Reviews / aggregators", sessions: 2_100, share: 1.7, trend: "neutral" },
  { source: "Email", sessions: 1_800, share: 1.4, trend: "down" },
];

export interface TrafficSourceTimePoint {
  date: string;
  organic: number;
  paid: number;
  direct: number;
  referral: number;
  social: number;
  llm: number;
  reviews: number;
}

export const TRAFFIC_SOURCES_OVER_TIME: TrafficSourceTimePoint[] = [
  { date: "Week 1", organic: 11_200, paid: 4_100, direct: 7_400, referral: 2_800, social: 1_600, llm: 680, reviews: 420 },
  { date: "Week 2", organic: 11_800, paid: 4_400, direct: 8_100, referral: 3_000, social: 1_700, llm: 820, reviews: 480 },
  { date: "Week 3", organic: 12_400, paid: 4_600, direct: 8_200, referral: 3_100, social: 1_750, llm: 880, reviews: 600 },
  { date: "Week 4", organic: 12_800, paid: 4_700, direct: 8_400, referral: 3_300, social: 1_750, llm: 820, reviews: 600 },
];

// ---------- Play rate (video engagement) ----------

export const VIDEO_PLAY_RATE_KPI: MetricSummary = {
  label: "Video play rate",
  value: "24.6%",
  change: 3.2,
  trend: "up",
  subtitle: "Sessions with video play",
};

export interface VideoEngagementRow {
  title: string;
  plays: number;
  avgWatchTime: string;
  completionRate: number;
  playRate: number;
}

export const TOP_VIDEOS_BY_PLAYS: VideoEngagementRow[] = [
  { title: "Product overview", plays: 12_400, avgWatchTime: "2m 18s", completionRate: 68, playRate: 31.2 },
  { title: "How to get started", plays: 8_200, avgWatchTime: "3m 05s", completionRate: 72, playRate: 28.1 },
  { title: "Customer story", plays: 5_600, avgWatchTime: "4m 12s", completionRate: 58, playRate: 22.4 },
  { title: "Feature demo", plays: 4_100, avgWatchTime: "1m 45s", completionRate: 75, playRate: 26.0 },
];

// ---------- Actions per visit ----------

export interface ActionPerVisitRow {
  action: string;
  count: number;
  sessionsWithAction: number;
  rate: number; // % of sessions
}

export const ACTIONS_PER_VISIT: ActionPerVisitRow[] = [
  { action: "Blog content read (2+ min)", count: 28_400, sessionsWithAction: 22_100, rate: 17.8 },
  { action: "Video watched", count: 18_200, sessionsWithAction: 15_600, rate: 12.6 },
  { action: "External link clicked", count: 12_800, sessionsWithAction: 10_200, rate: 8.2 },
  { action: "Content downloaded", count: 8_400, sessionsWithAction: 7_100, rate: 5.7 },
  { action: "Podcast listened", count: 3_200, sessionsWithAction: 2_800, rate: 2.3 },
  { action: "Form started", count: 6_100, sessionsWithAction: 5_400, rate: 4.3 },
  { action: "Form submitted", count: 4_200, sessionsWithAction: 3_900, rate: 3.1 },
];

// ---------- Time series for charts ----------

export const SESSIONS_OVER_TIME = [
  { date: "Mon", sessions: 18_200, uniqueVisitors: 9_400 },
  { date: "Tue", sessions: 19_100, uniqueVisitors: 9_800 },
  { date: "Wed", sessions: 20_400, uniqueVisitors: 10_200 },
  { date: "Thu", sessions: 21_100, uniqueVisitors: 10_600 },
  { date: "Fri", sessions: 22_800, uniqueVisitors: 11_200 },
  { date: "Sat", sessions: 12_400, uniqueVisitors: 6_800 },
  { date: "Sun", sessions: 11_200, uniqueVisitors: 6_200 },
];

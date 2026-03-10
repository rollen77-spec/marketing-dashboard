/**
 * Website Traffic drill-down: KPIs, device/country/source breakdowns, actions.
 * Replace with real GA4/analytics data when ready.
 */

import type { MetricSummary } from "@/lib/sites-data";

// ---------- Website properties ----------

export const WEBSITE_PROPERTIES = [
  {
    id: "hostopia-corporate",
    label: "Hostopia corporate website",
  },
  {
    id: "hostopia-connects",
    label: "HostopiaConnects website",
  },
] as const;

export type WebsitePropertyId = (typeof WEBSITE_PROPERTIES)[number]["id"];

// ---------- Core KPIs (Hostopia corporate default) ----------

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

export const TRAFFIC_DETAIL_KPIS_CONNECTS: MetricSummary[] = [
  { label: "Unique visitors", value: "18.6K", change: 9.4, trend: "up", subtitle: "Last 30 days" },
  { label: "Sessions", value: "41.3K", change: 7.8, trend: "up", subtitle: "Last 30 days" },
  { label: "Bounce rate", value: "32.1%", change: -3.2, trend: "down", subtitle: "Lower is better" },
  { label: "Avg. session duration", value: "3m 02s", change: 6.4, trend: "up", subtitle: "Last 30 days" },
  { label: "Pageviews", value: "96.4K", change: 8.9, trend: "up", subtitle: "Last 30 days" },
  { label: "Pages per session", value: "2.9", change: 2.6, trend: "up", subtitle: "Last 30 days" },
  { label: "New vs returning", value: "58% new", change: 2.2, trend: "up", subtitle: "New visitors" },
  { label: "Conversion rate", value: "4.1%", change: 0.7, trend: "up", subtitle: "Goal completions" },
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

export const TRAFFIC_BY_DEVICE_CONNECTS: DeviceRow[] = [
  { device: "Desktop", sessions: 22_800, share: 55.1 },
  { device: "Mobile", sessions: 15_900, share: 38.5 },
  { device: "Tablet", sessions: 2_600, share: 6.4 },
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

export const TRAFFIC_BY_COUNTRY_CONNECTS: CountryTrafficRow[] = [
  { country: "United States", sessions: 18_400, uniqueVisitors: 9_600, bounceRate: 33.2 },
  { country: "Canada", sessions: 6_300, uniqueVisitors: 3_400, bounceRate: 35.4 },
  { country: "United Kingdom", sessions: 4_900, uniqueVisitors: 2_700, bounceRate: 37.1 },
  { country: "Australia", sessions: 3_100, uniqueVisitors: 1_800, bounceRate: 34.6 },
  { country: "Germany", sessions: 2_200, uniqueVisitors: 1_300, bounceRate: 38.9 },
  { country: "France", sessions: 1_700, uniqueVisitors: 1_000, bounceRate: 36.5 },
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

export const TOP_PAGES_BY_TRAFFIC_CONNECTS: TopPageRow[] = [
  { path: "/", title: "Connects home", sessions: 9_200, pageviews: 11_600, avgTimeOnPage: "1m 40s", bounceRate: 39.4 },
  { path: "/assets", title: "Browse assets", sessions: 7_100, pageviews: 15_800, avgTimeOnPage: "3m 05s", bounceRate: 31.2 },
  { path: "/how-it-works", title: "How it works", sessions: 4_600, pageviews: 5_900, avgTimeOnPage: "2m 18s", bounceRate: 34.7 },
  { path: "/featured", title: "Featured journeys", sessions: 3_300, pageviews: 4_800, avgTimeOnPage: "2m 42s", bounceRate: 33.1 },
  { path: "/cart", title: "Cart", sessions: 2_000, pageviews: 2_300, avgTimeOnPage: "1m 02s", bounceRate: 46.5 },
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

export const TRAFFIC_SOURCES_CONNECTS: TrafficSourceRow[] = [
  { source: "Organic search", sessions: 16_400, share: 39.7, trend: "up" },
  { source: "Direct", sessions: 9_800, share: 23.7, trend: "up" },
  { source: "Paid search", sessions: 5_900, share: 14.3, trend: "up" },
  { source: "Referral / backlinks", sessions: 4_400, share: 10.7, trend: "up" },
  { source: "Social", sessions: 3_000, share: 7.3, trend: "neutral" },
  { source: "Email", sessions: 1_400, share: 3.4, trend: "up" },
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

export const SESSIONS_OVER_TIME_CONNECTS = [
  { date: "Mon", sessions: 6_200, uniqueVisitors: 3_400 },
  { date: "Tue", sessions: 6_600, uniqueVisitors: 3_600 },
  { date: "Wed", sessions: 7_000, uniqueVisitors: 3_800 },
  { date: "Thu", sessions: 7_400, uniqueVisitors: 4_000 },
  { date: "Fri", sessions: 7_900, uniqueVisitors: 4_200 },
  { date: "Sat", sessions: 3_200, uniqueVisitors: 1_800 },
  { date: "Sun", sessions: 3_000, uniqueVisitors: 1_700 },
];

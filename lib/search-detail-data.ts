/**
 * Search / SEO / PPC / Traffic detail mock data.
 * Replace with real GA4, GSC, and ad-platform data later.
 */

import type { MetricSummary } from "@/lib/sites-data";

// ---------- SEO ----------

export interface SeoQueryRow {
  query: string;
  clicks: number;
}

export interface SeoPageRow {
  path: string;
  impressions: number;
  clicks: number;
  avgPosition: number;
}

export const SEO_KPIS: MetricSummary[] = [
  { label: "Sessions from organic", value: "1,159", change: 19, trend: "up", subtitle: "Last 30 days" },
  { label: "Engaged sessions (organic)", value: "638", change: -23, trend: "down", subtitle: "Last 30 days" },
  { label: "Conversion from organic", value: "3,550.92", change: -24, trend: "down", subtitle: "Last 30 days" },
  { label: "Revenue from organic", value: "$856.77", change: 31, trend: "up", subtitle: "Last 30 days" },
];

export const SEO_SESSIONS_SERIES = [
  { date: "Mon", sessions: 180, engaged: 96 },
  { date: "Tue", sessions: 210, engaged: 110 },
  { date: "Wed", sessions: 190, engaged: 98 },
  { date: "Thu", sessions: 230, engaged: 125 },
  { date: "Fri", sessions: 205, engaged: 112 },
  { date: "Sat", sessions: 170, engaged: 86 },
  { date: "Sun", sessions: 174, engaged: 91 },
];

export const SEO_CONVERSIONS_SERIES = [
  { date: "Mon", conversions: 480 },
  { date: "Tue", conversions: 505 },
  { date: "Wed", conversions: 492 },
  { date: "Thu", conversions: 515 },
  { date: "Fri", conversions: 503 },
  { date: "Sat", conversions: 487 },
  { date: "Sun", conversions: 469 },
];

export const SEO_TOP_QUERIES: SeoQueryRow[] = [
  { query: "integer", clicks: 1730 },
  { query: "bibendum", clicks: 1560 },
  { query: "in arcu sed eros risus", clicks: 1191 },
  { query: "pellentesque eu feugiat in felis", clicks: 1128 },
  { query: "dictum suscipit", clicks: 962 },
  { query: "arcu proin", clicks: 825 },
  { query: "amet posuere", clicks: 695 },
  { query: "bibendum ligula", clicks: 519 },
];

export const SEO_TOP_PAGES: SeoPageRow[] = [
  { path: "/pricing", impressions: 1935, clicks: 676, avgPosition: 11.9 },
  { path: "/solutions/overview", impressions: 1478, clicks: 619, avgPosition: 14.6 },
  { path: "/resources/guide", impressions: 1366, clicks: 410, avgPosition: 13.7 },
  { path: "/blog/how-to", impressions: 1110, clicks: 676, avgPosition: 10.7 },
  { path: "/partners", impressions: 941, clicks: 338, avgPosition: 9.8 },
  { path: "/about", impressions: 871, clicks: 1_966, avgPosition: 10.8 },
];

// ---------- PPC ----------

export interface PpcCampaignRow {
  name: string;
  adCost: number;
  clicks: number;
  costPerConversion: number;
}

export const PPC_KPIS: MetricSummary[] = [
  { label: "Advertiser ads cost", value: "$748.13", change: 13, trend: "up", subtitle: "Last 30 days" },
  { label: "Conversions from paid", value: "4,413.97", change: -9, trend: "down", subtitle: "Last 30 days" },
  { label: "Conversion rate (paid)", value: "48.0%", change: -46, trend: "down", subtitle: "Last 30 days" },
  { label: "Revenue from paid", value: "$857.29", change: 25, trend: "up", subtitle: "Last 30 days" },
];

export const PPC_SERIES = [
  { date: "Week 1", conversions: 980, cpc: 0.28 },
  { date: "Week 2", conversions: 1_060, cpc: 0.26 },
  { date: "Week 3", conversions: 1_120, cpc: 0.25 },
  { date: "Week 4", conversions: 1_250, cpc: 0.24 },
];

export const PPC_TOP_CAMPAIGNS: PpcCampaignRow[] = [
  { name: "Ut mattis", adCost: 939.49, clicks: 1_714, costPerConversion: 0.22 },
  { name: "Aliquet urna", adCost: 887.30, clicks: 1_873, costPerConversion: 0.18 },
  { name: "Consectetur", adCost: 881.96, clicks: 956, costPerConversion: 0.28 },
  { name: "Bibendum", adCost: 875.15, clicks: 1_046, costPerConversion: 0.18 },
  { name: "Amet", adCost: 873.89, clicks: 510, costPerConversion: 0.32 },
];

// ---------- Traffic & referrals ----------

export interface TrafficChannelPoint {
  month: string;
  organic: number;
  paid: number;
  direct: number;
  referral: number;
}

export interface CountryRow {
  country: string;
  engagedSessions: number;
}

export interface ReferralRow {
  source: string;
  sessions: number;
  conversions: number;
  sessionConversionRate: number;
}

export const TRAFFIC_KPIS: MetricSummary[] = [
  { label: "Total sessions", value: "1,615", change: 22, trend: "up", subtitle: "Last 30 days" },
  { label: "Bounce rate", value: "39.26%", change: 112, trend: "up", subtitle: "Last 30 days" },
  { label: "Conversions", value: "3,330.24", change: -5, trend: "down", subtitle: "Last 30 days" },
  { label: "Session conversion rate", value: "74.0%", change: -13, trend: "down", subtitle: "Last 30 days" },
];

export const TRAFFIC_CHANNELS_OVER_TIME: TrafficChannelPoint[] = [
  { month: "Mar", organic: 8_200, paid: 1_200, direct: 900, referral: 600 },
  { month: "Apr", organic: 8_300, paid: 1_150, direct: 870, referral: 590 },
  { month: "May", organic: 8_400, paid: 1_180, direct: 910, referral: 620 },
  { month: "Jun", organic: 7_800, paid: 1_100, direct: 860, referral: 580 },
  { month: "Jul", organic: 9_200, paid: 1_300, direct: 950, referral: 640 },
];

export const TRAFFIC_NEW_USERS_SERIES = [
  { date: "Mon", newUsers: 210 },
  { date: "Tue", newUsers: 225 },
  { date: "Wed", newUsers: 230 },
  { date: "Thu", newUsers: 245 },
  { date: "Fri", newUsers: 248 },
  { date: "Sat", newUsers: 255 },
  { date: "Sun", newUsers: 200 },
];

export const TRAFFIC_COUNTRIES: CountryRow[] = [
  { country: "United States", engagedSessions: 1_831 },
  { country: "Canada", engagedSessions: 1_376 },
  { country: "United Kingdom", engagedSessions: 1_297 },
  { country: "Germany", engagedSessions: 1_021 },
  { country: "Australia", engagedSessions: 916 },
  { country: "Brazil", engagedSessions: 778 },
  { country: "France", engagedSessions: 650 },
];

export const REFERRAL_ROWS: ReferralRow[] = [
  { source: "Uma massa", sessions: 1_962, conversions: 4_028.87, sessionConversionRate: 71.05 },
  { source: "Risus placerat", sessions: 1_098, conversions: 4_290.20, sessionConversionRate: 97.00 },
  { source: "Aenean semper", sessions: 931, conversions: 2_090.69, sessionConversionRate: 59.00 },
  { source: "Ut augue scelerisque", sessions: 875, conversions: 3_176.69, sessionConversionRate: 31.00 },
  { source: "Id amet eu faucibus", sessions: 850, conversions: 3_684.60, sessionConversionRate: 38.00 },
];


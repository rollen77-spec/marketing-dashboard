/**
 * Video engagement drill-down: play rate, watch time, top videos.
 * Replace with real analytics/video-platform data when ready.
 */

import type { MetricSummary } from "@/lib/sites-data";

// ---------- Video KPIs ----------

export const VIDEO_KPIS: MetricSummary[] = [
  { label: "Video play rate", value: "24.6%", change: 3.2, trend: "up", subtitle: "Sessions with video play" },
  { label: "Total video plays", value: "30.5K", change: 8.1, trend: "up", subtitle: "Last 30 days" },
  { label: "Avg. watch time", value: "2m 18s", change: 5.0, trend: "up", subtitle: "Per play" },
  { label: "Completion rate", value: "68%", change: 2.4, trend: "up", subtitle: "Watched to end" },
];

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

export const VIDEO_PLAYS_OVER_TIME = [
  { date: "Week 1", plays: 6_800 },
  { date: "Week 2", plays: 7_200 },
  { date: "Week 3", plays: 7_900 },
  { date: "Week 4", plays: 8_600 },
];

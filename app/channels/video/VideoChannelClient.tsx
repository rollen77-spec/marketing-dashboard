"use client";

import { Video } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import ChannelChart from "@/components/ChannelChart";
import {
  VIDEO_KPIS,
  TOP_VIDEOS_BY_PLAYS,
  VIDEO_PLAYS_OVER_TIME,
} from "@/lib/video-detail-data";

interface VideoChannelClientProps {
  siteId: string | null;
}

export default function VideoChannelClient({ siteId }: VideoChannelClientProps) {
  const chartData = VIDEO_PLAYS_OVER_TIME.map((p) => ({ date: p.date, value: p.plays }));

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Video className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Video</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Play rate, watch time, completion rate, and top videos
              {siteId ? ` for ${siteId}` : ""}.
            </p>
          </div>
        </div>
      </header>

      <section className="mb-10 rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Key metrics</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEO_KPIS.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Video plays (last 4 weeks)</p>
          <ChannelChart data={chartData} color="var(--chart-5)" />
        </div>
      </section>

      <section className="mb-10 rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Top videos</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Most played videos with average watch time, completion rate, and play rate.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">Video</th>
                <th className="py-2 pr-4 text-right">Plays</th>
                <th className="py-2 pr-4 text-right">Avg. watch time</th>
                <th className="py-2 pr-4 text-right">Completion rate</th>
                <th className="py-2 text-right">Play rate</th>
              </tr>
            </thead>
            <tbody>
              {TOP_VIDEOS_BY_PLAYS.map((row) => (
                <tr key={row.title} className="border-b border-border/60 last:border-0">
                  <td className="py-2 pr-4 text-foreground">{row.title}</td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">
                    {row.plays.toLocaleString()}
                  </td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">{row.avgWatchTime}</td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">{row.completionRate}%</td>
                  <td className="py-2 text-right tabular-nums text-foreground">{row.playRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

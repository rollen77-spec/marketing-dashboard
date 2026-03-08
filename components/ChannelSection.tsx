"use client";

import MetricCard from "./MetricCard";
import ChannelChart from "./ChannelChart";
import type { ChannelSummary } from "@/lib/sites-data";

const channelColors: Record<string, string> = {
  website: "var(--chart-1)",
  social: "var(--chart-2)",
  email: "var(--chart-3)",
  search: "var(--chart-4)",
};

interface ChannelSectionProps {
  channel: ChannelSummary;
  /** Override chart color (e.g. from site primary color) */
  accentColor?: string;
}

export default function ChannelSection({ channel, accentColor }: ChannelSectionProps) {
  const color = accentColor ?? channelColors[channel.id] ?? "var(--primary)";

  return (
    <section className="rounded-lg border border-border bg-muted/50 p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-foreground">
          {channel.name}
        </h2>
        {channel.description && (
          <p className="mt-1 text-sm text-muted-foreground">{channel.description}</p>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channel.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
      {channel.chartData && channel.chartData.length > 0 && (
        <div className="mt-6 rounded-lg border border-border bg-card p-4">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Trend (last 4 weeks)</p>
          <ChannelChart data={channel.chartData} color={color} />
        </div>
      )}
    </section>
  );
}

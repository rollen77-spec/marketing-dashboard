"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import MetricCard from "./MetricCard";
import ChannelChart from "./ChannelChart";
import type { ChannelSummary } from "@/lib/sites-data";

const channelColors: Record<string, string> = {
  website: "var(--chart-1)",
  social: "var(--chart-2)",
  email: "var(--chart-3)",
  search: "var(--chart-4)",
};

const CHANNEL_DETAIL_ROUTES: Record<string, string> = {
  email: "/channels/email",
  social: "/channels/social",
  search: "/channels/search",
};

interface ChannelSectionProps {
  channel: ChannelSummary;
  /** Override chart color (e.g. from site primary color) */
  accentColor?: string;
  /** Current site id for detail link query param */
  siteId?: string | null;
}

export default function ChannelSection({ channel, accentColor, siteId }: ChannelSectionProps) {
  const color = accentColor ?? channelColors[channel.id] ?? "var(--primary)";
  const detailHref = CHANNEL_DETAIL_ROUTES[channel.id]
    ? `${CHANNEL_DETAIL_ROUTES[channel.id]}${siteId ? `?site=${encodeURIComponent(siteId)}` : ""}`
    : null;

  return (
    <section className="rounded-lg border border-border bg-muted/50 p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            {channel.name}
          </h2>
          {channel.description && (
            <p className="mt-1 text-sm text-muted-foreground">{channel.description}</p>
          )}
        </div>
        {detailHref && (
          <Link
            href={detailHref}
            className="inline-flex items-center gap-1 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            View details
            <ChevronRight className="h-4 w-4" />
          </Link>
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

"use client";

import MetricCard from "./MetricCard";
import ChannelChart from "./ChannelChart";
import type { ChannelSummary } from "@/lib/sites-data";

const channelColors: Record<string, string> = {
  website: "#2CADB2",
  social: "#F59E0B",
  email: "#1d8f93",
  search: "#24282B",
};

interface ChannelSectionProps {
  channel: ChannelSummary;
  /** Override chart color (e.g. from site primary color) */
  accentColor?: string;
}

export default function ChannelSection({ channel, accentColor }: ChannelSectionProps) {
  const color = accentColor ?? channelColors[channel.id] ?? "#2CADB2";

  return (
    <section className="rounded-2xl border border-gray-100 bg-brand-cream/30 p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="font-heading text-xl font-semibold text-brand-charcoal">
          {channel.name}
        </h2>
        {channel.description && (
          <p className="mt-1 text-sm text-gray-500">{channel.description}</p>
        )}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channel.metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>
      {channel.chartData && channel.chartData.length > 0 && (
        <div className="mt-6 rounded-xl border border-gray-100 bg-white p-4">
          <p className="mb-3 text-sm font-medium text-gray-600">Trend (last 4 weeks)</p>
          <ChannelChart data={channel.chartData} color={color} />
        </div>
      )}
    </section>
  );
}

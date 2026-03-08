"use client";

import { useState } from "react";
import { Share2, ChevronDown, ChevronRight } from "lucide-react";
import {
  SOCIAL_PLATFORMS,
  getSocialMetricsForPlatform,
  getSocialChartData,
  type SocialPlatformId,
} from "@/lib/social-detail-data";
import MetricCard from "@/components/MetricCard";
import LineChart from "@/components/LineChart";
import type { MetricSummary } from "@/lib/sites-data";

interface SocialChannelClientProps {
  siteId: string | null;
}

function platformMetricsToCards(
  platformId: SocialPlatformId,
  m: ReturnType<typeof getSocialMetricsForPlatform>
): MetricSummary[] {
  const change = m.changeVsPrevious ?? 0;
  const trend = change > 0 ? "up" : change < 0 ? "down" : "neutral";
  const cards: MetricSummary[] = [
    { label: "Followers", value: m.followers.toLocaleString(), subtitle: "ALL TIME" },
    { label: "Impressions", value: m.impressions.toLocaleString(), change, trend, subtitle: m.timeframe },
    { label: "Engagements", value: m.engagements.toLocaleString(), change, trend, subtitle: m.timeframe },
    { label: "Eng. rate", value: `${m.engagementRate}%`, change, trend },
  ];
  if (m.mentions != null) {
    cards.push({ label: "Mentions", value: m.mentions.toLocaleString(), change, trend, subtitle: m.timeframe });
  }
  if (m.tweetsOrPosts != null) {
    cards.push({ label: "Total posts", value: m.tweetsOrPosts >= 1000 ? `${(m.tweetsOrPosts / 1000).toFixed(1)}K` : m.tweetsOrPosts.toString(), subtitle: "ALL TIME" });
  }
  return cards;
}

const platformIcons: Record<SocialPlatformId, string> = {
  x: "𝕏",
  facebook: "f",
  linkedin: "in",
};

export default function SocialChannelClient({ siteId }: SocialChannelClientProps) {
  const [expanded, setExpanded] = useState<Record<SocialPlatformId, boolean>>({
    x: true,
    facebook: true,
    linkedin: true,
  });

  const toggle = (id: SocialPlatformId) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Share2 className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Social media performance
            </h1>
            <p className="text-sm text-muted-foreground">
              X (Twitter), Facebook, and LinkedIn — followers, impressions, engagement
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {SOCIAL_PLATFORMS.map((platform) => {
          const metrics = getSocialMetricsForPlatform(platform.id, siteId ?? undefined);
          const chartData = getSocialChartData(platform.id, siteId ?? undefined);
          const isExpanded = expanded[platform.id];
          const cards = platformMetricsToCards(platform.id, metrics);

          return (
            <section
              key={platform.id}
              className="rounded-lg border border-border bg-muted/50 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(platform.id)}
                className="flex w-full items-center justify-between px-6 py-4 text-left hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-card border border-border text-lg font-bold text-foreground">
                    {platformIcons[platform.id]}
                  </span>
                  <h2 className="text-lg font-semibold text-foreground">
                    {platform.label}
                  </h2>
                </div>
                {isExpanded ? (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                )}
              </button>

              {isExpanded && (
                <div className="border-t border-border bg-card px-6 py-6">
                  <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((metric) => (
                      <MetricCard key={metric.label} metric={metric} />
                    ))}
                  </div>
                  {chartData.length > 0 && (
                    <div>
                      <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                        Impressions & engagements — {metrics.timeframe}
                      </h3>
                      <LineChart
                        data={chartData}
                        xAxisKey="date"
                        series={[
                          { dataKey: "impressions", name: "Impressions", color: "var(--chart-1)" },
                          { dataKey: "engagements", name: "Engagements", color: "var(--chart-2)" },
                        ]}
                        height={260}
                      />
                    </div>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </>
  );
}

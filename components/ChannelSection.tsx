"use client";

import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import MetricCard from "./MetricCard";
import ChannelChart from "./ChannelChart";
import type { ChannelSummary } from "@/lib/sites-data";

const CHART_COLOR = "#2CADB2";

const AI_SUMMARIES: Record<string, { summary: string; nextSteps: string[] }> = {
  website: {
    summary: "Traffic is up over the last 4 weeks with strong session growth. Bounce rate is trending down, which suggests better relevance and engagement. Mobile and desktop are both contributing; consider deepening mobile experience if conversion rates differ by device.",
    nextSteps: [
      "Review top exit pages and add clear CTAs or content upgrades.",
      "A/B test landing pages for paid and organic to improve conversion rate.",
      "Segment traffic by device and country in GA4 to prioritise high-intent regions.",
    ],
  },
  social: {
    summary: "Reach and engagements are growing. Engagement rate is healthy; follower growth is steady. Content mix is driving impressions—identify which formats (video, carousel, story) drive the most saves and shares to double down.",
    nextSteps: [
      "Post consistently on top-performing platforms and replicate best-performing formats.",
      "Respond to comments and DMs to boost engagement and loyalty.",
      "Run a short paid test to amplify best organic posts and grow followers.",
    ],
  },
  email: {
    summary: "Open rates are stable with a slight dip in click rate. Deliverability looks good (low bounce). List growth and retention are key—focus on valuable content and segmenting so sends feel personal.",
    nextSteps: [
      "Segment by engagement (openers vs non-openers) and tailor frequency and content.",
      "Test subject lines and send times with small segments before full sends.",
      "Add a preference centre so subscribers choose topics and frequency.",
    ],
  },
  search: {
    summary: "Organic clicks and impressions are up; average position is improving. CTR has room to grow—titles and meta descriptions can be optimised for both relevance and appeal. Paid and organic together are driving strong volume.",
    nextSteps: [
      "Refresh title and meta description for top pages with high impressions and low CTR.",
      "Align organic and paid keyword themes and landing pages for a consistent journey.",
      "Track query trends in GSC and create or update content for rising topics.",
    ],
  },
  video: {
    summary: "Video play rate and completion are solid. Views are concentrated on a few key pieces—use those as templates for length, hook, and CTA placement. Average watch time suggests viewers stay when the value is clear early.",
    nextSteps: [
      "Repurpose top videos into shorts and clips for social and ads.",
      "Add clear CTAs in the first 30 seconds and again before the end card.",
      "Test thumbnails and titles to improve click-through from browse and search.",
    ],
  },
};

const CHANNEL_DETAIL_ROUTES: Record<string, string> = {
  website: "/channels/website",
  email: "/channels/email",
  social: "/channels/social",
  search: "/channels/search",
  video: "/channels/video",
};

interface ChannelSectionProps {
  channel: ChannelSummary;
  /** Override chart color (e.g. from site primary color) */
  accentColor?: string;
  /** Current site id for detail link query param */
  siteId?: string | null;
}

export default function ChannelSection({ channel, accentColor, siteId }: ChannelSectionProps) {
  const color = CHART_COLOR;
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

      {AI_SUMMARIES[channel.id] && (
        <div className="mt-6 rounded-lg border border-border bg-card p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium text-foreground">
            <Sparkles className="h-4 w-4 text-[#2CADB2]" aria-hidden />
            AI summary
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {AI_SUMMARIES[channel.id].summary}
          </p>
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Next steps to improve performance
            </p>
            <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
              {AI_SUMMARIES[channel.id].nextSteps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

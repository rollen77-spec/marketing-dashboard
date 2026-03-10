"use client";

import { Globe } from "lucide-react";
import MetricCard from "@/components/MetricCard";
import LineChart from "@/components/LineChart";
import {
  TRAFFIC_DETAIL_KPIS,
  TRAFFIC_BY_DEVICE,
  TRAFFIC_BY_COUNTRY,
  TOP_PAGES_BY_TRAFFIC,
  TRAFFIC_SOURCES,
  TRAFFIC_SOURCES_OVER_TIME,
  ACTIONS_PER_VISIT,
  SESSIONS_OVER_TIME,
} from "@/lib/traffic-detail-data";

interface WebsiteTrafficClientProps {
  siteId: string | null;
}

export default function WebsiteTrafficClient({ siteId }: WebsiteTrafficClientProps) {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Globe className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Website traffic</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Unique visitors, sessions, traffic by device & country, top pages, sources, and actions per visit
              {siteId ? ` for ${siteId}` : ""}.
            </p>
          </div>
        </div>
      </header>

      {/* Core KPIs */}
      <section className="mb-10 rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Key metrics</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TRAFFIC_DETAIL_KPIS.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Sessions & unique visitors (last 7 days)</p>
          <LineChart
            data={SESSIONS_OVER_TIME}
            series={[
              { dataKey: "sessions", name: "Sessions", color: "var(--chart-1)" },
              { dataKey: "uniqueVisitors", name: "Unique visitors", color: "var(--chart-2)" },
            ]}
            height={280}
          />
        </div>
      </section>

      {/* Traffic by device */}
      <section className="mb-10 rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Traffic by device</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">Device</th>
                <th className="py-2 pr-4 text-right">Sessions</th>
                <th className="py-2 text-right">Share</th>
              </tr>
            </thead>
            <tbody>
              {TRAFFIC_BY_DEVICE.map((row) => (
                <tr key={row.device} className="border-b border-border/60 last:border-0">
                  <td className="py-2 pr-4 text-foreground">{row.device}</td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">
                    {row.sessions.toLocaleString()}
                  </td>
                  <td className="py-2 text-right tabular-nums text-foreground">{row.share}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Traffic sources (organic, paid, LLM, reviews, backlinks, etc.) */}
      <section className="mb-10 rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Traffic sources</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Organic, paid, direct, referral/backlinks, social, LLM referrals, and reviews.
        </p>
        <div className="mb-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">Source</th>
                <th className="py-2 pr-4 text-right">Sessions</th>
                <th className="py-2 text-right">Share</th>
              </tr>
            </thead>
            <tbody>
              {TRAFFIC_SOURCES.map((row) => (
                <tr key={row.source} className="border-b border-border/60 last:border-0">
                  <td className="py-2 pr-4 text-foreground">{row.source}</td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">
                    {row.sessions.toLocaleString()}
                  </td>
                  <td className="py-2 text-right tabular-nums text-foreground">{row.share}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-lg border border-border bg-background p-4">
          <p className="mb-3 text-sm font-medium text-muted-foreground">Traffic sources over time</p>
          <LineChart
            data={TRAFFIC_SOURCES_OVER_TIME}
            series={[
              { dataKey: "organic", name: "Organic", color: "var(--chart-1)" },
              { dataKey: "paid", name: "Paid", color: "var(--chart-2)" },
              { dataKey: "direct", name: "Direct", color: "var(--chart-3)" },
              { dataKey: "referral", name: "Referral", color: "var(--chart-4)" },
              { dataKey: "social", name: "Social", color: "var(--chart-5)" },
              { dataKey: "llm", name: "LLM", color: "var(--chart-1)" },
            ]}
            height={280}
          />
        </div>
      </section>

      {/* Top pages by traffic */}
      <section className="mb-10 rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Top pages by traffic</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">Page</th>
                <th className="py-2 pr-4 text-right">Sessions</th>
                <th className="py-2 pr-4 text-right">Pageviews</th>
                <th className="py-2 pr-4 text-right">Avg. time</th>
                <th className="py-2 text-right">Bounce rate</th>
              </tr>
            </thead>
            <tbody>
              {TOP_PAGES_BY_TRAFFIC.map((row) => (
                <tr key={row.path} className="border-b border-border/60 last:border-0">
                  <td className="py-2 pr-4">
                    <span className="font-medium text-foreground">{row.title}</span>
                    <span className="ml-1 text-muted-foreground">{row.path}</span>
                  </td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">
                    {row.sessions.toLocaleString()}
                  </td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">
                    {row.pageviews.toLocaleString()}
                  </td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">{row.avgTimeOnPage}</td>
                  <td className="py-2 text-right tabular-nums text-foreground">{row.bounceRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Traffic by country */}
      <section className="mb-10 rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Traffic by country</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">Country</th>
                <th className="py-2 pr-4 text-right">Sessions</th>
                <th className="py-2 pr-4 text-right">Unique visitors</th>
                <th className="py-2 text-right">Bounce rate</th>
              </tr>
            </thead>
            <tbody>
              {TRAFFIC_BY_COUNTRY.map((row) => (
                <tr key={row.country} className="border-b border-border/60 last:border-0">
                  <td className="py-2 pr-4 text-foreground">{row.country}</td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">
                    {row.sessions.toLocaleString()}
                  </td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">
                    {row.uniqueVisitors.toLocaleString()}
                  </td>
                  <td className="py-2 text-right tabular-nums text-foreground">{row.bounceRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Actions per visit */}
      <section className="mb-10 rounded-lg border border-border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-foreground">Actions per visit</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Downloads, external links, podcast, video, blog reads, and form interactions.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase text-muted-foreground">
              <tr>
                <th className="py-2 pr-4">Action</th>
                <th className="py-2 pr-4 text-right">Count</th>
                <th className="py-2 pr-4 text-right">Sessions with action</th>
                <th className="py-2 text-right">Rate (% sessions)</th>
              </tr>
            </thead>
            <tbody>
              {ACTIONS_PER_VISIT.map((row) => (
                <tr key={row.action} className="border-b border-border/60 last:border-0">
                  <td className="py-2 pr-4 text-foreground">{row.action}</td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">
                    {row.count.toLocaleString()}
                  </td>
                  <td className="py-2 pr-4 text-right tabular-nums text-foreground">
                    {row.sessionsWithAction.toLocaleString()}
                  </td>
                  <td className="py-2 text-right tabular-nums text-foreground">{row.rate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";

export default function MarketingDashboard() {
  const [brand, setBrand] = useState("Hostopia");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      {/* Top bar: logo (replacing label) + title row aligned with dropdown */}
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
          {/* Left: logo only (replaces "• Hostopia" label) */}
          <div className="relative h-9 w-[160px] shrink-0">
            <Image
              src="/logo.png"
              alt="Hostopia"
              fill
              className="object-contain object-left"
              priority
              sizes="160px"
            />
          </div>

          {/* Center: title + subtitle, aligned on same row as dropdown */}
          <div className="flex min-w-0 flex-1 flex-col justify-center">
            <h1 className="text-xl font-semibold text-zinc-900">
              Marketing Dashboard
            </h1>
            <p className="mt-0.5 text-sm text-zinc-500">
              Compare performance across your sites — share this link with your
              team
            </p>
          </div>

          {/* Right: dropdown + last updated (same row as title) */}
          <div className="flex shrink-0 items-center gap-4">
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 rounded-lg border border-sky-200 bg-white px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm hover:bg-zinc-50"
              >
                {brand}
                <svg
                  className="h-4 w-4 text-zinc-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    aria-hidden
                    onClick={() => setDropdownOpen(false)}
                  />
                  <div className="absolute right-0 top-full z-20 mt-1 w-44 rounded-lg border border-zinc-200 bg-white py-1 shadow-lg">
                    <button
                      type="button"
                      onClick={() => {
                        setBrand("Hostopia");
                        setDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50"
                    >
                      Hostopia
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setBrand("Other brand");
                        setDropdownOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50"
                    >
                      Other brand
                    </button>
                  </div>
                </>
              )}
            </div>
            <p className="text-sm text-zinc-500">
              Last updated: Mar 10, 2026
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Website Traffic */}
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-zinc-900">
                Website Traffic
              </h2>
              <p className="mt-1 text-sm text-zinc-500">
                Sessions, pageviews, and engagement
              </p>
            </div>
            <button
              type="button"
              className="text-sm font-medium text-teal-600 hover:text-teal-700"
            >
              View details &gt;
            </button>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
            <MetricCard
              label="Sessions"
              value="124.2K"
              period="Last 30 days"
              change="+12.4%"
              positive
            />
            <MetricCard
              label="Pageviews"
              value="318.5K"
              period="Last 30 days"
              change="+8.2%"
              positive
            />
            <MetricCard
              label="Avg. session"
              value="2m 34s"
              period="Last 30 days"
              change="+5.1%"
              positive
            />
            <MetricCard
              label="Bounce rate"
              value="42%"
              period="Last 30 days"
              change="-3.2%"
              positive={false}
            />
          </div>
        </section>

        {/* Trend chart */}
        <section className="mt-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">
            Trend (last 4 weeks)
          </h2>
          <div className="mt-6 flex items-end justify-between gap-4 pt-8">
            {[
              { week: "Week 1", value: 18500 },
              { week: "Week 2", value: 24200 },
              { week: "Week 3", value: 32200 },
              { week: "Week 4", value: 28900 },
            ].map(({ week, value }) => (
              <div key={week} className="flex flex-1 flex-col items-center">
                <div
                  className="w-full max-w-[80px] rounded-t bg-teal-500 transition hover:bg-teal-600"
                  style={{ height: `${(value / 34000) * 120}px` }}
                  title={`${week}: ${value.toLocaleString()}`}
                />
                <span className="mt-2 text-xs font-medium text-zinc-500">
                  {week}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function MetricCard({
  label,
  value,
  period,
  change,
  positive,
}: {
  label: string;
  value: string;
  period: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-lg border border-zinc-100 bg-zinc-50/50 p-4">
      <p className="text-sm font-medium text-zinc-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-zinc-900">{value}</p>
      <p className="mt-1 text-xs text-zinc-500">{period}</p>
      <p
        className={`mt-2 flex items-center gap-1 text-xs font-medium ${
          positive ? "text-emerald-600" : "text-red-600"
        }`}
      >
        {positive ? (
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        {change} vs prior period
      </p>
    </div>
  );
}

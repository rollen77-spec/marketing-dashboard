"use client";

import { BarChart3 } from "lucide-react";
import { SITES, getSiteById, getDefaultSite } from "@/lib/sites-data";
import SiteSwitcher from "./SiteSwitcher";
import ChannelSection from "./ChannelSection";

interface DashboardContentProps {
  siteId: string | null;
}

export default function DashboardContent({ siteId }: DashboardContentProps) {
  const currentSite = (siteId && getSiteById(siteId)) || getDefaultSite();
  const primaryColor = currentSite.primaryColor ?? "#2CADB2";

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
              style={{ backgroundColor: primaryColor }}
            >
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-brand-charcoal sm:text-3xl">
                Marketing Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                Compare performance across your sites — share this link with your team
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <SiteSwitcher sites={SITES} currentSite={currentSite} />
          <span className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-2">
        <span
          className="inline-block h-3 w-3 rounded-full"
          style={{ backgroundColor: primaryColor }}
          aria-hidden
        />
        <h2 className="font-heading text-lg font-semibold text-brand-charcoal">
          {currentSite.name}
        </h2>
      </div>

      <div className="space-y-8">
        {currentSite.channels.map((channel) => (
          <ChannelSection
            key={channel.id}
            channel={channel}
            accentColor={primaryColor}
          />
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-brand-teal/20 bg-brand-cream/80 p-4 text-center text-sm text-gray-600">
        <p>
          This dashboard uses sample data. Connect Google Analytics, Meta, your email provider, and Search Console per site to show live metrics.
        </p>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { BarChart3 } from "lucide-react";
import { SITES, getSiteById, getDefaultSite } from "@/lib/sites-data";
import SiteSwitcher from "./SiteSwitcher";
import ChannelSection from "./ChannelSection";

interface DashboardContentProps {
  siteId: string | null;
}

export default function DashboardContent({ siteId }: DashboardContentProps) {
  const currentSite = (siteId && getSiteById(siteId)) || getDefaultSite();
  const primaryColor = currentSite.primaryColor ?? undefined;

  return (
    <>
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-[auto_1fr_auto] sm:items-center">
        <div className="hidden sm:block" aria-hidden="true" />
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
            Marketing Dashboard
          </h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Compare performance across your sites — share this link with your team
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
          <SiteSwitcher sites={SITES} currentSite={currentSite} />
          <span className="text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-3">
        {currentSite.logoSrc ? (
          <Image
            src={currentSite.logoSrc}
            alt={currentSite.name}
            width={160}
            height={40}
            className="h-8 w-auto"
            priority
          />
        ) : (
          <>
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ backgroundColor: primaryColor }}
              aria-hidden
            />
            <h2 className="text-lg font-semibold text-foreground">
              {currentSite.name}
            </h2>
          </>
        )}
      </div>

      <div className="space-y-8">
        {currentSite.channels.map((channel) => (
          <ChannelSection
            key={channel.id}
            channel={channel}
            accentColor={primaryColor}
            siteId={siteId}
          />
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-border bg-muted p-4 text-center text-sm text-muted-foreground">
        <p>
          This dashboard uses sample data. Connect Google Analytics, Meta, your email provider, and Search Console per site to show live metrics.
        </p>
      </div>
    </>
  );
}

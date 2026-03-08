"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import type { SiteConfig } from "@/lib/sites-data";

interface SiteSwitcherProps {
  sites: SiteConfig[];
  currentSite: SiteConfig;
}

export default function SiteSwitcher({ sites, currentSite }: SiteSwitcherProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleChange(siteId: string) {
    const next = new URLSearchParams(searchParams.toString());
    next.set("site", siteId);
    router.push(`?${next.toString()}`, { scroll: false });
  }

  if (sites.length <= 1) return null;

  return (
    <div className="relative inline-block">
      <label htmlFor="site-select" className="sr-only">
        Select site
      </label>
      <select
        id="site-select"
        value={currentSite.id}
        onChange={(e) => handleChange(e.target.value)}
        className="appearance-none rounded-lg border border-gray-200 bg-white py-2.5 pl-4 pr-10 text-sm font-medium text-brand-charcoal shadow-sm transition-colors hover:border-gray-300 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
        aria-label="Select site to view"
      >
        {sites.map((site) => (
          <option key={site.id} value={site.id}>
            {site.name}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
        aria-hidden
      />
    </div>
  );
}

import type { Metadata } from "next";
import DashboardContent from "@/components/DashboardContent";

export const metadata: Metadata = {
  title: "Marketing Dashboard | Multi-site performance",
  description:
    "View website traffic, social, email, and search metrics for your brands in one place.",
};

interface PageProps {
  searchParams: { site?: string };
}

export default function MarketingDashboardPage({ searchParams }: PageProps) {
  const siteId = searchParams.site ?? null;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DashboardContent siteId={siteId} />
      </div>
    </main>
  );
}

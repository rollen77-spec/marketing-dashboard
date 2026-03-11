import type { Metadata } from "next";
import DashboardContent from "@/components/DashboardContent";

export const metadata: Metadata = {
  title: "Marketing Dashboard | Multi-site performance",
  description:
    "View website traffic, social, email, and search metrics for your brands in one place.",
};

interface PageProps {
  searchParams: Promise<{ site?: string }>;
}

export default async function MarketingDashboardPage({ searchParams }: PageProps) {
  const { site } = await searchParams;
  const siteId = site ?? null;

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <DashboardContent siteId={siteId} />
      </div>
    </main>
  );
}

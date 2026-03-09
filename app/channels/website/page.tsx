import WebsiteTrafficClient from "./WebsiteTrafficClient";

interface PageProps {
  searchParams: { site?: string };
}

export default function WebsiteTrafficPage({ searchParams }: PageProps) {
  const siteId = searchParams.site ?? null;
  return <WebsiteTrafficClient siteId={siteId} />;
}

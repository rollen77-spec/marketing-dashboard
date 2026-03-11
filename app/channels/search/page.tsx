import SearchChannelClient from "./SearchChannelClient";

interface PageProps {
  searchParams: { site?: string };
}

export default function SearchChannelPage({ searchParams }: PageProps) {
  const siteId = searchParams.site ?? null;

  return <SearchChannelClient siteId={siteId} />;
}


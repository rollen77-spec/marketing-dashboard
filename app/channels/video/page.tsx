import VideoChannelClient from "./VideoChannelClient";

interface PageProps {
  searchParams: { site?: string };
}

export default function VideoChannelPage({ searchParams }: PageProps) {
  const siteId = searchParams.site ?? null;
  return <VideoChannelClient siteId={siteId} />;
}

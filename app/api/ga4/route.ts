import { getGa4Sessions, getGa4SessionsByDate, isGa4Configured } from "@/lib/ga4";
import { NextResponse } from "next/server";

/**
 * GET /api/ga4?metric=sessions|sessionsByDate
 * Returns GA4 data when GOOGLE_APPLICATION_CREDENTIALS and GA4_PROPERTY_ID are set.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const metric = searchParams.get("metric") ?? "sessions";
  const days = Math.min(90, Math.max(1, parseInt(searchParams.get("days") ?? "30", 10) || 30));

  if (!isGa4Configured()) {
    return NextResponse.json(
      { ok: false, message: "GA4 not configured. Set GOOGLE_APPLICATION_CREDENTIALS and GA4_PROPERTY_ID in .env.local." },
      { status: 503 }
    );
  }

  try {
    if (metric === "sessionsByDate") {
      const data = await getGa4SessionsByDate(days);
      return NextResponse.json({ ok: true, data });
    }
    const data = await getGa4Sessions(days);
    return NextResponse.json({ ok: true, data });
  } catch (e) {
    console.error("GA4 API error:", e);
    return NextResponse.json({ ok: false, message: "GA4 request failed." }, { status: 500 });
  }
}

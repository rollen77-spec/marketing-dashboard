import { getGscTopQueries, getGscTopPages, isGscConfigured } from "@/lib/gsc";
import { NextResponse } from "next/server";

/**
 * GET /api/gsc?report=queries|pages&limit=10&days=28
 * Returns Search Console data when GOOGLE_APPLICATION_CREDENTIALS and GSC_SITE_URL are set.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const report = searchParams.get("report") ?? "queries";
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "10", 10) || 10));
  const days = Math.min(90, Math.max(1, parseInt(searchParams.get("days") ?? "28", 10) || 28));

  if (!isGscConfigured()) {
    return NextResponse.json(
      { ok: false, message: "GSC not configured. Set GOOGLE_APPLICATION_CREDENTIALS and GSC_SITE_URL in .env.local." },
      { status: 503 }
    );
  }

  try {
    if (report === "pages") {
      const data = await getGscTopPages(limit, days);
      return NextResponse.json({ ok: true, data });
    }
    const data = await getGscTopQueries(limit, days);
    return NextResponse.json({ ok: true, data });
  } catch (e) {
    console.error("GSC API error:", e);
    return NextResponse.json({ ok: false, message: "GSC request failed." }, { status: 500 });
  }
}

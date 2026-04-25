import { NextRequest, NextResponse } from "next/server";

// Resolves a show date (YYYY-MM-DD) to the best Internet Archive recording.
//
// Strategy: hit advancedsearch.php for collection:GratefulDead AND date:<date>,
// pick the recording with the most downloads (proxy for "the canonical version
// most people listen to"), and 302 to its details page. If anything fails or
// no rows come back, fall back to the date-filtered search page so the user
// still lands somewhere useful.

const SEARCH_URL = "https://archive.org/advancedsearch.php";

type IaDoc = {
  identifier: string;
  downloads?: number;
  avg_rating?: number;
};

function fallback(date: string): string {
  return `https://archive.org/search?query=${encodeURIComponent(
    `collection:GratefulDead AND date:${date}`
  )}`;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: { date: string } }
) {
  const date = params.date;

  // Cheap shape check — YYYY-MM-DD only.
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return NextResponse.json({ error: "bad date" }, { status: 400 });
  }

  const url = new URL(SEARCH_URL);
  url.searchParams.set(
    "q",
    `collection:GratefulDead AND date:${date}`
  );
  url.searchParams.append("fl[]", "identifier");
  url.searchParams.append("fl[]", "downloads");
  url.searchParams.append("fl[]", "avg_rating");
  url.searchParams.set("sort[]", "downloads desc");
  url.searchParams.set("rows", "5");
  url.searchParams.set("output", "json");

  try {
    const res = await fetch(url.toString(), {
      // Cache resolutions for a day — recordings don't churn that often.
      next: { revalidate: 60 * 60 * 24 },
    });
    if (!res.ok) throw new Error(`IA search ${res.status}`);
    const data = (await res.json()) as {
      response?: { docs?: IaDoc[] };
    };
    const top = data.response?.docs?.[0];
    if (top?.identifier) {
      return NextResponse.redirect(
        `https://archive.org/details/${top.identifier}`,
        302
      );
    }
  } catch {
    // fall through to fallback
  }

  return NextResponse.redirect(fallback(date), 302);
}

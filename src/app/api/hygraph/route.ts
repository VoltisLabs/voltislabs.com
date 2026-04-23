import { NextRequest, NextResponse } from "next/server";

const HYGRAPH_URL =
  process.env.HYGRAPH_CONTENT_API_URL ??
  "https://eu-west-2.cdn.hygraph.com/content/cmamc2a6t01g107wczpa881tu/master";

/** Hygraph / GraphCMS permanent auth token (server-only). */
function hygraphAuthHeaders(): Record<string, string> {
  const token =
    process.env.HYGRAPH_CONTENT_API_TOKEN ??
    process.env.HYGRAPH_API_TOKEN ??
    process.env.GRAPHCMS_TOKEN;
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}

/**
 * Proxies GraphQL to Hygraph. Always returns JSON with HTTP 200 when the body
 * is (or can be expressed as) a GraphQL envelope so the browser client does not
 * treat transport failures as opaque Axios 500s.
 */
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { errors: [{ message: "Invalid JSON body" }], data: null },
      { status: 200 },
    );
  }

  try {
    const res = await fetch(HYGRAPH_URL, {
      method: "POST",
      headers: hygraphAuthHeaders(),
      body: JSON.stringify(body),
      cache: "no-store",
    });

    const text = await res.text();
    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      return NextResponse.json(
        {
          errors: [
            {
              message:
                "Hygraph returned non-JSON (often missing/invalid token or wrong endpoint). Set HYGRAPH_CONTENT_API_TOKEN on the server.",
            },
          ],
          data: null,
        },
        { status: 200 },
      );
    }

    // GraphQL convention: 200 + { data, errors } — avoids Axios rejecting on upstream 401/403 HTML.
    return NextResponse.json(parsed, { status: 200 });
  } catch (e) {
    const message = e instanceof Error ? e.message : "Hygraph proxy request failed";
    return NextResponse.json({ errors: [{ message }], data: null }, { status: 200 });
  }
}

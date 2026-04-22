import { NextRequest, NextResponse } from "next/server";

const HYGRAPH_URL =
  process.env.HYGRAPH_CONTENT_API_URL ??
  "https://eu-west-2.cdn.hygraph.com/content/cmamc2a6t01g107wczpa881tu/master";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(HYGRAPH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { errors: [{ message: "Hygraph proxy request failed" }] },
      { status: 500 },
    );
  }
}

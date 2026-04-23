import axios from "axios";

/** Direct Hygraph CDN (server-side or tooling). */
const HYGRAPH_DIRECT =
  process.env.HYGRAPH_CONTENT_API_URL ??
  "https://eu-west-2.cdn.hygraph.com/content/cmamc2a6t01g107wczpa881tu/master";

/** In the browser, use same-origin API route to avoid CORS / flaky client → Hygraph calls. */
function graphqlUrl(): string {
  if (typeof window !== "undefined") {
    return `${window.location.origin}/api/hygraph`;
  }
  return HYGRAPH_DIRECT;
}

export interface FetchParams {
  query: string;
  variables?: Record<string, any>;
  headers?: Record<string, string>;
}

export async function fetchData(params: FetchParams): Promise<any> {
  const { query, variables, headers } = params;

  if (!query) {
    throw new Error("Query is a required parameter.");
  }

  try {
    const response = await axios.post(
      graphqlUrl(),
      { query, variables },
      {
        timeout: 25_000,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        validateStatus: (status) => status >= 200 && status < 300,
      },
    );

    const payload = response.data;
    /* GraphQL may return 200 + `errors` alongside partial `data`; only fail when there is no usable data. */
    if (payload?.errors?.length && payload.data == null) {
      const msg = payload.errors
        .map((e: { message?: string }) => e.message)
        .filter(Boolean)
        .join("; ");
      throw new Error(msg || "GraphQL error");
    }
    return payload;
  } catch (error: any) {
    console.error("Error fetching data:", error);
    const msg =
      error?.response?.data?.errors?.[0]?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "An unexpected error occurred";
    throw new Error(typeof msg === "string" ? msg : "An unexpected error occurred");
  }
}

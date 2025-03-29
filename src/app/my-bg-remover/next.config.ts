import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: false,
  pageExtensions: ["ts", "tsx", "js", "jsx"],
};

export default nextConfig;
// export default withBundleAnalyzer({
//   reactStrictMode: true,
//   output: "standalone",    
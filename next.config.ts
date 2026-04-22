import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // No eslint.config in repo yet; Vercel/CI can fail the build on lint drift.
  // Run `npm run lint` locally once ESLint is configured.
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [{ source: "/prelura", destination: "/wearhouse", permanent: true }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
      },
     
    ],
  },
};

export default nextConfig;

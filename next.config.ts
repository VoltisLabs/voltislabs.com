import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
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

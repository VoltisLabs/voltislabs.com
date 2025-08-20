import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eu-west-2.graphassets.com',
      },
<<<<<<< HEAD
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
=======
     
>>>>>>> 0a613e5288c919432381b528b38f616da9907e30
    ],
  },
};

export default nextConfig;

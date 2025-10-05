import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gbo.eu',
      },
      {
        protocol: 'https',
        hostname: 'www.vedsgroup.com',
      },
      {
        protocol: 'https',
        hostname: 'www.rvo.nl',
      },
    ],
  },
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: ['website-3zn2r3ppd-david-youms-projects.vercel.app'],
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    minimumCacheTTL: 0,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['website-3zn2r3ppd-david-youms-projects.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'website-3zn2r3ppd-david-youms-projects.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

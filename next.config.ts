import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    unoptimized: true,
    domains: ['website-3zn2r3ppd-david-youms-projects.vercel.app', 'aqe6lvxoos.ufs.sh'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'website-3zn2r3ppd-david-youms-projects.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;

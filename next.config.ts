import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['website-3zn2r3ppd-david-youms-projects.vercel.app', 'aqe6lvxoos.ufs.sh'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'website-3zn2r3ppd-david-youms-projects.vercel.app',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'aqe6lvxoos.ufs.sh',
        port: '',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    typedRoutes: true
  }
};

export default nextConfig;
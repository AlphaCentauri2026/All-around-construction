import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Template configuration for construction website
  images: {
    domains: ['localhost', 'vercel-preview.app', 'vercel.app'],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Remove static export for better Vercel deployment
  // output: 'export',
  trailingSlash: true
};

export default nextConfig;

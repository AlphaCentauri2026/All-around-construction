import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Template configuration for construction website
  images: {
    domains: ['localhost'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true // Disable image optimization for static export
  },
  // Enable static export for easy deployment
  output: 'export',
  trailingSlash: true
};

export default nextConfig;

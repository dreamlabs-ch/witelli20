import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  allowedDevOrigins: ['100.92.109.96', '192.168.100.155'],
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/board', destination: '/' },
        { source: '/reservations', destination: '/' },
        { source: '/stolen', destination: '/' },
        { source: '/transport', destination: '/' },
        { source: '/weather', destination: '/' },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;

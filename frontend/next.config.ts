import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ik.imagekit.io'],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Allows production builds to complete even if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allows production builds to complete even if there are ESLint warnings
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

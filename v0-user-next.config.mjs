/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['v0.blob.com'],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Webpack configuration to exclude problematic modules
  webpack: (config, { isServer }) => {
    // Exclude problematic modules from the build
    if (isServer) {
      config.externals = [...config.externals, 'libpq', 'pg-native'];
    }
    
    return config;
  },
};

export default nextConfig;


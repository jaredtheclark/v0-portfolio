/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Only ignore during builds if needed for deployment hotfixes
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Catch type errors during build for better code quality
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      }
    ],
  },
  experimental: {
    reactCompiler: true,
  },
  swcMinify: true,
  reactStrictMode: true,
}

export default nextConfig

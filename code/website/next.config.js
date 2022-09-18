/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["*"]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '*',
      },
    ]
  },
}

module.exports = nextConfig

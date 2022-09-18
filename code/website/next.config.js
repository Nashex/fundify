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
        destination: 'https://*',
      },
    ]
  },
}

module.exports = nextConfig

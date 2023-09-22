/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.hr.constel.co',
        port: '',
        pathname: '/api/v1/posts/**',
      },
    ],
  },
}

module.exports = nextConfig

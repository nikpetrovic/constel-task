/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['constel-hr-frontend.s3.eu-central-1.amazonaws.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://constel-hr-frontend.s3.eu-central-1.amazonaws.com/',
        port: '',
        pathname: '/api/v1/posts/**',
      },
    ],
  },
}

module.exports = nextConfig

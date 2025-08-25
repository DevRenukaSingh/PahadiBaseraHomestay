/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      unoptimized: true, 
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    },
  }

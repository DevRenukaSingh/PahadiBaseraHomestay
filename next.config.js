/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    images: {
      qualities: [25, 50, 75,100],
      unoptimized: true, 
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    },
  }

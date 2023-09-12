/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: ['image.tmdb.org','tmdb.org'],
    },
}

module.exports = nextConfig




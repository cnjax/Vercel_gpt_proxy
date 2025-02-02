/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*/',
        destination: process.env.API_URL + '/api/:path*/',
      },
      {
        source: '/api/:path*',
        destination: process.env.API_URL + '/api/:path*',
      },
      {
        source: '/:path*/',
        destination: process.env.API_URL + '/:path*/',
      },
      {
        source: '/:path*',
        destination: process.env.API_URL + '/:path*',
      }
    ]
  },
}

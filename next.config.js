/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://160.191.77.59:2023/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
}

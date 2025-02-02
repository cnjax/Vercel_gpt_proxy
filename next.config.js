/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://47.243.172.158:81/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://showip.net/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ]
  },
}

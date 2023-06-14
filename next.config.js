const nextTranslate = require('next-translate-plugin')

const nextConfig = {
  experimental: {
    runtime: 'experimental-edge',
  },
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = {
  ...nextTranslate(),
  ...nextConfig,
}
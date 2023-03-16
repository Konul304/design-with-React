/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

// module.exports = Object.assign({}, nextConfig, {
//   experimental: {
//     incomimgCss: true
//   },
//   serverRuntimeConfig: {
//     disableServerSideRender: true,
//   },
// });
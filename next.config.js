/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa')
// const runtimeCaching = require('next-pwa/cache')

// const nextConfig = withPWA({
//   reactStrictMode: true,
//   i18n: { // internationalization
//     locales: ['en', 'fr'],
//     defaultLocale: 'en',
//   },
//   pwa: { // PWA
//     dest: 'public',
//     runtimeCaching,
//     register: true,
//     skipWaiting: true,
//   },
// })
const nextConfig = {
  reactStrictMode: true,
  i18n: { // internationalization
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig



/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withPWA = require('next-pwa');
const runtimeCaching = require('./config/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
    cacheOnFrontEndNav: true,
    register: true,
    skipWaiting: true,
  },
});

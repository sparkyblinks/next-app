/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["sage-medical.com", "www.sage-medical.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;

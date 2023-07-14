/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/awards',
        destination: 'https://awards.gdsc-usls.live',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

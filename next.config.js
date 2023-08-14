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
      {
        source: '/apply',
        destination: 'https://forms.gle/gKqw4DpnV3EwQCiHA',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

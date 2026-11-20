/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qr.sepay.vn',
      },
      {
        protocol: 'https',
        hostname: 'img.vietqr.io',
      },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ugc.same-assets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'same-assets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '1drv.ms',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'onedrive.live.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.sharepoint.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.donedeal.ie',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.clickdealer.co.uk',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
    ],
  },
};
module.exports = nextConfig;

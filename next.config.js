/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
    ],
  },
};
module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
    assetPrefix: basePath,
    basePath: basePath,
    output:'export',
    distDir:'dist',
    images: {
        loader: 'default',
        path: `${basePath}/`,
      },
};

module.exports = nextConfig;

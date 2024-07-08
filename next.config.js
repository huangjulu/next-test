/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; // npm run build

const nextConfig = {
    assetPrefix: isProd ? '/next-test/' : '',
    basePath: isProd ? '/next-test' : '',
    output:'export',
    distDir:'dist',
    images: {
        loader: 'default',
        path: '/next-test/',
      },
};

module.exports = nextConfig;

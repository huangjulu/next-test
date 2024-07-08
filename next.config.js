/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; // npm run build

const nextConfig = {
    assetPrefix: isProd ? '/your-repository-name/' : '',
    basePath: isProd ? '/next-test' : '',
    output:'export',
    distDir:'dist',
    images: {
        loader: 'default',
        path: '/',
      },
};

module.exports = nextConfig;

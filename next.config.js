/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; // npm run build

const nextConfig = {
    basePath: isProd ? '/next-test' : '',
    output:'export',
    distDir:'dist',
    images: {
        loader: 'akamai',
        path: '',
      },
};

module.exports = nextConfig;

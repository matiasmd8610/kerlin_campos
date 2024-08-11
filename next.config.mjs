/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output : "export",
    reactStrictMode: true,
    basePath: isProd ? '/kerlin_campos': '',
    images: {
        unoptimized: true
    }
};

export default nextConfig;

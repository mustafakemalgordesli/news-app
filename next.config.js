/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        nextScriptWorkers: true,
        serverActions: true,
    },
    images: {
        domains: [process.env.NEXT_PUBLIC_IMAGE_SERVICE_HOST],
        // remotePatterns: [
        //     // {
        //     //     protocol: process.env.NEXT_PUBLIC_IMAGE_SERVICE_PROTOCOL,
        //     //     hostname: process.env.NEXT_PUBLIC_IMAGE_SERVICE,
        //     //     port: process.env.NEXT_PUBLIC_IMAGE_SERVICE_PORT,
        //     //     pathname: '/media/**',
        //     // },
        //     {
        //         protocol: 'http',
        //         hostname: '127.0.0.1',
        //         port: '',
        //         pathname: '/media/**',
        //     },
        // ],
    },
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig

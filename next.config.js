/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["127.0.0.1"],
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
}

module.exports = nextConfig

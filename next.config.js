/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['d33wubrfki0l68.cloudfront.net','cdn.pixabay.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig

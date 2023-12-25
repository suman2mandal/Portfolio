/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'd33wubrfki0l68.cloudfront.net',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                pathname: '/**',
            },
        ],
    },
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    experimental: {},
    reactStrictMode: true,
}

module.exports = withMDX(nextConfig)

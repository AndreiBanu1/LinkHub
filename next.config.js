/**@type{import('next').NextConfig}*/
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['pixabay.com', 'freeimages.com', 'istockphoto.com', 'cdn.pixabay.com', 'twitter.com'],
    }
}

module.exports = nextConfig
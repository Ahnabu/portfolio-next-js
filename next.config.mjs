/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.ibb.co'],
    },
    transpilePackages: ['three'],
    async redirects() {
        return [
            {
                source: '/resume',
                destination: '/#resume',
                permanent: true,
            },
            {
                source: '/work',
                destination: '/#work',
                permanent: true,
            },
            {
                source: '/services',
                destination: '/#services',
                permanent: true,
            },
            {
                source: '/contact',
                destination: '/#contact',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

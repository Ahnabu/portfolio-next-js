export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: 'https://portfolio-abu-horaira.vercel.app/sitemap.xml',
    };
}

export default function sitemap() {
    const baseUrl = 'https://portfolio-abu-horaira.vercel.app';
    
    const routes = ['', '/work', '/resume', '/services', '/contact'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : route === '/work' ? 0.9 : 0.8,
    }));

    return routes;
}

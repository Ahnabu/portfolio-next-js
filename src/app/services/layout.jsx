export const metadata = {
    title: 'Services | Syed Md Abu Horaira',
    description: 'Professional web development services including full-stack development, frontend development with React and Next.js, backend development with Node.js and Express, and modern responsive web applications.',
    keywords: [
        'web development services',
        'full stack development',
        'React development services',
        'Next.js development',
        'frontend development',
        'backend development',
        'MERN stack development',
        'web application development',
        'responsive web design',
        'TypeScript development',
        'Node.js services',
        'MongoDB development'
    ],
    openGraph: {
        title: 'Services | Syed Md Abu Horaira',
        description: 'Professional web development services: full-stack, frontend, and backend development using modern technologies like React, Next.js, and Node.js.',
        type: 'website',
        locale: 'en_US',
        url: 'https://portfolio-abu-horaira.vercel.app/services',
        siteName: 'Syed Md Abu Horaira Portfolio',
    },
    twitter: {
        card: 'summary',
        title: 'Services | Syed Md Abu Horaira',
        description: 'Professional web development services using React, Next.js, Node.js, and modern web technologies.',
    },
    alternates: {
        canonical: 'https://portfolio-abu-horaira.vercel.app/services',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function ServicesLayout({ children }) {
    return children;
}

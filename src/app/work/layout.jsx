export const metadata = {
    title: 'Projects & Portfolio | Syed Md Abu Horaira',
    description: 'Explore my full-stack web development projects including e-commerce platforms, school management systems, hotel booking apps, and more. Built with React, Next.js, Node.js, TypeScript, MongoDB, and modern web technologies.',
    keywords: [
        'full stack developer portfolio',
        'React projects',
        'Next.js projects',
        'MERN stack projects',
        'TypeScript developer',
        'e-commerce platform',
        'web development portfolio',
        'Syed Md Abu Horaira projects',
        'fullstack developer Bangladesh',
        'MongoDB Express React Node projects',
        'school management system',
        'hotel management system',
        'blog platform'
    ],
    openGraph: {
        title: 'Projects & Portfolio | Syed Md Abu Horaira',
        description: 'Full-stack web development projects showcasing expertise in React, Next.js, Node.js, TypeScript, and MongoDB. View live demos and source code.',
        type: 'website',
        locale: 'en_US',
        url: 'https://yourportfolio.com/work',
        siteName: 'Syed Md Abu Horaira Portfolio',
        images: [
            {
                url: '/evo-tech.jpg',
                width: 1200,
                height: 630,
                alt: 'Syed Md Abu Horaira - Full Stack Developer Projects',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Projects & Portfolio | Syed Md Abu Horaira',
        description: 'Full-stack web development projects showcasing expertise in React, Next.js, Node.js, and modern web technologies.',
        images: ['/evo-tech.jpg'],
    },
    alternates: {
        canonical: 'https://yourportfolio.com/work',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function WorkLayout({ children }) {
    return children;
}

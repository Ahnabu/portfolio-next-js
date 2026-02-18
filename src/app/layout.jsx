import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Footer from "@/components/Footer";


const JetBrains = JetBrains_Mono({
  subsets: ["latin"], weight: ['100', '200', '300', '400', '500','600','700','800'
  ],
variable:'--font-JetBrains'});

export const metadata = {
  metadataBase: new URL('https://yourportfolio.com'), // Replace with your actual domain
  title: {
    default: 'Syed Md Abu Horaira | Full Stack Web Developer',
    template: '%s | Syed Md Abu Horaira',
  },
  description: "Full-stack web developer specializing in React, Next.js, TypeScript, Node.js, Express, and MongoDB. Building scalable, production-ready web applications with modern technologies. Portfolio showcasing e-commerce platforms, management systems, and dynamic web applications.",
  keywords: [
    'Syed Md Abu Horaira',
    'full stack developer',
    'web developer',
    'React developer',
    'Next.js developer',
    'TypeScript developer',
    'Node.js developer',
    'MERN stack developer',
    'JavaScript developer',
    'frontend developer',
    'backend developer',
    'MongoDB developer',
    'Express.js developer',
    'web development Bangladesh',
    'Dhaka web developer',
    'full stack engineer',
    'software developer',
    'portfolio website'
  ],
  authors: [{ name: 'Syed Md Abu Horaira' }],
  creator: 'Syed Md Abu Horaira',
  publisher: 'Syed Md Abu Horaira',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    siteName: 'Syed Md Abu Horaira Portfolio',
    title: 'Syed Md Abu Horaira | Full Stack Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, TypeScript, Node.js, and MongoDB. View my portfolio of production-ready web applications.',
    images: [
      {
        url: '/og-image.jpg', // Create this image for better social sharing
        width: 1200,
        height: 630,
        alt: 'Syed Md Abu Horaira - Full Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Md Abu Horaira | Full Stack Web Developer',
    description: 'Full-stack developer specializing in React, Next.js, and Node.js. Building scalable web applications.',
    creator: '@yourtwitterhandle', // Replace with your Twitter handle
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '7455d4df587a68e8', // Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Syed Md Abu Horaira',
    jobTitle: 'Full Stack Web Developer',
    description: 'Full-stack web developer specializing in React, Next.js, TypeScript, Node.js, and MongoDB',
    url: 'https://yourportfolio.com',
    sameAs: [
      'https://github.com/Ahnabu', // Replace with your actual GitHub
      'https://linkedin.com/in/yourprofile', // Replace with your LinkedIn
      // Add other social profiles
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Full Stack Development',
      'Web Development',
      'MERN Stack',
      'Frontend Development',
      'Backend Development',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dhaka',
      addressCountry: 'Bangladesh',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
              <link rel="manifest" href="/site.webmanifest"/>
              </head>
      <body className={JetBrains.variable}>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <Header></Header>
       
        <StairTransition></StairTransition>
        <PageTransition>
          {children}
          <Analytics />
          <SpeedInsights/>
        </PageTransition>
       {/* <Footer/> */}
      </body>
    </html>
  );
}

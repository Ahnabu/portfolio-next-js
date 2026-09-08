export const personalInfo = {
  name: "Syed Md Abu Horaira",
  displayName: "Syed Md Abu Horaira",
  role: "Full Stack Web Developer",
  subRole: "Web Developer",
  bio: "Aspiring junior web developer with expertise in React, adept in HTML, CSS, JavaScript, and proficient in modern tools like Tailwind, Vite, Express, MongoDB, and Firebase.",
  aboutDescription: "Aspiring junior web developer skilled in React, HTML, CSS, JavaScript, and modern tools like Tailwind, Vite, Express, MongoDB, and Firebase, with some knowledge of Next.js.",
  phone: "+880 1302 537209",
  email: "syedmdabuhoraira@gmail.com",
  skype: "live:.cid.2faef17d11894730",
  nationality: "Bangladeshi",
  languages: "Bangla, English",
  address: "708/2 East Manikdi, Dhaka Cantonment, Dhaka, Bangladesh",
  downloadCVUrl: "https://drive.google.com/uc?export=download&id=1YRflia7CSdTZBCaUjSYLGJXEiLSdwg2X",
  downloadResumeUrl: "https://drive.google.com/uc?export=download&id=1kBYBY_Q5K5IpA5kpdvOFel4J__3jXJeo",
  photo: "/myPhoto.png",
};

export const socials = [
  {
    name: "GitHub",
    icon: "FaGithub",
    path: "https://github.com/Ahnabu",
  },
  {
    name: "LinkedIn",
    icon: "FaLinkedin",
    path: "https://www.linkedin.com/in/sm-abu-horaira",
  },
  {
    name: "WhatsApp",
    icon: "FaWhatsapp",
    path: "https://wa.link/064pq2",
  },
  {
    name: "Twitter",
    icon: "FaTwitter",
    path: "https://x.com/abu_horair",
  },
  {
    name: "Dev.to",
    icon: "SiDevdotto",
    path: "https://dev.to/abu_horaira",
  },
];

export const stats = [
  {
    num: 1600,
    text: "hours of coding experience.",
  },
  {
    num: 16,
    text: "Projects completed.",
  },
  {
    num: 15,
    text: "Technologies mastered.",
  },
  {
    num: 1100,
    text: "Code commits.",
  },
];

export const education = {
  title: "Education",
  description: "I am taking bachelor's degree in Zoology from Dhaka College. I have completed my web development course from Programming Hero in 2024.",
  educationList: [
    {
      institution: "Programming Hero",
      degree: "Complete Web Development",
      duration: "2024",
    },
    {
      institution: "Dhaka College",
      degree: "BSc in Zoology",
      duration: "2022-current",
    },
    {
      institution: "Shaheed Ramiz Uddin Cantonment College",
      degree: "Higher Secondary School Certificate",
      duration: "2020-2021",
    },
    {
      institution: "Shaheed Ramiz Uddin Cantonment School",
      degree: "Secondary School Certificate",
      duration: "2018-2019",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description: "Full-stack developer proficient in modern web technologies including React, Next.js, TypeScript, Node.js, and MongoDB, with expertise in building scalable applications.",
  skillList: [
    // Frontend
    { name: "React.js", category: "Frontend", icon: "FaReact" },
    { name: "Next.js", category: "Frontend", icon: "SiNextdotjs" },
    { name: "TypeScript", category: "Frontend", icon: "SiTypescript" },
    { name: "JavaScript", category: "Frontend", icon: "FaJs" },
    { name: "HTML5", category: "Frontend", icon: "FaHtml5" },
    { name: "CSS3", category: "Frontend", icon: "FaCss3" },
    { name: "Tailwind CSS", category: "Frontend", icon: "SiTailwindcss" },
    { name: "Redux Toolkit", category: "Frontend", icon: "SiRedux" },
    { name: "React Router", category: "Frontend", icon: "SiReactrouter" },
    // Backend
    { name: "Node.js", category: "Backend", icon: "FaNodeJs" },
    { name: "Express.js", category: "Backend", icon: "SiExpress" },
    { name: "MongoDB", category: "Backend", icon: "SiMongodb" },
    { name: "Mongoose", category: "Backend", icon: "SiMongoose" },
    { name: "JWT", category: "Backend", icon: "SiJsonwebtokens" },
    // Real-Time & Integrations
    { name: "Socket.io", category: "Integrations", icon: "SiSocketdotio" },
    { name: "Firebase", category: "Integrations", icon: "SiFirebase" },
    { name: "Stripe", category: "Integrations", icon: "SiStripe" },
    // Tools & DevOps
    { name: "Git", category: "Tools", icon: "SiGit" },
    { name: "GitHub", category: "Tools", icon: "SiGithub" },
    { name: "Postman", category: "Tools", icon: "SiPostman" },
    { name: "Vite", category: "Tools", icon: "SiVite" },
    { name: "Vercel", category: "Tools", icon: "SiVercel" },
  ],
};

export const services = [
  {
    num: "01",
    title: "Fullstack Development",
    description: "Building production-grade dynamic web applications from database architecture to responsive user interfaces.",
    href: "#work",
  },
  {
    num: "02",
    title: "Front-end Development",
    description: "Crafting performant, accessible, and responsive user interfaces with modern React, Next.js, and Tailwind CSS.",
    href: "#work",
  },
  {
    num: "03",
    title: "React Development",
    description: "Engineering robust single-page and server-rendered applications with interactive state management and API integrations.",
    href: "#work",
  },
];

export const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Evo-Tech — Advanced E-Commerce Platform",
    description: "A scalable, production-grade e-commerce platform designed for tech products. The system supports multi-role access, real-time updates, advanced product management, and modern SEO-friendly architecture.",
    stack: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    features: [
      { data: "Multi-role authentication system (User, Admin, Employee)" },
      { data: "JWT-based auth with OAuth social login support" },
      { data: "Advanced product catalog with categories, brands, variants, and stock tracking" },
      { data: "Persistent cart, wishlist, order lifecycle, and invoice management" },
      { data: "Real-time notifications and updates using Socket.io" },
      { data: "Admin dashboard for inventory, users, orders, and content control" },
    ],
    technicalHighlights: [
      { data: "Next.js App Router for performance and SEO" },
      { data: "TypeScript across frontend and backend for type safety" },
      { data: "Redux Toolkit & RTK Query for state and API management" },
      { data: "MongoDB schema design optimized for large catalogs" },
      { data: "Socket.io for real-time communication" },
    ],
    image: "/evo-tech.jpg",
    live: "https://evo-tech-frontend.vercel.app",
    github: "https://github.com/Ahnabu/evo-tech/tree/main/frontend",
    githubServer: "https://github.com/Ahnabu/evo-tech/tree/main/backend",
  },
  {
    num: "02",
    category: "fullstack",
    title: "SMS — School Management System",
    description: "A comprehensive school management system with role-based dashboards for administrators, teachers, parents, students, and accountants. It models real academic and financial workflows.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "TypeScript" },
    ],
    features: [
      { data: "Role-based dashboards for administrators, teachers, parents, students, and accountants" },
      { data: "Secure authentication and access control (RBAC)" },
      { data: "Attendance management with instant visibility" },
      { data: "Homework assignment, submission, and tracking" },
      { data: "Academic calendar and notice management" },
      { data: "Fee structure creation with automatic syncing across student records" },
    ],
    technicalHighlights: [
      { data: "MERN architecture with TypeScript" },
      { data: "JWT authentication and Zod validation" },
      { data: "Scalable backend folder structure" },
      { data: "Complex data modeling for fees, roles, and academic entities" },
    ],
    image: "/sms.jpg",
    live: "https://sms-frontend-chi.vercel.app/",
    github: "https://github.com/Ahnabu/SMS/tree/main/frontend",
    githubServer: "",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Safa Residency — Hotel Management System",
    description: "A production-ready hotel management system enabling room booking, reservation management, and secure online payments with multilingual support.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React" },
      { name: "Node.js" },
    ],
    features: [
      { data: "Room discovery, booking, and availability management" },
      { data: "Secure online payments using SSLCommerz" },
      { data: "Multi-role dashboards (Guest, Staff, Admin)" },
      { data: "Booking history, service requests, and admin controls" },
      { data: "English and Bangla language support (i18n)" },
    ],
    technicalHighlights: [
      { data: "Firebase authentication" },
      { data: "Payment gateway integration (SSLCommerz)" },
      { data: "Internationalization (i18n)" },
      { data: "Deployed and used in a real-world scenario" },
    ],
    image: "/safa-residency.jpg",
    live: "https://safa-residency-bd4f2.web.app/",
    github: "https://github.com/Ahnabu/safa-residency/tree/main/client",
    githubServer: "https://github.com/Ahnabu/safa-residency/tree/main/server",
  },
  {
    num: "04",
    category: "fullstack",
    title: "Inkraft — Premium Editorial Blogging Platform",
    description: "A production-ready blogging platform designed for content creators, featuring professional analytics, SEO optimization, and a distraction-free reading experience.",
    stack: [
      { name: "Next.js" },
      { name: "MongoDB" },
      { name: "React" },
      { name: "Node.js" },
      { name: "TypeScript" },
    ],
    features: [
      { data: "Rich Text Editor with Markdown support and syntax highlighting" },
      { data: "Professional-grade Analytics with geographic tracking" },
      { data: "SEO Optimization with automated Schema.org and sitemaps" },
      { data: "Multi-role dashboards (Reader, Author, Admin)" },
      { data: "Internationalization (i18n) support (English & Bangla)" },
    ],
    technicalHighlights: [
      { data: "Next.js App Router Architecture" },
      { data: "Vercel BotID for security" },
      { data: "Incremental Static Regeneration (ISR)" },
      { data: "Cloudinary Image Optimization" },
    ],
    image: "/inkraft.png",
    live: "https://inkraftblog.vercel.app/",
    github: "https://github.com/Ahnabu/inkraft",
    githubServer: "https://github.com/Ahnabu/inkraft",
  },
  {
    num: "05",
    category: "frontend",
    title: "Lift — Corporate Website",
    description: "A responsive corporate website built for a lift and elevator company to showcase products, services, completed projects, and capture business leads.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    features: [
      { data: "SEO-friendly landing pages" },
      { data: "Product and service showcase sections" },
      { data: "Project gallery for credibility" },
      { data: "Lead-generation contact forms" },
    ],
    technicalHighlights: [
      { data: "Next.js for server-side rendering and SEO" },
      { data: "Tailwind CSS for responsive UI" },
      { data: "Clean, professional design focused on business needs" },
    ],
    image: "/lift.jpg",
    live: "https://lift-blush.vercel.app/",
    github: "https://github.com/Ahnabu/lift",
    githubServer: "https://github.com/Ahnabu/lift",
  },
];

export const contactInfo = [
  {
    title: "Phone",
    description: "+880 1302 537209",
    icon: "FaPhoneAlt",
  },
  {
    title: "Email",
    description: "syedmdabuhoraira@gmail.com",
    icon: "FaEnvelope",
  },
  {
    title: "Address",
    description: "708/2 East Manikdi, Dhaka Cantonment, Dhaka, Bangladesh",
    icon: "FaMapMarkedAlt",
  },
];

export const navLinks = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "resume", id: "resume" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
];

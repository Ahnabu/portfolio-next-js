'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Eye } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';
import { ScrollArea } from '@/components/ui/scroll-area';
import LivePreviewModal from '@/components/LivePreviewModal';

const projects = [
    {
        num: "01",
        category: "fullstack",
        title: "Evo-Tech — Advanced E-Commerce Platform",
        description: 'A scalable, production-grade e-commerce platform designed for tech products. The system supports multi-role access, real-time updates, advanced product management, and modern SEO-friendly architecture.',
        stack: [
            {
                name: "Next.js"
            },
            {
                name: "React"
            },
            {
                name: "TypeScript"
            },
            {
                name: "Node.js"
            },
            {
                name: "Express.js"
            },
            {
                name: "MongoDB"
            },
        ],
        features: [
            {
                data: "Multi-role authentication system (User, Admin, Employee)"
            },
            {
                data: "JWT-based auth with OAuth social login support"
            },
            {
                data: "Advanced product catalog with categories, brands, variants, and stock tracking"
            },
            {
                data: "Persistent cart, wishlist, order lifecycle, and invoice management"
            },
            {
                data: "Real-time notifications and updates using Socket.io"
            },
            {
                data: "Admin dashboard for inventory, users, orders, and content control"
            }
        ],
        technicalHighlights: [
            {
                data: "Next.js App Router for performance and SEO"
            },
            {
                data: "TypeScript across frontend and backend for type safety"
            },
            {
                data: "Redux Toolkit & RTK Query for state and API management"
            },
            {
                data: "MongoDB schema design optimized for large catalogs"
            },
            {
                data: "Socket.io for real-time communication"
            }
        ],
        image: '/evo-tech.jpg',
        live: 'https://evo-tech-frontend.vercel.app',
        github: "https://github.com/Ahnabu/evo-tech/tree/main/frontend",
        githubServer: "https://github.com/Ahnabu/evo-tech/tree/main/backend"
    },
    {
        num: "02",
        category: "fullstack",
        title: "SMS — School Management System",
        description: 'A comprehensive school management system with role-based dashboards for administrators, teachers, parents, students, and accountants. It models real academic and financial workflows.',
        stack: [
            {
                name: "MongoDB"
            },
            {
                name: "Express.js"
            },
            {
                name: "React"
            },
            {
                name: "Node.js"
            },
            {
                name: "TypeScript"
            },
        ],
        features: [
            {
                data: "Role-based dashboards for administrators, teachers, parents, students, and accountants"
            },
            {
                data: "Secure authentication and access control (RBAC)"
            },
            {
                data: "Attendance management with instant visibility"
            },
            {
                data: "Homework assignment, submission, and tracking"
            },
            {
                data: "Academic calendar and notice management"
            },
            {
                data: "Fee structure creation with automatic syncing across student records"
            }
        ],
        technicalHighlights: [
            {
                data: "MERN architecture with TypeScript"
            },
            {
                data: "JWT authentication and Zod validation"
            },
            {
                data: "Scalable backend folder structure"
            },
            {
                data: "Complex data modeling for fees, roles, and academic entities"
            }
        ],
        image: '/sms.jpg',
        live: 'https://sms-frontend-chi.vercel.app/',
        github: "https://github.com/Ahnabu/SMS/tree/main/frontend",
        githubServer: ""
    },
    {
        num: "03",
        category: "fullstack",
        title: "Safa Residency — Hotel Management System",
        description: 'A production-ready hotel management system enabling room booking, reservation management, and secure online payments with multilingual support.',
        stack: [
            {
                name: "MongoDB"
            },
            {
                name: "Express.js"
            },
            {
                name: "React"
            },
            {
                name: "Node.js"
            },
        ],
        features: [
            {
                data: "Room discovery, booking, and availability management"
            },
            {
                data: "Secure online payments using SSLCommerz"
            },
            {
                data: "Multi-role dashboards (Guest, Staff, Admin)"
            },
            {
                data: "Booking history, service requests, and admin controls"
            },
            {
                data: "English and Bangla language support (i18n)"
            }
        ],
        technicalHighlights: [
            {
                data: "Firebase authentication"
            },
            {
                data: "Payment gateway integration (SSLCommerz)"
            },
            {
                data: "Internationalization (i18n)"
            },
            {
                data: "Deployed and used in a real-world scenario"
            }
        ],
        image: '/safa-residency.jpg',
        live: 'https://safa-residency-bd4f2.web.app/',
        github: "https://github.com/Ahnabu/safa-residency/tree/main/client",
        githubServer: "https://github.com/Ahnabu/safa-residency/tree/main/server"
    },
    {
        num: "04",
        category: "frontend",
        title: "Lift — Corporate Website",
        description: 'A responsive corporate website built for a lift and elevator company to showcase products, services, completed projects, and capture business leads.',
        stack: [
            {
                name: "Next.js"
            },
            {
                name: "TypeScript"
            },
            {
                name: "Tailwind CSS"
            },
        ],
        features: [
            {
                data: "SEO-friendly landing pages"
            },
            {
                data: "Product and service showcase sections"
            },
            {
                data: "Project gallery for credibility"
            },
            {
                data: "Lead-generation contact forms"
            }
        ],
        technicalHighlights: [
            {
                data: "Next.js for server-side rendering and SEO"
            },
            {
                data: "Tailwind CSS for responsive UI"
            },
            {
                data: "Clean, professional design focused on business needs"
            }
        ],
        image: '/lift.jpg',
        live: 'https://lift-blush.vercel.app/',
        github: "https://github.com/Ahnabu/lift",
        githubServer: "https://github.com/Ahnabu/lift"
    },

]
const Work = () => {
    const [project, setProject] = useState(projects[0])
    const [isPreviewOpen, setIsPreviewOpen] = useState(false)
    const handleSlideChange = (swiper) => {
        // get current slide index 
        const index = swiper.activeIndex;
        // update the project state with the current slide data
        setProject(projects[index])
    }


    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
            }}
            className='min-h-[80vh] flex flex-co items-center justify-center py-12 xl:py-0 '
        >
            <div className="container mx-auto">

                <div className='flex flex-col xl:flex-row xl:gap-7 '>
                    <ScrollArea className="h-[460px] ">
                    <div className='w-full  flex flex-col xl:justify-between order-2 xl:order-none '>
                        <div className='flex flex-col gap-7 h-[50%] '>
                            {/* outline num */}
                            <div className='group'>
                                <div className='text-8xl leading-none font-extrabold text-transparent group-hover:text-outline-hover transition-all duration-500 text-outline '>
                                    {project.num}
                                </div>
                            </div>

                            {/* project title */}
                            <h2 className="text-4xl font-bold leading-none text-white hover:text-accent transition-all duration-500 items-center">
                                {project.title}
                            </h2>
                            <p className='text-white/60'>
                                {project.description}
                            </p>
                            <div className="flex justify-between">
                                {/* project stack */}
                                <ul className='flex gap-4'>
                                    {project.stack.map((stack, index) => (
                                        <li key={stack.name} className='text-accent text-xl'>
                                            {stack.name}
                                            {/* remove the last comma */}
                                            {index !== project.stack.length - 1 && ','}
                                        </li>
                                    ))}
                                </ul>

                              
                            </div>

                            {/* border */}
                            <div className="border border-white/20 ">

                                </div>
                                {/* button */}
                                <div className='flex items-center gap-4 mt-2'>
                                    <TooltipProvider duration={1000}>
                                        <Tooltip>
                                            <TooltipTrigger onClick={() => setIsPreviewOpen(true)} className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                                                <Eye className='text-white text-3xl group-hover:text-accent' />
                                                <TooltipContent>
                                                    <p>Interactive Preview</p>
                                                </TooltipContent>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <Link href={project.live}>
                                        <TooltipProvider duration={1000}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                                                    <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                                    <TooltipContent>
                                                        <p>Live Project</p>
                                                    </TooltipContent>

                                                </TooltipTrigger>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link href={project.github}>
                                        <TooltipProvider duration={500}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                                                    <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                                    <TooltipContent>
                                                        <p>Github client repository</p>
                                                    </TooltipContent>

                                                </TooltipTrigger>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link href={project.githubServer}>
                                        <TooltipProvider duration={500}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                                                    <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                                    <TooltipContent>
                                                        <p>Github server repository</p>
                                                    </TooltipContent>

                                                </TooltipTrigger>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            {/* border */}
                            <div className="border border-white/20 ">

                            </div>
                            
                                {/* Core Features Section */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Core Features</h3>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {
                                            project.features.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className='bg-[#232329] px-10 rounded-xl flex flex-col py-3 justify-center items-center lg:items-start gap-1'
                                                    >
                                                        <div className='flex items-center gap-3'>
                                                            {/* dot */}
                                                            <span className="rounded-full w-[6px] h-[6px] bg-accent"></span>
                                                            <p className="text-white/80">{item.data}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                {/* Technical Highlights Section */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-white mb-4">Technical Highlights</h3>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {
                                            project.technicalHighlights.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className='bg-[#232329] px-10 rounded-xl flex flex-col py-3 justify-center items-center lg:items-start gap-1'
                                                    >
                                                        <div className='flex items-center gap-3'>
                                                            {/* dot */}
                                                            <span className="rounded-full w-[6px] h-[6px] bg-accent"></span>
                                                            <p className="text-white/80">{item.data}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            
                        </div>
                        </div>
                    </ScrollArea>
                    <div className='w-full xl:w-[50%] '>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12 '
                            onSlideChange={handleSlideChange}
                        >
                            {
                                projects.map((project, index) => {
                                    return (<SwiperSlide key={index}
                                        className='w-full'
                                    >
                                        <div className="relative group flex h-[460px] justify-center items-center bg-pink-50/20 rounded-xl overflow-hidden">
                                            {/* live website iframe */}
                                            <iframe 
                                                src={project.live}
                                                className='w-full h-full border-0 rounded-xl'
                                                title={`${project.title} Preview`}
                                                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                                            />
                                        </div>
                                    </SwiperSlide>)

                                }

                                )
                            }
                            {/* slider button  */}
                            <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none ' btnStyles="bg-accent hover:bg-accent-hover text-primary flex text-[22px] w-11 h-11 justify-center items-center transition-all " />
                        </Swiper>
                    </div>
                </div>
            </div>
            
            {/* Live Preview Modal */}
            <LivePreviewModal 
                isOpen={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
                projectUrl={project.live}
                projectTitle={project.title}
            />
        </motion.section>
    );
};

export default Work;
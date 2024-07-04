'use client'
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'

import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';
import { ScrollArea } from '@/components/ui/scroll-area';

const projects = [
    {
        num: "01",
        category: "fullstack",
        title: "project 1",
        description: 'This web application simplifies health camp management, allowing organizers and users to efficiently handle bookings, payments, and participant tracking.',
        stack: [
            {
                name: "MERN"
            },
        ],
        features: [
            {
                data: "An intuitive dashboard provides easy navigation to essential functionalities."
            },
            {
                data: " Secure payment methods (including Stripe) facilitate hassle-free transactions." 
            }, {
                data: " Efficiently manage camps, bookings, participants, and payments." 
            },
            {
                data: "Secure with token saved in local-storage "
            },
            {
                data: "A smart, unified interface simplifies camp management."
            }
               
        ],
        image: '/a12.jpg',
        live: 'b9-a12-health-caduceus.web.app',
        github: "https://github.com/Ahnabu/b9-a12-health-caduceus"
    },
    {
        num: "02",
        category: "fullstack",
        title: "project 2",
        description: 'It is a restaurant management website, the idea is, one can sell & buy food on this website.',
        stack: [
            {
                name: "MERN"
            },
        ],
        features: [
            {
                data: "Dynamic top food section"
            },
            {
                data: "You can purchase foods"
            },
            {
                data: "You can add and see reviews in gallery section"
            },
            {
                data: "You can add your feedback"
            },
            {
                data: "Secure with cookie token"
            }

        ],
        image: '/a11.jpg',
        live: 'a11-nurturing-energetics.web.app',
        github: "https://github.com/Ahnabu/b9a-11-Nurturing-Energetics.git"
    },
    {
        num: "03",
        category: "fullstack",
        title: "project 3",
        description: 'This web application is for shearing art and craft.The idea is one can add the art he or she wants, love others work and save it on a section, update his added art and crafts.',
        stack: [
            {
                name: "MERN"
            },
        ],
        features: [
            {
                data: "You can add your art on database"
            },
            {
                data: "You can update and delete your art on database"
            },
            {
                data: "You can see all arts added by others"
            },
            {
                data: "Has Light and dark mode"
            },
            {
                data: "You can add your favorite item on favorite section"
            }

        ],
        image: '/a10.jpg',
        live: 'a10-art-craft.web.app/',
        github: "https://github.com/Ahnabu/b9-a10-craft-vista.git"
    },

]
const Work = () => {
    const [project, setProject] = useState(projects[0])
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
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none '>
                        <div className='flex flex-col gap-7 h-[50%] '>
                            {/* outline num */}
                            <div className='group'>
                                <div className='text-8xl leading-none font-extrabold text-transparent group-hover:text-outline-hover transition-all duration-500 text-outline '>
                                    {project.num}
                                </div>
                            </div>

                            {/* project category */}
                            <h2 className="text-4xl font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize items-center">
                                {project.category} project
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
                                
                                {/* button */}
                            <div className='flex items-center gap-4 mt-2'>
                                <Link href={project.live}>
                                    <TooltipProvider duration={100}>
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
                                                    <p>Github repository</p>
                                                </TooltipContent>

                                            </TooltipTrigger>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                            </div>
                            
                            {/* border */}
                            <div className="border border-white/20 ">

                            </div>
                            <div className="h-[200px] over ">
                                <ul className="grid gap-7">
                                    {
                                        project.features.map((item, index) => {
                                        
                                            return (
                                                <li
                                                    key={index}
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '
                                                >
                                                   
                                                    <div className='flex items-center gap-3 '>
                                                        {/* dot */}
                                                        <span className="rounded-full w-[6px] h-[6px] bg-accent "></span>

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
                                        <div className="relative group flex h-[460px] justify-center items-center bg-pink-50/20    ">
                                            {/* overlay */}
                                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                                            </div>
                                            {/* image */}
                                            <div className='relative w-full h-full rounded-xl'>
                                                <Image src={project.image}
                                                    fill
                                                    className='object-cover'
                                                    alt=''
                                                ></Image>
                                            </div>
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
        </motion.section>
    );
};

export default Work;
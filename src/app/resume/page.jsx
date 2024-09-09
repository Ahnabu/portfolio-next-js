'use client'
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiReactrouter, SiJsonwebtokens,SiGit } from 'react-icons/si';


//about data
const about = {
    title: "About me",
    description: "Aspiring junior web developer skilled in React, HTML, CSS, JavaScript, and modern tools like Tailwind, Vite, Express, MongoDB, and Firebase, with some knowledge of Next.js.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Syed Md. Abu Horaira"
        },
        {
            fieldName: "Phone",
            fieldValue: "+880 1302 537209"
        },
        // {
        //     fieldName: "Experience",
        //     fieldValue:"6 Months"
        // },
        {
            fieldName: "Skype",
            fieldValue: "live:.cid.2faef17d11894730"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Bangladeshi"
        },
        {
            fieldName: "Email",
            fieldValue: "syedmdabuhoraira@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "Bangla, English"
        },
    ]
}
//education
const education = {
    title: "Education",
    description: "I am taking bachelor's degree in Zoology from Dhaka College. I have completed my web development course from Programming Hero in 2024.",
    educationList: [
        {
            institution: "Programming Hero",
            degree: "Complete Web Development",
            duration: "2024"
        },
        {
            institution: "Dhaka College",
            degree: "BSc in Zoology",
            duration: "2022-current"
        },
        {
            institution: "Shaheed Ramiz Uddin Cantonment College",
            degree: "Higher Secondary School Certificate",
            duration: "2020-2021"
        },
        {
            institution: "Shaheed Ramiz Uddin Cantonment School",
            degree: "Secondary School Certificate",
            duration: "2018-2019"
        },
    ]
}
const skills =
{
    title: "My Skills",
    description: "I am proficient in React, HTML, CSS, JavaScript, and familiar with Tailwind, Vite, Express, MongoDB, and Firebase.",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML5"
        },
        {
            icon: <FaCss3 />,
            name: "CSS3"
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS"
        },
        {
            icon: <FaJs />,
            name: "JavaScript"
        },
        {
            icon: <FaReact />,
            name: "React"
        },
        {
            icon: <SiReactrouter />,
            name: "React Router"
        },


        {
            icon: <FaNodeJs />,
            name: "Node JS"
        },
        {
            icon: <SiExpress />,
            name: "Express Js"
        },
        {
            icon: <SiJsonwebtokens />,
            name: "JSON Web Tokens"
        },
        {
            icon: <SiFirebase />,
            name: "Firebase"
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB"
        },
        {
            icon: <SiGit />,
            name: "Git"
        },


    ]
}


const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 1, duration: 2.4, ease: 'easeIn' }
            }}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 '
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue='Skills'
                    className='flex flex-col lg:flex-row gap-[60px] '
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="Skills">Skills</TabsTrigger>
                        <TabsTrigger value="Education">Education</TabsTrigger>

                        <TabsTrigger value="About">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className='min-h-[70vh] w-full '>
                        {/* education  */}
                        <TabsContent value="Education">
                            <div className='flex flex-col gap-7 text-center xl:text-left '>
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p>
                                    {education.description}
                                </p>
                            </div>
                            <ScrollArea className="h-[400px] ">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7 ">
                                    {
                                        education.educationList.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '
                                                >
                                                    <span className='text-accent'>{item.duration} </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ">
                                                        {item.degree}
                                                    </h3>
                                                    <div className='flex items-center gap-3 '>
                                                        {/* dot */}
                                                        <span className="rounded-full w-[6px] h-[6px] bg-accent "></span>

                                                        <p className="text-white/80">{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </ScrollArea>
                        </TabsContent>
                        {/* skills  */}
                        <TabsContent value="Skills" className="w-full h-full">
                            <div className='flex flex-col gap-7  '>
                                <div className='flex flex-col gap-7 text-center xl:text-left '>
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-7">
                                    {
                                        skills.skillList.map((skill, index) => {
                                            return <li key={index} >
                                                <TooltipProvider delayDuration={1000}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[158px] bg-[#232329] rounded-xl flex justify-center items-center hover:text-accent  ' >
                                                            <div className='text-6xl hover:text-accent transition-all duration-300'>
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize '>
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })
                                    }
                                </ul>

                            </div>
                        </TabsContent>
                        {/* About me  */}
                        <TabsContent value="About" className='w-full text-center xl:text-left'>

                            <div className='flex flex-col gap-7  '>
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                    {about.description}
                                </p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 '>
                                    {

                                        about.info.map((item, index) => {
                                            return (
                                                <li key={index} className='flex items-center justify-start gap-4 mr-3'>
                                                    <span className='text-white/60 '>
                                                        {item.fieldName}
                                                    </span>
                                                    <span className='text-xl'>
                                                        {item.fieldValue}
                                                    </span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>

                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
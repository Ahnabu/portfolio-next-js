'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase } from 'react-icons/si';


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
            fieldValue: "horairaabu013025@gmail.com"
        },
        {
            fieldName: "Languages",
            fieldValue: "Bangla, English"
        },
    ]
}
//education
const education = [
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
        degree: "HSC",
        duration: "2020-2021"
    },
    {
        institution: "Shaheed Ramiz Uddin Cantonment School",
        degree: "SSC",
        duration: "2018-2019"
    },
]
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
                icon: <FaJs />,
                name: "JavaScript"
            },
            {
                icon: <FaReact />,
                name: "React"
            },
            {
                icon: <SiTailwindcss />,
                name: "Tailwind CSS"
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
                icon: <SiFirebase />,
                name: "Firebase"
            },
            {
                icon: <SiMongodb />,
                name: "Mongodb"
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
                    defaultValue='experience'
                    className='flex flex-col lg:flex-row gap-[60px] '
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="Education">Education</TabsTrigger>
                        <TabsTrigger value="Skills">Skills</TabsTrigger>
                        <TabsTrigger value="About">About me</TabsTrigger>
                    </TabsList>
                    {/* content */}
                    <div className='min-h-[70vh] w-full '>
                        {/* education  */}
                        <TabsContent value="Education">
                            
                            
                        </TabsContent>
                        {/* skills  */}
                        <TabsContent value="Skills">Skills</TabsContent>
                        {/* About me  */}
                        <TabsContent value="About">About me</TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;
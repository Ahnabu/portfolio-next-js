'use client'
import Form from '@/components/Form';
import { motion } from 'framer-motion';
import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: "+880 1302 537209"
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: "syedmdabuhoraira@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt />,
        title: 'Address',
        description: "708/2 East Manikdi,Dhaka Cantonment,Dhaka,Bangladesh"
    },
]
const Contact = () => {
    
    
    


    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
            }}
            className='py-6 mx-auto'
        >
            <div className="container ">
                <div className='flex flex-col xl:flex-row gap-7'>
                    {/* from */}
                    <div className='xl:h-[54%] order-2 xl:order-none xl:w-1/2 
                    '>
                       
                    <Form/>


                    </div>
                    {/* info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-10'>
                            {info.map((item, index) => {
                                return <li key={index} className='flex items-center gap-2 md:gap-6' >
                                    <div className='w-6 h-6 md:w-[52px] md:h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center '>
                                        <div className='text-base md:text-[28px]  '>
                                            {item.icon}
                                        </div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className=' text-white/60'>{item.title}</p>
                                        <h3 className='text-xl text-wrap'>{item.description}</h3>
                                    </div>
                                </li>

                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default Contact;
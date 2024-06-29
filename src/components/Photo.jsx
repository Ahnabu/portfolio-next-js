'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const Photo = () => {
    return (
        <div className='w-full h-full relative xl:pt-16 text-center'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: 'easeIn' }
                }}
            className='pl-5'
            >
                {/* image */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' }
                    }}
                    className='w-[253px] h-[253px] xl:w-[498px] xl:h-[498px]  mix-blend-lighten absolute'>
                    <Image src={'/myPhoto.png'} priority quality={100} fill alt='image' className='object-contain rounded-full'></Image>
                </motion.div>
                {/* circle */}
                <motion.svg className={'w-[300px] xl:w-[586px] h-[300px] xl:h-[586px] '}
                    fill='transparent'
                    viewBox='0 0 586 586'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <motion.circle cx='253'
                        cy="253"
                        r='250'
                        stroke={'#00ff99'}
                        strokeWidth={'4'}
                        strokeLinecap={"round"}
                        strokeLinejoin={"round"}
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate:[120,360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            // ease: "easeInOut",
                            // repeatDelay: 0.5,
                            // delay: 0.5,
                            // staggerChildren: 0.1,
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>

    );
};

export default Photo;
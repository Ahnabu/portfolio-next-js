import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
const socials = [
    {
        icon: <FaGithub />,
        path: 'https://github.com/Ahnabu'
    },
    {
        icon: <FaLinkedin />,
        path: 'https://www.linkedin.com/in/sm-abu-horaira'
    },
    {
        icon: <FaWhatsapp />,
        path: 'https://wa.link/064pq2'
    },
    {
        icon: <FaTwitter />,
        path: 'https://x.com/abu_horair'
    },
    {
        icon: <SiDevdotto />,
        path: 'https://dev.to/abu_horaira'
    },

]
const Footer = () => {
    return (
        <div>
            {/* border */}
            <div className="border border-white/20 ">

            </div>
            <footer class="dark:bg-primary dark:text-gray-900 text-center mb-4">
                <div class="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row dark:divide-gray-600">
                    <h4 class="self-center py-6 space-y-4 text-start sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
                        Thanks for your visit. Looking forward to work together.
                    
                    </h4>
                    <div class="flex flex-col justify-center pt-6 lg:pt-0">
                        <div class="flex justify-center space-x-4">
                            <div className='flex gap-6'>
                                {socials.map((item, index) => {
                                    return (
                                        <Link key={index} href={item.path} className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500">
                                            {item.icon}
                                        </Link>
                                    )
                                })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='text-xl font bold'> All Right Reserved by <span className='text-accent px-2 font bold'> Abu Horaira</span> </h3>
            </footer>
        </div>
    );
};

export default Footer;
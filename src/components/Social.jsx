import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const socials = [
    {
        icon: <FaGithub />,
        path:'https://github.com/Ahnabu'
    },
    {
        icon: <FaLinkedin />,
        path:'https://www.linkedin.com/in/sm-abu-horaira'
    },
    {
        icon: <FaTwitter/>,
        path:'https://x.com/abu_horair'
    },
   
]
const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
            </Link>
                )
            })
            }
        </div>
    );
};

export default Social;
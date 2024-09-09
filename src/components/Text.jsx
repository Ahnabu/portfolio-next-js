'use client'
import React from 'react';
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const Text = () => {
    const downloadCV = () => {
        // fetch('/Syed_Md_Abu_Horaira_CV.pdf')
        //     .then(response => response.blob())
        //     .then(blob => {
        //         const blobURL = window.URL.createObjectURL(new Blob([blob]));
        //         const aTag = document.createElement('a');
        //         aTag.href = blobURL;
        //         aTag.setAttribute('download', 'Syed_Md_Abu_Horaira_CV');
        //         document.body.appendChild(aTag);
        //         aTag.click();
        //         aTag.remove();
        //     });
        

            const aTag = document.createElement('a');
            aTag.href = 'Syed_Md_Abu_Horaira_CV.pdf';
            aTag.setAttribute('download', 'Syed_Md_Abu_Horaira_CV');
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        
    };
    const downloadResume = () => {
   const aTag = document.createElement('a');
            aTag.href = 'Syed_Md_Abu_Horaira_Resume.pdf';
            aTag.setAttribute('download', 'Syed_Md_Abu_Horaira_Resume');
            document.body.appendChild(aTag);
            aTag.click();
            aTag.remove();
        
    };

    return (
        <div>
            <div className="text-center xl:text-left order-2 xl:order-none">
                <span className="text-xl">Web Developer</span>
                <h1 className="h1 mb-6">Hello I&apos;m <br /><span className="text-accent">Syed Md Abu Horaira
                </span> </h1>
                <p className="max-w-[500px] mb-9 text-white/80">Aspiring junior web developer with expertise in React, adept in HTML, CSS, JavaScript, and proficient in modern tools like Tailwind, Vite, Express, MongoDB, and Firebase.</p>
                {/* btn & socials */}
                <div className="flex flex-col xl:flex-row items-center gap-8">
                    <Button variant='outline'
                        size='lg'
                        className="uppercase flex items-center gap-2"
                        onClick={() => { downloadResume() }}
                    >
                        <span>Download Resume</span>
                        <FiDownload className="text-xl" />
                    </Button>
                    <Button variant='outline'
                        size='lg'
                        className="uppercase hidden xxl:flex items-center gap-2  "
                        onClick={() => { downloadCV() }}
                    >
                        <span>Download CV</span>
                        <FiDownload className="text-xl" />
                    </Button>
                    <div className="mb-8 xl:mb-0 ">
                        <Social containerStyles='flex gap-6' iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"></Social>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Text;
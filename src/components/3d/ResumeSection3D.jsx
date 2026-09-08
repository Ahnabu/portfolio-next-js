'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiReactrouter,
  SiJsonwebtokens,
  SiGit,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiSocketdotio,
  SiStripe,
  SiPostman,
  SiVite,
  SiVercel,
  SiGithub,
  SiMongoose,
} from 'react-icons/si';

import { skills, education, personalInfo } from '@/data/portfolio';

export default function ResumeSection3D() {
  const [activeTab, setActiveTab] = useState('skills');

  const getSkillIcon = (iconName) => {
    switch (iconName) {
      case 'FaReact':
        return <FaReact />;
      case 'SiNextdotjs':
        return <SiNextdotjs />;
      case 'SiTypescript':
        return <SiTypescript />;
      case 'FaJs':
        return <FaJs />;
      case 'FaHtml5':
        return <FaHtml5 />;
      case 'FaCss3':
        return <FaCss3 />;
      case 'SiTailwindcss':
        return <SiTailwindcss />;
      case 'SiRedux':
        return <SiRedux />;
      case 'SiReactrouter':
        return <SiReactrouter />;
      case 'FaNodeJs':
        return <FaNodeJs />;
      case 'SiExpress':
        return <SiExpress />;
      case 'SiMongodb':
        return <SiMongodb />;
      case 'SiMongoose':
        return <SiMongoose />;
      case 'SiJsonwebtokens':
        return <SiJsonwebtokens />;
      case 'SiSocketdotio':
        return <SiSocketdotio />;
      case 'SiFirebase':
        return <SiFirebase />;
      case 'SiStripe':
        return <SiStripe />;
      case 'SiGit':
        return <SiGit />;
      case 'SiGithub':
        return <SiGithub />;
      case 'SiPostman':
        return <SiPostman />;
      case 'SiVite':
        return <SiVite />;
      case 'SiVercel':
        return <SiVercel />;
      default:
        return <FaReact />;
    }
  };

  const aboutInfoList = [
    { fieldName: 'Name', fieldValue: personalInfo.name },
    { fieldName: 'Phone', fieldValue: personalInfo.phone },
    { fieldName: 'Skype', fieldValue: personalInfo.skype },
    { fieldName: 'Nationality', fieldValue: personalInfo.nationality },
    { fieldName: 'Email', fieldValue: personalInfo.email },
    { fieldName: 'Languages', fieldValue: personalInfo.languages },
  ];

  return (
    <section id="resume" className="py-24 relative z-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-mono uppercase tracking-widest">
            Credentials & Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 text-white">
            Resume & Expertise
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base">
            Proficiencies across modern engineering stacks, certified education, and personal background.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Tab Selector Buttons */}
          <div className="flex flex-row lg:flex-col justify-center gap-4 w-full lg:max-w-[340px] shrink-0">
            {[
              { id: 'skills', label: 'Skills' },
              { id: 'education', label: 'Education' },
              { id: 'about', label: 'About me' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full py-4 px-6 rounded-xl font-medium text-lg transition-all duration-300 flex items-center justify-between border ${
                  activeTab === tab.id
                    ? 'bg-accent text-primary border-accent font-bold shadow-[0_0_20px_rgba(0,255,153,0.4)] translate-x-1'
                    : 'bg-[#232329]/70 text-white/80 border-white/10 hover:border-accent/40 hover:text-white hover:bg-[#232329]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    activeTab === tab.id ? 'bg-primary' : 'bg-white/20'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Tab Content Panel */}
          <div className="flex-1 min-h-[460px]">
            <AnimatePresence mode="wait">
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">{skills.title}</h3>
                    <p className="text-white/60 max-w-[600px] leading-relaxed">
                      {skills.description}
                    </p>
                  </div>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                    {skills.skillList.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={150}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[140px] bg-gradient-to-b from-[#232329]/90 to-[#1c1c22]/95 border border-white/10 rounded-2xl flex flex-col justify-center items-center gap-3 hover:border-accent hover:shadow-[0_0_25px_rgba(0,255,153,0.25)] hover:scale-105 transition-all duration-300 group">
                              <div className="text-5xl text-white/80 group-hover:text-accent transition-colors duration-300">
                                {getSkillIcon(skill.icon)}
                              </div>
                              <span className="text-xs font-mono text-white/60 group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#1c1c22] border-accent text-accent">
                              <p className="capitalize font-mono text-xs">{skill.category}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'education' && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">{education.title}</h3>
                    <p className="text-white/60 max-w-[600px] leading-relaxed">
                      {education.description}
                    </p>
                  </div>

                  <ScrollArea className="h-[460px] pr-4">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {education.educationList.map((item, index) => (
                        <li
                          key={index}
                          className="bg-gradient-to-b from-[#232329]/90 to-[#1c1c22]/95 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-accent/50 hover:shadow-[0_0_20px_rgba(0,255,153,0.15)] transition-all duration-300 h-[190px]"
                        >
                          <div>
                            <span className="text-accent font-mono text-sm font-semibold">
                              {item.duration}
                            </span>
                            <h4 className="text-xl font-bold text-white mt-2 line-clamp-2">
                              {item.degree}
                            </h4>
                          </div>

                          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <p className="text-white/70 text-sm">{item.institution}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </motion.div>
              )}

              {activeTab === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-8 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white mb-2">About Me</h3>
                    <p className="text-white/60 max-w-[600px] leading-relaxed">
                      {personalInfo.aboutDescription}
                    </p>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-b from-[#232329]/90 to-[#1c1c22]/95 border border-white/10 backdrop-blur-md">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
                      {aboutInfoList.map((item, index) => (
                        <li key={index} className="flex flex-col gap-1">
                          <span className="text-accent text-xs font-mono uppercase tracking-wider">
                            {item.fieldName}
                          </span>
                          <span className="text-white text-base sm:text-lg font-medium">
                            {item.fieldValue}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Fingerprint, ShieldCheck, Binary } from 'lucide-react';

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

// Dynamic 3D Tech Orb Canvas
const TechOrb3D = dynamic(() => import('./TechOrb3D'), { ssr: false });

export default function ResumeSection3D() {
  const [activeTab, setActiveTab] = useState('skills');
  const [targetTab, setTargetTab] = useState('skills');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState('idle'); // 'idle' | 'out' | 'intermission' | 'in'
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Integrations', 'Tools'];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills.skillList
      : skills.skillList.filter((s) => s.category === selectedCategory);

  const switchTab = (newTabId) => {
    if (isTransitioning || newTabId === activeTab) return;

    setIsTransitioning(true);
    setTargetTab(newTabId);
    setTransitionPhase('out');

    // Phase 1: Fold / flip up out of view (380ms)
    setTimeout(() => {
      setTransitionPhase('intermission');

      // Phase 2: Biometric / Neural Holographic Scanner intermission (500ms)
      setTimeout(() => {
        setActiveTab(newTabId);
        setTransitionPhase('in');

        // Phase 3: Fold down into view & materialize (550ms)
        setTimeout(() => {
          setTransitionPhase('idle');
          setIsTransitioning(false);
        }, 550);
      }, 500);
    }, 380);
  };

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
    <section id="resume" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>CREDENTIALS & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Resume & Technical Arsenal
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base leading-relaxed">
            Proficiencies across modern full-stack frameworks, verified academic background, and personal details.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
          {/* Tab Selector Buttons */}
          <div className="flex flex-row lg:flex-col justify-center gap-4 w-full lg:max-w-[300px] shrink-0">
            {[
              { id: 'skills', label: 'Skills', tag: '22 Technologies' },
              { id: 'education', label: 'Education', tag: '4 Milestones' },
              { id: 'about', label: 'About me', tag: 'Personal Dossier' },
            ].map((tab) => (
              <button
                key={tab.id}
                disabled={isTransitioning}
                onClick={() => switchTab(tab.id)}
                className={`w-full py-4 px-6 rounded-2xl font-medium transition-all duration-300 flex flex-col text-left border relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed ${
                  (isTransitioning ? targetTab : activeTab) === tab.id
                    ? 'bg-gradient-to-r from-accent to-[#00e187] text-primary border-accent font-bold shadow-[0_0_25px_rgba(0,255,153,0.35)] scale-[1.02]'
                    : 'bg-[#232329]/70 text-white/80 border-white/10 hover:border-accent/40 hover:text-white hover:bg-[#232329]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-bold">{tab.label}</span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      (isTransitioning ? targetTab : activeTab) === tab.id
                        ? 'bg-primary animate-ping'
                        : 'bg-white/20'
                    }`}
                  />
                </div>
                <span
                  className={`text-xs font-mono mt-1 ${
                    (isTransitioning ? targetTab : activeTab) === tab.id
                      ? 'text-primary/80 font-semibold'
                      : 'text-white/50'
                  }`}
                >
                  {tab.tag}
                </span>
              </button>
            ))}
          </div>

          {/* 3D Perspective Stage for Resume Content */}
          <div
            className="flex-1 w-full min-h-[520px] relative flex items-center justify-center"
            style={{ perspective: '1200px' }}
          >
            {/* Biometric Neural Holographic Scanner Intermission */}
            <AnimatePresence>
              {transitionPhase === 'intermission' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                  animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                  exit={{ opacity: 0, scale: 1.2, filter: 'blur(14px)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
                >
                  {/* Hologram Scanner Visual Container */}
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
                    {/* Outer Hexagon Target Frame */}
                    <div className="absolute inset-0 rounded-3xl border border-dashed border-cyan-400/60 animate-[spin_8s_linear_infinite]" />
                    <div className="absolute inset-3 rounded-2xl border border-accent/40" />

                    {/* Laser Scanner Line Sweeping Vertically */}
                    <motion.div
                      animate={{ y: [-90, 90, -90] }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_15px_#00ff99]"
                    />

                    {/* Central Biometric Icon */}
                    <div className="w-20 h-20 rounded-2xl bg-[#14141a]/80 border border-accent/60 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,153,0.5)]">
                      {targetTab === 'skills' && (
                        <Binary className="w-10 h-10 text-accent animate-pulse" />
                      )}
                      {targetTab === 'education' && (
                        <ShieldCheck className="w-10 h-10 text-cyan-400 animate-pulse" />
                      )}
                      {targetTab === 'about' && (
                        <Fingerprint className="w-10 h-10 text-accent animate-pulse" />
                      )}
                    </div>

                    {/* Corner Reticles */}
                    <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-accent" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-accent" />
                    <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-accent" />
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-accent" />
                  </div>

                  {/* HUD Text Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 text-center bg-[#14141a]/95 px-6 py-3 rounded-2xl border border-cyan-400/40 backdrop-blur-xl shadow-[0_0_25px_rgba(0,229,255,0.25)]"
                  >
                    <div className="text-cyan-400 font-mono text-xs font-black tracking-widest uppercase flex items-center justify-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                      [ BIOMETRIC ARCHIVE ACCESS ]
                    </div>
                    <div className="text-white text-base sm:text-lg font-bold font-mono mt-0.5">
                      ACCESSING {targetTab.toUpperCase()} DATA STREAM
                    </div>
                    <div className="text-white/50 text-[11px] font-mono mt-0.5">
                      IDENTITY AUTHENTICATED {"//"} DECRYPTING NODES
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Main Content Area with 3D Vertical Fold Transition */}
            <motion.div
              key={`tab-content-${activeTab}-${transitionPhase}`}
              initial={
                transitionPhase === 'in'
                  ? {
                      opacity: 0,
                      rotateX: -75,
                      y: 80,
                      scale: 0.85,
                      filter: 'blur(8px)',
                    }
                  : false
              }
              animate={
                transitionPhase === 'out'
                  ? {
                      opacity: 0,
                      rotateX: 75,
                      y: -80,
                      scale: 0.8,
                      filter: 'blur(10px)',
                      transition: { duration: 0.38, ease: [0.32, 0, 0.67, 0] },
                    }
                  : {
                      opacity: 1,
                      rotateX: 0,
                      y: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                    }
              }
              style={{ transformStyle: 'preserve-3d' }}
              className={`w-full transition-all ${
                transitionPhase === 'intermission' ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              {activeTab === 'skills' && (
                <div>
                  {/* 3D Interactive Tech Orb */}
                  <TechOrb3D />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">{skills.title}</h3>
                      <p className="text-white/60 text-sm mt-1 max-w-lg">{skills.description}</p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                            selectedCategory === cat
                              ? 'bg-accent text-primary font-bold shadow-[0_0_12px_rgba(0,255,153,0.4)]'
                              : 'bg-white/5 text-white/70 border border-white/10 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {filteredSkills.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={150}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[135px] cyber-card rounded-2xl flex flex-col justify-center items-center gap-3 p-4 group cursor-pointer">
                              <div className="text-5xl text-white/80 group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                                {getSkillIcon(skill.icon)}
                              </div>
                              <span className="text-xs font-mono font-medium text-white/70 group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#1c1c22] border-accent text-accent font-mono text-xs">
                              {skill.category}
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'education' && (
                <div>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">{education.title}</h3>
                    <p className="text-white/60 leading-relaxed max-w-xl">
                      {education.description}
                    </p>
                  </div>

                  <ScrollArea className="h-[460px] pr-4">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {education.educationList.map((item, index) => (
                        <li
                          key={index}
                          className="cyber-card rounded-2xl p-6 flex flex-col justify-between h-[200px] group"
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="px-3 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-bold">
                                {item.duration}
                              </span>
                              <span className="text-xs font-mono text-white/40">
                                MIL-{String(index + 1).padStart(2, '0')}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-white mt-3 group-hover:text-accent transition-colors line-clamp-2">
                              {item.degree}
                            </h4>
                          </div>

                          <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <p className="text-white/70 text-sm font-medium">{item.institution}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              )}

              {activeTab === 'about' && (
                <div>
                  <div className="mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">About Me</h3>
                    <p className="text-white/60 leading-relaxed max-w-xl">
                      {personalInfo.aboutDescription}
                    </p>
                  </div>

                  <div className="cyber-card rounded-2xl p-8">
                    <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10 text-xs font-mono text-accent">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      <span>OFFICIAL CANDIDATE DOSSIER</span>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-8">
                      {aboutInfoList.map((item, index) => (
                        <li key={index} className="flex flex-col gap-1.5">
                          <span className="text-accent/90 text-xs font-mono uppercase tracking-wider">
                            {item.fieldName}
                          </span>
                          <span className="text-white text-base sm:text-lg font-medium">
                            {item.fieldValue}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

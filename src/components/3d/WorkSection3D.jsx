'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Eye, ChevronLeft, ChevronRight, Cpu } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import LivePreviewModal from '@/components/LivePreviewModal';
import { projects } from '@/data/portfolio';

export default function WorkSection3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [targetIndex, setTargetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionPhase, setTransitionPhase] = useState('idle'); // 'idle' | 'out' | 'intermission' | 'in'
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const project = projects[currentIndex];
  const targetProject = projects[targetIndex];

  const switchProject = (newIndex, dir = 1) => {
    if (isTransitioning || newIndex === currentIndex) return;

    setIsTransitioning(true);
    setDirection(dir);
    setTargetIndex(newIndex);
    setTransitionPhase('out');

    // Phase 1: Everything flips out (400ms)
    setTimeout(() => {
      setTransitionPhase('intermission');

      // Phase 2: Cool cyber holographic warp animation (550ms)
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setTransitionPhase('in');

        // Phase 3: Next project flips into view (600ms)
        setTimeout(() => {
          setTransitionPhase('idle');
          setIsTransitioning(false);
        }, 600);
      }, 550);
    }, 400);
  };

  const nextProject = () => {
    const nextIdx = (currentIndex + 1) % projects.length;
    switchProject(nextIdx, 1);
  };

  const prevProject = () => {
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    switchProject(prevIdx, -1);
  };

  return (
    <section id="work" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-mono uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>PRODUCTION DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base leading-relaxed">
            Scalable, production-ready web applications spanning e-commerce, enterprise SaaS, and editorial publishing.
          </p>
        </motion.div>

        {/* Project Switcher Navigation */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {projects.map((item, idx) => (
            <button
              key={item.num}
              disabled={isTransitioning}
              onClick={() => switchProject(idx, idx > currentIndex ? 1 : -1)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all duration-300 border disabled:opacity-50 disabled:cursor-not-allowed ${
                (isTransitioning ? targetIndex : currentIndex) === idx
                  ? 'bg-accent text-primary border-accent shadow-[0_0_20px_rgba(0,255,153,0.4)] scale-105'
                  : 'bg-[#232329]/80 text-white/70 border-white/10 hover:text-white hover:border-accent/40'
              }`}
            >
              <span className="text-accent mr-1.5 font-black">{item.num}.</span>
              {item.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        {/* 3D Perspective Stage */}
        <div
          className="relative min-h-[580px] sm:min-h-[560px] xl:min-h-[580px] flex items-center justify-center"
          style={{ perspective: '1400px' }}
        >
          {/* Cyber Intermission Warp Animation (Appears when projects have flown out) */}
          <AnimatePresence>
            {transitionPhase === 'intermission' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotateZ: -20 }}
                animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                exit={{ opacity: 0, scale: 1.4, filter: 'blur(16px)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none"
              >
                {/* Hologram Aperture Rings */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/70 animate-[spin_6s_linear_infinite]" />
                  <div className="absolute inset-4 rounded-full border-2 border-cyan-400/50 animate-[spin_4s_linear_infinite_reverse]" />
                  <div className="absolute inset-8 rounded-full border border-white/20" />
                  
                  {/* Glowing Core */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-accent/40 via-cyan-400/40 to-accent/20 backdrop-blur-xl flex items-center justify-center shadow-[0_0_50px_rgba(0,255,153,0.8)] animate-pulse">
                    <Cpu className="w-10 h-10 text-accent animate-bounce" />
                  </div>

                  {/* Scanning Crosshair */}
                  <div className="absolute w-full h-[1px] bg-accent/60 shadow-[0_0_12px_#00ff99]" />
                  <div className="absolute h-full w-[1px] bg-accent/60 shadow-[0_0_12px_#00ff99]" />
                </div>

                {/* Cyber Matrix Text HUD */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 text-center bg-[#14141a]/90 px-6 py-3 rounded-2xl border border-accent/50 backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,153,0.3)]"
                >
                  <div className="text-accent font-mono text-xs font-black tracking-widest uppercase flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                    [ QUANTUM DATA RE-ALIGNMENT ]
                  </div>
                  <div className="text-white text-base sm:text-lg font-bold font-mono mt-1">
                    SYNCHRONIZING PROJECT 0{targetIndex + 1} {"//"} {targetProject.title.split('—')[0].trim()}
                  </div>
                  <div className="text-white/50 text-xs font-mono mt-0.5">
                    DECOMPRESSING ASSETS & LIVE RUNTIME...
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Project Details & Interactive Preview with 3D Flip */}
          <div
            className={`w-full flex flex-col xl:flex-row gap-10 items-start transition-all ${
              transitionPhase === 'intermission' ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
          >
            {/* Left Column: Project Information Panel (3D Flip) */}
            <motion.div
              key={`info-${currentIndex}-${transitionPhase}`}
              initial={
                transitionPhase === 'in'
                  ? {
                      opacity: 0,
                      rotateY: direction > 0 ? 80 : -80,
                      rotateX: 10,
                      x: direction > 0 ? -150 : 150,
                      scale: 0.75,
                      filter: 'blur(8px)',
                    }
                  : false
              }
              animate={
                transitionPhase === 'out'
                  ? {
                      opacity: 0,
                      rotateY: direction > 0 ? -80 : 80,
                      rotateX: -10,
                      x: direction > 0 ? -180 : 180,
                      scale: 0.7,
                      filter: 'blur(10px)',
                      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
                    }
                  : {
                      opacity: 1,
                      rotateY: 0,
                      rotateX: 0,
                      x: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                    }
              }
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full xl:w-[50%] flex flex-col justify-between"
            >
              <ScrollArea className="h-[540px] pr-4">
                <div className="flex flex-col gap-6 cyber-card rounded-2xl p-7 sm:p-8 relative">
                  {/* Active Flash Border Effect when landing */}
                  {transitionPhase === 'in' && (
                    <div className="absolute inset-0 rounded-2xl border-2 border-accent shadow-[0_0_40px_rgba(0,255,153,0.5)] pointer-events-none animate-pulse" />
                  )}

                  {/* Outline Number & Category */}
                  <div className="flex items-center justify-between">
                    <div className="text-6xl sm:text-8xl leading-none font-black text-transparent text-outline font-mono">
                      {project.num}
                    </div>

                    <span className="px-3 py-1 text-xs uppercase font-mono rounded-full bg-accent/10 border border-accent/40 text-accent font-bold tracking-wider">
                      {"//"} {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.stack.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-accent font-mono text-xs px-3 py-1 rounded-lg bg-[#14141a] border border-accent/20"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 py-4 border-y border-white/10 flex-wrap">
                    <TooltipProvider delayDuration={150}>
                      <Tooltip>
                        <TooltipTrigger
                          onClick={() => setIsPreviewOpen(true)}
                          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-accent text-primary flex justify-center items-center font-bold hover:scale-110 shadow-[0_0_20px_rgba(0,255,153,0.4)] transition-all"
                        >
                          <Eye className="w-6 h-6" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Interactive Device Preview</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <Link href={project.live} target="_blank" rel="noopener noreferrer">
                      <TooltipProvider delayDuration={150}>
                        <Tooltip>
                          <TooltipTrigger className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#14141a] border border-white/10 flex justify-center items-center text-white hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.3)] transition-all">
                            <BsArrowUpRight className="text-2xl" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Website</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>

                    {project.github && (
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <TooltipProvider delayDuration={150}>
                          <Tooltip>
                            <TooltipTrigger className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#14141a] border border-white/10 flex justify-center items-center text-white hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.3)] transition-all">
                              <BsGithub className="text-2xl" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Client Repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}

                    {project.githubServer && (
                      <Link href={project.githubServer} target="_blank" rel="noopener noreferrer">
                        <TooltipProvider delayDuration={150}>
                          <Tooltip>
                            <TooltipTrigger className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#14141a] border border-white/10 flex justify-center items-center text-white hover:text-accent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.3)] transition-all">
                              <BsGithub className="text-2xl" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Server Repository</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                    )}
                  </div>

                  {/* Core Features */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      Core Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((item, idx) => (
                        <li
                          key={idx}
                          className="bg-[#14141a]/90 border border-white/5 px-4 py-2.5 rounded-xl flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          <p className="text-white/80 text-xs sm:text-sm">{item.data}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Highlights */}
                  <div>
                    <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      Technical Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.technicalHighlights.map((item, idx) => (
                        <li
                          key={idx}
                          className="bg-[#14141a]/90 border border-white/5 px-4 py-2.5 rounded-xl flex items-start gap-3"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                          <p className="text-white/80 text-xs sm:text-sm">{item.data}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollArea>
            </motion.div>

            {/* Right Column: Browser Frame (3D Flip in opposite angle) */}
            <motion.div
              key={`frame-${currentIndex}-${transitionPhase}`}
              initial={
                transitionPhase === 'in'
                  ? {
                      opacity: 0,
                      rotateY: direction > 0 ? -80 : 80,
                      rotateX: -10,
                      x: direction > 0 ? 150 : -150,
                      scale: 0.75,
                      filter: 'blur(8px)',
                    }
                  : false
              }
              animate={
                transitionPhase === 'out'
                  ? {
                      opacity: 0,
                      rotateY: direction > 0 ? 80 : -80,
                      rotateX: 10,
                      x: direction > 0 ? 180 : -180,
                      scale: 0.7,
                      filter: 'blur(10px)',
                      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
                    }
                  : {
                      opacity: 1,
                      rotateY: 0,
                      rotateX: 0,
                      x: 0,
                      scale: 1,
                      filter: 'blur(0px)',
                      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.05 },
                    }
              }
              style={{ transformStyle: 'preserve-3d' }}
              className="w-full xl:w-[50%] flex flex-col gap-4"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#14141a] shadow-[0_20px_60px_rgba(0,0,0,0.6)] h-[460px] sm:h-[540px]">
                {/* Top Cyber Browser Bar */}
                <div className="h-11 bg-[#1c1c22] border-b border-white/10 px-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-xs font-mono text-white/50 truncate max-w-[260px] bg-black/40 px-3 py-1 rounded-md border border-white/5">
                    {project.live}
                  </div>
                  <button
                    onClick={() => setIsPreviewOpen(true)}
                    className="text-xs text-accent hover:underline flex items-center gap-1 font-mono font-bold"
                  >
                    <Eye className="w-3.5 h-3.5" /> Fullscreen
                  </button>
                </div>

                {/* Iframe preview */}
                <iframe
                  src={project.live}
                  className="w-full h-[calc(100%-44px)] border-0"
                  title={`${project.title} Preview`}
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
              </div>

              {/* Slider Controls & Counter */}
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-mono text-accent uppercase tracking-wider">
                  [ PROJECT // 0{currentIndex + 1} OF 0{projects.length} ]
                </span>

                <div className="flex gap-2">
                  <button
                    disabled={isTransitioning}
                    onClick={prevProject}
                    className="w-11 h-11 rounded-full bg-[#1c1c22] border border-white/10 text-white hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.4)] flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    disabled={isTransitioning}
                    onClick={nextProject}
                    className="w-11 h-11 rounded-full bg-[#1c1c22] border border-white/10 text-white hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.4)] flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fullscreen Interactive Preview Modal */}
      <LivePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        projectUrl={project.live}
        projectTitle={project.title}
      />
    </section>
  );
}

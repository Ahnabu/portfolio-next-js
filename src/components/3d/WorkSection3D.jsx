'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import Link from 'next/link';
import LivePreviewModal from '@/components/LivePreviewModal';
import { projects } from '@/data/portfolio';

export default function WorkSection3D() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const project = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="py-24 relative z-10">
      <div className="container mx-auto max-w-screen-xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-mono uppercase tracking-widest">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mt-2 text-white">
            Featured Projects
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-base">
            Scalable, production-ready web applications spanning e-commerce, enterprise SaaS, and editorial publishing.
          </p>
        </motion.div>

        {/* Project Switcher Navigation */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {projects.map((item, idx) => (
            <button
              key={item.num}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-xl text-sm font-mono font-bold transition-all duration-300 border ${
                currentIndex === idx
                  ? 'bg-accent text-primary border-accent shadow-[0_0_20px_rgba(0,255,153,0.4)] scale-105'
                  : 'bg-[#232329]/80 text-white/70 border-white/10 hover:text-white hover:border-accent/40'
              }`}
            >
              {item.num} — {item.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        {/* Main Project Details & Interactive Preview */}
        <div className="flex flex-col xl:flex-row gap-10 items-start">
          {/* Project Information Panel */}
          <div className="w-full xl:w-[50%] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ScrollArea className="h-[520px] pr-4">
                  <div className="flex flex-col gap-6">
                    {/* Outline Number */}
                    <div className="text-7xl sm:text-8xl leading-none font-extrabold text-transparent text-outline font-mono">
                      {project.num}
                    </div>

                    {/* Category badge */}
                    <div className="inline-block">
                      <span className="px-3 py-1 text-xs uppercase font-mono rounded-md bg-accent/10 border border-accent/30 text-accent">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 leading-relaxed text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-accent font-mono text-sm px-2.5 py-1 rounded-md bg-white/5 border border-white/10"
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
                            className="w-14 h-14 rounded-full bg-accent text-primary flex justify-center items-center font-bold hover:scale-110 shadow-[0_0_20px_rgba(0,255,153,0.4)] transition-all"
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
                            <TooltipTrigger className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-white hover:text-accent hover:border-accent transition-all">
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
                              <TooltipTrigger className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-white hover:text-accent hover:border-accent transition-all">
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
                              <TooltipTrigger className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-white hover:text-accent hover:border-accent transition-all">
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
                      <h4 className="text-xl font-bold text-white mb-3">Core Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((item, idx) => (
                          <li
                            key={idx}
                            className="bg-[#232329]/80 border border-white/5 px-4 py-2.5 rounded-xl flex items-start gap-3"
                          >
                            <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                            <p className="text-white/80 text-sm">{item.data}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Highlights */}
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">Technical Highlights</h4>
                      <ul className="space-y-2">
                        {project.technicalHighlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="bg-[#232329]/80 border border-white/5 px-4 py-2.5 rounded-xl flex items-start gap-3"
                          >
                            <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                            <p className="text-white/80 text-sm">{item.data}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Interactive Live Website / 3D Frame */}
          <div className="w-full xl:w-[50%] flex flex-col gap-4">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#232329]/90 shadow-[0_15px_50px_rgba(0,0,0,0.5)] h-[460px] sm:h-[520px]">
              {/* Top Cyber Browser Bar */}
              <div className="h-10 bg-[#1c1c22] border-b border-white/10 px-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-white/50 truncate max-w-[260px]">
                  {project.live}
                </div>
                <button
                  onClick={() => setIsPreviewOpen(true)}
                  className="text-xs text-accent hover:underline flex items-center gap-1 font-mono"
                >
                  <Eye className="w-3.5 h-3.5" /> Fullscreen
                </button>
              </div>

              {/* Iframe preview */}
              <iframe
                src={project.live}
                className="w-full h-[calc(100%-40px)] border-0"
                title={`${project.title} Preview`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono text-white/60">
                Project {currentIndex + 1} of {projects.length}
              </span>

              <div className="flex gap-2">
                <button
                  onClick={prevProject}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextProject}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 text-white hover:bg-accent hover:text-primary flex items-center justify-center transition-all"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
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

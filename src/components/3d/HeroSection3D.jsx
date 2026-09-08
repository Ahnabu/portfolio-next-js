'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import Hero3DVisual from './Hero3DVisual';
import { personalInfo, socials } from '@/data/portfolio';

export default function HeroSection3D() {
  const downloadCV = () => {
    window.open(personalInfo.downloadCVUrl, '_blank');
  };

  const downloadResume = () => {
    window.open(personalInfo.downloadResumeUrl, '_blank');
  };

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case 'FaGithub':
        return <FaGithub />;
      case 'FaLinkedin':
        return <FaLinkedin />;
      case 'FaWhatsapp':
        return <FaWhatsapp />;
      case 'FaTwitter':
        return <FaTwitter />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center xl:text-left order-2 xl:order-none max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>{personalInfo.role}</span>
            </div>

            <h1 className="h1 mb-6 text-white">
              Hello I&apos;m <br />
              <span className="text-accent drop-shadow-[0_0_25px_rgba(0,255,153,0.3)]">
                {personalInfo.name}
              </span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80 text-base sm:text-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Buttons & Socials */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-6">
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(0,255,153,0.2)]"
                  onClick={downloadResume}
                >
                  <span>Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2 border-accent text-accent hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(0,255,153,0.2)]"
                  onClick={downloadCV}
                >
                  <span>CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </div>

              {/* Social icons */}
              <div className="flex gap-4">
                {socials
                  .filter((item) => item.name !== 'Dev.to')
                  .map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 border border-accent/40 rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.6)] transition-all duration-300 backdrop-blur-sm bg-white/5"
                    >
                      {getSocialIcon(item.icon)}
                    </Link>
                  ))}
              </div>
            </div>
          </motion.div>

          {/* 3D Visual Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            className="order-1 xl:order-none"
          >
            <Hero3DVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

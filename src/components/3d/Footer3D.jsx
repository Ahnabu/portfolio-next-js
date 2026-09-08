'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { SiDevdotto } from 'react-icons/si';
import { socials, personalInfo } from '@/data/portfolio';

export default function Footer3D() {
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
      case 'SiDevdotto':
        return <SiDevdotto />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#1c1c22]/90 backdrop-blur-md py-12 mt-12">
      <div className="container mx-auto max-w-screen-xl px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="text-2xl font-bold text-white">
            Abu Horaira<span className="text-accent">.</span>
          </div>
          <p className="text-white/60 text-sm mt-1">
            Thanks for your visit. Looking forward to work together.
          </p>
        </div>

        {/* Socials */}
        <div className="flex gap-4">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="w-10 h-10 border border-white/10 rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,153,0.5)] transition-all duration-300 bg-white/5"
            >
              {getSocialIcon(item.icon)}
            </Link>
          ))}
        </div>

        <div className="text-xs text-white/50 font-mono">
          © {new Date().getFullYear()} All Rights Reserved by{' '}
          <span className="text-accent font-semibold">{personalInfo.name}</span>
        </div>
      </div>
    </footer>
  );
}

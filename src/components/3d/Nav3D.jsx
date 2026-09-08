'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import { navLinks } from '@/data/portfolio';

export default function Nav3D() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1c1c22]/85 backdrop-blur-lg border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-6 xl:py-8'
      }`}
    >
      <div className="container mx-auto max-w-screen-xl px-4 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection('home')}
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          Abu Horaira<span className="text-accent">.</span>
        </button>

        {/* Desktop Nav & Hire Me Button */}
        <div className="hidden xl:flex items-center gap-8">
          <nav className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur-md">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`capitalize px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-primary bg-accent font-semibold shadow-[0_0_15px_rgba(0,255,153,0.5)]'
                      : 'text-white/80 hover:text-accent hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          <Button
            onClick={() => scrollToSection('contact')}
            className="bg-accent text-primary font-bold hover:bg-accent-hover transition-all shadow-[0_0_20px_rgba(0,255,153,0.3)]"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="xl:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="flex justify-center items-center p-2 rounded-lg bg-white/5 border border-white/10 text-accent">
              <CiMenuFries className="text-2xl" />
            </SheetTrigger>
            <SheetContent className="flex flex-col bg-[#1c1c22]/95 backdrop-blur-xl border-l border-white/10 text-white">
              <div className="mt-24 mb-16 text-center text-3xl font-bold">
                Abu Horaira<span className="text-accent">.</span>
              </div>
              <nav className="flex flex-col gap-6 text-center">
                {navLinks.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-2xl capitalize font-medium transition-all ${
                        isActive ? 'text-accent font-bold scale-105' : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                })}
                <div className="pt-6">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-accent text-primary font-bold hover:bg-accent-hover text-lg py-6"
                  >
                    Hire Me
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

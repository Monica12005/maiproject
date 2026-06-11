'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const traders = [
  { id: 1, initials: 'DE', name: 'David Evans' },
  { id: 2, initials: 'LD', name: 'Lewis Dawson' },
  { id: 3, initials: 'CK', name: 'Carl Kimpton' },
  { id: 4, initials: 'DM', name: 'Daniel Magill' },
  { id: 5, initials: 'NC', name: 'Nathan Clark' },
  { id: 6, initials: 'SJ', name: 'Sarah Jenkins' },
  { id: 7, initials: 'RB', name: 'Robert Blake' },
  { id: 8, initials: 'MW', name: 'Michael Wood' },
  { id: 9, initials: 'KP', name: 'Karen Price' },
  { id: 10, initials: 'TJ', name: 'Thomas Jones' },
];

export default function WhyChooseMai() {
  const [currentIndex, setCurrentIndex] = useState(2); // Center on CK initially
  const [cardStep, setCardStep] = useState(224); // default for SSR

  // Read window width only on client to avoid hydration mismatch
  useEffect(() => {
    const updateStep = () => {
      const w = window.innerWidth;
      setCardStep(w < 768 ? 160 : w < 1024 ? 190 : w < 1280 ? 210 : 224);
    };
    updateStep();
    window.addEventListener('resize', updateStep);
    return () => window.removeEventListener('resize', updateStep);
  }, []);

  // Top-to-bottom animation for the heading section
  const slideDownVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-24 bg-[#f8fafd] overflow-hidden text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Heading Section with Top-to-Down Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideDownVariant}
          className="mb-16 max-w-3xl mx-auto"
        >
          <p className="text-[#2563eb] font-bold tracking-[0.1em] text-xs mb-3 uppercase">
            TRUSTED BY HOMEOWNERS
          </p>
          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#1e293b] mb-4">
            Why Choose MAI
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Every trader on MAI is verified, rated, and ready to work, so you get competitive bids from qualified professionals, not random strangers.
          </p>
        </motion.div>

        {/* Carousel / Cards Section */}
        <div className="relative w-full h-[400px] mb-12 flex justify-center">
          {/* 
            Container that shifts left/right. 
            We calculate offset so that the item at `currentIndex` is centered.
            Card width + gap = 200px + 24px = 224px (on desktop).
            We'll use a responsive calculation using rems or let framer-motion handle relative offsets.
            The simplest is to use absolute positioning for all cards relative to center.
          */}
          <div className="relative w-full max-w-[1000px] h-full flex items-end justify-center">
            {traders.map((trader, index) => {
              const offset = index - currentIndex;
              
              // Only render items that are somewhat close to view to keep DOM light
              if (Math.abs(offset) > 4) return null;

              const isCenter = offset === 0;
              const isAdjacent = Math.abs(offset) === 1;
              const isOuter = Math.abs(offset) === 2;

              // Calculate dynamic styling
              let heightClass = 'h-[240px] md:h-[280px]';
              let zIndex = 10 - Math.abs(offset);
              let yOffset = isCenter ? -32 : isAdjacent ? -16 : 0;
              let opacity = Math.abs(offset) > 2 ? 0 : 1;
              
              if (isCenter) {
                heightClass = 'h-[320px] md:h-[360px]';
              } else if (isAdjacent) {
                heightClass = 'h-[280px] md:h-[320px]';
              }

              const xTranslate = offset * cardStep;

              return (
                <motion.div
                  key={trader.id}
                  animate={{ 
                    x: xTranslate,
                    y: yOffset,
                    opacity: opacity
                  }}
                  transition={{ type: 'spring', stiffness: 60, damping: 14 }}
                  className={`absolute bottom-0 w-[160px] md:w-[200px] ${heightClass} flex flex-col bg-[#e5e7eb] rounded-2xl overflow-hidden shadow-lg border border-white/40`}
                  style={{ zIndex }}
                >
                  {/* Center Initials */}
                  <div className="flex-grow flex items-center justify-center">
                    <span className="text-4xl md:text-5xl font-extrabold text-[#154b8e]">
                      {trader.initials}
                    </span>
                  </div>
                  
                  {/* Bottom Gradient Overlay & Name */}
                  <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#154b8e] via-[#2a68b5]/80 to-transparent flex items-end justify-center pb-5">
                    <span className="text-white font-semibold text-sm md:text-base drop-shadow-md">
                      {trader.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-all hover:bg-gray-50 hover:scale-105 active:scale-95 ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
            disabled={currentIndex === 0}
          >
            <svg className="w-5 h-5 text-[#154b8e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => Math.min(traders.length - 1, prev + 1))}
            className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-all hover:bg-gray-50 hover:scale-105 active:scale-95 ${currentIndex === traders.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
            disabled={currentIndex === traders.length - 1}
          >
            <svg className="w-5 h-5 text-[#154b8e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Traders Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1e60b1] hover:bg-[#154b8e] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-colors"
        >
          View All Traders
        </motion.button>

      </div>
    </section>
  );
}

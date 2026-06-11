'use client';

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    number: '01',
    title: 'AI-Matched Traders',
    description: "Stop sifting through hundreds of irrelevant trader profiles. MAI's intelligent matching engine notifies your project with every qualified tradespeople whose skills, availability, location and work style align precisely with your project.",
    color: 'text-blue-100', // Watermark color
  },
  {
    id: 2,
    number: '02',
    title: 'End-to-End Project Transparency',
    description: "From milestones to payments, every stage of your project lives in one place. MAI's real-time dashboard gives you complete visibility over progress, budgets, and deliverables, eliminating the back-and-forth that slows projects down.",
    color: 'text-green-100',
  },
  {
    id: 3,
    number: '03',
    title: 'Milestone-Secured Payments',
    description: "Your investment is protected at every step. MAI's secured payment system releases funds only when agreed milestones are met and approved, giving both project owners and tradespeople complete peace of mind.",
    color: 'text-red-50',
  },
  {
    id: 4,
    number: '04',
    title: 'A Verified Community You Can Trust',
    description: "Every professional on MAI is rigorously reviewed, verified, and rated by the community. You're not hiring blindly, you're choosing from a trusted network of qualified experts dedicated to delivering high-quality results.",
    color: 'text-purple-100',
  },
];

// Heading animation: smooth top to bottom
const headingVariant = {
  hidden: { opacity: 0, y: -60 },
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

// Container for the grid, staggers children
const gridContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Card animation: start collapsed in the center and fan out to positions
const cardVariant = {
  hidden: (index: number) => {
    // 0: Top-Left, 1: Top-Right, 2: Bottom-Left, 3: Bottom-Right
    const isLeft = index % 2 === 0;
    const isTop = index < 2;
    return {
      opacity: 0,
      scale: 0.4,
      // Start from the center of the 2x2 grid
      x: isLeft ? 150 : -150,
      y: isTop ? 150 : -150,
    };
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 14,
      duration: 0.9,
    },
  },
};

export default function OurDifference() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariant}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-[#0f4a8a] font-bold tracking-[0.15em] text-xs mb-3 uppercase">
            OUR DIFFERENCE
          </p>
          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#1e293b] mb-5 tracking-tight">
            Where Traders & Homeowners Both Win
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            From first brief to final delivery. MAI gives you the tools, talent, and transparency to build with confidence.
          </p>
        </motion.div>

        {/* 2x2 Grid Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={gridContainerVariant}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-12 relative z-10"
        >
          {/* Vertical Divider (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-100 transform -translate-x-1/2 z-0"></div>
          {/* Horizontal Divider (Desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-100 transform -translate-y-1/2 z-0"></div>

          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              custom={index}
              variants={cardVariant}
              className="relative p-6 sm:p-8 bg-white z-10 group"
            >
              {/* Background Watermark Number */}
              <div className="absolute top-2 left-6 pointer-events-none select-none z-0">
                <span className={`text-[120px] leading-none font-bold opacity-40 transition-transform duration-500 group-hover:scale-110 ${feature.color}`}>
                  {feature.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 mt-12">
                <h3 className="text-2xl font-bold text-[#1e293b] mb-4 group-hover:text-[#0f4a8a] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed pr-4">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

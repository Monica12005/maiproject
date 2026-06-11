'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "Excellent service from start to finish. The quartz worktop quality is outstanding and the fitting was done perfectly. Very clean and professional work. Highly recommended!",
    author: "Athikur Rahman",
    location: "Birmingham",
  },
  {
    id: 2,
    text: "Brilliant Stone, polished to perfection. While we had some challenges with the delivery of the stone & cuts, the aftersales service was also fantastic thanks to Mr. Kumar!",
    author: "B.S. Uberai",
    location: "London",
  },
  {
    id: 3,
    text: "Great service from start to finish. Very responsive and helpful. They have a huge range of product and are very good at understanding what you are looking for and helping you find it.",
    author: "James",
    location: "Leeds",
  },
  {
    id: 4,
    text: "Excellent service from start to finish. Quick turnaround and my quartz worktops are now fitted and look incredible.",
    author: "Ricardo Angelo Marcella",
    location: "Manchester",
  },
];

// Left side animation (slides from left)
const leftVariant: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 15,
      duration: 1,
    },
  },
};

// Right side animation (slides from right, with stagger for cards)
const rightContainerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const rightCardVariant: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 50,
      damping: 14,
    },
  },
};

export default function Testimonials() {
  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg")', // Specific image of a man and woman laughing together
      }}
    >
      {/* Dark Overlay to make text readable */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Area */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={leftVariant}
            className="lg:col-span-4 text-white"
          >
            <p className="text-[#38bdf8] font-bold tracking-[0.1em] text-xs mb-3 uppercase">
              WHAT PEOPLE SAY
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              The Proof Is In The Pudding
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Tradespeople are winning, homeowners are relieved. Don't take our word for it, here's what real MAI users across the UK have to say.
            </p>
          </motion.div>

          {/* Right Content Area (Cards) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={rightContainerVariant}
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={rightCardVariant}
                className="group bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ease-in-out cursor-default hover:-translate-y-2 hover:-rotate-1 hover:shadow-[-8px_8px_0_#f43f5e]"
              >
                <div>
                  {/* Quote Icon */}
                  <span className="block text-5xl font-serif text-[#0f4a8a] leading-none mb-4 transition-colors duration-300 group-hover:text-[#f43f5e]">
                    &ldquo;
                  </span>
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
                    {t.text}
                  </p>
                </div>
                <div>
                  <h4 className="font-extrabold text-[#1e293b] text-base">
                    {t.author}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">
                    {t.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

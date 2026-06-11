'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Post Your Project',
    description:
      'Start by sharing your project details, add photos, budget, location, and timeline. The more information you provide, the easier it is for the right traders to understand your needs and respond quickly.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop',
    color: '#0f4a8a',
  },
  {
    number: 2,
    title: 'Receive Local Proposals',
    description:
      "Once your project is live, verified local traders will review it and send you competitive proposals. You'll start receiving multiple options tailored to your requirements.",
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=400&auto=format&fit=crop',
    color: '#1a6b8a',
  },
  {
    number: 3,
    title: 'Compare & Check Credentials',
    description:
      'Go through each proposal, compare pricing, and review trader profiles. Check their certifications, ratings, past work, and experience to make a confident, informed choice.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop',
    color: '#2a8fa8',
  },
  {
    number: 4,
    title: 'Finalise & Start the Work',
    description:
      "Select the trader that fits your project best, finalise the details, and get started. Plan the workflow clearly and move forward with confidence knowing you've chosen the right professional.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop',
    color: '#3aafb8',
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 18,
      mass: 0.8,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h3
            variants={headingVariants}
            className="text-[#0f4a8a] font-bold tracking-[0.2em] text-xs mb-4 uppercase"
          >
            Simple Process
          </motion.h3>
          <motion.h2
            variants={headingVariants}
            className="text-4xl md:text-[2.75rem] font-extrabold text-[#1e293b] mb-4 tracking-tight"
          >
            How To Find Verified Traders
          </motion.h2>
          <motion.p
            variants={headingVariants}
            className="text-gray-500 text-lg mb-16"
          >
            Find trusted professionals in 4 simple steps
          </motion.p>
        </motion.div>

        {/* Step Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Circular Image with Step Number Badge */}
              <div className="relative mb-6">
                {/* Decorative ring */}
                <div
                  className="w-[160px] h-[160px] rounded-full p-[3px] transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}40, ${step.color}15)`,
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-white shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Step Number Badge */}
                <div
                  className="absolute -top-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center text-white font-extrabold text-sm shadow-lg border-[3px] border-white z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)`,
                  }}
                >
                  {step.number}
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
                  style={{ background: `${step.color}20` }}
                />
              </div>

              {/* Title */}
              <h4 className="text-[#1e293b] font-bold text-lg mb-3 transition-colors duration-300 group-hover:text-[#0f4a8a]">
                {step.title}
              </h4>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed px-2 max-w-[280px]">
                {step.description}
              </p>

              {/* Connecting line (hidden on last card) */}
              {step.number < 4 && (
                <div className="hidden lg:block absolute top-[80px] right-[-16px] w-8 h-[2px] bg-gradient-to-r from-gray-200 to-gray-100" />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Connecting dots between cards (desktop only) */}
        <div className="hidden lg:flex justify-center mt-[-180px] mb-[120px] px-[100px]">
          <div className="flex-1 flex items-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 flex items-center justify-center">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.25, duration: 0.5 }}
                  className="h-[2px] w-full max-w-[60px] origin-left"
                  style={{
                    background: `linear-gradient(90deg, ${steps[i - 1].color}30, ${steps[i].color}30)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

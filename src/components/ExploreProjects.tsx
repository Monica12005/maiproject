'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const projects = [
  {
    category: 'STONE SLAB SUPPLIER',
    categoryColor: '#0f4a8a',
    title: 'Belgian Black or Super Black...',
    location: 'Edinburgh Scotland',
    badge: 'Flexible',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'NATURAL STONE INSTALLATION',
    categoryColor: '#0f4a8a',
    title: 'Bespoke Flamed Granite...',
    location: 'Greater London - England',
    badge: 'Flexible',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'NATURAL STONE INSTALLATION',
    categoryColor: '#0f4a8a',
    title: 'Saint anne marble hearth...',
    location: 'Leicestershire - England',
    badge: 'Flexible',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop',
  },
  {
    category: 'NATURAL STONE INSTALLATION',
    categoryColor: '#0f4a8a',
    title: 'Red balmoral / indian red...',
    location: 'Staffordshire - England',
    badge: 'Flexible',
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=600&auto=format&fit=crop',
  },
];

// Animation variants
const headingContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const slideFromLeftVariant: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 16,
      duration: 0.8,
    },
  },
};

const cardContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 18,
      duration: 0.7,
    },
  },
};

export default function ExploreProjects() {
  return (
    <section className="py-24 bg-[#f8fafd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row: Heading left, Button right */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingContainerVariants}
        >
          {/* Left Side: Heading */}
          <div className="text-left">
            <motion.p
              variants={slideFromLeftVariant}
              className="text-[#2563eb] font-bold tracking-[0.15em] text-xs mb-3 uppercase"
            >
              REAL WORK, REAL RESULTS
            </motion.p>
            <motion.h2
              variants={slideFromLeftVariant}
              className="text-3xl md:text-[2.6rem] font-extrabold text-[#1e293b] mb-3 leading-tight tracking-tight"
            >
              Explore Real UK Projects
            </motion.h2>
            <motion.p
              variants={slideFromLeftVariant}
              className="text-gray-400 text-base max-w-lg"
            >
              From loft conversions in Leeds to boiler installs in Bristol.
            </motion.p>
          </div>

          {/* Right Side: Button */}
          <motion.div
            variants={slideFromLeftVariant}
            className="mt-6 md:mt-0"
          >
            <button className="bg-[#1e60b1] hover:bg-[#154b8e] text-white px-7 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95">
              Explore Projects
            </button>
          </motion.div>
        </motion.div>

        {/* Project Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={cardContainerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.1)] transition-shadow duration-400 cursor-pointer group border border-gray-100/80"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Active Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-[#16a34a] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    {project.status}
                  </span>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p
                  className="text-[10px] font-bold tracking-[0.12em] uppercase mb-2"
                  style={{ color: project.categoryColor }}
                >
                  {project.category}
                </p>
                <h3 className="text-[15px] font-bold text-[#1e293b] mb-4 leading-snug truncate">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <span className="text-[#e97451] font-bold text-xs">
                    {project.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

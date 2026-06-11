'use client';

import React from 'react';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Window Sill\nReplacement',
    subtitle: 'Step-by-step guide to replacing old sills safely...',
    image: 'https://loremflickr.com/600/400/construction,window?random=1',
  },
  {
    id: 2,
    title: 'WINDOW SILL INSTALLATION',
    subtitle: 'How To Detect And Fix Window Sill Installation Errors...',
    image: 'https://loremflickr.com/600/400/construction,tools?random=2',
  },
  {
    id: 3,
    title: 'HOW TO BECOME A\nPLUMBER',
    subtitle: 'The essential qualifications and steps you need...',
    image: 'https://loremflickr.com/600/400/construction,plumber?random=3',
  },
  {
    id: 4,
    title: 'Stone\nSill Care',
    subtitle: 'Protecting and maintaining your stone sills year-round...',
    image: 'https://loremflickr.com/600/400/construction,stone?random=4',
  },
  {
    id: 5,
    title: 'DECOR',
    subtitle: 'Window Sill Decor ideas to brighten your space...',
    image: 'https://loremflickr.com/600/400/construction,house?random=5',
  },
  {
    id: 6,
    title: 'DISHWASHER\nINSTALLATION COST',
    subtitle: 'Breakdown of typical plumbing and electrical costs...',
    image: 'https://loremflickr.com/600/400/construction,kitchen?random=6',
  },
];

// Heading animation: smooth top to bottom
const headingVariant = {
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

// Custom dynamic variant for the cards
// They start completely collapsed in the center of the 3x2 grid and fan out.
const getCardVariant = (id: number) => {
  let delay = 0;
  let duration = 0.9;
  
  if (id === 1 || id === 3) {
    delay = 0.1; // First
  } else if (id === 4 || id === 6) {
    delay = 0.35; // Second
  } else if (id === 2 || id === 5) {
    delay = 0.7;  // Last
    duration = 1.4; // Slowly
  }

  // Calculate starting position so they originate from the center of the component
  let startX = 0;
  let startY = 0;

  // X offset: 1 & 4 are left (so start from right), 3 & 6 are right (so start from left)
  if (id === 1 || id === 4) startX = 250;
  if (id === 3 || id === 6) startX = -250;

  // Y offset: 1, 2, 3 are top row (so start from below), 4, 5, 6 are bottom row (so start from above)
  if (id <= 3) startY = 150;
  else startY = -150;

  return {
    hidden: { opacity: 0, scale: 0.4, x: startX, y: startY },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: id === 2 || id === 5 ? 30 : 60,
        damping: 15,
        delay,
        duration,
      },
    },
  };
};

export default function LatestBlog() {
  return (
    <section className="py-24 bg-[#f8fafd] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Heading Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariant}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#2563eb] font-bold tracking-[0.1em] text-xs mb-3 uppercase">
            KNOWLEDGE HUB
          </p>
          <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#1e293b] mb-4">
            Latest Blog
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Our articles cover a range of topics to help you stay informed and make better decisions. Dive into expert advice and stay ahead in the industry with our engaging and informative content.
          </p>
        </motion.div>

        {/* 3x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              custom={blog.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={getCardVariant(blog.id)}
              className="relative h-[260px] rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={blog.image}
                alt={blog.title.replace('\n', ' ')}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Default Gradient (Dark overlay for readability) */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-transparent"></div>

              {/* Hover Blue Bottom Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-[#0f4a8a] via-[#154b8e]/80 to-transparent opacity-0 translate-y-8 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0"></div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center transition-all duration-500 group-hover:justify-end group-hover:pb-8">
                <h3 className="font-extrabold text-white drop-shadow-lg text-2xl md:text-3xl leading-tight transition-transform duration-500 group-hover:-translate-y-2 group-hover:text-xl">
                  {blog.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== blog.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                {/* Subtitle appears only on hover */}
                <div className="overflow-hidden h-0 opacity-0 transition-all duration-500 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2">
                  <p className="text-white/90 text-sm font-medium drop-shadow-md">
                    {blog.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Blog Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1e60b1] hover:bg-[#154b8e] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md transition-colors"
        >
          View All Blog
        </motion.button>

      </div>
    </section>
  );
}

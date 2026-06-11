'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Kitchens',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Worktops, Table Tops & Wall Cladding',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Stone Slab & Worktop Transport',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Roofing',
    image: 'https://picsum.photos/seed/roofing/800/800',
  },
  {
    title: 'Dry Stone Walling',
    image: 'https://picsum.photos/seed/stone/800/800',
  },
  {
    title: 'Flooring',
    image: 'https://picsum.photos/seed/flooring/800/800',
  },
  {
    title: 'Worktop & Removal',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f67?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    let scrollAmount = 0;

    const scroll = () => {
      if (el) {
        scrollAmount += 1;
        if (scrollAmount >= el.scrollWidth / 2) {
          scrollAmount = 0; // Reset for infinite effect
        }
        el.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start auto-scrolling
    animationFrameId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (el) {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Double the array for seamless infinite scroll
  const doubledServices = [...services, ...services];

  return (
    <section className="py-20 bg-white text-center overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.h3
          variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          className="text-blue-600 font-semibold tracking-wide text-sm mb-2 uppercase"
        >
          Get Any Home Repair Done
        </motion.h3>
        <motion.h2
          variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-4"
        >
          Looking For A Service?
        </motion.h2>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          className="text-gray-500 text-lg"
        >
          From a dripping tap to a full loft conversion find the right <span className="text-blue-600">verified tradesperson</span> for any job.
        </motion.p>
      </motion.div>

      {/* Auto-scrolling Carousel */}
      <div className="relative w-full overflow-hidden mb-12">
        <div 
          ref={scrollRef}
          className="flex space-x-6 overflow-x-hidden w-full px-4 py-4 whitespace-nowrap cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'auto' }}
        >
          {doubledServices.map((service, index) => (
            <div 
              key={index} 
              className="inline-block w-[280px] flex-shrink-0 flex flex-col items-center group"
            >
              <div className="w-full h-[220px] rounded-2xl overflow-hidden mb-4 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-[#334155] font-semibold text-lg text-wrap text-center leading-tight">
                {service.title}
              </h4>
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for smooth fading edges */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bg-[#1e60b1] hover:bg-[#154b8e] text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
      >
        View All Services
      </motion.button>
    </section>
  );
}

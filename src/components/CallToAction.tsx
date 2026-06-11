'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <section className="py-12 md:py-16 bg-[#f8fafd]">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 50, damping: 15 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg")' }}
          ></div>
          
          {/* Dark Overlay to make text readable */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/50 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>

          {/* Content */}
          <div className="relative z-10 py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 flex flex-col items-center text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 md:mb-6 tracking-tight"
            >
              Ready To Get Started?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/90 text-sm sm:text-base font-medium max-w-2xl mb-8 md:mb-10 leading-relaxed"
            >
              Have 10 minutes? Check out our case studies. We've been in the industry for more than a decade. So there's lots of exciting stuff in here.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1e293b] font-bold px-8 sm:px-10 py-3 sm:py-3.5 text-sm sm:text-base rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              Sign Up Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

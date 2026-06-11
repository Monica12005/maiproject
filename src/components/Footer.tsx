'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <footer 
      className="relative bg-[#020b14] text-white overflow-hidden border-t border-gray-800/50"
      onMouseMove={handleMouseMove}
      style={{ '--mouse-x': `${mousePos.x}px`, '--mouse-y': `${mousePos.y}px` } as React.CSSProperties}
    >
      {/* Base subtle grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      ></div>

      {/* Interactive glowing grid mask on hover */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #0ea5e9 1px, transparent 1px), linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          opacity: 0.8,
          maskImage: 'radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), black 10%, transparent 80%)',
        }}
      ></div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          <div className="max-w-2xl">
            <p className="text-[#0ea5e9] font-bold tracking-[0.15em] text-xs mb-4 uppercase flex items-center gap-4">
              START TODAY <span className="w-8 h-[1px] bg-[#0ea5e9]"></span> IT'S FREE
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Let's <span className="text-[#0ea5e9]">Build</span><br />
              Our Nation Great.
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
              Connect with verified UK tradespeople or find your next project. MAI brings the right people together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1e60a3] hover:bg-[#164e87] text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Post a Project
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-gray-600 hover:border-white text-white px-8 py-3.5 rounded-full font-semibold transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-16 border-gray-800/80" />

        {/* Bottom Section / Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8">
          
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-4">
            <div className="mb-6">
              <h3 className="text-4xl font-black tracking-tighter">MAI<span className="text-[#0ea5e9] text-lg align-top ml-1">®</span></h3>
              <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mt-1">We Build Homes</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              A premier platform connecting homeowners with certified, skilled Traders across the UK.
            </p>
            <div className="flex gap-3">
              {[
                {
                  name: 'Facebook',
                  bg: 'bg-[#1877F2]',
                  icon: <svg viewBox="0 0 320 512" fill="currentColor" className="w-5 h-5"><path d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"/></svg>
                },
                {
                  name: 'X',
                  bg: 'bg-black',
                  icon: <svg viewBox="0 0 512 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                },
                {
                  name: 'YouTube',
                  bg: 'bg-[#FF0000]',
                  icon: <svg viewBox="0 0 576 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                },
                {
                  name: 'Instagram',
                  bg: 'bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#405DE6]',
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                },
                {
                  name: 'LinkedIn',
                  bg: 'bg-[#0A66C2]',
                  icon: <svg viewBox="0 0 448 512" fill="currentColor" className="w-[18px] h-[18px]"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                },
                {
                  name: 'WhatsApp',
                  bg: 'bg-[#25D366]',
                  icon: <svg viewBox="0 0 448 512" fill="currentColor" className="w-5 h-5"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                }
              ].map((social, i) => (
                <div key={i} title={social.name} className={`w-10 h-10 rounded-full ${social.bg} flex items-center justify-center cursor-pointer hover:scale-110 transition-transform opacity-90 hover:opacity-100 text-white`}>
                  {social.icon}
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-gray-500 font-bold tracking-widest text-xs mb-6 uppercase">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'CSR', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Links */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-500 font-bold tracking-widest text-xs mb-6 uppercase">Platform</h4>
            <ul className="space-y-4">
              {['Contact Us', 'Terms & Conditions', 'Privacy Policy', 'NDA'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-gray-500 font-bold tracking-widest text-xs mb-6 uppercase">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#0ea5e9]/20 flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">1 De La Warr Way, Cambourne,<br/>Cambridge CB23 6DX</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#0ea5e9]/20 flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">+44 208 004 3345</span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#0ea5e9]/20 flex items-center justify-center shrink-0 transition-colors">
                  <svg className="w-4 h-4 text-[#0ea5e9]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">info@myproject.ai</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

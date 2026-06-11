'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PowerfulTools() {
  const [isMapHovered, setIsMapHovered] = useState(false);
  const [isAiHovered, setIsAiHovered] = useState(false);
  const [aiText, setAiText] = useState('');
  
  const fullAiText = "This project involves renovating an existing kitchen to enhance functionality, layout efficiency, and overall aesthetics. The space measures roughly 12x15 feet...";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    
    if (isAiHovered) {
      // Start typewriter after cursor reaches button (approx 800ms)
      timeout = setTimeout(() => {
        let i = 0;
        interval = setInterval(() => {
          if (i <= fullAiText.length) {
            setAiText(fullAiText.slice(0, i));
            i++;
          } else {
            clearInterval(interval);
          }
        }, 15); // typing speed
      }, 800);
    } else {
      setAiText(''); // reset when not hovered
    }
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [isAiHovered]);
  const [chartHeights, setChartHeights] = useState([
    [60, 30, 20],
    [40, 50, 20],
    [80, 40, 35],
    [70, 55, 30],
  ]);

  const randomizeChart = () => {
    setChartHeights(chartHeights.map(month => month.map(() => Math.floor(Math.random() * 80) + 10)));
  };

  return (
    <section className="py-24 bg-[#fafcff] text-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.h3
            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-[#0f4a8a] font-bold tracking-[0.2em] text-xs mb-4 uppercase"
          >
            YOUR MAI TOOLKIT
          </motion.h3>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-4xl md:text-[2.75rem] font-extrabold text-[#1e293b] mb-4 tracking-tight"
          >
            Unlock Powerful Tools After Sign Up
          </motion.h2>
          <motion.p
            variants={{ hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            className="text-gray-500 text-lg mb-16"
          >
            Everything You Need to <span className="text-[#4182c3]">Hire the Right Tradesperson</span>
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {/* Card 1: Dashboard */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -60, scale: 0.92 }, visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 18 } } }}
            onMouseEnter={randomizeChart}
            className="bg-white rounded-[2.5rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex flex-col items-center border border-gray-100 cursor-pointer select-none group"
          >
            <h3 className="text-2xl font-bold text-[#0f4a8a] mb-4 group-hover:scale-105 transition-transform">Dashboard</h3>
            <p className="text-gray-500 text-sm mb-10 px-2 leading-relaxed">
              Keep track of every job in one clean dashboard, from your first quote request to the final sign-off.
            </p>
            
            {/* Dashboard UI Mockup */}
            <div className="w-full bg-white rounded-2xl shadow-[0_0px_15px_rgb(0,0,0,0.05)] border border-gray-100 p-5 mt-auto flex flex-col group-hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-xs text-gray-800">Project Overview</span>
                <span className="text-[10px] text-gray-400 font-medium">This Year - 2026 ▼</span>
              </div>
              
              {/* Legend */}
              <div className="flex justify-center gap-3 mb-6">
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#0f4a8a]"></div><span className="text-[8px] text-gray-500">Posted Project</span></div>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-[#4182c3]"></div><span className="text-[8px] text-gray-500">Active Project</span></div>
                <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div><span className="text-[8px] text-gray-500">Completed Project</span></div>
              </div>

              {/* Chart */}
              <div className="flex items-end justify-between h-28 gap-2 mb-2 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] text-gray-400">
                  <span>50</span><span>40</span><span>30</span><span>20</span><span>10</span><span>0</span>
                </div>
                <div className="w-full h-full flex items-end justify-around pl-6">
                  {/* Jan */}
                  <div className="flex items-end gap-1 h-full">
                    <div className="w-2.5 bg-[#0f4a8a] rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[0][0]}%` }}></div>
                    <div className="w-2.5 bg-[#4182c3] rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[0][1]}%` }}></div>
                    <div className="w-2.5 bg-green-500 rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[0][2]}%` }}></div>
                  </div>
                  {/* Feb */}
                  <div className="flex items-end gap-1 h-full">
                    <div className="w-2.5 bg-[#0f4a8a] rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[1][0]}%` }}></div>
                    <div className="w-2.5 bg-[#4182c3] rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[1][1]}%` }}></div>
                    <div className="w-2.5 bg-green-500 rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[1][2]}%` }}></div>
                  </div>
                  {/* Mar */}
                  <div className="flex items-end gap-1 h-full">
                    <div className="w-2.5 bg-[#0f4a8a] rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[2][0]}%` }}></div>
                    <div className="w-2.5 bg-[#4182c3] rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[2][1]}%` }}></div>
                    <div className="w-2.5 bg-green-500 rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[2][2]}%` }}></div>
                  </div>
                  {/* Apr */}
                  <div className="flex items-end gap-1 h-full">
                    <div className="w-2.5 bg-[#0f4a8a] rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[3][0]}%` }}></div>
                    <div className="w-2.5 bg-[#4182c3] rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[3][1]}%` }}></div>
                    <div className="w-2.5 bg-green-500 rounded-t-sm transition-all duration-500 ease-out" style={{ height: `${chartHeights[3][2]}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-around pl-6 text-[9px] text-gray-400 font-medium pb-2 border-b border-gray-100">
                <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
              </div>
              
              {/* Ratings Box */}
              <div className="mt-4 bg-[#fafcff] rounded-xl p-3 flex justify-between items-center border border-gray-100/60 shadow-sm">
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-800">Ratings</p>
                  <p className="text-sm font-bold mt-1 text-gray-900 flex items-center">
                    <span className="text-yellow-500 mr-1.5 text-base leading-none">★</span> 4.1
                  </p>
                </div>
                <div className="bg-gray-100/80 px-2 py-1 rounded text-[9px] text-gray-400 font-medium">
                  All Time
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Search With Postcode */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -60, scale: 0.92 }, visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 18 } } }}
            onMouseEnter={() => setIsMapHovered(true)}
            onMouseLeave={() => setIsMapHovered(false)}
            className="bg-white rounded-[2.5rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex flex-col items-center border border-gray-100 relative overflow-hidden group"
          >
            <h3 className="text-2xl font-bold text-[#0f4a8a] mb-4 relative z-10">Search With Postcode</h3>
            <p className="text-gray-500 text-sm mb-8 px-2 leading-relaxed relative z-10">
              Find tradespeople near you, just enter your county and browse verified, rated tradespeople in your area.
            </p>
            
            {/* Map UI Mockup */}
            <div className="w-full h-56 flex gap-4 mt-auto">
              {/* Left Side: Profiles */}
              <div className={`w-[45%] flex flex-col justify-center transition-all duration-500 ease-in-out ${isMapHovered ? '-space-y-2 scale-95 opacity-80' : 'space-y-3 scale-100 opacity-100'}`}>
                 {/* Profile 1 */}
                 <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 z-30">
                   <img src="https://i.pravatar.cc/100?img=5" alt="Avatar" className="w-8 h-8 rounded-lg object-cover" />
                   <div className="text-left flex-1">
                     <p className="text-[10px] font-bold text-gray-800 leading-tight">Eleanor Pena</p>
                     <p className="text-[8px] text-gray-500">AL5 2TR</p>
                   </div>
                   <div className="text-[9px] text-yellow-500 font-bold">★ 4.8</div>
                 </div>
                 {/* Profile 2 */}
                 <div className="bg-white p-2 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-2 z-20">
                   <img src="https://i.pravatar.cc/100?img=11" alt="Avatar" className="w-8 h-8 rounded-lg object-cover" />
                   <div className="text-left flex-1">
                     <p className="text-[10px] font-bold text-gray-800 leading-tight">Devon Lane</p>
                     <p className="text-[8px] text-gray-500">ME1 1YJ</p>
                   </div>
                   <div className="text-[9px] text-yellow-500 font-bold">★ 4.2</div>
                 </div>
                 {/* Profile 3 */}
                 <div className="bg-white p-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 z-10">
                   <img src="https://i.pravatar.cc/100?img=12" alt="Avatar" className="w-8 h-8 rounded-lg object-cover" />
                   <div className="text-left flex-1">
                     <p className="text-[10px] font-bold text-gray-800 leading-tight">Wade Warren</p>
                     <p className="text-[8px] text-gray-500">England</p>
                   </div>
                   <div className="text-[9px] text-yellow-500 font-bold">★ 4.0</div>
                 </div>
              </div>

              {/* Right Side: Map */}
              <div className="w-[55%] h-full rounded-2xl relative overflow-hidden shadow-inner border border-gray-100 bg-[#e5e3df]">
                 <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover opacity-60" />
                 
                 {/* Map Pins (Static Blue) */}
                 <div className="absolute top-[30%] left-[30%] z-10">
                   <svg className="w-6 h-6 text-[#0f4a8a] drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                 </div>
                 <div className="absolute top-[60%] left-[70%] z-10">
                   <svg className="w-6 h-6 text-[#0f4a8a] drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                 </div>
                 <div className="absolute top-[20%] left-[65%] z-10">
                   <svg className="w-6 h-6 text-[#0f4a8a] drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                 </div>
                 <div className="absolute top-[70%] left-[40%] z-10">
                   <svg className="w-6 h-6 text-[#0f4a8a] drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                 </div>

                 {/* Moving Red Pin */}
                 <div 
                   className={`absolute z-20 transition-all duration-700 ease-in-out ${isMapHovered ? 'top-[60%] left-[70%]' : 'top-[30%] left-[30%]'}`}
                   style={{ transform: 'translate(-50%, -85%)' }}
                 >
                   <div className="relative">
                     <svg className="w-8 h-8 text-red-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                     <div className="absolute top-[6px] left-[10px] w-3 h-3 bg-white rounded-full"></div>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Write With AI */}
          <motion.div 
            variants={{ hidden: { opacity: 0, x: -60, scale: 0.92 }, visible: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring', stiffness: 80, damping: 18 } } }}
            onMouseEnter={() => setIsAiHovered(true)}
            onMouseLeave={() => setIsAiHovered(false)}
            className="bg-white rounded-[2.5rem] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all flex flex-col items-center border border-gray-100 relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-[#0f4a8a] mb-4">Write With AI</h3>
            <p className="text-gray-500 text-sm mb-10 px-2 leading-relaxed">
              Not sure how to describe your project? Our AI helps you write a clear, detailed brief in seconds. Just answer a few questions, we do the rest.
            </p>
            
            {/* Chat UI Mockup */}
            <div className="w-full flex flex-col gap-3 mt-auto relative bg-white pb-6">
              <div className="bg-white border border-gray-200 rounded-xl rounded-tl-sm p-4 text-left shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                <p className="text-[13px] text-gray-700 font-semibold">Modern Kitchen Renovation</p>
              </div>
              <div className="bg-[#f0f7ff] border border-blue-100 rounded-xl rounded-bl-sm p-4 text-left shadow-[0_2px_10px_rgb(0,0,0,0.02)] min-h-[90px]">
                <p className="text-xs text-gray-600 leading-relaxed">
                  {aiText}
                  {isAiHovered && aiText.length < fullAiText.length && <span className="animate-pulse text-blue-500">|</span>}
                  {!isAiHovered && <span className="text-gray-400 opacity-50">Hover to generate description...</span>}
                </p>
              </div>
              
              <div className="flex justify-end mt-2 absolute bottom-[-10px] right-0 z-10">
                <button className={`bg-[#f8fbff] border border-blue-200 text-[#4182c3] text-xs px-4 py-2 rounded-full font-bold flex items-center shadow-sm transition-transform duration-200 ${isAiHovered ? 'delay-700 scale-95 bg-blue-50' : 'scale-100'}`}>
                  <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  Write with MAI AI
                </button>
              </div>

              {/* Animated Cursor */}
              <div 
                className={`absolute z-50 pointer-events-none transition-all duration-700 ease-in-out ${isAiHovered ? 'bottom-[5px] right-[25px]' : 'bottom-[20px] left-[10px]'}`}
              >
                <svg viewBox="0 0 24 24" fill="#3b82f6" className="w-8 h-8 drop-shadow-md stroke-white stroke-2" style={{ transform: 'rotate(-20deg)' }}>
                  <path d="M7 2l12 11.2h-5.8l3.3 7.3-2.2.9-3.2-7.4-4.4 4.7z"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

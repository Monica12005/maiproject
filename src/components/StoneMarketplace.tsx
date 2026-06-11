'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function StoneMarketplace() {
  const [budget, setBudget] = useState(300);

  // Animation variants
  const slideFromLeftVariant: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const slideFromRightVariant: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side Content */}
          <motion.div
            className="w-full lg:w-1/2 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideFromLeftVariant}
          >
            <p className="text-[#0f4a8a] font-bold tracking-[0.15em] text-xs mb-4 uppercase">
              STONE OFFCUTS MARKETPLACE
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e293b] mb-6 leading-tight">
              Submit Your Project. Let MAI Find Your Perfect Stone.
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-lg">
              Discover discounted stone offcuts on MAI, connecting you with verified UK sellers for secure, budget-friendly options.
            </p>

            {/* Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-lg">1</span>
                </div>
                <div>
                  <h4 className="text-[#1e293b] font-bold text-lg mb-1">Post Your Project</h4>
                  <p className="text-gray-500 text-sm">Describe what you need, add dimensions, set your budget.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                  <span className="text-pink-800 font-bold text-lg">2</span>
                </div>
                <div>
                  <h4 className="text-[#1e293b] font-bold text-lg mb-1">Get Matched Instantly</h4>
                  <p className="text-gray-500 text-sm">MAI finds sellers with matching offcuts in the UK.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-800 font-bold text-lg">3</span>
                </div>
                <div>
                  <h4 className="text-[#1e293b] font-bold text-lg mb-1">Buy Safely & Save</h4>
                  <p className="text-gray-500 text-sm">Secure payment, verified sellers, up to 70% cheaper.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side Content (Form) */}
          <motion.div
            className="w-full lg:w-1/2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideFromRightVariant}
          >
            <div className="bg-[#f8fafd] rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-extrabold text-[#1e293b] mb-2">
                Find Your Perfect Stone Offcut
              </h3>
              <p className="text-gray-500 text-sm mb-8">
                Set your offcut budget and MAI does the rest
              </p>

              <form className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.1em] text-[#0f4a8a] uppercase mb-2">
                      Project Title
                    </label>
                    <input
                      type="text"
                      placeholder="Enter project name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold tracking-[0.1em] text-[#0f4a8a] uppercase mb-2">
                      Stone Type
                    </label>
                    <select defaultValue="" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-400 appearance-none">
                      <option value="" disabled>Select stone type</option>
                      <option value="marble">Marble</option>
                      <option value="granite">Granite</option>
                      <option value="quartz">Quartz</option>
                    </select>
                  </div>
                </div>

                {/* Row 2 */}
                <div>
                  <label className="block text-[10px] font-bold tracking-[0.1em] text-[#0f4a8a] uppercase mb-2">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter description"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-300 resize-none"
                  ></textarea>
                </div>

                {/* Budget Slider */}
                <div className="pt-4">
                  <label className="block font-bold text-[#1e293b] text-base mb-6">
                    Budget Range
                  </label>
                  
                  <div className="relative">
                    {/* Range limits */}
                    <div className="flex justify-between text-[11px] text-gray-400 font-medium mb-3">
                      <span>£300 (minimum)</span>
                      <span>£25,000 (maximum)</span>
                    </div>
                    
                    {/* Native Range Slider */}
                    <input
                      type="range"
                      min="300"
                      max="25000"
                      step="100"
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0f4a8a]"
                      style={{
                        background: `linear-gradient(to right, #0f4a8a 0%, #0f4a8a ${(budget - 300) / (25000 - 300) * 100}%, #e5e7eb ${(budget - 300) / (25000 - 300) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>

                  {/* Big Price Display */}
                  <div className="mt-8 flex justify-center items-end text-[#0f4a8a] font-extrabold gap-2">
                    <span className="text-2xl mb-1">£</span>
                    <div className="border-b-2 border-[#0f4a8a] px-4 min-w-[120px] text-center">
                      <span className="text-4xl">{budget.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="button"
                    className="w-full py-4 rounded-full bg-[#e2e8f0] text-gray-500 font-bold text-sm transition-colors hover:bg-gray-300"
                  >
                    Post Your Stones Project Now
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

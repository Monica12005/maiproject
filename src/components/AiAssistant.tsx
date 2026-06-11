'use client';

import React, { useState } from 'react';

export default function AiAssistant() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({ code: 'GB', dial: '+44', name: 'United Kingdom' });

  const countries = [
    { code: 'GB', dial: '+44', name: 'United Kingdom' },
    { code: 'US', dial: '+1', name: 'United States' },
    { code: 'IN', dial: '+91', name: 'India' },
    { code: 'CA', dial: '+1', name: 'Canada' },
    { code: 'AU', dial: '+61', name: 'Australia' },
    { code: 'DE', dial: '+49', name: 'Germany' },
    { code: 'FR', dial: '+33', name: 'France' },
    { code: 'AE', dial: '+971', name: 'UAE' },
    { code: 'SG', dial: '+65', name: 'Singapore' },
    { code: 'JP', dial: '+81', name: 'Japan' },
    { code: 'CN', dial: '+86', name: 'China' },
    { code: 'BR', dial: '+55', name: 'Brazil' },
    { code: 'ZA', dial: '+27', name: 'South Africa' },
    { code: 'SA', dial: '+966', name: 'Saudi Arabia' },
    { code: 'NZ', dial: '+64', name: 'New Zealand' },
  ];

  const handleClick = () => {
    setIsOpen(true);
    setIsHovered(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">

      {/* ========== FULL CHAT WINDOW (Opens on Click) ========== */}
      {isOpen && (
        <div
          className="absolute bottom-0 right-0 w-[400px] rounded-2xl overflow-hidden flex flex-col"
          style={{
            height: '85vh',
            maxHeight: '780px',
            boxShadow: '0 12px 48px rgba(0,0,0,0.25)',
            animation: 'slideUp 0.3s ease-out',
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center justify-between flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #1a6b8a 0%, #2a8fa8 50%, #3aafb8 100%)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-lg">
                  M
                </div>
                <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 rounded-full bg-[#10b981] border-2 border-[#1a6b8a]"></div>
              </div>
              <div>
                <h3 className="text-white font-bold text-[15px]">MAI Assistant</h3>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
                  <span className="text-white/80 text-xs font-medium">Speaking</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-white/80 hover:text-white transition-colors p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <button className="text-white/80 hover:text-white transition-colors p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div className="flex-1 bg-[#f5f7fa] overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
            {/* Chat Bubble */}
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                M
              </div>
              <div>
                <div
                  className="rounded-2xl rounded-tl-md px-4 py-3 max-w-[280px] text-[13.5px] leading-relaxed text-white font-medium"
                  style={{
                    background: 'linear-gradient(135deg, #4a9bb5 0%, #5ab5c5 100%)',
                  }}
                >
                  Hi there! I&apos;m MAI 😊 I can help you register or log in, post a project, send a proposal, or apply for an internship and I can even do most of it for you. Before we get started, Please fill in your details below. 👇
                </div>
                <span className="text-gray-400 text-[11px] mt-1.5 block ml-1">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>

            {/* Connect with Human Support Card */}
            <div className="bg-white rounded-2xl overflow-visible shadow-sm border border-gray-100 mt-2">
              {/* Card Header */}
              <div
                className="px-5 py-4"
                style={{
                  background: 'linear-gradient(135deg, #3a8fa0 0%, #4aafb8 100%)',
                }}
              >
                <h4 className="text-white font-bold text-[15px]">Connect with Human Support</h4>
                <p className="text-white/85 text-[12.5px] mt-1 font-medium">
                  Share your details to connect with our support team quickly
                </p>
              </div>

              {/* Form */}
              <div className="p-5 flex flex-col gap-4">
                {/* I am a */}
                <div>
                  <label className="text-gray-700 text-sm font-semibold mb-2.5 block">
                    I am a <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    {['Trader', 'Intern', 'Project Owner'].map((role) => (
                      <button
                        key={role}
                        onClick={() => setSelectedRole(role)}
                        className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200"
                        style={{
                          background: selectedRole === role ? '#3a8fa0' : 'white',
                          color: selectedRole === role ? 'white' : '#4b5563',
                          borderColor: selectedRole === role ? '#3a8fa0' : '#e5e7eb',
                        }}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="text-gray-700 text-sm font-semibold mb-2 block">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-full px-4 py-2.5 gap-3 focus-within:border-[#3a8fa0] transition-colors">
                    <svg className="w-5 h-5 text-[#3a8fa0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Enter your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-gray-700 text-sm font-semibold mb-2 block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-full px-4 py-2.5 gap-3 focus-within:border-[#3a8fa0] transition-colors">
                    <svg className="w-5 h-5 text-[#3a8fa0] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="relative">
                  <label className="text-gray-700 text-sm font-semibold mb-2 block">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border border-gray-200 rounded-full px-3 py-2.5 gap-2 focus-within:border-[#3a8fa0] transition-colors">
                    {/* Country Selector Button */}
                    <button
                      type="button"
                      onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                      className="flex items-center gap-1.5 pr-2 border-r border-gray-200 flex-shrink-0 hover:bg-gray-50 rounded-l-full py-0.5 px-1 transition-colors"
                    >
                      <img
                        src={`https://flagcdn.com/24x18/${selectedCountry.code.toLowerCase()}.png`}
                        alt={selectedCountry.name}
                        className="w-6 h-[18px] rounded-sm object-cover"
                      />
                      <span className="text-sm text-gray-700 font-semibold">{selectedCountry.dial}</span>
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <input
                      type="tel"
                      placeholder="Enter Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
                    />
                  </div>

                  {/* Country Dropdown */}
                  {showCountryDropdown && (
                    <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-[180px] overflow-y-auto">
                      {countries.map((country) => (
                        <button
                          key={country.code + country.dial}
                          type="button"
                          onClick={() => {
                            setSelectedCountry(country);
                            setShowCountryDropdown(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#f0fafb] transition-colors text-left"
                          style={{
                            background: selectedCountry.code === country.code ? '#f0fafb' : 'white',
                          }}
                        >
                          <img
                            src={`https://flagcdn.com/24x18/${country.code.toLowerCase()}.png`}
                            alt={country.name}
                            className="w-6 h-[18px] rounded-sm object-cover flex-shrink-0"
                          />
                          <span className="text-sm text-gray-700 font-medium flex-1">{country.name}</span>
                          <span className="text-sm text-gray-500 font-semibold">{country.dial}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  className="w-full py-3 rounded-full text-white font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                  style={{
                    background: 'linear-gradient(135deg, #6b7fa8 0%, #8b9fc8 100%)',
                  }}
                >
                  Connect Me to Support
                </button>
              </div>
            </div>
          </div>

          {/* Message Input Bar */}
          <div className="bg-white border-t border-gray-100 px-4 py-3">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 py-2"
              />
              <button
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #3a8fa0 0%, #4aafb8 100%)' }}
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Icons Bar */}
          <div className="bg-white border-t border-gray-100 px-6 py-2.5 flex items-center justify-between">
            {[
              { icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', color: '#f59e0b' },
              { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: '#3b82f6' },
              { icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z', color: '#8b5cf6' },
              { icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', color: '#ef4444' },
              { icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z', color: '#10b981' },
            ].map((item, i) => (
              <button
                key={i}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ background: `${item.color}15`, border: `1.5px solid ${item.color}30` }}
              >
                <svg className="w-5 h-5" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={item.icon}></path>
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ========== HOVER MESSAGE POPUP (Shows on Hover) ========== */}
      {!isOpen && (
        <div 
          className={`absolute bottom-[85px] right-2 w-[290px] bg-[#222831] rounded-[1.25rem] shadow-2xl transition-all duration-300 origin-bottom-right flex flex-col ${isHovered ? 'scale-100 opacity-100 pointer-events-auto translate-y-0' : 'scale-95 opacity-0 pointer-events-none translate-y-4'}`}
        >
          <div className="p-5 pb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#f59e0b] flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h4 className="text-white font-bold text-[1.1rem] tracking-wide">Hi! I&apos;m MAI</h4>
            </div>
            <p className="text-gray-300 text-[13px] leading-relaxed font-medium">
              Hi there! I&apos;m MAI 😊 I can help you register or log in, post a project, send a proposal, or apply for an internship and I can even do most of it for you. What would you like to do?
            </p>
          </div>
          
          <div className="bg-[#181d24] p-3 rounded-b-[1.25rem] flex justify-between items-center text-xs text-gray-400 font-medium">
            <div className="flex items-center gap-1.5 cursor-grab hover:text-gray-300 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4m4-10v14"></path>
              </svg>
              Drag to move
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
              Online 24/7
            </div>
          </div>
          
          <div className="absolute -bottom-2 right-6 w-5 h-5 bg-[#181d24] transform rotate-45 border-r border-b border-transparent"></div>
        </div>
      )}

      {/* ========== FLOATING BUTTON (Always visible when chat is closed) ========== */}
      {!isOpen && (
        <div 
          className="flex items-center gap-3 cursor-pointer group relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
        >
          <div className="bg-[#00a67e] text-white px-4 py-2.5 rounded-full font-bold text-sm shadow-md flex items-center gap-2 group-hover:bg-[#008f6c] transition-colors relative z-10">
            Talk to MAI <div className="w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
            <div className="absolute -right-1.5 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#00a67e] rotate-45 group-hover:bg-[#008f6c] transition-colors -z-10 rounded-sm"></div>
          </div>

          <div className="w-16 h-16 bg-[#00a67e] rounded-full flex flex-col items-center justify-center shadow-[0_8px_30px_rgba(0,166,126,0.3)] relative group-hover:bg-[#008f6c] group-hover:scale-105 transition-all duration-300 z-20">
            <svg className="w-4 h-4 text-white absolute top-2 right-2 opacity-80" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg className="w-7 h-7 text-white mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
            </svg>
            <div className="flex gap-[3px] items-end h-2 mt-0.5">
              <div className="w-[3px] h-1.5 bg-white rounded-full"></div>
              <div className="w-[3px] h-1 bg-white rounded-full"></div>
              <div className="w-[3px] h-2 bg-white rounded-full"></div>
              <div className="w-[3px] h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      {/* Slide-up animation */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

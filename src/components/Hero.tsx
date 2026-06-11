'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Interior Decorators', 'Plumbers', 'Electricians', 'Architects', 'Builders'];
  
  // Typewriter effect
  useEffect(() => {
    const currentWord = words[currentTextIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentWord) {
        // Pause at the end of the word before deleting
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        // Move to next word when deleted
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % words.length);
      } else {
        // Type or delete characters
        const nextText = isDeleting 
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTextIndex]);

  // Search Placeholder Typewriter effect
  const [searchPlaceholder, setSearchPlaceholder] = useState('');
  const [searchIndex, setSearchIndex] = useState(0);
  const [isSearchDeleting, setIsSearchDeleting] = useState(false);
  const searchWords = ['Tradesperson...', 'Plumber...', 'Electrician...', 'Architect...', 'Builder...'];

  useEffect(() => {
    const currentWord = searchWords[searchIndex];
    const typeSpeed = isSearchDeleting ? 40 : 80;
    
    const timeout = setTimeout(() => {
      if (!isSearchDeleting && searchPlaceholder === currentWord) {
        setTimeout(() => setIsSearchDeleting(true), 2000);
      } else if (isSearchDeleting && searchPlaceholder === '') {
        setIsSearchDeleting(false);
        setSearchIndex((prev) => (prev + 1) % searchWords.length);
      } else {
        const nextText = isSearchDeleting 
          ? currentWord.substring(0, searchPlaceholder.length - 1)
          : currentWord.substring(0, searchPlaceholder.length + 1);
        setSearchPlaceholder(nextText);
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [searchPlaceholder, isSearchDeleting, searchIndex]);

  return (
    <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div> {/* Overlay */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          src="https://d2iyhd3v3rvz2k.cloudfront.net/commonFiles/1766055134591-MAI_Landing_Page_Video_(Hero_Section).mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
          We Find You The <span className="text-[#ffb703] min-w-[160px] md:min-w-[200px] inline-block text-left">{displayText}<span className="animate-pulse border-r-4 border-[#ffb703] ml-1 h-10 inline-block align-middle"></span></span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-light drop-shadow-md">
          Find Local Trusted Tradespeople in Minutes
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto relative mb-12 shadow-2xl">
          <input 
            type="text" 
            placeholder={`I Want ${searchPlaceholder}`} 
            className="w-full pl-6 pr-16 py-4 rounded-full text-gray-900 placeholder:text-[#8ba3b8] placeholder:font-medium text-lg focus:outline-none focus:ring-2 focus:ring-[#0f4a8a] bg-white shadow-lg"
          />
          <button className="absolute right-2.5 top-1/2 transform -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full border border-gray-200 text-[#0f4a8a] hover:bg-gray-50 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-sm md:text-base text-gray-200 font-medium">
          <div className="flex items-center drop-shadow-md">
            <svg className="w-5 h-5 mr-2 text-white bg-green-500 rounded-full p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            200K+ Trusted Traders
          </div>
          <div className="flex items-center drop-shadow-md">
            <svg className="w-5 h-5 mr-2 text-white bg-green-500 rounded-full p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            Transparent Bidding System
          </div>
          <div className="flex items-center drop-shadow-md">
            <svg className="w-5 h-5 mr-2 text-white bg-green-500 rounded-full p-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            11K Monthly Active Users
          </div>
        </div>
      </div>
    </div>
  );
}

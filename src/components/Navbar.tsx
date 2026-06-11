'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (scrolled) setMenuOpen(false);
  }, [scrolled]);

  return (
    <>
      <nav
        className={`fixed w-full z-50 text-white transition-all duration-300 ${
          scrolled
            ? 'bg-[#0f172a] shadow-lg shadow-black/50 border-b border-gray-700'
            : 'bg-[#0f172a]/95 backdrop-blur-sm border-b border-gray-800'
        }`}
      >
        {/* ── Top Header Row ── */}
        <div className="border-b border-gray-700">
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link href="/" className="flex flex-col justify-center shrink-0 mr-4">
                <div className="font-extrabold text-3xl tracking-tighter">
                  MAI<span className="text-base font-normal align-top leading-none">&reg;</span>
                </div>
                <span className="text-[9px] uppercase font-light tracking-[0.18em] mt-[-2px] text-gray-300 whitespace-nowrap">
                  We Build Homes
                </span>
              </Link>

              {/* Search Bar — hidden on mobile, visible md+ */}
              <div className="hidden md:flex flex-1 max-w-xs lg:max-w-sm xl:max-w-md mx-4 lg:mx-6">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search Here"
                    className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right: Sign In + Hamburger */}
              <div className="flex items-center gap-2 shrink-0">
                <button className="bg-[#1e293b] hover:bg-[#334155] border border-gray-600 rounded-full px-3 py-1.5 flex items-center text-xs transition-colors shadow-sm whitespace-nowrap">
                  <div className="bg-cyan-500 rounded-full w-4 h-4 flex items-center justify-center mr-1.5 text-[9px]">👤</div>
                  Sign In <span className="ml-1 text-xs opacity-60">⌄</span>
                </button>

                {/* Hamburger — mobile only */}
                <button
                  className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors gap-1.5"
                  onClick={() => setMenuOpen((v) => !v)}
                  aria-label="Toggle menu"
                >
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Mobile Search (below header row) ── */}
        <div className="md:hidden border-b border-gray-700 px-4 py-2 bg-[#0f172a]">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full bg-white text-gray-800 placeholder-gray-400 rounded-full px-5 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-cyan-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 105 11a6 6 0 0012 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Bottom Nav Row — desktop/laptop ── */}
        <div className="hidden md:block w-full bg-[#6b7280]">
          <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
            <div className="flex items-center justify-between h-11">

              {/* Left nav links */}
              <div className="flex items-center gap-3 lg:gap-5 xl:gap-6 font-medium text-white text-xs lg:text-sm">
                <Link href="/" className="hover:text-gray-200 transition-colors whitespace-nowrap">Home</Link>
                <Link href="/how-it-works" className="hover:text-gray-200 transition-colors whitespace-nowrap">How It Works ⌄</Link>
                <Link href="/projects" className="hover:text-gray-200 transition-colors whitespace-nowrap">Projects</Link>
                <Link href="/blogs" className="hover:text-gray-200 transition-colors whitespace-nowrap">Blogs</Link>
                <Link href="/awards" className="hover:text-gray-200 transition-colors whitespace-nowrap">Mai Awards ⌄</Link>
              </div>

              {/* Right action links — only show on lg+ */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-6 font-semibold text-[10px] xl:text-xs tracking-wider text-white">
                <Link href="/post" className="flex items-center hover:text-gray-200 transition-colors whitespace-nowrap">
                  <span className="bg-white/30 text-white rounded-full w-4 h-4 flex items-center justify-center mr-1.5 text-[10px] shrink-0">+</span>
                  POST A PROJECT
                </Link>
                <div className="w-px h-4 bg-white/40 shrink-0"></div>
                <Link href="/send" className="flex items-center hover:text-gray-200 transition-colors whitespace-nowrap">
                  <span className="mr-1.5 text-white/80 shrink-0">➤</span> SEND PROPOSALS
                </Link>
                <div className="w-px h-4 bg-white/40 shrink-0"></div>
                <Link href="/internship" className="flex items-center hover:text-gray-200 transition-colors whitespace-nowrap">
                  <span className="mr-1.5 text-white/80 shrink-0">💼</span> APPLY INTERNSHIP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-[#0f172a] text-white transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-screen pt-[140px] pb-6' : 'max-h-0'
        }`}
      >
        <div className="px-6 flex flex-col gap-1">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2 mt-2">Navigation</p>
          {[
            { href: '/', label: 'Home' },
            { href: '/how-it-works', label: 'How It Works' },
            { href: '/projects', label: 'Projects' },
            { href: '/blogs', label: 'Blogs' },
            { href: '/awards', label: 'Mai Awards' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-gray-800 text-base font-medium hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-bold mb-2 mt-4">Actions</p>
          <Link href="/post" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-3 border-b border-gray-800 text-sm font-semibold hover:text-cyan-400 transition-colors">
            <span className="bg-gray-400/30 rounded-full w-5 h-5 flex items-center justify-center text-[10px]">+</span>
            Post a Project
          </Link>
          <Link href="/send" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-3 border-b border-gray-800 text-sm font-semibold hover:text-cyan-400 transition-colors">
            <span>➤</span> Send Proposals
          </Link>
          <Link href="/internship" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 py-3 text-sm font-semibold hover:text-cyan-400 transition-colors">
            <span>💼</span> Apply for Internship
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}

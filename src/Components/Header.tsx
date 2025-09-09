"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiArrowRight } from "react-icons/hi2";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg border-b border-light">
      <div className="max-w-7xl mx-auto px-1 lg:px-2">
        <nav className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <Image
              src="/logo.png"
              alt="Omnisolve AI Logo"
              width={80}
              height={80}
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-18 md:w-18 object-contain"
            />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
              <span className="text-primary">Omni</span>
              <span className="text-accent">solve</span>
              <span className="text-primary"> AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-8 text-lg font-medium">
              <li>
                <Link 
                  href="/" 
                  className={`transition-all duration-300 ${
                    isActive('/') 
                      ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                      : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/solutions" 
                  className={`transition-all duration-300 ${
                    isActive('/solutions') 
                      ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                      : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                  }`}
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className={`transition-all duration-300 ${
                    isActive('/services') 
                      ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                      : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`transition-all duration-300 ${
                    isActive('/about') 
                      ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                      : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`transition-all duration-300 ${
                    isActive('/contact') 
                      ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                      : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            {/* CTA Button */}
            <Link href="#consultation">
              <button className="flex items-center gap-1 px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-3 bg-accent text-white font-medium md:font-semibold text-xs md:text-sm lg:text-base rounded-md lg:rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-sm md:shadow-md hover:shadow-lg border border-accent">
                Book a Consultation
                <HiArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-text-primary hover:text-accent transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 h-full w-80 bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-light">
              <span className="text-xl font-bold">
                <span className="text-primary">Omni</span>
                <span className="text-accent">solve</span>
                <span className="text-primary"> AI</span>
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-text-primary hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6l12 12M6 18L18 6"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-6">
              <ul className="space-y-6 text-lg font-medium">
                <li>
                  <Link 
                    href="/" 
                    className={`block transition-all duration-300 ${
                      isActive('/') 
                        ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                        : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/solutions" 
                    className={`block transition-all duration-300 ${
                      isActive('/solutions') 
                        ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                        : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services" 
                    className={`block transition-all duration-300 ${
                      isActive('/services') 
                        ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                        : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className={`block transition-all duration-300 ${
                      isActive('/about') 
                        ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                        : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className={`block transition-all duration-300 ${
                      isActive('/contact') 
                        ? 'text-accent underline underline-offset-4 decoration-2 decoration-accent font-semibold' 
                        : 'text-text-primary hover:text-accent hover:underline underline-offset-4 decoration-2 decoration-accent'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              
              {/* Mobile CTA */}
              <div className="mt-8">
                <Link href="#consultation">
                  <button 
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-accent text-white font-medium text-sm rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-md border border-accent"
                    onClick={() => setMenuOpen(false)}
                  >
                    Book a Consultation
                    <HiArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

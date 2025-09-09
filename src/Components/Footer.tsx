"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Services" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    { 
      href: "https://www.linkedin.com/company/omnisolveai/", 
      icon: FaLinkedin, 
      label: "LinkedIn",
      hoverColor: "hover:text-[#0077B5]"
    },
    { 
      href: "https://x.com/omnisolveai", 
      icon: FaTwitter, 
      label: "Twitter/X",
      hoverColor: "hover:text-[#1DA1F2]"
    },
    { 
      href: "https://www.instagram.com/omnisolveai/", 
      icon: FaInstagram, 
      label: "Instagram",
      hoverColor: "hover:text-[#E4405F]"
    },
    { 
      href: "https://www.youtube.com/@OmniSolveAI", 
      icon: FaYoutube, 
      label: "YouTube",
      hoverColor: "hover:text-[#FF0000]"
    }
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Left Section - Logo & Tagline */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <Link href="/" className="inline-block mb-6">
                <div className="text-3xl font-bold">
                  <span className="text-white">Omnisolve</span>
                  <span className="text-accent ml-1">AI</span>
                </div>
              </Link>
              
              {/* Tagline */}
              <p className="text-gray-300 text-lg leading-relaxed max-w-xs">
                Revolutionizing Global Industries with AI Excellence.
              </p>
            </motion.div>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <nav className="space-y-4">
                {navigationLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link 
                      href={link.href}
                      className="block text-gray-300 hover:text-accent transition-colors duration-300 text-lg"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Right Section - Contact & Social */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
              
              {/* Contact Email */}
              <div className="mb-4">
                <a 
                  href="mailto:info@omnisolveai.digital"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors duration-300 group"
                >
                  <HiMail 
                    size={20} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-lg">info@omnisolveai.digital</span>
                </a>
              </div>

              {/* Support Email */}
              <div className="mb-4">
                <a 
                  href="mailto:support@omnisolveai.digital"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors duration-300 group"
                >
                  <HiMail 
                    size={20} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-lg">support@omnisolveai.digital</span>
                </a>
              </div>

              {/* Phone Number */}
              <div className="mb-8">
                <a 
                  href="tel:+525547000330"
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent transition-colors duration-300 group"
                >
                  <FaPhone 
                    size={18} 
                    className="group-hover:scale-110 transition-transform duration-300" 
                  />
                  <span className="text-lg">+52 554 700 0330</span>
                </a>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-white/10 rounded-full text-gray-300 transition-all duration-300 ${social.hoverColor} hover:bg-accent/20 hover:scale-110`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <IconComponent size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Address & Certifications Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-white">Our Location</h3>
              
              {/* Company Address */}
              <div className="mb-8">
                <div className="text-gray-300 space-y-1">
                  <p className="font-medium">OmniSolve AI LLC</p>
                  <p>Albuquerque, New Mexico, USA</p>
                  <p>Postal Code: 87102</p>
                  <p className="text-sm italic mt-2">(Remote-first company)</p>
                </div>
              </div>

              {/* Certifications & Awards */}
              <div>
                <h4 className="text-lg font-medium mb-4 text-white">Certifications & Awards</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>ISO 27001 – Coming Soon</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>HIPAA Alignment – Coming Soon</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Global AI Innovation Awards – 2025 Nominee</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Omnisolve AI. All rights reserved.
            </p>
            
            {/* Additional Links (Optional) */}
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

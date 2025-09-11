"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiSparkles, HiPlay } from "react-icons/hi2";
import { 
  FaRocket, 
  FaCogs, 
  FaChartLine, 
  FaCode, 
  FaMobile, 
  FaCloud,
  FaLightbulb,
  FaUsers,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";
import TestimonialSlider from "@/Components/TestimonialSlider";
import CallToAction from "@/Components/CallToAction";
import { detailedServicesData } from '@/assets/data';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Icon mapping
  const iconMapping = {
    FaRocket,
    FaCogs,
    FaChartLine,
    FaCode,
    FaMobile,
    FaCloud
  };
  
  // Add reactIcon property to services data
  const services = detailedServicesData.map(service => ({
    ...service,
    reactIcon: iconMapping[service.iconName as keyof typeof iconMapping]
  }));

  const whyChooseUs = [
    {
      icon: FaUsers,
      title: "Growing community",
      description: "Trusted by businesses of all sizes to deliver results",
      metric: "50+"
    },
    {
      icon: FaRocket,
      title: "Fast delivery",
      description: "Quick turnaround times without compromising quality",
      metric: "Fast"
    },
    {
      icon: FaShieldAlt,
      title: "Reliable results",
      description: "Consistent quality with satisfaction guarantee",
      metric: "100%"
    },
    {
      icon: FaLightbulb,
      title: "Fresh innovation",
      description: "Modern AI solutions that actually work for your business",
      metric: "New"
    }
  ];



  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden services-bg"
        style={{
          backgroundImage: "url('/services.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-lg rotate-45"
            animate={{ rotate: [45, 405, 45] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-32 left-1/4 w-16 h-16 bg-white/20 rounded-xl"
            animate={{ rotate: [12, -12, 12] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-white rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div 
          className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HiSparkles className="text-yellow-300 text-lg" />
            <span className="text-white font-medium">Trusted by growing businesses</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            AI Solutions That Work
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Smart AI solutions to grow your business faster and more efficiently
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link href="/contact#consultation-form">
              <motion.button 
                className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.button>
            </Link>
            
            <motion.button 
              className="flex items-center gap-3 text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsVideoModalOpen(true)}
            >
              <HiPlay className="text-xl" />
              Watch Demo
            </motion.button>
          </div>

          <motion.div 
            className="flex justify-center items-center gap-8 mt-12 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">Projects</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">Fast</div>
              <div className="text-sm">Delivery</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm">Support</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services-grid" className="py-20 px-4 md:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              AI solutions designed to help your business grow and thrive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="relative bg-white rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 border border-gray-100 group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => scrollToService(service.id)}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Popular Badge */}
                {service.badge && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-accent to-accent/80 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg z-30">
                    {service.badge}
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <span className="text-3xl transition-transform duration-300" role="img">
                        {service.icon}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  
                  <div className="space-y-2 mb-6">
                    {service.stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <FaCheckCircle className="text-green-500 text-xs" />
                        <span className="text-gray-600">{stat}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/contact#consultation-form">
                    <motion.button 
                      className="w-full bg-gradient-to-r from-accent to-accent/90 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Book a Consultation</span>
                      <HiArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>

                {/* Floating Icon Animation */}
                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      className="absolute top-16 right-6 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center z-20"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.reactIcon className="text-accent text-xl" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <section 
          key={service.id}
          id={service.id}
          className={`py-20 px-4 md:px-16 lg:px-32 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center">
                    <service.reactIcon className="text-white text-3xl" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary">{service.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {service.detailedDescription.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-600 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Image Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
              >
                <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-12 min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <service.reactIcon className="text-6xl text-accent mb-6 mx-auto" />
                    <h3 className="text-2xl font-bold text-primary mb-4">{service.title} Solutions</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Professional implementation tailored to your business needs
                    </p>
                  </div>
                  
                  {/* Floating accent */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg">
                    <FaLightbulb className="text-white text-xl" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Testimonials Section */}
      <TestimonialSlider />

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-primary">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose OmniSolve AI?</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Industry-leading performance backed by proven results and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300">
                    <item.icon className="text-3xl text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-white text-sm font-bold px-2 py-1 rounded-full">
                    {item.metric}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-4xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
                onClick={() => setIsVideoModalOpen(false)}
              >
                ×
              </button>
              <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <HiPlay className="text-6xl text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary mb-2">Demo Video</h3>
                  <p className="text-gray-600">See our AI solutions in action</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

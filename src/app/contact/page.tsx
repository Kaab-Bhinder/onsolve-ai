"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaLinkedin, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaShareAlt, FaExternalLinkAlt, FaClock, FaUsers, FaHandshake, FaRocket } from "react-icons/fa";

export default function ContactPage() {
  useEffect(() => {
    // Handle anchor scrolling after component mounts
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div>
      {/* Hero Section with contact.png background */}
      <section 
        className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden contact-bg"
        style={{
          backgroundImage: "url('/contact.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>
        
        <motion.div 
          className="relative z-10 w-full max-w-6xl mx-auto text-center px-4 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Let&apos;s Connect
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to transform your business with cutting-edge AI solutions? Our team of experts is here to guide you through your digital transformation journey.
          </p>
          <motion.button
            className="bg-accent text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-accent/90 transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule a Free Consultation
          </motion.button>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Why Partner With Us?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We don&apos;t just deliver AI solutions - we build lasting partnerships that drive sustainable growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaRocket,
                title: "Fast Implementation",
                description: "Get your AI solutions up and running in weeks, not months"
              },
              {
                icon: FaUsers,
                title: "Expert Team",
                description: "Work directly with AI specialists and industry veterans"
              },
              {
                icon: FaHandshake,
                title: "Trusted Partnership",
                description: "Long-term support and continuous optimization"
              },
              {
                icon: FaClock,
                title: "24/7 Support",
                description: "Round-the-clock assistance when you need it most"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <item.icon className="text-2xl text-accent group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods - Less Boxy Design */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-light">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose your preferred way to connect with our team of AI experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phone Contact */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaPhone className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">Call Us Directly</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Speak with our AI consultants for immediate assistance and project discussions.
                    </p>
                    <a 
                      href="tel:+525547000330" 
                      className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors group"
                    >
                      <span>+52 554 700 0330</span>
                      <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Email Contact */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaEnvelope className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">Email Us</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      Send us your project details and we&apos;ll respond within 24 hours.
                    </p>
                    <a 
                      href="mailto:info@omnisolveai.digital" 
                      className="inline-flex items-center text-accent font-semibold hover:text-accent/80 transition-colors group"
                    >
                      <span>info@omnisolveai.digital</span>
                      <div className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</div>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              className="group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FaShareAlt className="text-white text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-3">Follow Us</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Stay updated with our latest AI innovations and industry insights.
                    </p>
                    <div className="flex gap-3">
                      {[
                        { icon: FaLinkedin, href: "https://www.linkedin.com/company/omnisolveai/", color: "hover:bg-[#0077B5]" },
                        { icon: FaInstagram, href: "https://www.instagram.com/omnisolveai/", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500" },
                        { icon: FaYoutube, href: "https://www.youtube.com/@OmniSolveAI", color: "hover:bg-[#FF0000]" }
                      ].map((social, idx) => (
                        <a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                        >
                          <social.icon className="text-lg" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Anchor Point */}
      <div id="consultation-form" className="pt-20"></div>

      {/* Contact Form & Office Info */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Office Information */}
          <motion.div
            initial={{ opacity: 0.3, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="lg:sticky lg:top-8">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Global Presence</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                While we&apos;re headquartered in New Mexico, our remote-first approach means we deliver world-class AI solutions globally. Connect with us from anywhere, anytime.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-accent text-lg" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-xl mb-2">Headquarters</h3>
                    <div className="text-gray-600 space-y-1">
                      <p className="font-medium">OmniSolve AI LLC</p>
                      <p>Albuquerque, New Mexico 87102</p>
                      <p>United States</p>
                      <p className="text-sm text-gray-500 italic mt-2">Remote-first • Global reach</p>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/5 p-6 rounded-2xl border-l-4 border-accent">
                  <h4 className="font-semibold text-primary mb-2">Business Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM (MST)</p>
                    <p>Emergency Support: 24/7 Available</p>
                    <p className="text-sm text-gray-500 mt-2">We accommodate all time zones for client meetings</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0.3, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-2">Start Your AI Journey</h2>
                <p className="text-gray-600">Tell us about your project and we&apos;ll get back to you within 24 hours</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company & Role</label>
                  <input 
                    type="text" 
                    name="company" 
                    placeholder="e.g. TechCorp Inc, CEO"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300" 
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Project Type</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300">
                    <option value="">Select a service</option>
                    <option value="ai-automation">Business Process Automation</option>
                    <option value="healthcare-ai">Healthcare AI Solutions</option>
                    <option value="tryon-ai">Virtual Try-On Technology</option>
                    <option value="consulting">AI Strategy Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Tell us about your project *</label>
                  <textarea 
                    name="message" 
                    rows={5} 
                    placeholder="Describe your current challenges, goals, and how AI could help transform your business..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none" 
                    required 
                  />
                </div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-accent text-white font-semibold text-lg py-4 rounded-xl shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message & Schedule Consultation
                </motion.button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Find Us on the Map</h2>
            <p className="text-gray-600 text-lg">Located in the heart of New Mexico&apos;s growing tech ecosystem</p>
          </motion.div>
          
          <motion.div 
            className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[450px]">
              <iframe
                title="OmniSolve AI Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106104.85213006308!2d-106.73636655422362!3d35.08411972239908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87220c5ce9272073%3A0x88f3b0cdffe4827c!2sAlbuquerque%2C%20NM%2C%20USA!5e0!3m2!1sen!2sus!4v1709657629384!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            {/* Map Actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="text-center">
                <a 
                  href="https://maps.google.com/?q=Albuquerque,NM,USA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-accent font-semibold hover:text-primary transition-colors duration-300 text-sm"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  View in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Ahead of the AI Revolution
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of innovators getting exclusive insights on AI trends, case studies, and breakthrough technologies delivered monthly.
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="email" 
                  name="newsletter" 
                  placeholder="Enter your business email" 
                  className="w-full pl-12 pr-6 py-4 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent border-0 shadow-lg" 
                  required 
                />
              </div>
              <motion.button 
                type="submit" 
                className="px-8 py-4 bg-accent text-white font-semibold rounded-xl shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe Now
              </motion.button>
            </form>

            <p className="text-white/60 text-sm mt-4">
              No spam, unsubscribe anytime. Join 5,000+ AI leaders.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

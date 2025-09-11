"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FaLightbulb, 
  FaHandshake, 
  FaRocket, 
  FaLinkedin, 
  FaArrowRight,
  FaEye,
  FaBullseye,
  FaCogs,
  FaHeart
} from "react-icons/fa";

export default function AboutPage() {
  const coreValues = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We push the boundaries of what's possible with AI, constantly exploring new technologies and methodologies."
    },
    {
      icon: FaHandshake,
      title: "Collaboration", 
      description: "We believe in the power of partnership, working closely with our clients to achieve shared success."
    },
    {
      icon: FaHeart,
      title: "Customer-Centric",
      description: "Every solution we create is tailored to our clients' unique needs and business objectives."
    },
    {
      icon: FaRocket,
      title: "Growth",
      description: "We're committed to continuous learning and helping our clients achieve sustainable, scalable growth."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden about-bg"
        style={{
          backgroundImage: "url('/about.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/80"></div>

        <motion.div 
          className="relative z-10 w-full max-w-5xl mx-auto text-center px-4 py-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            About OmniSolve AI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses worldwide with cutting-edge artificial intelligence solutions that transform operations, enhance decision-making, and drive sustainable growth.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-light">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Purpose</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Driven by a clear mission and guided by an ambitious vision for the future of AI
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center">
                  <FaBullseye className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Our Mission</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To democratize artificial intelligence by making advanced AI solutions accessible, affordable, and actionable for businesses of all sizes. We bridge the gap between complex AI technology and practical business applications, ensuring every organization can harness the power of AI to achieve their goals.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                  <FaEye className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-primary">Our Vision</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To be the world&apos;s most trusted AI partner, creating a future where artificial intelligence seamlessly integrates into every aspect of business operations. We envision a world where AI enhances human potential, drives innovation, and creates unprecedented opportunities for growth and success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Who We Are</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  OmniSolve AI is a forward-thinking technology company founded by a team of AI researchers, data scientists, and business strategists who recognized the transformative potential of artificial intelligence in solving real-world business challenges.
                </p>
                <p>
                  Since our inception, we&apos;ve been committed to breaking down the barriers that prevent businesses from adopting AI solutions. Our multidisciplinary approach combines deep technical expertise with practical business acumen, ensuring that every solution we deliver drives measurable results.
                </p>
                <p>
                  We work with companies across industries - from healthcare and finance to retail and manufacturing - helping them leverage AI to automate processes, gain insights from data, and create competitive advantages in their markets.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-accent/5 rounded-2xl">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-2xl">
                  <div className="text-3xl font-bold text-primary mb-2">25+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            {/* Image/Illustration Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div 
                  className="rounded-3xl p-8 md:p-12 min-h-[400px] flex items-center justify-center relative overflow-hidden"
                  style={{
                    backgroundImage: "url('/about1.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-primary/70 rounded-3xl"></div>
                  
                  <div className="text-center relative z-10">
                    <FaCogs className="text-6xl text-accent mb-6 mx-auto animate-spin-slow" />
                    <h3 className="text-2xl font-bold text-white mb-4">AI Innovation Hub</h3>
                    <p className="text-white/90 leading-relaxed">
                      Where cutting-edge technology meets practical business solutions
                    </p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-lg"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaRocket className="text-white text-xl" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <FaLightbulb className="text-white text-lg" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to AI solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl p-8 text-center transition-all duration-300 border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Leadership Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-light">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Leadership Excellence</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Meet the visionary leader driving OmniSolve AI&apos;s mission to revolutionize business through artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* CEO Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden">
                <Image 
                  src="/ceo.png" 
                  alt="Dr. Amina Riaz - CEO of OmniSolve AI"
                  className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                  width={500}
                  height={500}
                />
                
                {/* Professional badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-sm font-semibold text-primary">Chief Executive Officer</div>
                  <div className="text-xs text-gray-600">OmniSolve AI</div>
                </div>
                
                {/* Subtle corner accent */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-lg">
                  <FaLightbulb className="text-white text-lg" />
                </div>
              </div>
            </motion.div>

            {/* CEO Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Dr. Amina Riaz</h3>
                <p className="text-xl text-accent font-semibold mb-6">Chief Executive Officer & Founder</p>
                
                <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-8"></div>
              </div>

              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p className="text-xl font-medium text-primary">
                  &ldquo;We&apos;re not just building AI solutions – we&apos;re crafting the future of intelligent business.&rdquo;
                </p>
                
                <p>
                  As an experienced leader in artificial intelligence and machine learning, Amina Riaz leads OmniSolve AI with a vision to democratize AI technology for businesses of all sizes.
                </p>
                
                <p>
                  Her groundbreaking research in neural networks and business automation has been featured in top-tier publications and has directly influenced the development of our core AI solutions.
                </p>

                <p>
                  Under her leadership, OmniSolve AI has grown from a research initiative to a leading AI consultancy, helping dozens of companies transform their operations and achieve unprecedented growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-accent mb-1">Experienced</div>
                  <div className="text-gray-600">AI Leadership</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-gray-600">AI Projects Led</div>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <a
                  href="https://www.linkedin.com/in/amina-riaz-454a0725a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-accent text-white rounded-xl font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <FaLinkedin className="text-lg" />
                  <span>Connect on LinkedIn</span>
                  <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="https://github.com/amina-149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <FaCogs className="text-lg" />
                  <span>View GitHub</span>
                  <FaArrowRight className="text-sm transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 md:px-16 lg:px-32 bg-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-24 h-24 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-32 h-32 border-2 border-white rounded-lg rotate-45"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/20 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let&apos;s Build the Future Together
            </h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with AI? Our team is here to help you navigate the possibilities and create solutions that drive real results.
            </p>
            
            <Link href="/contact#consultation-form">
              <motion.button
                className="bg-accent text-white px-12 py-4 rounded-xl font-semibold text-lg shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Book a Consultation</span>
                <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>

            <p className="text-white/70 text-sm mt-6">
              Free consultation • No commitment required
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiSparkles, HiChartBarSquare } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      icon: "🛒",
      title: "ShopBot AI Agent for E-Commerce",
      challenge: "An online fashion retailer was losing customers due to slow support and abandoned carts.",
      solution: "Built a ShopBot AI Agent for instant support, product recommendations, and checkout integration.",
      impact: ["60% reduction in cart abandonment", "45% increase in repeat purchases", "Enhanced AI-driven personalization"]
    },
    {
      icon: "🏙",
      title: "Smart City Navigator",
      challenge: "Municipality needed a solution to reduce traffic congestion and improve commuting.",
      solution: "Developed Smart City Navigator with AI algorithms for real-time route suggestions and predictions.",
      impact: ["35% reduction in congestion", "20% faster travel times", "Improved citizen satisfaction"]
    },
    {
      icon: "📦",
      title: "Warehouse Management System (Python)",
      challenge: "Wholesale distributor faced delays and errors due to manual tracking.",
      solution: "Built a WMS automating stock, shipment, and order processing with analytics dashboards.",
      impact: ["70% better inventory accuracy", "40% faster order fulfillment", "60% fewer errors"]
    },
    {
      icon: "🏥",
      title: "Healthcare – Medicine Reminder & Patient Tracker",
      challenge: "Doctors and patients needed a system to improve medication adherence.",
      solution: "Created a Reminder & Tracker App with doctor-patient assignment and history tracking.",
      impact: ["85% increase in adherence", "Reduced hospital re-admissions", "Stronger doctor-patient relationships"]
    },
    {
      icon: "🏡",
      title: "Real Estate Property Match Agent",
      challenge: "Real estate company losing leads as clients struggled to find exact property matches.",
      solution: "Developed AI Property Match Agent for instant personalized recommendations and chat support.",
      impact: ["50% faster property matching", "30% more closed deals", "Higher satisfaction with personalization"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-accent to-primary/80 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-white/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-16 h-16 bg-white/15 rounded-lg"
            animate={{
              y: [0, -30, 0],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/25 rounded-full"
            animate={{
              y: [0, -25, 0],
              x: [0, 15, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/30 rotate-45"
            animate={{
              rotate: [45, 225, 405],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[60vh] px-6">
          <div className="text-center max-w-4xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Case Studies
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Real-world success stories powered by AI-driven solutions
            </motion.p>
            <motion.div
              className="flex items-center justify-center gap-2 mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HiSparkles className="w-6 h-6 text-white/80" />
              <span className="text-white/80 text-sm font-medium">Transforming businesses through innovation</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 md:py-20 lg:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Success Stories That{" "}
              <span className="text-accent">Inspire</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover how we&apos;ve helped businesses across industries achieve remarkable results through innovative AI solutions and cutting-edge technology.
            </motion.p>
          </div>

          {/* Timeline Layout */}
          <div className="space-y-16 md:space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-start gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Case Study Content */}
                <div className="flex-1 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 md:p-10 border border-gray-100">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl md:text-5xl">{study.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-text-primary mb-2">
                        {study.title}
                      </h3>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-accent mb-3 flex items-center gap-2">
                      <HiChartBarSquare className="w-5 h-5" />
                      Challenge
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                      <HiSparkles className="w-5 h-5" />
                      Solution by Omnisolve AI
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="text-lg font-semibold text-accent mb-4 flex items-center gap-2">
                      <FaCheckCircle className="w-5 h-5" />
                      Impact
                    </h4>
                    <ul className="space-y-3">
                      {study.impact.map((impactItem, impactIndex) => (
                        <li key={impactIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text-secondary leading-relaxed">
                            {impactItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Timeline Connector (Desktop Only) */}
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                  {index < caseStudies.length - 1 && (
                    <div className="w-px h-32 bg-gradient-to-b from-accent to-gray-200 mt-4"></div>
                  )}
                </div>

                {/* Mobile Timeline Indicator */}
                <div className="lg:hidden flex justify-center w-full">
                  {index < caseStudies.length - 1 && (
                    <div className="h-px w-32 bg-gradient-to-r from-accent to-gray-200"></div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Footer Note */}
      <section className="py-12 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.p
            className="text-lg text-text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to create your own success story?{" "}
            <Link href="/contact" className="text-accent font-semibold hover:text-primary transition-colors">
              Get in touch
            </Link>{" "}
            to discuss your project.
          </motion.p>
        </div>
      </section>
    </div>
  );
}

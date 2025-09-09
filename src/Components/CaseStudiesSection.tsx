"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi2";

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: "ai-customer-support",
      image: "/case1.png",
      title: "AI Customer Support Agent",
      description: "Reduced response time by 70% for enterprise clients using intelligent chatbots and automated workflows.",
      category: "AI Automation"
    },
    {
      id: "predictive-analytics-dashboard",
      image: "/case2.png", 
      title: "Predictive Analytics Dashboard",
      description: "Increased sales forecasting accuracy by 85% with machine learning models and real-time data visualization.",
      category: "Data Analytics"
    },
    {
      id: "e-commerce-mobile-app",
      image: "/case3.png",
      title: "E-commerce Mobile App",
      description: "Built cross-platform mobile application that boosted customer engagement by 60% and sales by 40%.",
      category: "Mobile Development"
    }
  ];

  return (
    <section className="w-full bg-light py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our{" "}
            <span className="text-accent">Work</span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Showcasing AI-driven solutions and web development projects that deliver measurable results
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-accent">🚀</span>
                  </div>
                  <div className="text-accent font-semibold text-sm">Project Preview</div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent/90 text-white text-xs font-semibold rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed mb-6 text-sm md:text-base">
                  {study.description}
                </p>

                {/* View Details Button */}
                <Link href={`/projects/${study.id}`}>
                  <button className="group/btn inline-flex items-center gap-2 text-accent font-semibold hover:text-primary transition-colors duration-300">
                    View Details
                    <HiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Optional View All Projects Link */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold text-lg rounded-full hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Book a Consultation
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

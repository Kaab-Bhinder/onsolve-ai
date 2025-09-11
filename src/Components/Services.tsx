"use client";
import React from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function Services() {
  const services = [
    {
      icon: "🤖",
      title: "AI Agents",
      description: "Automating 24/7 support and sales workflows with intelligent virtual assistants that scale your business operations and enhance customer experience."
    },
    {
      icon: "⚙️",
      title: "Business Automation",
      description: "Streamline HR, CRM, and finance processes to reduce manual work, increase operational efficiency, and eliminate repetitive tasks across your organization."
    },
    {
      icon: "📊",
      title: "Predictive Analytics",
      description: "Data-driven insights for smarter decisions using advanced machine learning and statistical analysis to forecast trends and optimize performance."
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Modern, scalable websites and applications built with cutting-edge technologies, responsive design, and optimized for performance and SEO."
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Cross-platform iOS and Android applications that deliver exceptional user experiences, seamless functionality, and robust performance across devices."
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Reliable deployment and infrastructure scaling with automated CI/CD pipelines, cloud optimization, and enterprise-grade security implementations."
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our{" "}
            <span className="text-accent">Services</span>
          </h2>
          <p className="text-base md:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform your business operations and drive sustainable growth
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-16 md:space-y-20">
          {services.map((service, index) => (
            <div key={service.title} className="relative">
              {/* Service Content */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                {/* Icon and Title */}
                <div className="flex items-center gap-6 md:w-[350px] md:flex-shrink-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl" role="img" aria-label={service.title}>
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                    {service.title}
                  </h3>
                </div>

                {/* Vertical Line (hidden on mobile) */}
                <div className="hidden md:block w-px bg-gray-200 h-16 mx-8 flex-shrink-0"></div>

                {/* Description */}
                <div className="flex-1">
                  <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Horizontal Line Between Services (except last one) */}
              {index < services.length - 1 && (
                <div className="mt-16 md:mt-20">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-20">
          <Link href="/contact#consultation-form">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg rounded-full hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Book a Consultation
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

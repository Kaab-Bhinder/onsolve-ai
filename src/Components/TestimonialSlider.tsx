"use client";
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    name: "Alexandra Chen",
    role: "Chief Technology Officer",
    company: "InnovateTech Solutions",
    text: "Omnisolve AI completely revolutionized our development process. Their AI agents reduced our deployment time by 70% and improved our code quality significantly.",
    image: "/testimonials/client1.jpg"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "VP of Operations",
    company: "HealthFlow Medical",
    text: "The healthcare AI solutions provided by Omnisolve transformed patient care in our facilities. We've seen a 45% improvement in diagnostic accuracy and faster treatment decisions.",
    image: "/testimonials/client2.jpg"
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Head of Digital Marketing",
    company: "RetailGenius Corp",
    text: "Their Try-On AI technology boosted our online sales by 85%. Customer engagement increased dramatically, and returns decreased by 60%. Absolutely game-changing!",
    image: "/testimonials/client3.jpg"
  },
  {
    id: 4,
    name: "David Gonzalez",
    role: "Learning & Development Director",
    company: "EduTech Innovations",
    text: "The AI-powered training solutions streamlined our entire onboarding process. New employees are now 3x more productive in their first month. Outstanding results!",
    image: "/testimonials/client4.jpg"
  },
  {
    id: 5,
    name: "Emily Johnson",
    role: "Chief Executive Officer",
    company: "FinanceFirst Bank",
    text: "Omnisolve AI's business automation solutions helped us process transactions 5x faster while maintaining the highest security standards. Their team is exceptional.",
    image: "/testimonials/client5.jpg"
  },
  {
    id: 6,
    name: "James Thompson",
    role: "Product Manager",
    company: "CloudScale Systems",
    text: "Working with Omnisolve was a transformative experience. Their AI consulting helped us identify new opportunities and optimize our product development cycle.",
    image: "/testimonials/client6.jpg"
  }
];

export default function TestimonialSlider() {
  return (
    <section className="py-20 px-4 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how organizations worldwide are transforming their operations with our AI solutions
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Quote Icon */}
                <div className="text-accent text-4xl mb-4">&ldquo;</div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center mr-4 border-2 border-accent text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-accent font-medium text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonials-swiper {
          padding-bottom: 50px;
        }
        
        .testimonials-swiper .swiper-button-next,
        .testimonials-swiper .swiper-button-prev {
          color: #1BC5A3;
          font-weight: bold;
          background: white;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .testimonials-swiper .swiper-button-next:hover,
        .testimonials-swiper .swiper-button-prev:hover {
          background: #1BC5A3;
          color: white;
          transform: scale(1.1);
        }
        
        .testimonials-swiper .swiper-button-next::after,
        .testimonials-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: bold;
        }
        
        .testimonials-swiper .swiper-pagination-bullet {
          background: #1BC5A3;
          opacity: 0.3;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.2);
        }
        
        .testimonials-swiper .swiper-pagination {
          bottom: 10px;
        }
      `}</style>
    </section>
  );
}

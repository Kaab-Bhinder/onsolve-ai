"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLHeadingElement | null>(null);
  const secondaryRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const illustrationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center", // triggers reliably for fullscreen hero
          toggleActions: "play none none reverse",
        },
      });

      // Add animations only if elements exist
      if (headlineRef.current) {
        tl.from(headlineRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      if (secondaryRef.current) {
        tl.from(
          secondaryRef.current,
          { y: 40, opacity: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        );
      }

      if (subtitleRef.current) {
        tl.from(
          subtitleRef.current,
          { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        );
      }

      if (buttonRef.current) {
        tl.from(
          buttonRef.current,
          { y: 20, opacity: 0, scale: 0.95, duration: 0.5, ease: "back.out(1.7)" },
          "-=0.2"
        );
      }

      if (illustrationRef.current) {
        tl.from(
          illustrationRef.current,
          { x: 100, opacity: 0, duration: 0.9, ease: "power2.out" },
          "-=0.5"
        );
      }
    }, heroRef);

    // Add button hover listeners only if the button exists
    const btn = buttonRef.current;
    const handleMouseEnter = () => {
      if (!btn) return;
      gsap.to(btn, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    };
    const handleMouseLeave = () => {
      if (!btn) return;
      gsap.to(btn, { scale: 1, duration: 0.2, ease: "power2.out" });
    };

    if (btn) {
      btn.addEventListener("mouseenter", handleMouseEnter);
      btn.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      // revert the GSAP context (cleans up timelines and inline styles created within ctx)
      ctx.revert();

      // safely remove listeners if button exists
      if (btn) {
        btn.removeEventListener("mouseenter", handleMouseEnter);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      }

      // Kill any ScrollTriggers created (use getAll to be safe)
      if (typeof ScrollTrigger !== "undefined" && typeof ScrollTrigger.getAll === "function") {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      }
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-cover bg-no-repeat hero-bg"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-start justify-center text-left px-6 py-16 w-full max-w-7xl mx-auto">
        <h1
          ref={headlineRef}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 max-w-5xl leading-tight"
        >
          Revolutionizing Global Industries with{" "}
          <span className="text-accent">AI Excellence</span>
        </h1>

        <h2
          ref={secondaryRef}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-100 mb-4 sm:mb-6 max-w-4xl leading-tight"
        >
          Innovating Future with <span className="text-accent">AI Solutions</span>
        </h2>

        <p
          ref={subtitleRef}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-normal sm:font-medium mb-8 sm:mb-10 md:mb-12 max-w-4xl leading-relaxed"
        >
          Remote-first AI partner delivering measurable ROI for enterprises worldwide—available 24/7
        </p>

        <div className="flex justify-start items-center w-full">
          <Link href="#consultation" className="w-full sm:w-auto">
            <button
              ref={buttonRef}
              className="group flex items-center justify-center gap-2 px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-accent text-white font-semibold sm:font-bold text-sm sm:text-base md:text-lg rounded-full hover:bg-accent/90 transition-colors duration-300 shadow-lg w-full sm:w-auto sm:min-w-[280px]"
            >
              <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="text-center">Book Consultation</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

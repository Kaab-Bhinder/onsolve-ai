"use client"
import React, { useState } from "react";
import { faqData } from '@/assets/data';

type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-darkbg rounded-2xl shadow-lg border border-vlightbg">
      <button
        className="w-full flex justify-between items-center p-6 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        type="button"
      >
        <span className="text-xl md:text-2xl font-semibold text-vlightbg font-poppins text-left">{question}</span>
        <span className={`ml-4 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="#A3E2FF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="px-6 pb-6">
          <p className="text-base md:text-lg text-text font-poppins leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ModernizedFAQ() {
  return (
    <section
      className="w-full py-16 px-6 md:px-16 lg:px-32 bg-bg flex flex-col items-center justify-center relative"
      style={{ backgroundImage: "url('/faq.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-bg/80 pointer-events-none" />
      <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-vlightbg font-poppins mb-10 text-center drop-shadow">Frequently Asked Questions</h2>
      <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col gap-6">
        {faqData.map((faq, idx) => (
          <FAQItem key={faq.id || idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

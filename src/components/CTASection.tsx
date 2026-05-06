import React from 'react';
import { SectionContainer } from "./SectionContainer";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <SectionContainer>
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Content */}
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
             <h2 className="text-3xl font-light text-secondary tracking-tight">
               Join the <span className="text-primary font-black uppercase tracking-tighter italic">Association</span>
             </h2>
             <p className="text-[14px] text-secondary/60 font-light">
               Become a part of the professional community shaping the future of eye care in Kerala.
             </p>
          </div>

          {/* Right Side: Apply Now Button */}
          <div className="flex-shrink-0">
            <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-secondary transition-all shadow-2xl shadow-primary/20">
              Apply Now
            </button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default CTASection;

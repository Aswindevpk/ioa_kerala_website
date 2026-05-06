import { useState, useEffect } from "react";
import { SectionContainer } from "./SectionContainer";
import { motion, AnimatePresence } from "framer-motion";
import heroSlider1 from "@/assets/banners/ioa_slider_1.jpg";
import heroSlider2 from "@/assets/banners/ioa_slider_2.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroSlider1, heroSlider2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="hero" className="relative pt-[100px] pb-12 bg-primary/5 overflow-hidden">
      <SectionContainer>
        <div className="grid lg:grid-cols-[1fr,300px] gap-8">
          {/* Left: Image Slider */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] lg:aspect-auto lg:h-[450px] rounded-sm overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slides[currentSlide]}
                alt="IOA Kerala Banner"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>

            {/* Slider Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full border-2 border-white transition-all ${currentSlide === i ? 'bg-white w-8' : 'bg-transparent'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Notice & Events */}
          <div className="flex flex-col border border-slate-200 rounded-sm bg-white overflow-hidden shadow-sm h-full">
            {/* Tab Header */}
            <div className="flex border-b border-slate-200">
              <div className="px-6 py-4 bg-white border-r border-slate-200 border-t-4 ">
                <span className="text-xs font-semibold uppercase tracking-widest text-secondary">Notice & Events</span>
              </div>
            </div>

            {/* Tab Content - Vertical Scroll */}
            <div className="flex-1 overflow-hidden relative">
              {/* Fade Overlays */}
              <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

              <div className="animate-scroll-vertical p-6 space-y-12">
                {/* Notice Item 1 */}
                <div className="space-y-4">
                  <p className="text-[13px] font-medium text-secondary/80 leading-relaxed text-justify">
                    We Indian Optometrists Association Kerala, would like to throw some light to clarify the ambiguity among our members and the public about the short term courses conducted in the field of Optometry in Kerala and Pan India.
                  </p>
                  <p className="text-[13px] font-medium text-secondary/80 leading-relaxed text-justify">
                    All our respected members and fellow optometrists are hereby requested to create awareness among ourselves and candidates who are seeking admission for our noble profession.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Hero;


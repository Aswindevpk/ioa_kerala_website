import React from 'react';
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";
import { MotionWrapper } from "./MotionWrapper";

const MarqueeRow = ({ images, reverse = false }: { images: string[], reverse?: boolean }) => (
  <div className="flex overflow-hidden select-none group">
    <div className={`flex gap-4 md:gap-6 py-4 animate-scroll ${reverse ? 'flex-row-reverse' : ''}`}
      style={{ animationDirection: reverse ? 'reverse' : 'normal' }}>
      {[...images, ...images, ...images].map((img, i) => (
        <div key={i} className="flex-shrink-0 w-[280px] md:w-[400px] h-[200px] md:h-[280px] rounded-[2.5rem] overflow-hidden border-2 border-primary/10 shadow-xl transition-all duration-500 hover:border-primary/40">
          <img src={img} alt="Campus Life" className="w-full h-full object-cover pointer-events-none" />
        </div>
      ))}
    </div>
    {/* Duplicate for seamless loop */}
    <div className={`flex gap-4 md:gap-6 py-4 animate-scroll ${reverse ? 'flex-row-reverse' : ''}`}
      aria-hidden="true"
      style={{ animationDirection: reverse ? 'reverse' : 'normal' }}>
      {[...images, ...images, ...images].map((img, i) => (
        <div key={i} className="flex-shrink-0 w-[280px] md:w-[400px] h-[200px] md:h-[280px] rounded-[2.5rem] overflow-hidden border-2 border-primary/10 shadow-xl transition-all duration-500 hover:border-primary/40">
          <img src={img} alt="Campus Life" className="w-full h-full object-cover pointer-events-none" />
        </div>
      ))}
    </div>
  </div>
);

const Gallery = () => {
  const row1 = [
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  ];
  const row2 = [
    "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=2034&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2032&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-[#fcfdfc] grid-pattern relative overflow-hidden">
      {/* Top Row - Horizontal Scroll */}
      <MotionWrapper variant="fadeUp" className="mb-8">
        <MarqueeRow images={row1} />
      </MotionWrapper>

      <SectionContainer>
        <MotionWrapper variant="fadeUp" className="grid lg:grid-cols-12 gap-8 items-center my-16">
          <div className="lg:col-span-4 h-[350px] md:h-[500px] rounded-[3.5rem] overflow-hidden border-2 border-primary/10 shadow-2xl group relative">
            <img src={row1[1]} alt="IOA Workshop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="lg:col-span-4 py-10 px-4">
            <SectionHeading 
              title="Professional"
              highlightedTitle="Excellence"
              subtitle="Glimpses of our seminars, workshops, and community outreach programs across Kerala."
            />
          </div>

          <div className="lg:col-span-4 h-[350px] md:h-[500px] rounded-[3.5rem] overflow-hidden border-2 border-primary/10 shadow-2xl group relative">
            <img src={row2[0]} alt="IOA Seminar" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </MotionWrapper>
      </SectionContainer>

      {/* Bottom Row - Horizontal Scroll (Reverse) */}
      <div className="mt-8">
        <MarqueeRow images={row2} reverse={true} />
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .group:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Gallery;

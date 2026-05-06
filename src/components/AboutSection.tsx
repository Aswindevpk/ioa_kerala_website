import React from 'react';
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";
import { History, ShieldCheck, Users } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      title: "Established 2006",
      desc: "Inaugurated at VJT Hall-Thiruvananthapuram by Sri Jagathi Sreekumar.",
      icon: History
    },
    {
      title: "Welfare & Rights",
      desc: "Protecting the rights of optometrists in both private and government sectors.",
      icon: ShieldCheck
    },
    {
      title: "Member Unity",
      desc: "Led by Mr. NC Surendran and Mr. Anil J Edaicode to address industry issues.",
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-12 bg-white relative overflow-hidden">
      <SectionContainer>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Simple Description */}
          <div className="space-y-8">
            <SectionHeading 
              title="About"
              highlightedTitle="IOA Kerala"
              subtitle="Indian Optometrists Association"
              centered={false}
            />
            
            <div className="space-y-6">
              <p className="text-[14px] font-medium text-secondary/80 leading-relaxed text-justify">
                Indian Optometrists Association is the organization of all qualified optometrists working in private and government sector. The organization was inaugurated by Sri Jagathi Sreekumar, the reputed film star On 28th May, 2006 at VJT Hall- Thiruvanthapuram. The occasion was blessed by the presence of Assistant Professor Dr. Sahasranamam as the chief guest.
              </p>
              
              <p className="text-[14px] font-light text-secondary/60 leading-relaxed text-justify">
                Most of the optometrists in India work in private hospitals and clinics. The association was formed to protect the rights and welfare of the optometrists declared in the work contract. There were many occasions and incidents in which optometrists faced job insecurity, denial of rights and negligence of employee's welfare.
              </p>

              <p className="text-[14px] font-light text-secondary/60 leading-relaxed text-justify">
                Mr. NC Surendran was the prominent force to lead the discussion towards the formation of an organization. Consequently, an organization was formed and Mr. Anil J Edaicode was elected the first president. For the last one decade, the association has been working for optometrists to address their concerns.
              </p>
            </div>
          </div>

          {/* Right: Simple Cards */}
          <div className="space-y-4 lg:pt-20">
            {highlights.map((card, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-50 border border-slate-100 rounded-sm flex gap-6 items-start hover:border-primary/20 transition-colors"
              >
                <div className="w-10 h-10 bg-white text-primary flex items-center justify-center shrink-0 shadow-sm rounded-sm">
                  <card.icon size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[11px] font-black text-secondary uppercase tracking-widest">
                    {card.title}
                  </h4>
                  <p className="text-[11px] font-medium text-secondary/40 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default AboutSection;

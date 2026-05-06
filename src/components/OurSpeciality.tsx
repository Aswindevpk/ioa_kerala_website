import { ShieldCheck, Scale, HeartPulse, Microscope } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";
import { MotionWrapper } from "./MotionWrapper";

const OurSpeciality = () => {
  const features = [
    {
      title: "Professional Ethics",
      desc: "Promoting the highest standards of professional conduct and ethics among optometrists.",
      icon: ShieldCheck
    },
    {
      title: "Legal Support",
      desc: "Providing legal guidance and protection for the professional rights of our members.",
      icon: Scale
    },
    {
      title: "Community Outreach",
      desc: "Conducting eye care camps and awareness programs across Kerala for public welfare.",
      icon: HeartPulse
    },
    {
      title: "Scientific Research",
      desc: "Encouraging continuous learning and research in the field of optometry and vision science.",
      icon: Microscope
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-slate-50/50 relative overflow-hidden grid-pattern">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <MotionWrapper variant="fadeUp" className="space-y-8">
            <SectionHeading
              title="About Indian Optometrists Association,"
              highlightedTitle="Kerala"
              subtitle="The premier body for the advancement of optometry in Kerala."
              centered={true}
              className="mb-16"
            />
            <div className="grid sm:grid-cols-2 gap-8 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="space-y-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-black text-secondary tracking-tight">{feature.title}</h3>
                  <p className="text-xs text-secondary/60 leading-relaxed font-bold">{feature.desc}</p>
                </div>
              ))}
            </div>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" className="relative">
            <div className="relative rounded-[4rem] overflow-hidden bg-slate-200 aspect-[4/5] shadow-2xl">
              <div className="w-full h-full flex items-center justify-center bg-slate-100 text-secondary/20 font-black text-3xl uppercase tracking-widest text-center px-12">
                IOA Professional Legacy
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20">
                <p className="text-white text-xl font-black italic leading-tight">
                  "Dedicated to protecting the vision of the nation and the rights of those who care for it."
                </p>
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-6">
                  — IOA Kerala Mission Statement
                </p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          </MotionWrapper>
        </div>
      </SectionContainer>
    </section>
  );
};

export default OurSpeciality;

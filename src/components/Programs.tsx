import { UserPlus, Search, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";
import { useNavigate } from "react-router-dom";
import { MotionWrapper } from "./MotionWrapper";

const Programs = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Member Registration",
      icon: UserPlus,
      desc: "Apply for new membership or renew your existing IOA Kerala registration online with ease.",
      link: "/registration",
      color: "bg-primary"
    },
    {
      title: "Verification Portal",
      icon: Search,
      desc: "Verify the membership status of optometrists through our centralized digital directory.",
      link: "/verification",
      color: "bg-secondary"
    },
    {
      title: "Welfare Schemes",
      icon: Heart,
      desc: "Explore various insurance and support schemes designed for the welfare of our members.",
      link: "/about",
      color: "bg-secondary"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden grid-pattern">
      <SectionContainer>
        <MotionWrapper variant="fadeUp">
          <SectionHeading 
            title="Our Key"
            highlightedTitle="Services"
            subtitle="IOA Kerala provides a range of digital services and support systems to ensure the professional growth and welfare of its members."
            className="mb-20"
          />
        </MotionWrapper>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <MotionWrapper 
              variant="fadeUp"
              delay={i * 0.15}
              key={i}
              onClick={() => navigate(service.link)}
              className={`group p-10 ${service.color} rounded-[3rem] border border-white/5 hover:shadow-2xl cursor-pointer relative overflow-hidden h-80 flex flex-col justify-between transition-all duration-500`}
            >
              <div className="absolute -right-6 -bottom-6 text-white/5 group-hover:scale-110 transition-transform duration-700">
                <service.icon size={200} />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-primary transition-all duration-500">
                  <service.icon size={32} />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-black text-white tracking-tight">{service.title}</h4>
                  <p className="text-xs text-white/60 font-bold leading-relaxed">{service.desc}</p>
                </div>
              </div>
              <div className="relative z-10 flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                Access Service <ArrowRight size={14} />
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* Support Row */}
        <MotionWrapper variant="fadeUp" className="bg-slate-50 rounded-[3rem] p-10 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="text-xl font-black text-secondary tracking-tight">Need Professional Support?</h4>
              <p className="text-sm text-secondary/40 font-bold">Our legal and professional support cell is active 24/7 for members.</p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-[12px] uppercase tracking-widest hover:bg-primary transition-colors whitespace-nowrap"
          >
            Contact Support Cell
          </button>
        </MotionWrapper>

        {/* Stats Row */}
        <MotionWrapper variant="staggerContainer" className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-24 pt-12 border-t border-slate-100">
          {[
            { value: '5000', label: 'Registered Members', suffix: '+' },
            { value: '14', label: 'District Branches', suffix: '' },
            { value: '25', label: 'Welfare Schemes', suffix: '+' },
            { value: '100', label: 'Medical Camps', suffix: '+' }
          ].map((stat, i) => (
            <MotionWrapper variant="fadeUp" delay={i * 0.15} key={i} className="text-center space-y-2 group">
              <h4 className="text-4xl font-black text-secondary tracking-tighter group-hover:text-primary transition-colors">
                {stat.value}{stat.suffix}
              </h4>
              <p className="text-[10px] font-bold text-secondary/40 uppercase tracking-[0.2em]">{stat.label}</p>
            </MotionWrapper>
          ))}
        </MotionWrapper>
      </SectionContainer>
    </section>
  );
};

export default Programs;

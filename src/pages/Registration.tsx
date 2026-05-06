import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Helmet } from "react-helmet-async";
import { ArrowRight, UserPlus, RefreshCw, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Registration = () => {
  const regTypes = [
    {
      title: "New Membership",
      description: "For optometrists who wish to join IOA Kerala for the first time. Professional verification required.",
      icon: <UserPlus className="w-8 h-8" />,
      link: "#",
      features: ["Lifetime Membership", "Legal Support", "Professional Network"]
    },
    {
      title: "Renewal / Update",
      description: "Existing members can renew their membership or update their professional details online.",
      icon: <RefreshCw className="w-8 h-8" />,
      link: "#",
      features: ["Easy Online Payment", "Instant Confirmation", "Profile Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Membership Registration | IOA Kerala</title>
        <meta name="description" content="Join the Indian Optometrists Association (IOA) Kerala. Register for new membership or renew your existing one." />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20">
        <SectionContainer>
          <MotionWrapper variant="fadeUp">
            <SectionHeading
              title="Membership"
              highlightedTitle="Registration"
              subtitle="Become a part of the largest professional body of optometrists in Kerala. Choose your registration type below."
              className="mb-16"
            />
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {regTypes.map((type, index) => (
              <MotionWrapper
                key={index}
                variant="fadeUp"
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white p-10 rounded-[3rem] border border-slate-100 shadow-soft-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[4rem] group-hover:bg-primary/10 transition-colors" />

                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                    {type.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-secondary tracking-tight">{type.title}</h3>
                    <p className="text-secondary/60 font-medium leading-relaxed">{type.description}</p>
                  </div>

                  <ul className="space-y-3 pt-4">
                    {type.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-bold text-secondary/40 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full flex items-center justify-between bg-secondary text-white pl-8 pr-2 py-2 rounded-full group-hover:bg-primary transition-all duration-500 mt-8">
                    <span className="text-[12px] font-bold uppercase tracking-[0.1em]">Proceed Now</span>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary group-hover:text-primary transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </button>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* Guidelines Section */}
          <MotionWrapper variant="fadeUp" transition={{ delay: 0.4 }} className="mt-20 max-w-4xl mx-auto bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-secondary tracking-tight">Registration Guidelines</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-secondary/60 leading-relaxed font-medium">
              <div className="space-y-4">
                <p>1. Valid professional qualification certificate is mandatory for new registration.</p>
                <p>2. Proof of residency in Kerala is required for membership in the state branch.</p>
              </div>
              <div className="space-y-4">
                <p>3. Membership fee can be paid online through our secure payment gateway.</p>
                <p>4. Approval process typically takes 3-5 working days after document verification.</p>
              </div>
            </div>
          </MotionWrapper>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;

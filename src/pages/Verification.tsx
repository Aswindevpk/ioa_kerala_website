import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Helmet } from "react-helmet-async";
import { Search, ShieldCheck, UserCheck } from "lucide-react";

const Verification = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Member Verification | IOA Kerala</title>
        <meta name="description" content="Verify the professional membership status of optometrists registered with IOA Kerala." />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20">
        <SectionContainer>
          <MotionWrapper variant="fadeUp">
            <SectionHeading
              title="Membership"
              highlightedTitle="Verification"
              subtitle="Ensuring transparency and professional integrity. Verify the registration status of any IOA Kerala member below."
              className="mb-16"
            />
          </MotionWrapper>

          <div className="max-w-4xl mx-auto space-y-10">
            {/* Verification Form */}
            <MotionWrapper variant="fadeUp" className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-soft-xl border border-slate-100">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary flex-shrink-0">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="flex-grow space-y-6 w-full">
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="text-2xl font-black text-secondary tracking-tight">Search Directory</h3>
                    <p className="text-secondary/60 font-medium text-sm">Enter the Member ID or Full Name to verify status.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-grow">
                      <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary/30 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Member ID or Name..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-full py-5 pl-14 pr-8 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                      />
                    </div>
                    <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-[12px] uppercase tracking-widest hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 transition-all">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* Why Verification Matters */}
            <div className="grid md:grid-cols-2 gap-8">
              <MotionWrapper variant="fadeUp" transition={{ delay: 0.2 }} className="bg-secondary p-10 rounded-[3rem] text-white">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black mb-4 tracking-tight">For General Public</h4>
                <p className="text-white/60 text-sm font-medium leading-relaxed">
                  Always ensure your eye care professional is a qualified and registered member of the Indian Optometrists Association for guaranteed professional standards.
                </p>
              </MotionWrapper>

              <MotionWrapper variant="fadeUp" transition={{ delay: 0.3 }} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-secondary mb-4 tracking-tight">Professional Integrity</h4>
                <p className="text-secondary/60 text-sm font-medium leading-relaxed">
                  Verification helps in maintaining the high standards of the optometry profession and prevents unauthorized practice by unqualified individuals.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
};

export default Verification;

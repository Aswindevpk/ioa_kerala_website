import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Helmet } from "react-helmet-async";
import { Search, Scale, FileCheck } from "lucide-react";

const GscVerification = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>GSC Verification | IOA Kerala</title>
        <meta name="description" content="Verify GSC (Good Standing Certificate) status for optometrists registered with IOA Kerala." />
      </Helmet>
      <Header />
      <main className="pt-32 pb-20">
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            <MotionWrapper variant="fadeUp">
              <SectionHeading
                title="GSC"
                highlightedTitle="Verification"
                subtitle="Good Standing Certificate verification portal. Ensure the professional standing of members for official purposes."
                className="mb-16"
              />
            </MotionWrapper>

            <div className="max-w-4xl mx-auto space-y-10">
              {/* Verification Form */}
              <MotionWrapper variant="fadeUp" className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-secondary/5 border border-slate-100">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-grow space-y-6 w-full">
                    <div className="space-y-2 text-center md:text-left">
                      <h3 className="text-2xl font-black text-secondary tracking-tight">GSC Directory</h3>
                      <p className="text-secondary/60 font-medium text-sm">Enter the GSC Reference Number to verify the certificate.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative flex-grow">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary/30 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="GSC Reference No..."
                          className="w-full bg-slate-50 border border-slate-100 rounded-full py-5 pl-14 pr-8 text-sm font-bold text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                        />
                      </div>
                      <button className="bg-primary text-white px-12 py-5 rounded-full font-bold text-[12px] uppercase tracking-widest hover:scale-105 active:scale-95 shadow-xl shadow-primary/20 transition-all">
                        Verify GSC
                      </button>
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
};

export default GscVerification;

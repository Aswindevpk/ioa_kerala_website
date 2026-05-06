import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { SectionContainer } from "@/components/SectionContainer";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white grid-pattern relative overflow-hidden">
      <Helmet>
        <title>404 - Page Not Found | IOA Kerala</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black tracking-tighter">
          404
        </div>
      </div>
      
      <SectionContainer className="relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          {/* Main Visual */}
          <div className="space-y-4">
            <MotionWrapper variant="scaleUp" className="inline-block">
              <h1 className="text-8xl md:text-[12rem] font-black text-secondary leading-none tracking-tighter">
                4<span className="text-primary">0</span>4
              </h1>
            </MotionWrapper>
            <div className="space-y-2">
              <MotionWrapper variant="fadeUp" delay={0.2}>
                <h2 className="text-2xl md:text-4xl font-black text-secondary uppercase tracking-tight">Resource Missing</h2>
                <p className="text-secondary/60 font-medium text-lg">
                  The resource you're looking for has been moved or doesn't exist.
                </p>
              </MotionWrapper>
            </div>
          </div>

          {/* Quick Links / Actions */}
          <MotionWrapper variant="fadeUp" delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Link
              to="/"
              className="group flex items-center gap-4 bg-secondary text-white pl-8 pr-2 py-2 rounded-full hover:scale-[1.05] active:scale-95 transition-all shadow-2xl shadow-secondary/20"
            >
              <span className="text-xs font-bold uppercase tracking-widest">Return Home</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary transition-transform duration-300 group-hover:rotate-[-45deg]">
                <Home size={18} />
              </div>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-3 px-8 py-4 text-secondary/40 hover:text-secondary transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">Previous Page</span>
            </button>
          </MotionWrapper>

          {/* Institutional Note */}
          <MotionWrapper variant="fadeUp" delay={0.6} className="pt-12 border-t border-slate-100 flex flex-col items-center gap-4">
            <p className="text-[10px] font-black text-secondary/20 uppercase tracking-[0.5em]">IOA Kerala State Committee</p>
          </MotionWrapper>
        </div>
      </SectionContainer>
    </div>
  );
};

export default NotFound;

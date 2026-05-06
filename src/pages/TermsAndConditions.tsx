import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SectionContainer } from "@/components/SectionContainer";
import { Helmet } from "react-helmet-async";
import { contactInfo } from "@/data/contact";
import { Scale, AlertCircle, Mail } from "lucide-react";
import { MotionWrapper } from "@/components/MotionWrapper";

export default function TermsAndConditions() {
  const sections = [
    {
      id: "ip",
      title: "Intellectual Property",
      content: "All content on our website and in our services, including text, graphics, logos, images, and software, is the property of IOA Kerala or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, distribute, or display any part of our website or services without our prior written consent."
    },
    {
      id: "services",
      title: "Use Of Services",
      content: "Our services are intended for educational and non-commercial use only. You may not use our services for any illegal or unauthorized purpose. You must comply with all applicable laws and regulations when using our services."
    },
    {
      id: "payment",
      title: "Payment & Refunds",
      content: "We accept payment for our services through various payment methods such as credit cards, debit cards, and online payment gateways. All payments made are non-refundable, except in certain circumstances as specified in our refund policy."
    },
    {
      id: "liability",
      title: "Limitation Of Liability",
      content: "In no event shall IOA Kerala or its directors, employees, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of our website or services."
    },
    {
      id: "law",
      title: "Governing Law",
      content: "These terms and conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms and conditions shall be subject to the exclusive jurisdiction of the courts of India."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 selection:bg-primary/30">
      <Helmet>
        {/* Primary SEO */}
        <title>Terms & Conditions | IOA Kerala - Legal Agreement</title>
        <meta
          name="description"
          content="Read IOA Kerala's terms and conditions for our NIOS and Degree coaching services. Understand your rights and responsibilities as a student."
        />
        <link rel="canonical" href={`${window.location.origin}/terms-and-conditions`} />

        {/* Additional SEO */}
        <meta name="keywords" content="Terms and conditions, IOA Kerala legal, student agreement, refund policy IOA Kerala, academic service terms" />
        <meta name="author" content="IOA Kerala" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terms & Conditions | IOA Kerala - Legal Agreement" />
        <meta
          property="og:description"
          content="Review our academic service agreement and legal terms. Understand the rules and regulations of using IOA Kerala services."
        />
        <meta property="og:url" content={`${window.location.origin}/terms-and-conditions`} />
        <meta property="og:site_name" content="IOA Kerala" />
        <meta property="og:image" content={`${window.location.origin}/og.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="IOA Kerala Terms and Conditions" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terms & Conditions | IOA Kerala - Legal Agreement" />
        <meta
          name="twitter:description"
          content="Read IOA Kerala's terms and conditions. Understand your rights and responsibilities as a student."
        />
        <meta name="twitter:image" content={`${window.location.origin}/og.webp`} />
        <meta name="twitter:image:alt" content="IOA Kerala Terms and Conditions" />
        <meta name="twitter:site" content="@ioakerala" />
        <meta name="twitter:creator" content="@ioakerala" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            {/* Header Area */}
            <MotionWrapper variant="fadeUp" className="mb-12  text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full mb-4">
                <Scale size={12} className="text-primary" />
                <span className="text-[9px] font-light text-primary uppercase tracking-widest">Legal Agreement</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-secondary leading-tight tracking-tight mb-6">
                Terms & <span className="text-primary">Conditions</span>
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-4 text-secondary/40 text-[10px] font-medium uppercase tracking-widest">
                <span>Last updated</span>
                <span className="w-6 h-[1px] bg-secondary/20"></span>
                <span className="text-secondary/60">May 2026</span>
              </div>
            </MotionWrapper>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-8">
                <MotionWrapper variant="fadeUp" className="">
                  <p className="text-sm text-secondary/70 leading-relaxed font-light mb-12">
                    Welcome to IOA Kerala. By accessing or using our website and services, you agree to be bound by the following 
                    terms and conditions. Please read these terms and conditions carefully before using our website or services.
                  </p>

                  <MotionWrapper variant="staggerContainer" className="space-y-12">
                    {sections.map((section) => (
                      <MotionWrapper key={section.id} variant="fadeUp"  className="scroll-mt-32 space-y-4 group">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <h2 className="text-sm  font-black text-secondary uppercase tracking-[0.2em]">
                            {section.title}
                          </h2>
                        </div>
                        <p className="text-sm text-secondary/60 leading-relaxed font-light pl-4.5">
                          {section.content}
                        </p>
                      </MotionWrapper>
                    ))}
                  </MotionWrapper>

                  <MotionWrapper variant="fadeUp" className="mt-16 pt-12 border-t border-slate-100">
                    <div className=" bg-slate-50 rounded-3xl space-y-4">
                      <div className="flex items-center gap-3 text-secondary">
                        <Mail size={18} className="text-primary" />
                        <h3 className="text-lg font-bold">Still have questions?</h3>
                      </div>
                      <p className="text-sm text-secondary/60 font-light leading-relaxed">
                        If you have any questions or concerns about these terms, please reach out to our legal team at:
                      </p>
                      <a href={`mailto:${contactInfo.email}`} className="inline-block text-primary text-sm font-bold hover:underline">
                        {contactInfo.email}
                      </a>
                    </div>
                  </MotionWrapper>
                </MotionWrapper>
              </div>

              {/* Sidebar Navigation */}
              <div className="lg:col-span-4 sticky top-32 space-y-6 hidden lg:block">
                <MotionWrapper variant="fadeRight" className="p-8 bg-secondary rounded-[2.5rem] text-white overflow-hidden relative group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
                  <div className="relative z-10 space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-primary">Table of Contents</h4>
                    <nav className="space-y-4">
                      {sections.map((section) => (
                        <a 
                          key={section.id}
                          href={`#${section.id}`}
                          className="flex items-center gap-3 text-white/60 hover:text-white text-sm font-medium transition-colors group/link"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/link:bg-primary transition-colors" />
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                </MotionWrapper>

                <MotionWrapper variant="fadeUp" delay={0.2} className="p-8 border border-slate-100 bg-white rounded-[2rem] space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <AlertCircle size={20} />
                  </div>
                  <p className="text-xs text-secondary/60 font-light leading-relaxed">
                    By using our platform, you acknowledge that you have read and understood these terms in their entirety.
                  </p>
                </MotionWrapper>
              </div>
            </div>
          </div>
        </SectionContainer>
      </main>

      <Footer />
    </div>
  );
}
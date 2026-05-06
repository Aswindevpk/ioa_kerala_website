import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { SectionContainer } from "@/components/SectionContainer";
import { Helmet } from "react-helmet-async";
import { contactInfo } from "@/data/contact";
import { Lock, Mail, Info } from "lucide-react";
import { MotionWrapper } from "@/components/MotionWrapper";

export default function PrivacyPolicy() {
  const sections = [
    {
      id: "collect",
      title: "Information We Collect",
      content: "We may collect personal information from our users, such as name, email address, phone number, and billing information, when they make a purchase or sign up for our services. We also collect non-personal information, such as browser type and IP address, to help us better understand how our users interact with our platform and services."
    },
    {
      id: "use",
      title: "How We Use Information",
      content: "We use personal information provided by our users for the purpose of delivering our educational services and improving our platform and user experience. We may also use personal information to send relevant course updates, special offers, and other educational communications that we believe may be of interest to our users."
    },
    {
      id: "share",
      title: "Information Sharing",
      content: "We do not sell or rent personal information to third parties. We may share personal information with our trusted partners and service providers to help us deliver our educational services and improve our platform. We may also share personal information to comply with legal obligations or protect the rights, property, or safety of ourselves or others."
    },
    {
      id: "security",
      title: "Data Security",
      content: "We use appropriate security measures, including encryption, to protect personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or any wireless network can be guaranteed to be 100% secure, so we cannot guarantee the security of information transmitted to or from our platform."
    },
    {
      id: "rights",
      title: "Your Rights",
      content: "Users have the right to access, correct, or delete their personal information at any time. They also have the right to object to the processing of their personal information or to request that we restrict the processing of their personal information."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 selection:bg-primary/30">
      <Helmet>
        {/* Primary SEO */}
        <title>Privacy Policy | IOA Kerala - Data Protection</title>
        <meta
          name="description"
          content="Read IOA Kerala's privacy policy to understand how we protect your data. We are committed to maintaining the highest standards of student data privacy."
        />
        <link rel="canonical" href={`${window.location.origin}/privacy-policy`} />

        {/* Additional SEO */}
        <meta name="keywords" content="Privacy policy, data protection, student privacy, IOA Kerala security, personal information safety" />
        <meta name="author" content="IOA Kerala" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="30 days" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | IOA Kerala - Data Protection" />
        <meta
          property="og:description"
          content="Your privacy matters to us. Learn how we secure your academic data and protect your personal information."
        />
        <meta property="og:url" content={`${window.location.origin}/privacy-policy`} />
        <meta property="og:site_name" content="IOA Kerala" />
        <meta property="og:image" content={`${window.location.origin}/og.webp`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="IOA Kerala Privacy Policy" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | IOA Kerala - Data Protection" />
        <meta
          name="twitter:description"
          content="Read IOA Kerala's privacy policy. Understand how we protect your data and maintain your privacy."
        />
        <meta name="twitter:image" content={`${window.location.origin}/og.webp`} />
        <meta name="twitter:image:alt" content="IOA Kerala Privacy Policy" />
        <meta name="twitter:site" content="@ioakerala" />
        <meta name="twitter:creator" content="@ioakerala" />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <SectionContainer>
          <div className="max-w-6xl mx-auto">
            {/* Header Area */}
            <MotionWrapper variant="fadeUp" className="mb-12 text-center md:text-left">
              <div className="inline-flex items-center gap-2  mb-4">
                <Lock size={12} className="text-primary" />
                <span className="text-[9px] font-light text-primary uppercase tracking-widest">Privacy First</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-secondary leading-tight tracking-tight mb-6">
                Privacy <span className="text-primary">Policy</span>
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-4 text-secondary/40 text-[10px] font-medium uppercase tracking-widest">
                <span>Effective Date</span>
                <span className="w-6 h-[1px] bg-secondary/20"></span>
                <span className="text-secondary/60">May 2026</span>
              </div>
            </MotionWrapper>

            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-8">
                <MotionWrapper variant="fadeUp" className="">
                  <p className="text-sm text-secondary/70 leading-relaxed font-light mb-12">
                    At IOA Kerala, we respect and protect the privacy of our users. This privacy policy explains how we collect,
                    use, and protect the personal information of our users.
                  </p>

                  <MotionWrapper variant="staggerContainer" className="space-y-12">
                    {sections.map((section) => (
                      <MotionWrapper key={section.id} variant="fadeUp" className="scroll-mt-32 space-y-4 group">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <h2 className="text-sm font-black text-secondary uppercase tracking-[0.2em]">
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
                    <div className="bg-slate-50 rounded-3xl space-y-4">
                      <div className="flex items-center gap-3 text-secondary">
                        <Mail size={18} className="text-primary" />
                        <h3 className="text-lg font-bold">Privacy Concerns?</h3>
                      </div>
                      <p className="text-sm text-secondary/60 font-light leading-relaxed">
                        If you have any questions or concerns about our privacy policy or the use of your personal information,
                        please contact us at:
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
                    <h4 className="text-xs font-black uppercase tracking-widest text-primary">Quick Navigation</h4>
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
                    <Info size={20} />
                  </div>
                  <p className="text-xs text-secondary/60 font-light leading-relaxed">
                    We update our privacy policy periodically. Please check this page regularly for any changes.
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
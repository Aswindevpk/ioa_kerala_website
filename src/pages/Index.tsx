import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CommitteeMembers from "@/components/CommitteeMembers";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-pattern">
      <Helmet>
        <title>IOA Kerala | Indian Optometrists Association State Branch</title>
        <meta
          name="description"
          content="Official website of the Indian Optometrists Association (IOA) Kerala State Branch. Dedicated to the professional growth and welfare of optometrists in Kerala."
        />
        <link rel="canonical" href={`${window.location.origin}/`} />
        <meta name="keywords" content="IOA Kerala, Indian Optometrists Association, Optometry Kerala, Eye Care Kerala, Optometrist Registration Kerala" />
      </Helmet>
      <Header />
      <Hero />
      <AboutSection />
      <CommitteeMembers />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

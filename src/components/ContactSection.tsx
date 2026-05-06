import { SectionContainer } from "./SectionContainer";
import { SectionHeading } from "./SectionHeading";
import { MotionWrapper } from "./MotionWrapper";
import ContactForm from "./ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/data/contact";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden grid-pattern">
      <SectionContainer>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <MotionWrapper variant="fadeUp" className="space-y-12">
            <div className="space-y-6">
              <SectionHeading
                title="Get In"
                highlightedTitle="Touch"
                subtitle="Have questions? Reach out to the IOA Kerala State Committee for any professional assistance or queries."
                centered={false}
              />
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: "Call Us", value: contactInfo.phone, sub: "State Office" },
                { icon: Mail, title: "Email Us", value: contactInfo.email, sub: "General Inquiry" },
                { icon: MapPin, title: "State HQ", value: contactInfo.address, sub: "Kozhikode, Kerala" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/40 mb-1">{item.title}</h4>
                    <p className="text-lg font-black text-secondary tracking-tight">{item.value}</p>
                    <p className="text-xs text-secondary/40 font-bold uppercase">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </MotionWrapper>

          <MotionWrapper variant="fadeUp" delay={0.2}>
            <ContactForm />
          </MotionWrapper>
        </div>
      </SectionContainer>
    </section>
  );
};

export default ContactSection;

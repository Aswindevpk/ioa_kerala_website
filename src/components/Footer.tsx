import { MapPin, Facebook, Mail, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { SectionContainer } from "./SectionContainer";
import { contactInfo } from "@/data/contact";
import logo from "@/assets/logo4.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-secondary text-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

      <SectionContainer>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          <div className="space-y-3">
            <Link to="/" className="inline-block">
              <img src={logo} alt="IOA Kerala Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-white/60 font-light text-xs leading-relaxed">
              The premier professional body of optometrists in Kerala, dedicated to advancing the profession and ensuring visual health for all.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/IOAKeralaOfficial/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 group"
              >
                <Facebook size={12} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-8">
              <h5 className="text-xs font-black uppercase text-white tracking-widest mb-2">Navigation</h5>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <ul className="space-y-4 text-white/60 font-light text-xs uppercase tracking-widest">
              {[
                { name: 'Home', href: '/#hero' },
                { name: 'About IOA', href: '/#about' },
                { name: 'State Committee', href: '/#committee' },
                { name: 'Registration', href: '/registration' },
                { name: 'Verification', href: '/verification' }
              ].map((item) => (
                <li key={item.name}>
                  <HashLink smooth to={item.href} className="flex items-center gap-2 group hover:text-white transition-colors">
                    <ArrowRight size={14} className="text-primary group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h5 className="text-xs font-black uppercase text-white tracking-widest mb-2">Useful Links</h5>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <ul className="space-y-4 text-white/60 font-light text-xs uppercase tracking-widest">
              {[
                { name: 'Member Verification', href: '/verification/membership' },
                { name: 'GSC Verification', href: '/verification/gsc' },
                { name: 'Welfare Schemes', href: '/#about' },
                { name: 'Legal Cell', href: '/#about' },
                { name: 'New membership', href: '/registration' },
                { name: 'Old Members Digitalisation', href: '/registration' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <div className="mb-8">
              <h5 className="text-xs font-black uppercase text-white tracking-widest mb-2">Get In Touch</h5>
              <div className="h-0.5 w-8 bg-primary rounded-full" />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-medium mb-1">Call Us</p>
                  <p className="text-sm font-light text-white">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-medium mb-1">Email</p>
                  <p className="text-sm font-light text-white">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-medium mb-1">Office</p>
                  <address className="text-sm font-light text-white not-italic leading-relaxed">
                    IOA Kerala State Office,<br />
                    Trivandrum, Kerala
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 text-center md:text-left font-bold text-[10px] uppercase tracking-widest">© {new Date().getFullYear()} IOA Kerala State Branch. All Rights Reserved.</p>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;

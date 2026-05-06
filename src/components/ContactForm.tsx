import { useState } from 'react';
import {  CheckCircle, ArrowRight } from "lucide-react";
import { contactInfo } from '../data/contact';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/+${contactInfo.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, '_blank');
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-primary p-12 rounded-[3.5rem] text-center space-y-6 animate-fade-in shadow-3xl shadow-primary/30">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="text-white w-10 h-10" />
        </div>
        <h3 className="text-3xl font-black text-white uppercase tracking-tight">Message Sent!</h3>
        <p className="text-white/70 font-medium leading-relaxed">
          Redirecting you to WhatsApp for a faster response.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-secondary p-8 md:p-12 rounded-[3rem] shadow-3xl shadow-primary/30 relative overflow-hidden group w-full">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-2xl translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <div className="text-left space-y-2 mb-4">
          <h3 className="text-2xl font-black text-white uppercase tracking-tight">Start Your Journey</h3>
          <p className="text-[10px] font-light text-white/50 uppercase tracking-[0.2em]">Send a quick request via WhatsApp</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5 text-left">
            <label className="text-[9px] font-semibold text-white uppercase tracking-[0.2em] ml-2">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="John"
              className={`w-full bg-white/10 border ${errors.firstName ? 'border-red-400' : 'border-white/20'} rounded-xl px-5 py-3 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all`}
            />
          </div>
          <div className="space-y-1.5 text-left">
            <label className="text-[9px] font-semibold text-white uppercase tracking-[0.2em] ml-2">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Doe"
              className={`w-full bg-white/10 border ${errors.lastName ? 'border-red-400' : 'border-white/20'} rounded-xl px-5 py-3 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all`}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-1.5 text-left">
            <label className="text-[9px] font-semibold text-white uppercase tracking-[0.2em] ml-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              className={`w-full bg-white/10 border ${errors.email ? 'border-red-400' : 'border-white/20'} rounded-xl px-5 py-3 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all`}
            />
          </div>
          <div className="space-y-1.5 text-left">
            <label className="text-[9px] font-semibold text-white uppercase tracking-[0.2em] ml-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 00000 00000"
              className={`w-full bg-white/10 border ${errors.phone ? 'border-red-400' : 'border-white/20'} rounded-xl px-5 py-3 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all`}
            />
          </div>
        </div>

        <div className="space-y-1.5 text-left">
          <label className="text-[9px] font-semibold text-white uppercase tracking-[0.2em] ml-2">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={3}
            placeholder="Tell us about your academic goals..."
            className={`w-full bg-white/10 border ${errors.message ? 'border-red-400' : 'border-white/20'} rounded-[1rem] px-5 py-4 text-[13px] text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-white/30 focus:bg-white/20 transition-all resize-none`}
          />
        </div>

        <div className="pt-2 text-left">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative inline-flex items-center gap-6 bg-white text-primary pl-8 pr-1.5 py-1.5 rounded-full hover:scale-[1.03] active:scale-95 transition-all shadow-2xl shadow-black/20 w-full md:w-auto"
          >
            <span className="text-[11px] font-semibold text-secondary uppercase tracking-[0.15em]">
              {isSubmitting ? 'Sending Request...' : 'Send via WhatsApp'}
            </span>
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-white transition-transform duration-300 ">
              <ArrowRight size={16} />
            </div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;

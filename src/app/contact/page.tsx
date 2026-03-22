'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard, SectionTitle, Button, Badge } from '../../components/UI';
import { Mail, MapPin, Globe, ChevronDown, ChevronUp, Send } from 'lucide-react';
import BorderGlow from '../../components/BorderGlow';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const faqs = [
    {
      q: "What does a free demo include?",
      a: "Our free demo includes a personalized consultation, a live demonstration of our AI and automation platforms relevant to your business needs, and a preliminary assessment of potential impact and ROI."
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary depending on complexity. Small automation workflows can be delivered in 2-5 days, while complex AI integrations may take 2-4 weeks. We pride ourselves on rapid deployment."
    },
    {
      q: "Do you offer ongoing support?",
      a: "Yes, we offer various support and maintenance packages to ensure your AI systems continue to perform optimally as your business grows."
    },
    {
      q: "What are your pricing models?",
      a: "We offer both project-based pricing and retainer models. Our goal is to provide flexible options that align with your budget and scaling needs."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          number="04"
          label="Contact Us"
          title="Let's build something." 
          subtitle="Ready to transform your business with AI and automation? Get in touch for a free demo and consultation."
        />

        <div className="grid lg:grid-cols-2 gap-20 mt-20">
          {/* Left Side: Info & FAQ */}
          <div className="space-y-16">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-serif">Get in Touch</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                <GlassCard className="p-8 space-y-4" hover={false}>
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg font-medium">hello@nepabyte.com</p>
                  </div>
                </GlassCard>
                <GlassCard className="p-8 space-y-4" hover={false}>
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg font-medium">Kathmandu, Nepal</p>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-bold font-serif">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <GlassCard key={i} className="p-0 overflow-hidden" hover={false}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-lg font-medium">{faq.q}</span>
                      <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                        <ChevronDown size={24} className="text-brand-orange" />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-8 pb-8 text-white/60 leading-relaxed text-lg">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-orange/5 blur-3xl rounded-full pointer-events-none" />
            <BorderGlow
              className="w-full"
              glowColor="30 100 55"
              backgroundColor="#080808"
              borderRadius={24}
              glowRadius={60}
              glowIntensity={1.2}
              animated={true}
            >
              <div className="relative p-12 space-y-10">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 space-y-6"
                  >
                    <div className="w-20 h-20 rounded-full bg-brand-orange/20 flex items-center justify-center text-brand-orange mx-auto">
                      <Send size={40} />
                    </div>
                    <h3 className="text-3xl font-bold font-serif">Message Sent!</h3>
                    <p className="text-white/60 text-lg">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button variant="ghost" onClick={() => setFormStatus('idle')}>Send Another Message</Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="space-y-4">
                      <h3 className="text-4xl font-bold font-serif">Send us a message.</h3>
                      <p className="text-white/60">Fill out the form below and we'll get back to you shortly.</p>
                    </div>
                    
                    <form className="space-y-8" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-xs text-white/40 uppercase tracking-[2px] font-semibold">Full Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-all focus:bg-white/10"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs text-white/40 uppercase tracking-[2px] font-semibold">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-all focus:bg-white/10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <label className="text-xs text-white/40 uppercase tracking-[2px] font-semibold">Service of Interest</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-all focus:bg-white/10 appearance-none cursor-pointer">
                          <option className="bg-[#080808]">ByteFlow: Automation</option>
                          <option className="bg-[#080808]">ByteBot: AI Agents</option>
                          <option className="bg-[#080808]">ByteBrain: Machine Learning</option>
                          <option className="bg-[#080808]">ByteApps: Custom Apps</option>
                        </select>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs text-white/40 uppercase tracking-[2px] font-semibold">Your Message</label>
                        <textarea 
                          required
                          rows={5}
                          placeholder="Tell us about your project goals..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-all focus:bg-white/10 resize-none"
                        />
                      </div>

                      <Button className="w-full py-5 text-lg" type="submit">
                        {formStatus === 'submitting' ? 'Sending...' : 'Request Free Demo & Consultation'}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </div>
  );
}

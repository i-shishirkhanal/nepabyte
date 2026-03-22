'use client';

import { motion } from 'motion/react';
import { Button, GlassCard, Badge, TextLink, SectionLabel } from '../components/UI';
import { Bot, Zap, BarChart3, Settings2, ArrowRight } from 'lucide-react';
import { CountUp } from '../components/Animations';
import BorderGlow from '../components/BorderGlow';
import Link from 'next/link';

export default function Home() {
  const stats = [
    { value: '2-14', label: 'DAYS TO DELIVER' },
    { value: '4', label: 'CORE SERVICES' },
    { value: '3+', label: 'GLOBAL MARKETS' },
  ];

  const services = [
    {
      num: '01 / 04',
      icon: Settings2,
      title: 'ByteFlow',
      category: 'AUTOMATION',
      desc: 'Connect your apps, eliminate repetitive work, and build intelligent workflows that run 24/7.',
      tags: ['n8n', 'Make', 'Zapier'],
      href: '/services'
    },
    {
      num: '02 / 04',
      icon: Bot,
      title: 'ByteBot',
      category: 'AI CHATBOTS',
      desc: 'WhatsApp bots and website assistants trained on your data — answering customers instantly.',
      tags: ['WhatsApp', 'LLM', 'RAG'],
      href: '/services'
    },
    {
      num: '03 / 04',
      icon: BarChart3,
      title: 'ByteBrain',
      category: 'AI INTEGRATION',
      desc: 'Add AI capabilities into your existing software — smart search and intelligent recommendations.',
      tags: ['OpenAI', 'LangChain', 'FastAPI'],
      href: '/services'
    },
    {
      num: '04 / 04',
      icon: Zap,
      title: 'ByteApps',
      category: 'WEB & MOBILE',
      desc: 'Custom web apps, dashboards, and mobile applications — built clean and shipped fast.',
      tags: ['React', 'Next.js', 'Node.js'],
      href: '/services'
    }
  ];

  const steps = [
    {
      num: '01',
      title: 'Tell us your problem',
      desc: 'One call. You explain the manual work or the bottleneck. We ask the right questions.',
      variant: 'solid'
    },
    {
      num: '02',
      title: 'We build the solution',
      desc: 'We design, build, and test. You see live demos before anything goes live.',
      variant: 'glass-orange'
    },
    {
      num: '03',
      title: 'You save time & money',
      desc: 'Delivered in days. Fully handed over. Support available.',
      variant: 'glass-white'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 md:px-[10vw] pt-20">
        <div className="max-w-[720px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>AI & Automation Agency — Kathmandu, Nepal</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-[80px] md:text-[96px] font-bold leading-[1.0] tracking-[-3px] mt-8 mb-6"
          >
            We automate the work.<br />
            <span className="italic text-white/85 text-[72px] tracking-[-2px]">You run the business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="text-[18px] leading-[1.8] text-white/60 max-w-[520px] mb-10"
          >
            NepaByte builds AI chatbots, workflow automations, and smart integrations for businesses across Nepal, India, and beyond — delivered in days, not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.36 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link href="/contact">
              <Button>Get a Free Demo <ArrowRight size={18} /></Button>
            </Link>
            <Link href="/services">
              <Button variant="ghost">See Our Services</Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48 }}
          >
            <GlassCard className="p-0 overflow-hidden" hover={false}>
              <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.08)]">
                {stats.map((stat, i) => (
                  <div key={i} className="flex-1 p-8">
                    <div className="text-[48px] font-serif font-bold mb-1">
                      <CountUp end={stat.value} />
                    </div>
                    <div className="text-[12px] font-semibold tracking-[2.5px] text-white/45 uppercase">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Decorative Visual */}
        <div className="hidden lg:block absolute right-[8vw] top-1/2 -translate-y-1/2 w-[440px] h-[440px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-full h-full"
          >
            <BorderGlow 
              className="w-full h-full"
              glowColor="20 100 55"
              backgroundColor="transparent"
              borderRadius={60}
              glowRadius={80}
              glowIntensity={1.5}
              animated={true}
              edgeSensitivity={10}
            >
              <div className="w-full h-full glass border-[rgba(255,107,26,0.15)] rounded-[60px] flex items-center justify-center relative overflow-hidden group">
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 25, repeat: Infinity, ease: "linear"
                  }}
                  className="absolute inset-0 opacity-20"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-orange rounded-full shadow-[0_0_30px_#FF6B1A]" />
                </motion.div>
                
                <div className="relative z-10 text-center p-12">
                  <div className="w-20 h-20 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mx-auto mb-6 border border-brand-orange/20">
                    <Zap size={40} fill="currentColor" />
                  </div>
                  <h3 className="text-[32px] font-serif font-bold mb-2">ByteFlow</h3>
                  <p className="text-white/45 text-[14px] uppercase tracking-[3px] font-semibold">Automation Engine</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent pointer-events-none" />
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-[140px] px-6 md:px-[10vw]">
        <div className="max-w-[1440px] mx-auto">
          <SectionLabel>01 — WHAT WE BUILD</SectionLabel>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-[52px] md:text-[64px] leading-[1.05] tracking-[-2px] mb-6">
                Four services.<br />One focused team.
              </h2>
              <p className="text-[18px] leading-[1.8] text-white/60 max-w-[480px]">
                From automation to full AI integration — we pick the right tool and deliver it fast.
              </p>
            </div>
            <Link href="/services">
              <TextLink>Explore all services</TextLink>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-fr">
            {services.map((service, i) => (
              <GlassCard key={i} className="group">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 glass border-[rgba(255,255,255,0.11)] rounded-[12px] flex items-center justify-center text-brand-orange">
                    <service.icon size={24} />
                  </div>
                  <span className="text-[11px] font-semibold tracking-[2.5px] text-brand-orange">{service.num}</span>
                </div>
                <div className="mb-6">
                  <span className="text-[11px] font-semibold tracking-[2.5px] text-brand-orange block mb-2">{service.category}</span>
                  <h3 className="text-[28px] md:text-[34px] tracking-[-1px] mb-4">{service.title}</h3>
                  <p className="text-[15px] leading-[1.7] text-white/55 line-clamp-2">
                    {service.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map(tag => (
                    <div key={tag} className="px-[14px] py-[5px] rounded-[100px] bg-[rgba(255,107,26,0.1)] border border-[rgba(255,107,26,0.22)] text-[12px] text-brand-orange font-medium">
                      {tag}
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-[140px] px-6 md:px-[10vw] border-t border-[rgba(255,255,255,0.07)]">
        <div className="max-w-[1440px] mx-auto">
          <SectionLabel>02 — PROCESS</SectionLabel>
          <h2 className="text-[52px] md:text-[64px] leading-[1.05] tracking-[-2px] mb-6">
            Simple process. Fast results.
          </h2>
          <p className="text-[18px] leading-[1.8] text-white/60 mb-20">
            No lengthy onboarding. No bloated timelines.
          </p>

          <div className="relative flex flex-col md:flex-row gap-12">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-[36px] left-[72px] right-[72px] h-[1px] bg-[rgba(255,107,26,0.25)] z-0" />
            
            {steps.map((step, i) => (
              <div key={i} className="flex-1 relative z-10">
                <div className={`w-[72px] h-[72px] rounded-full flex items-center justify-center text-[24px] font-serif font-bold mb-8 ${
                  step.variant === 'solid' ? 'bg-brand-orange text-white' :
                  step.variant === 'glass-orange' ? 'glass border-[rgba(255,107,26,0.4)] text-brand-orange' :
                  'glass border-[rgba(255,255,255,0.1)] text-white'
                }`}>
                  {step.num}
                </div>
                <h4 className="text-[22px] font-serif font-bold mb-4">{step.title}</h4>
                <p className="text-[15px] leading-[1.7] text-white/55">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-[140px] px-6 md:px-[10vw]">
        <div className="max-w-[1440px] mx-auto">
          <SectionLabel>03 — WHY US</SectionLabel>
          <h2 className="text-[52px] md:text-[64px] leading-[1.05] tracking-[-2px] mb-16">
            Built different.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr">
            {[
              { icon: '⚡', title: 'Fast delivery', desc: 'Most projects delivered in 2 weeks or less.' },
              { icon: '🎯', title: 'Direct access', desc: 'You talk to the people building your product.' },
              { icon: '🔒', title: 'Full ownership', desc: 'Everything handed over. Code, accounts, credentials.' }
            ].map((card, i) => (
              <GlassCard key={i} className="group">
                <div className="w-11 h-11 glass border-[rgba(255,255,255,0.11)] rounded-[12px] flex items-center justify-center text-[20px] mb-6 transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  {card.icon}
                </div>
                <h4 className="text-[22px] font-serif font-bold mb-4">{card.title}</h4>
                <p className="text-[15px] leading-[1.7] text-white/55">
                  {card.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-[100px] px-6 md:px-[10vw] bg-[rgba(255,107,26,0.08)] border-y border-[rgba(255,107,26,0.18)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="text-[160px] font-serif font-bold italic text-[rgba(255,255,255,0.025)]">automate</span>
        </div>
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="text-[56px] leading-[1.05] tracking-[-2px] mb-6">
            Ready to automate your business?
          </h2>
          <p className="text-[18px] leading-[1.8] text-white/55 mb-10">
            Book a free 20-minute demo. No commitment.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button variant="white" className="px-10 py-4">Book a Free Demo</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

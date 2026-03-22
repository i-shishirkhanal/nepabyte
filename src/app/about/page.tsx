'use client';

import { motion } from 'motion/react';
import { GlassCard, SectionTitle, Badge } from '../../components/UI';
import { Rocket, ShieldCheck, Target, Quote, Github, Linkedin, Twitter } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Rocket,
      title: 'Speed',
      desc: 'Rapid development and quick deployment are our hallmarks. We value efficiency without compromising quality, ensuring your solutions are live when you need them.'
    },
    {
      icon: ShieldCheck,
      title: 'Ownership',
      desc: 'We take full accountability for every project. Your success is our success, and we are committed to the outcome as if it were our own business.'
    },
    {
      icon: Target,
      title: 'Results',
      desc: 'We focus on measurable outcomes. Our solutions are designed to deliver real-world business value, from cost savings to revenue growth.'
    }
  ];

  const team = [
    {
      name: 'Aarav Sharma',
      role: 'Founder & CEO',
      image: 'https://picsum.photos/seed/aarav/400/400',
      bio: 'Visionary leader with 10+ years in AI and automation.'
    },
    {
      name: 'Priya Patel',
      role: 'Lead AI Engineer',
      image: 'https://picsum.photos/seed/priya/400/400',
      bio: 'Expert in NLP and deep learning architectures.'
    },
    {
      name: 'Rohan Gupta',
      role: 'Product Strategist',
      image: 'https://picsum.photos/seed/rohan/400/400',
      bio: 'Specialist in bridging technology with business goals.'
    }
  ];

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          number="03"
          label="Our Story"
          title="A small team building real things." 
          subtitle="NepaByte was founded on the belief that technology should serve humanity, not the other way around."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-40">
          <GlassCard className="relative p-12" hover={false}>
            <Quote className="text-brand-orange/10 absolute -top-4 -left-4" size={80} />
            <div className="relative z-10 space-y-8">
              <p className="text-3xl md:text-4xl font-serif italic leading-tight">
                "Our mission is to empower businesses through intelligent automation, 
                creating more time for human innovation."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-brand-orange" />
                <p className="text-lg font-medium text-white/80">Aarav Sharma, Founder & CEO</p>
              </div>
            </div>
          </GlassCard>

          <div className="space-y-8 text-xl text-white/60 leading-relaxed">
            <p>
              We are a boutique agency specializing in artificial intelligence and workflow automation, 
              dedicated to crafting intelligent solutions that drive efficiency and unlock new possibilities for our clients.
            </p>
            <p>
              We blend cutting-edge AI with practical expertise to deliver tangible, transformative results. 
              Our approach is personal, cinematic, and deeply focused on the human impact of technology.
            </p>
          </div>
        </div>

        {/* Values */}
        <section className="mb-40">
          <SectionTitle 
            title="Our Core Values" 
            subtitle="The principles that guide every decision we make and every line of code we write."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 auto-rows-fr">
            {values.map((value, i) => (
              <GlassCard key={i} className="space-y-6 p-10 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  <value.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold">{value.title}</h4>
                <p className="text-lg text-white/60 leading-relaxed">{value.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <SectionTitle 
            title="Meet the Team" 
            subtitle="The brilliant minds behind NepaByte's innovative solutions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-4 group" hover={false}>
                  <div className="relative aspect-square overflow-hidden rounded-[14px] mb-8">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="px-4 pb-4 space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold">{member.name}</h4>
                      <p className="text-brand-orange font-medium">{member.role}</p>
                    </div>
                    <p className="text-white/60">{member.bio}</p>
                    <div className="flex gap-4 pt-2">
                      <button className="text-white/40 hover:text-white transition-colors"><Linkedin size={18} /></button>
                      <button className="text-white/40 hover:text-white transition-colors"><Twitter size={18} /></button>
                      <button className="text-white/40 hover:text-white transition-colors"><Github size={18} /></button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

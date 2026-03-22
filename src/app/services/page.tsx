'use client';

import { motion } from 'motion/react';
import { GlassCard, SectionTitle, Button, Badge } from '../../components/UI';
import { Workflow, MessageSquare, Brain, Layout } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const detailedServices = [
    {
      number: '01',
      title: 'ByteFlow: Intelligent Automation Workflows',
      desc: 'Automate complex business processes and connect your entire app ecosystem. We design custom workflows that save time and reduce errors by eliminating manual data entry and repetitive tasks.',
      tags: ['n8n', 'Make.com', 'Zapier', 'Custom APIs'],
      icon: Workflow,
      image: 'https://picsum.photos/seed/flow/800/600'
    },
    {
      number: '02',
      title: 'ByteBot: Advanced AI Chatbots & Agents',
      desc: 'Deploy intelligent chatbots and autonomous agents that understand and respond to your customers 24/7. Enhance support and engagement with natural language processing that feels human.',
      tags: ['OpenAI', 'Dialogflow', 'Rasa', 'LangChain'],
      icon: MessageSquare,
      image: 'https://picsum.photos/seed/bot/800/600'
    },
    {
      number: '03',
      title: 'ByteBrain: Machine Learning & Data Analytics',
      desc: 'Unlock the power of your data with custom machine learning models. We build solutions that predict trends, optimize decisions, and personalize experiences based on deep data insights.',
      tags: ['TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas'],
      icon: Brain,
      image: 'https://picsum.photos/seed/brain/800/600'
    },
    {
      number: '04',
      title: 'ByteApps: AI-Integrated Custom Applications',
      desc: 'Build next-generation web and mobile applications with embedded AI capabilities. From smart dashboards to intelligent tools, we bring your vision to life with a focus on user experience.',
      tags: ['React', 'Next.js', 'React Native', 'Node.js', 'Tailwind CSS'],
      icon: Layout,
      image: 'https://picsum.photos/seed/apps/800/600'
    }
  ];

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          number="02"
          label="Our Services"
          title="Everything we build." 
          subtitle="We craft intelligent AI & automation solutions that streamline operations and drive growth for your business."
        />

        <div className="space-y-40 mt-32">
          {detailedServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <service.icon size={24} />
                  </div>
                  <span className="text-4xl font-serif italic text-white/10">{service.number}</span>
                </div>
                
                <h3 className="text-4xl font-bold font-serif leading-tight">{service.title}</h3>
                <p className="text-xl text-white/60 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/40 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4">
                  <Link href="/contact">
                    <Button variant="ghost">Inquire about {service.title.split(':')[0]}</Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full group">
                <GlassCard className="p-3 overflow-hidden" hover={false}>
                  <div className="relative overflow-hidden rounded-[14px]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
                  </div>
                </GlassCard>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="mt-40">
          <GlassCard className="relative py-24 px-12 text-center overflow-hidden" hover={false}>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-orange/5 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <Badge>Get Started</Badge>
              <h2 className="text-5xl font-bold font-serif leading-tight">Ready to transform your digital presence?</h2>
              <p className="text-xl text-white/60 leading-relaxed">
                Join next-generation web and mobile applications with embedded AI capabilities. 
                From smart dashboards to intelligent tools, we bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto">Start Your Project</Button>
                </Link>
                <div className="text-left hidden sm:block border-l border-white/10 pl-8">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Direct Contact</p>
                  <p className="text-lg font-medium">hello@nepabyte.com</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}

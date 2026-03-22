'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard, SectionTitle, Badge } from '../../components/UI';

const projects = [
  {
    title: 'Intelligent Workflow Automator',
    category: 'Automation',
    desc: 'A comprehensive automation engine that connects disparate legacy systems with modern AI-driven workflows, reducing manual labor by 70%.',
    tech: ['Python', 'OpenAI', 'Zapier', 'Custom APIs'],
    image: 'https://picsum.photos/seed/proj1/800/600'
  },
  {
    title: 'Customer Service AI Assistant',
    category: 'AI Chatbot',
    desc: 'An advanced conversational agent capable of handling complex multi-step customer inquiries with human-like empathy and 98% accuracy.',
    tech: ['Python', 'OpenAI', 'LangChain', 'Pinecone'],
    image: 'https://picsum.photos/seed/proj2/800/600'
  },
  {
    title: 'Sales Prediction Engine',
    category: 'Machine Learning',
    desc: 'A predictive analytics platform that analyzes historical data to forecast future sales trends with a 95% confidence interval.',
    tech: ['TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
    image: 'https://picsum.photos/seed/proj3/800/600'
  },
  {
    title: 'E-commerce Recommendation System',
    category: 'Data Analytics',
    desc: 'A real-time recommendation engine that personalizes product suggestions based on user behavior and purchase history.',
    tech: ['React', 'Node.js', 'Redis', 'AWS'],
    image: 'https://picsum.photos/seed/proj4/800/600'
  },
  {
    title: 'AI Intelligent Workflow Engine',
    category: 'Automation',
    desc: 'An autonomous workflow engine that self-optimizes based on performance metrics and historical success rates.',
    tech: ['Python', 'OpenAI', 'Node.js', 'Docker'],
    image: 'https://picsum.photos/seed/proj5/800/600'
  },
  {
    title: 'Solution Forms AI Compliant',
    category: 'Web Development',
    desc: 'A secure, AI-powered form processing system that automatically validates and categorizes submissions for compliance.',
    tech: ['React', 'Node.js', 'Azure', 'OpenAI'],
    image: 'https://picsum.photos/seed/proj6/800/600'
  }
];

const industries = ['E-commerce', 'Healthcare', 'Finance', 'Logistics', 'Real Estate'];

export default function PortfolioPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          number="01"
          label="Our Portfolio"
          title="What we've built." 
          subtitle="A selection of our most impactful AI and automation solutions that drive growth and efficiency for modern businesses."
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-20">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-brand-orange border-brand-orange text-white shadow-[0_0_20px_rgba(255,107,26,0.3)]' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <GlassCard className="p-4 group h-full flex flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                       <Badge>{project.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="px-4 pb-4 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors">{project.title}</h3>
                    <p className="text-white/60 leading-relaxed mb-8 flex-grow">
                      {project.desc}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-3 py-1.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Industries */}
        <div className="mt-40 text-center">
          <SectionTitle 
            title="Industries we serve." 
            subtitle="Our expertise spans across various sectors, delivering tailored AI solutions for every challenge."
          />
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {industries.map((industry, i) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-10 py-6 glass rounded-[14px] text-lg font-medium border-white/5 hover:border-brand-orange/30 transition-colors"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-40">
          <GlassCard className="relative py-20 px-12 text-center max-w-5xl mx-auto overflow-hidden" hover={false}>
            <div className="absolute -top-10 -left-10 text-[200px] font-serif italic text-white/[0.02] select-none">"</div>
            <div className="relative z-10">
              <p className="text-3xl md:text-4xl font-serif italic mb-12 leading-tight">
                "NepaByte's AI solutions revolutionized our operations. We've seen a 50% 
                increase in efficiency and significant cost savings. Their expertise is unmatched."
              </p>
              <div className="flex flex-col items-center gap-4">
                <img 
                   src="https://picsum.photos/seed/alex/120/120" 
                  alt="Alexander Davis" 
                  className="w-20 h-20 rounded-full border-2 border-brand-orange/20 p-1"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-xl font-bold">Alexander Davis</p>
                  <p className="text-brand-orange font-medium">CEO, TechFlow Dynamics</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

'use client';

import { motion } from 'motion/react';
import { ReactNode, Key } from 'react';
import BorderGlow from './BorderGlow';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  key?: Key;
}

export const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-full h-full"
  >
    <BorderGlow borderRadius={20} className="w-full h-full">
      <div className={`h-full flex flex-col p-10 ${hover ? 'glass-hover' : ''} ${className}`}>
        {children}
      </div>
    </BorderGlow>
  </motion.div>
);

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'ghost' | 'white';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, onClick, variant = 'primary', className = "", type = "button" }: ButtonProps) => {
  const baseStyles = "px-8 py-[14px] rounded-[10px] font-semibold transition-all duration-250 active:scale-95 flex items-center justify-center gap-2";
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orange-dark hover:-translate-y-[2px] hover:shadow-[0_0_32px_rgba(255,107,26,0.45)]",
    ghost: "bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.14)] text-white hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)]",
    white: "bg-white text-brand-orange hover:bg-brand-orange hover:text-white"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export const Badge = ({ children }: { children: ReactNode }) => (
  <div className="glass rounded-[100px] px-[14px] py-[5px] inline-flex items-center gap-2 border-[rgba(255,107,26,0.22)] bg-[rgba(255,107,26,0.1)]">
    <div className="w-[6px] h-[6px] rounded-full bg-brand-orange animate-pulse-opacity" />
    <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-brand-orange">
      {children}
    </span>
  </div>
);

export const TextLink = ({ children, onClick }: { children: ReactNode; onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className="group flex items-center gap-2 text-brand-orange font-medium hover:text-[#FF9A3C] transition-colors"
  >
    {children}
    <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
  </button>
);

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="text-[11px] font-semibold uppercase tracking-[2.5px] text-brand-orange block mb-4">
    {children}
  </span>
);

export const SectionTitle = ({ title, subtitle, label, number }: { title: string; subtitle?: string; label?: string; number?: string }) => (
  <div className="relative mb-16">
    {number && (
      <span className="absolute -top-24 -left-12 text-[200px] font-bold italic text-white/[0.03] font-serif pointer-events-none select-none">
        {number}
      </span>
    )}
    <div className="relative z-10">
      {label && <SectionLabel>{label}</SectionLabel>}
      <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const FastCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('fast-cursor');
    const ring = document.getElementById('fast-cursor-ring');
    if (!cursor || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update dot immediately for raw speed
      cursor.style.setProperty('--x', `${mouseX}px`);
      cursor.style.setProperty('--y', `${mouseY}px`);
    };

    const animate = () => {
      // Smooth follow for the ring
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      
      ring.style.setProperty('--x', `${ringX}px`);
      ring.style.setProperty('--y', `${ringY}px`);
      
      requestAnimationFrame(animate);
    };

    const handleMouseDown = () => {
      cursor.classList.add('active');
      ring.classList.add('active');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('active');
      ring.classList.remove('active');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <div id="fast-cursor" className="fast-cursor-dot" />
      <div id="fast-cursor-ring" className="fast-cursor-ring" />
    </div>
  );
};

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-[2px] bg-brand-orange z-[2000] transition-all duration-100" style={{ width: `${progress}%` }} />
  );
};

export const OrbBackground = () => {
  const pathname = usePathname();
  
  const orbConfigs: Record<string, { orb1: string; orb2: string; orb3: string }> = {
    '/': {
      orb1: "top-[-10%] right-[-10%]",
      orb2: "bottom-[-10%] left-[-10%]",
      orb3: "top-[40%] left-[20%]"
    },
    '/services': {
      orb1: "top-[10%] left-[-10%]",
      orb2: "bottom-[20%] right-[-10%]",
      orb3: "top-[60%] left-[40%]"
    },
    '/about': {
      orb1: "top-[-5%] left-[10%]",
      orb2: "bottom-[10%] right-[10%]",
      orb3: "top-[30%] right-[-5%]"
    },
    '/work': {
      orb1: "top-[20%] right-[-10%]",
      orb2: "bottom-[-5%] left-[30%]",
      orb3: "top-[70%] left-[-5%]"
    },
    '/contact': {
      orb1: "top-[-10%] left-[-10%]",
      orb2: "bottom-[30%] right-[20%]",
      orb3: "top-[50%] right-[-10%]"
    }
  };

  const config = orbConfigs[pathname] || orbConfigs['/'];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-100" />
      <div className={`orb w-[700px] h-[700px] bg-[#FF6B1A] opacity-[0.18] blur-[140px] ${config.orb1}`} />
      <div className={`orb w-[500px] h-[500px] bg-[#FF9A3C] opacity-[0.12] blur-[120px] ${config.orb2}`} />
      <div className={`orb w-[400px] h-[400px] bg-[#CC3D00] opacity-[0.08] blur-[100px] ${config.orb3}`} />
    </div>
  );
};

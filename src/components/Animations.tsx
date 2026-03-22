'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CountUp = ({ end, duration = 2 }: { end: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericEnd = parseFloat(end.replace(/[^0-9.]/g, ''));
  const suffix = end.replace(/[0-9.]/g, '');

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * numericEnd));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [numericEnd, duration]);

  return <span>{count}{suffix}</span>;
};

'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MetricCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export function MetricCounter({ value, label, suffix = '' }: MetricCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl font-bold text-[#0D3B66] dark:text-[#00A8E8] md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 md:text-base">
        {label}
      </div>
    </motion.div>
  );
}

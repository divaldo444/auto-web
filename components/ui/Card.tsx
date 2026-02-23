import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{
        boxShadow: "0 20px 40px -10px rgba(46, 109, 157, 0.2)",
        borderColor: "rgba(46, 109, 157, 0.4)"
      }}
      className={twMerge(
        "relative bg-steel/40 backdrop-filter backdrop-blur-md border border-white/5 rounded-2xl p-6 overflow-hidden group transition-colors duration-300 cursor-pointer",
        className
      )}
    >
      {/* Subtle gradient glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-electric/5 via-transparent to-transparent" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

import React from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className, children, fullWidth = false }) => {
  return (
    <section id={id} className={twMerge("relative py-20 md:py-32 overflow-hidden", className)}>
      <div className={twMerge("relative z-10 mx-auto px-4 sm:px-6 lg:px-8", !fullWidth && "max-w-7xl")}>
        {children}
      </div>
    </section>
  );
};

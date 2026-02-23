import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  withBeam?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  withBeam = false,
  className,
  children,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midnight disabled:opacity-50 disabled:cursor-not-allowed uppercase font-sans cursor-pointer";
  
  const variants = {
    primary: "bg-steel text-silver hover:bg-electric shadow-lg shadow-black/40",
    secondary: "bg-electric text-white hover:bg-electric/90 shadow-lg shadow-electric/20",
    outline: "border border-gunmetal text-silver hover:border-electric hover:text-white bg-transparent backdrop-blur-sm",
    ghost: "text-gunmetal hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <motion.button
      whileHover={{ boxShadow: "0 8px 30px -10px rgba(46, 109, 157, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      className={twMerge(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {withBeam && (
        <span className="absolute inset-0 w-full h-full overflow-hidden rounded-lg pointer-events-none">
          <span className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-beam" />
        </span>
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};
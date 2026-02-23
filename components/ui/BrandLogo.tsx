import React from 'react';
import { twMerge } from 'tailwind-merge';

interface BrandLogoProps {
  className?: string;
  hideText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className, hideText = false }) => {
  return (
    <div className={twMerge("flex items-center gap-2.5 select-none", className)}>
      {/* G Icon */}
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
        <img
          src="/logo-icon.png"
          alt="Garazen Auto logo"
          className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(46,109,157,0.4)]"
        />
      </div>

      {/* GARAZEN AUTO text — nudged down so "GARAZEN" aligns with G icon center */}
      {!hideText && (
        <div className="relative flex-shrink-0 translate-y-[5px]">
          <img
            src="/logo-text.png"
            alt="Garazen Auto"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </div>
      )}
    </div>
  );
};

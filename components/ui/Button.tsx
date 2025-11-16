
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asLink?: boolean;
  href?: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, asLink = false, href, className = '', ...props }) => {
  const baseClasses = "bg-brand-orange text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 text-lg md:text-xl";
  
  if (asLink) {
    return (
      <a href={href} className={`${baseClasses} inline-block text-center ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

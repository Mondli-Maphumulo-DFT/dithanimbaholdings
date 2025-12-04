import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  variant = 'primary', 
  onClick, 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 uppercase tracking-wide";
  
  const variants = {
    primary: "border-transparent text-black bg-gold-500 hover:bg-gold-400 shadow-lg shadow-gold-500/30",
    secondary: "border-transparent text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm",
    outline: "border-gold-500 text-gold-600 bg-transparent hover:bg-gold-500 hover:text-white"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
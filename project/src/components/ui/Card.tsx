import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated';
  onClick?: () => void;
  isInteractive?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  onClick,
  isInteractive = false,
}) => {
  const baseStyles = 'bg-white rounded-lg overflow-hidden';
  
  const variantStyles = {
    default: 'shadow',
    bordered: 'border border-gray-200',
    elevated: 'shadow-md',
  };
  
  const interactiveStyles = isInteractive
    ? 'cursor-pointer transition-all hover:shadow-md'
    : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      onClick={onClick}
      whileHover={isInteractive ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
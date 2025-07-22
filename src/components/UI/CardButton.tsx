import React from 'react';
import { motion } from 'framer-motion';

interface CardButtonProps {
  title: string;
  expanded: boolean;
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
  animationProps?: any;
}

const CardButton: React.FC<CardButtonProps> = ({
  title,
  expanded,
  onClick,
  className = '',
  children,
  animationProps = {},
}) => (
  <motion.button
    onClick={onClick}
    className={`border border-[#66708533] rounded-[8px] px-4 py-8 text-white text-center font-bold transition-all duration-200 font-medium bg-transparent hover:border-[#90BEFF] ${expanded ? 'border-3 border-[#90BEFF]' : ''} ${className}`}
    style={{ minHeight: '120px', minWidth: '220px', maxWidth: '220px' }}
    {...animationProps}
    whileHover={{ scale: 1.04 }}
  >
    {title}
    {children}
  </motion.button>
);

export default CardButton; 
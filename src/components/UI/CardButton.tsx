import React from 'react';
import { motion } from 'framer-motion';

interface CardButtonProps {
  title: string;
  expanded: boolean;
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
  animationProps?: any;
  surface?: "dark" | "light";
}

const CardButton: React.FC<CardButtonProps> = ({
  title,
  expanded,
  onClick,
  className = "",
  children,
  animationProps = {},
  surface = "dark",
}) => {
  const light = surface === "light";
  const base = light
    ? `rounded-[8px] border border-vl-brown/25 bg-vl-cream-deep/80 px-4 py-8 text-center font-bold font-medium text-vl-ink transition-all duration-200 hover:border-vl-brown/50 ${expanded ? "border-vl-brown border-2 ring-1 ring-vl-brown/20" : ""}`
    : `rounded-[8px] border border-[#66708533] bg-transparent px-4 py-8 text-center font-bold font-medium text-white transition-all duration-200 hover:border-[#90BEFF] ${expanded ? "border-3 border-[#90BEFF]" : ""}`;
  return (
  <motion.button
    onClick={onClick}
    className={`${base} ${className}`}
    style={{ minHeight: '120px', minWidth: '220px', maxWidth: '220px' }}
    {...animationProps}
    whileHover={{ scale: 1.04 }}
  >
    {title}
    {children}
  </motion.button>
  );
};

export default CardButton; 
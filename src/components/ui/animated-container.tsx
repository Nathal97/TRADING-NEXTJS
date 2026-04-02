"use client"; // Le client s'arrête ici

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function AnimatedContainer({ children, delay = 0 }: { children: ReactNode, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}
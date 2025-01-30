'use client';
import { motion } from 'framer-motion';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0 }}
      transition={{
        duration: 2.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }}
    >
      {children}
    </motion.div>
  );
}

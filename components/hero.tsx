'use client';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <div className="relative h-[60vh] w-full bg-[#E9E3DD] flex items-center justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl font-serif mb-4">A Welsh hug in a cup.</h1>
        <p className="text-xl">Find your quiet corner in Cardiff.</p>
      </motion.div>
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
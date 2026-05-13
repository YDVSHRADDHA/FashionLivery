"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const CreativeBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Advanced Parallax & Visual Shifts
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.4]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 0.4, 0.4, 0.2]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["0px", "4px", "10px"]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
      {/* Primary Fashion Artifact (The Emerald Dress/Atelier) */}
      <motion.div 
        style={{ y, scale, rotate, opacity, filter: `blur(${blur})` }}
        className="relative w-full h-[120vh] origin-center"
      >
        <Image 
          src="/product-5.png" 
          alt="LIVERY Background Artifact" 
          fill 
          className="object-cover transition-all duration-[3s] ease-in-out"
          priority
        />
        
        {/* Creative Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] opacity-60" />
        
        {/* Animated Neural Mesh */}
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
        />
      </motion.div>

      {/* Dynamic Light Leaks */}
      <motion.div 
        animate={{ 
          x: ["-10%", "10%", "-10%"],
          y: ["-10%", "10%", "-10%"],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      >
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-accent/5 blur-[180px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-white/5 blur-[180px] rounded-full" />
      </motion.div>
    </div>
  );
};

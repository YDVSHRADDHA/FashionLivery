"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Scan, Maximize, Ruler, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export const Hero = () => {
  const router = useRouter();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const scale = useTransform(scrollY, [0, 500], [1.1, 1.3]);
  const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth - 0.5) * 20, y: (e.clientY / window.innerHeight - 0.5) * 20 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] pt-24 md:pt-32">
      {/* Cinematic Background with Parallax */}
      <motion.div style={{ y: y1, scale }} className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Luxury Fashion Atelier" 
          fill 
          className="object-cover opacity-50 transition-opacity duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.9)_100%)]" />
      </motion.div>

      {/* Floating Neural Orbs */}
      <motion.div 
        animate={{ x: mousePos.x, y: mousePos.y }}
        className="absolute inset-0 z-10 pointer-events-none opacity-30"
      >
        <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-accent/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-white/5 blur-[150px] rounded-full" />
      </motion.div>

      <div className="relative z-20 w-full max-w-[1800px] px-6 md:px-12 flex flex-col items-center">
        {/* Top Feature Tag */}
        <div className="mb-12">
          <Reveal>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-4 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl text-silk text-[9px] uppercase tracking-[0.6em] font-bold shadow-2xl"
            >
              <Zap size={14} className="text-accent fill-accent" /> Digital Couture Experience
            </motion.div>
          </Reveal>
        </div>

        {/* Main Title with Mask Reveal & Mouse Tracking */}
        <motion.div 
          style={{ opacity: textOpacity, x: mousePos.x * 0.5, y: mousePos.y * 0.5 }}
          className="relative text-center mb-16"
        >
          <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[15vw] font-display font-bold leading-[0.8] uppercase tracking-tighter text-silk"
            >
              LIVERY
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10vw] md:text-[12vw] font-display italic font-normal leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-silk/20 via-silk to-silk/20"
            >
              Reimagined
            </motion.h1>
          </div>

          {/* Floating HUD Elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -left-32 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-left glass-morphism p-5 rounded-2xl border-white/5">
               <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Ruler size={20} />
               </div>
               <div>
                  <p className="text-[8px] uppercase tracking-widest text-silk/40">Body Scan</p>
                  <p className="text-xs font-display text-silk uppercase tracking-tighter">Precise Mapping</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute -right-32 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 text-right glass-morphism p-5 rounded-2xl border-white/5 flex-row-reverse">
               <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Scan size={20} />
               </div>
               <div>
                  <p className="text-[8px] uppercase tracking-widest text-silk/40">Visual DNA</p>
                  <p className="text-xs font-display text-silk uppercase tracking-tighter">AI Synthesis</p>
               </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Paragraph with Reveal */}
        <Reveal delay={0.6}>
          <p className="text-silk/40 text-lg md:text-2xl max-w-4xl font-light leading-relaxed mb-20 px-4">
            Step into the <span className="text-silk italic font-normal">Spatial Try-On Room</span>. A behavioral-led digital atelier engineered to synthesize your silhouette into couture excellence.
          </p>
        </Reveal>

        {/* Action Buttons with Advanced Hover */}
        <div className="flex flex-col sm:flex-row items-center gap-10">
          <Reveal delay={0.8}>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#FFF" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push('/waitlist')}
              className="group relative px-20 py-7 bg-silk text-onyx text-[10px] uppercase tracking-[0.5em] font-bold rounded-full overflow-hidden shadow-[0_0_60px_rgba(255,255,255,0.1)] transition-colors"
            >
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center gap-4">
                Launch Spatial Trial <Maximize size={16} />
              </span>
            </motion.button>
          </Reveal>
          
          <Reveal delay={1}>
            <motion.button
              onClick={() => router.push('/discover')}
              className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-silk/40 hover:text-silk transition-all"
            >
              Explore Archive <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </motion.button>
          </Reveal>
        </div>
      </div>

      {/* Decorative Side Text */}
      <div className="absolute left-12 bottom-12 hidden lg:block overflow-hidden">
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 2 }}
          className="text-[8px] uppercase tracking-[1em] text-silk/10 vertical-text"
        >
          ATELIER LIVERY — AW26
        </motion.p>
      </div>

      <div className="absolute right-12 bottom-12 hidden lg:block overflow-hidden">
        <motion.p 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 2 }}
          className="text-[8px] uppercase tracking-[1em] text-silk/10 vertical-text"
        >
          BEHAVIORAL INTELLIGENCE
        </motion.p>
      </div>
    </section>
  );
};

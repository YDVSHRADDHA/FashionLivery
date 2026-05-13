"use client";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { Sparkles, Apple, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-onyx text-silk overflow-hidden relative">
      <Navbar />
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-accent/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      <section className="pt-40 pb-20 px-6 md:px-12 flex items-center justify-center min-h-screen">
        <div className="max-w-3xl w-full text-center">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-12"
              >
                <header className="space-y-6">
                  <Reveal>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-accent text-[9px] uppercase tracking-[0.4em] font-bold">
                      <Sparkles size={12} /> Priority Access
                    </div>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tighter leading-[1.1]">The Future <br /><span className="italic font-normal">Is Mobile</span></h1>
                  </Reveal>
                  <Reveal delay={0.3}>
                    <p className="text-silk/40 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto">
                      Launching soon on iOS, Android, and Vision Pro. Join 12,000+ fashion innovators in the early access queue.
                    </p>
                  </Reveal>
                </header>

                <div className="flex flex-wrap justify-center gap-8 py-8 opacity-40">
                   <div className="flex items-center gap-3">
                      <Apple size={24} />
                      <span className="text-[10px] uppercase tracking-widest">iOS</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Smartphone size={24} />
                      <span className="text-[10px] uppercase tracking-widest">Android</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-sm border-2 border-silk/40" />
                      <span className="text-[10px] uppercase tracking-widest">Vision Pro</span>
                   </div>
                </div>

                <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR DIGITAL ADDRESS"
                    className="w-full bg-white/5 border border-white/10 rounded-full py-6 px-10 text-xs tracking-[0.2em] outline-none focus:border-accent/40 transition-all placeholder:text-silk/20"
                  />
                  <button 
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-silk text-onyx rounded-full flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <ArrowRight size={18} />
                  </button>
                </form>

                <p className="text-[9px] text-silk/20 uppercase tracking-[0.3em]">
                  By joining, you agree to receive digital dispatches from LIVERY.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-10"
              >
                <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center text-accent mx-auto">
                   <CheckCircle2 size={48} strokeWidth={1} />
                </div>
                <h2 className="text-4xl md:text-6xl font-display italic">You Are <span className="font-normal not-italic uppercase">In Line</span></h2>
                <div className="space-y-4">
                   <p className="text-silk/40 text-[10px] uppercase tracking-[0.5em]">Current Position</p>
                   <p className="text-4xl font-display font-bold text-accent">#12,842</p>
                </div>
                <p className="text-silk/40 text-sm font-light max-w-sm mx-auto leading-relaxed">
                  We will notify you the moment your style DNA is ready for the spatial try-on room.
                </p>
                <button 
                   onClick={() => window.location.href = '/'}
                   className="text-[10px] uppercase tracking-[0.4em] text-silk/60 hover:text-silk transition-colors border-b border-white/10 pb-2"
                >
                   Return to Archive
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}

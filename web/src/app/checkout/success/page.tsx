"use client";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { useLiveryStore } from "@/store/useLiveryStore";
import Link from "next/link";
import { CheckCircle, ArrowRight, Package, Calendar } from "lucide-react";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function SuccessPage() {
  const { clearCart } = useLiveryStore();

  useEffect(() => {
    clearCart();
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#F5F5F7", "#050505"]
    });
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-onyx text-silk">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-accent/10 text-accent mb-12">
              <CheckCircle size={48} strokeWidth={1} />
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-8xl font-display uppercase tracking-tight mb-8">Purchase <br /><span className="italic font-normal">Confirmed</span></h1>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="text-silk/40 text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed mb-16">
              Your fashion artifacts are being prepared by our atelier. A confirmation has been sent to your digital identity.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Reveal delay={0.4}>
              <div className="glass-morphism p-8 rounded-2xl border-white/5 text-left space-y-4">
                <Package className="text-accent" size={24} />
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold">Estimated Arrival</h3>
                <p className="text-xl font-display">May 16 — May 18, 2026</p>
              </div>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="glass-morphism p-8 rounded-2xl border-white/5 text-left space-y-4">
                <Calendar className="text-accent" size={24} />
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold">Order Reference</h3>
                <p className="text-xl font-display">#LV-882-991</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.6}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link href="/discover" className="px-12 py-5 bg-silk text-onyx text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all flex items-center gap-3">
                Continue Discovering <ArrowRight size={14} />
              </Link>
              <Link href="/" className="text-[10px] uppercase tracking-[0.4em] text-silk/40 hover:text-silk transition-colors">
                Back to Archive
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

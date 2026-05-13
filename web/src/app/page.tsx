"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Sparkles, Zap, MessageSquare, ArrowUpRight, Apple } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DNAMatrix } from "@/components/DNAMatrix";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const featuredProducts = [
    { id: "1", name: "Atelier Overcoat", brand: "Livery Core", price: "$1,200", match: "98%", image: "/product-1.png" },
    { id: "5", name: "Sculptural Dress", brand: "Atelier Livery", price: "$2,450", match: "99%", image: "/product-5.png" },
    { id: "3", name: "Heritage Chelsea", brand: "Craft & Co", price: "$890", match: "94%", image: "/product-3.png" },
    { id: "2", name: "Silk Drape Blouse", brand: "Minimalist", price: "$650", match: "96%", image: "/product-2.png" },
  ];

  return (
    <main className="min-h-screen bg-onyx text-silk selection:bg-accent/30">
      <Navbar />
      <Hero />
      
      {/* AI Intelligence Showcase */}
      <section id="discover" className="py-40 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] -z-10 rounded-full" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <Reveal>
                <span className="text-accent text-[10px] uppercase tracking-[0.4em] mb-6 block font-bold">The Engine</span>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="text-5xl md:text-7xl font-display mb-10 leading-[1.05] uppercase tracking-tighter">Behavioral <br /><span className="italic font-normal">Intelligence</span></h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-silk/60 text-lg md:text-xl mb-16 font-light leading-relaxed max-w-xl">
                  LIVERY doesn't just suggest clothes. It decodes your aesthetic DNA through real-time interaction analysis, creating a living profile that evolves with your lifestyle.
                </p>
              </Reveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <Reveal delay={0.5}>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent bg-white/5">
                      <Sparkles size={20} />
                    </div>
                    <h3 className="text-sm uppercase tracking-[0.2em] font-semibold">Visual Mapping</h3>
                    <p className="text-xs text-silk/40 leading-relaxed">Neural analysis of silhouette, texture, and palette affinity.</p>
                  </div>
                </Reveal>
                <Reveal delay={0.6}>
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent bg-white/5">
                      <Zap size={20} />
                    </div>
                    <h3 className="text-sm uppercase tracking-[0.2em] font-semibold">Intent Prediction</h3>
                    <p className="text-xs text-silk/40 leading-relaxed">Anticipates your needs based on seasonal context and mood signals.</p>
                  </div>
                </Reveal>
              </div>
            </div>
            
            <div className="relative aspect-[4/5] lg:aspect-square">
              <DNAMatrix />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recommendations Feed */}
      <section className="py-40 px-6 border-t border-white/5 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <span className="text-silk/40 text-[10px] uppercase tracking-[0.5em] mb-6 block font-medium">Curated Selection</span>
              </Reveal>
              <Reveal delay={0.3}>
                <h2 className="text-5xl md:text-6xl font-display uppercase tracking-tighter">Daily <span className="italic font-normal">Manifesto</span></h2>
              </Reveal>
            </div>
            <Reveal delay={0.4}>
              <button 
                onClick={() => router.push('/discover')}
                className="group text-xs uppercase tracking-[0.3em] text-silk/60 hover:text-silk flex items-center gap-3 border-b border-white/10 pb-2 transition-all"
              >
                Explore All Picks <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={0.15 * i} />
            ))}
          </div>
        </div>
      </section>

      {/* Spatial Try-On Room / Mobile App Preview */}
      <section className="py-40 px-6 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] flex items-center justify-center">
               {/* Mobile Frame Mockup */}
               <div className="w-[280px] h-[580px] bg-onyx border-[8px] border-[#1a1a1a] rounded-[3rem] shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent z-10 opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center space-y-6">
                     <div className="w-16 h-16 rounded-full glass-morphism flex items-center justify-center text-accent animate-pulse">
                        <Sparkles size={24} />
                     </div>
                     <h4 className="text-xl font-display italic">Spatial Room</h4>
                     <p className="text-[10px] text-silk/40 uppercase tracking-widest leading-relaxed">
                        Scanning silhouette... <br />
                        Mapping 204 style points...
                     </p>
                     <div className="w-full h-32 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center">
                        <span className="text-[8px] text-silk/20 tracking-[0.5em]">CAMERA ACTIVE</span>
                     </div>
                  </div>
               </div>
               {/* Floating Glow */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 blur-[100px] -z-10" />
            </div>
            
            <div className="order-1 lg:order-2">
              <Reveal>
                <span className="text-accent text-[10px] uppercase tracking-[0.5em] mb-6 block font-bold">LIVERY Mobile</span>
              </Reveal>
              <Reveal delay={0.2}>
                <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-10 leading-[1.1]">The Spatial <br /><span className="italic font-normal">Try-On Room</span></h2>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-silk/50 text-lg md:text-xl mb-12 font-light leading-relaxed">
                  Launching soon on iOS and Vision Pro. Our working model uses advanced neural radiance fields (NeRF) to create a perfect digital twin for accurate garment drape and silhouette matching.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-6">
                   <div className="px-8 py-4 border border-white/10 rounded-full flex items-center gap-4 bg-white/5 grayscale">
                      <div className="w-8 h-8 rounded-full bg-silk/10 flex items-center justify-center text-silk/40">
                         <Apple size={16} />
                      </div>
                      <div className="text-left">
                         <p className="text-[8px] text-silk/20 uppercase tracking-widest">Available soon on</p>
                         <p className="text-[10px] text-silk/60 uppercase tracking-widest font-bold">App Store</p>
                      </div>
                   </div>
                   <Link 
                      href="/waitlist"
                      className="text-[10px] uppercase tracking-[0.3em] text-accent hover:text-silk transition-colors border-b border-accent/20 pb-1 h-fit mt-4 sm:mt-0"
                   >
                      Join Early Access Waitlist
                   </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* AI Stylist */}
      <section className="relative py-48 px-6 bg-onyx overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[180px] rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Reveal delay={0.2}>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full glass-morphism mb-12 text-accent border-white/10">
              <MessageSquare size={28} strokeWidth={1.5} />
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <h2 className="text-5xl md:text-8xl font-display mb-10 leading-tight uppercase tracking-tighter">Your Virtual <br /><span className="italic font-normal">Creative Director</span></h2>
          </Reveal>
          <Reveal delay={0.5}>
            <p className="text-silk/50 text-lg md:text-xl mb-16 font-light leading-relaxed max-w-2xl mx-auto">
              A conversational interface that understands color theory, silhouettes, and cultural context.
            </p>
          </Reveal>
          <Reveal delay={0.6}>
            <button 
              onClick={() => router.push('/ai-stylist')}
              className="relative group px-14 py-6 overflow-hidden rounded-full border border-silk/20 text-[11px] uppercase tracking-[0.4em] text-silk hover:text-onyx transition-colors duration-500"
            >
              <div className="absolute inset-0 bg-silk translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10">Launch AI Stylist</span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 bg-onyx">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-display font-semibold tracking-tighter text-silk mb-8">
                LIVERY
              </div>
              <p className="text-silk/30 text-[11px] leading-relaxed max-w-xs uppercase tracking-widest font-light">
                Engineering the future of fashion discovery through behavioral intelligence.
              </p>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-silk mb-8 font-bold">Platform</h4>
              <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] text-silk/40">
                <button onClick={() => router.push('/discover')} className="text-left hover:text-accent transition-colors">Discover</button>
                <button onClick={() => router.push('/collections')} className="text-left hover:text-accent transition-colors">Collections</button>
                <button onClick={() => router.push('/ai-stylist')} className="text-left hover:text-accent transition-colors">AI Stylist</button>
                <button onClick={() => router.push('/journal')} className="text-left hover:text-accent transition-colors">Journal</button>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-silk mb-8 font-bold">Connect</h4>
              <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.2em] text-silk/40">
                <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
            <div className="flex gap-12 text-[9px] uppercase tracking-[0.3em] text-silk/30">
              <a href="#" className="hover:text-silk transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-silk transition-colors">Terms of Service</a>
            </div>
            <p className="text-[9px] text-silk/20 uppercase tracking-[0.3em]">© 2026 LIVERY. Designed by Elite Engineering.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

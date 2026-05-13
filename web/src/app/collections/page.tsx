"use client";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CollectionsPage() {
  const collections = [
    { 
      name: "Digital Nomads", 
      season: "Winter 2026", 
      image: "/hero-bg.png",
      description: "A collection designed for the fluid transition between physical and virtual spaces."
    },
    { 
      name: "Neural Silk", 
      season: "Spring 2026", 
      image: "/product-5.png",
      description: "Sculptural silhouettes meeting bio-engineered silk textures."
    },
    { 
      name: "Urban Archive", 
      season: "AW 2025", 
      image: "/product-1.png",
      description: "Revisiting the core architectural foundations of LIVERY's first manifesto."
    },
  ];

  return (
    <main className="min-h-screen bg-onyx text-silk">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <header className="mb-48 text-center px-6">
            <Reveal>
              <h1 className="text-7xl md:text-[12vw] font-display leading-[1.3] mb-12 tracking-tight uppercase py-10">Manifestos</h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-silk/40 text-xl max-w-2xl mx-auto font-light italic leading-relaxed">Conceptual capsules bridging the gap between digital identity and physical form.</p>
            </Reveal>
          </header>

          <div className="space-y-64">
            {collections.map((col, i) => (
              <Reveal key={col.name} delay={0.2}>
                <div className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-16 md:gap-32 items-center group`}>
                  <div className="w-full md:w-3/5 aspect-[16/10] bg-white/5 relative overflow-hidden">
                    <Image 
                      src={col.image}
                      alt={col.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                  </div>
                  <div className="w-full md:w-2/5 space-y-10">
                    <Reveal>
                       <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-bold">{col.season}</span>
                    </Reveal>
                    <Reveal delay={0.2}>
                       <h2 className="text-6xl md:text-8xl font-display uppercase tracking-tight leading-[1.2] py-6 break-words">{col.name}</h2>
                    </Reveal>
                    <Reveal delay={0.3}>
                       <p className="text-silk/40 text-xl leading-relaxed font-light">
                        {col.description}
                       </p>
                    </Reveal>
                    <Reveal delay={0.4}>
                       <button className="flex items-center gap-6 text-xs uppercase tracking-[0.4em] font-bold border-b border-silk/20 pb-4 group/btn hover:border-accent transition-colors">
                        View Collection <ArrowRight size={20} className="group-hover/btn:translate-x-3 transition-transform" />
                       </button>
                    </Reveal>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { Filter, X } from "lucide-react";

export default function DiscoverPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Outerwear", "Knitwear", "Accessories", "Footwear"];
  
  const allProducts = [
    { id: "101", name: "Sculptural Silk Dress", brand: "Atelier Livery", price: "$2,450", image: "/product-5.png", match: "99%", category: "Outerwear" },
    { id: "102", name: "Cashmere Overcoat", brand: "Livery Core", price: "$1,890", image: "/product-1.png", match: "97%", category: "Outerwear" },
    { id: "103", name: "Draped Silk Blouse", brand: "Minimalist", price: "$750", image: "/product-2.png", match: "95%", category: "Knitwear" },
    { id: "104", name: "Heritage Chelsea", brand: "Craft & Co", price: "$980", image: "/product-3.png", match: "94%", category: "Footwear" },
    { id: "105", name: "Tailored Wool Pant", brand: "Livery Core", price: "$550", image: "/product-4.png", match: "92%", category: "Knitwear" },
    { id: "106", name: "Structured Blazer", brand: "Atelier Livery", price: "$1,650", image: "/product-1.png", match: "91%", category: "Outerwear" },
    { id: "107", name: "Evening Silk Wrap", brand: "Minimalist", price: "$420", image: "/product-2.png", match: "89%", category: "Accessories" },
    { id: "108", name: "Atelier Boot", brand: "Craft & Co", price: "$1,100", image: "/product-3.png", match: "88%", category: "Footwear" },
  ];

  const filteredProducts = activeCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);
  
  return (
    <main className="min-h-screen bg-onyx text-silk">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <header className="mb-20">
            <Reveal>
              <span className="text-accent text-[10px] uppercase tracking-[0.5em] mb-4 block font-bold">The Archive</span>
            </Reveal>
            <Reveal delay={0.3}>
              <h1 className="text-7xl md:text-[10vw] font-display leading-[1.1] mb-8 uppercase tracking-tight py-4">Curated <br /><span className="italic font-normal">Discovery</span></h1>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-silk/40 text-lg max-w-xl font-light leading-relaxed">Explore a limitless feed of fashion artifacts selected by your unique behavioral profile.</p>
            </Reveal>
          </header>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-24 border-b border-white/5 pb-12">
            <div className="flex gap-10 overflow-x-auto no-scrollbar pb-4 md:pb-0">
              {categories.map((cat, i) => (
                <button 
                  key={cat} 
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] uppercase tracking-[0.4em] transition-all relative group py-2 ${activeCategory === cat ? "text-silk" : "text-silk/20 hover:text-silk"}`}
                >
                  {cat}
                  {activeCategory === cat && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              {activeCategory !== "All" && (
                <button 
                  onClick={() => setActiveCategory("All")}
                  className="flex items-center gap-2 text-[9px] uppercase tracking-[0.4em] text-accent hover:text-silk transition-colors"
                >
                  Clear <X size={10} />
                </button>
              )}
              <button className="flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-silk/40 hover:text-silk transition-colors border border-white/10 px-6 py-3 rounded-full">
                <Filter size={12} /> Filter & Sort
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-24">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={0.05 * i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

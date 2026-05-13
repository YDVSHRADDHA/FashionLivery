"use client";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { useLiveryStore } from "@/store/useLiveryStore";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Trash2 } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart } = useLiveryStore();
  
  // Mock product database
  const allProducts = [
    { id: "101", name: "Sculptural Silk Dress", brand: "Atelier Livery", price: "$2,450", image: "/product-5.png", match: "99%" },
    { id: "102", name: "Cashmere Overcoat", brand: "Livery Core", price: "$1,890", image: "/product-1.png", match: "97%" },
    { id: "103", name: "Draped Silk Blouse", brand: "Minimalist", price: "$750", image: "/product-2.png", match: "95%" },
    { id: "104", name: "Heritage Chelsea", brand: "Craft & Co", price: "$980", image: "/product-3.png", match: "94%" },
    { id: "105", name: "Tailored Wool Pant", brand: "Livery Core", price: "$550", image: "/product-4.png", match: "92%" },
    { id: "1", name: "Atelier Overcoat", brand: "Livery Core", price: "$1,200", match: "98%", image: "/product-1.png" },
    { id: "5", name: "Sculptural Dress", brand: "Atelier Livery", price: "$2,450", match: "99%", image: "/product-5.png" },
    { id: "3", name: "Heritage Chelsea", brand: "Craft & Co", price: "$890", match: "94%", image: "/product-3.png" },
    { id: "2", name: "Silk Drape Blouse", brand: "Minimalist", price: "$650", match: "96%", image: "/product-2.png" },
  ];

  const wishlistProducts = allProducts.filter(p => wishlist.includes(p.id));

  return (
    <main className="min-h-screen bg-onyx text-silk">
      <Navbar />
      
      <section className="pt-32 md:pt-40 pb-20 px-4 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <header className="mb-16 md:mb-20">
            <Link href="/discover" className="inline-flex items-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-silk/40 hover:text-silk transition-colors mb-6 md:mb-8">
              <ArrowLeft size={12} /> Back to Discover
            </Link>
            <Reveal>
              <h1 className="text-5xl md:text-8xl font-display leading-[1.1] mb-6 md:mb-8 uppercase tracking-tight py-2 md:py-4">Your <br /><span className="italic font-normal">Wishlist</span></h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-silk/40 text-xs md:text-sm uppercase tracking-[0.3em]">{wishlistProducts.length} Artifacts Saved</p>
            </Reveal>
          </header>

          {wishlistProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 md:gap-x-10 gap-y-16 md:gap-y-24">
              {wishlistProducts.map((product, i) => (
                <div key={product.id} className="space-y-6">
                  <ProductCard product={product} delay={0.05 * i} />
                  <div className="flex gap-4 px-2">
                    <button 
                      onClick={() => {
                        addToCart(product);
                        toggleWishlist(product.id);
                      }}
                      className="flex-1 py-4 border border-white/10 rounded-full text-[9px] uppercase tracking-[0.3em] font-bold hover:bg-silk hover:text-onyx transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingBag size={12} /> Move to Bag
                    </button>
                    <button 
                      onClick={() => toggleWishlist(product.id)}
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-silk/20 hover:text-accent hover:border-accent transition-all"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 md:py-40 text-center">
              <p className="text-silk/20 text-xs md:text-sm uppercase tracking-[0.4em] mb-8 md:mb-12">Your collection is empty</p>
              <Link href="/discover" className="px-10 md:px-16 py-4 md:py-6 bg-silk text-onyx text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-colors inline-block rounded-full">
                Start Discovering
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

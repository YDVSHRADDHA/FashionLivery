"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Plus, Check } from "lucide-react";
import { useLiveryStore } from "@/store/useLiveryStore";
import { Reveal } from "./Reveal";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    brand: string;
    match?: string;
  };
  delay?: number;
}

export const ProductCard = ({ product, delay = 0 }: ProductCardProps) => {
  const { toggleWishlist, wishlist, addToCart } = useLiveryStore();
  const [added, setAdded] = useState(false);
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Reveal delay={delay}>
      <div className="group cursor-pointer">
        <div className="relative aspect-[3/4.5] mb-8 overflow-hidden bg-white/5">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-6 left-6 z-20 flex justify-between w-[calc(100%-48px)] items-start">
            {product.match && (
              <div className="bg-accent/90 backdrop-blur-md px-3 py-2 rounded-sm shadow-xl min-w-[80px] text-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-onyx font-bold leading-[1.2]">{product.match} Match</p>
              </div>
            )}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleWishlist(product.id);
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isWishlisted ? "bg-accent text-onyx" : "bg-white/10 text-silk hover:bg-white/20"}`}
            >
              <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="absolute bottom-8 left-8 right-8 z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <button 
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-sm text-[10px] uppercase tracking-[0.4em] font-bold transition-all flex items-center justify-center gap-2 shadow-2xl active:scale-95 ${added ? "bg-accent text-onyx" : "bg-silk text-onyx hover:bg-white"}`}
            >
              {added ? (
                <><Check size={14} /> Added</>
              ) : (
                <><Plus size={14} /> Add to Collection</>
              )}
            </button>
          </div>
        </div>
        
        <div className="space-y-2 px-2">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-sm font-display tracking-wide group-hover:text-accent transition-colors leading-[1.4] py-1">{product.name}</h3>
            <span className="text-[10px] text-silk/40 font-medium tracking-widest py-1.5">{product.price}</span>
          </div>
          <p className="text-[10px] text-silk/20 uppercase tracking-[0.3em] font-light">{product.brand}</p>
        </div>
      </div>
    </Reveal>
  );
};

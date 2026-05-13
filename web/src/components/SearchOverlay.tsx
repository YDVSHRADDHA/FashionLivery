"use client";

import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search as SearchIcon, ArrowRight } from "lucide-react";
import { useLiveryStore } from "@/store/useLiveryStore";

export const SearchOverlay = () => {
  const { isSearchOpen, setSearchOpen, searchQuery, setSearchQuery } = useLiveryStore();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] bg-onyx/95 backdrop-blur-2xl p-10 flex flex-col items-center">
        <button 
          className="absolute top-10 right-10 text-silk/40 hover:text-silk"
          onClick={() => setSearchOpen(false)}
        >
          <X size={32} strokeWidth={1} />
        </button>

        <div className="w-full max-w-4xl mt-32">
          <div className="relative border-b border-white/10 pb-8">
            <SearchIcon className="absolute left-0 top-2 text-silk/20" size={32} strokeWidth={1} />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="SEARCH COLLECTIONS, STYLES, OR DNA..."
              className="w-full bg-transparent pl-12 text-3xl md:text-6xl font-display outline-none placeholder:text-white/5 uppercase"
            />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.5em] text-silk/20 mb-8 font-bold">Trending Searches</h4>
              <div className="space-y-6">
                {["Oversized Cashmere", "Cyberpunk Couture", "Sustainable Silk", "Neural Aesthetic"].map((term) => (
                  <button 
                    key={term}
                    className="flex items-center justify-between w-full group text-lg font-display text-silk/60 hover:text-silk transition-colors"
                    onClick={() => setSearchQuery(term)}
                  >
                    <span>{term}</span>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.5em] text-silk/20 mb-8 font-bold">Collections</h4>
              <div className="space-y-6 text-lg font-display text-silk/40 italic">
                <p>Autumn / Winter 2026</p>
                <p>Digital Archive</p>
                <p>Limited Drops</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

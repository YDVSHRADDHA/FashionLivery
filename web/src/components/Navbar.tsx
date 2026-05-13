"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLiveryStore } from "@/store/useLiveryStore";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setAuthModalOpen, setSearchOpen, wishlist, user, cart } = useLiveryStore();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Discover", href: "/discover" },
    { name: "Collections", href: "/collections" },
    { name: "AI Stylist", href: "/ai-stylist" },
    { name: "Journal", href: "/journal" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 py-8 md:px-12 md:py-10",
        scrolled ? "bg-onyx/80 backdrop-blur-2xl py-6 border-b border-white/5" : "bg-transparent"
      )}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-3xl font-display font-semibold tracking-tighter text-silk">
            LIVERY
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] text-silk/40 hover:text-silk transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button 
            onClick={() => setSearchOpen(true)}
            className="text-silk/40 hover:text-silk transition-colors flex items-center gap-2 group"
          >
            <span className="hidden md:block text-[9px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">Search</span>
            <Search size={18} strokeWidth={1.5} />
          </button>
          
          <button 
            onClick={() => setAuthModalOpen(true)}
            className="text-silk/40 hover:text-silk transition-colors flex items-center gap-2 group"
          >
             <span className="hidden md:block text-[9px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
               {user ? user.name.split(' ')[0] : 'Sign In'}
             </span>
             <User size={18} strokeWidth={1.5} />
          </button>

          <Link href="/wishlist" className="relative text-silk/40 hover:text-silk transition-colors group">
            <Heart size={18} strokeWidth={1.5} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-accent rounded-full border-2 border-onyx flex items-center justify-center">
                 <span className="text-[6px] text-onyx font-bold">{wishlist.length}</span>
              </span>
            )}
          </Link>

          <Link href="/cart" className="relative text-silk/40 hover:text-silk transition-colors group">
            <ShoppingBag size={18} strokeWidth={1.5} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-silk rounded-full border-2 border-onyx flex items-center justify-center">
                <span className="text-[6px] text-onyx font-bold">{cart.length}</span>
              </span>
            )}
          </Link>

          <button 
            className="lg:hidden text-silk"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-onyx flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-20">
              <span className="text-2xl font-display font-semibold tracking-tighter">LIVERY</span>
              <button onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            
            <div className="flex flex-col gap-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-5xl font-display italic text-silk hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-white/5 flex gap-8">
               <button onClick={() => {setAuthModalOpen(true); setMobileMenuOpen(false);}} className="text-xs uppercase tracking-widest">Sign In</button>
               <button className="text-xs uppercase tracking-widest text-silk/40">Archive</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

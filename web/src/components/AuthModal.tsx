"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User as UserIcon } from "lucide-react";
import { useLiveryStore } from "@/store/useLiveryStore";

export const AuthModal = () => {
  const { isAuthModalOpen, setAuthModalOpen, setUser } = useLiveryStore();
  const [isLogin, setIsLogin] = useState(true);

  if (!isAuthModalOpen) return null;

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    setUser({ id: "1", name: "Guest User", email: "guest@example.com" });
    setAuthModalOpen(false);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-onyx/90 backdrop-blur-xl"
          onClick={() => setAuthModalOpen(false)}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-md glass-morphism p-10 rounded-2xl border-white/5"
        >
          <button 
            className="absolute top-6 right-6 text-silk/40 hover:text-silk"
            onClick={() => setAuthModalOpen(false)}
          >
            <X size={20} />
          </button>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-display mb-2">{isLogin ? "Welcome Back" : "Create Account"}</h2>
            <p className="text-xs text-silk/40 uppercase tracking-widest">LIVERY Haute Couture</p>
          </div>

          <form onSubmit={handleAuth} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-silk/40 ml-1">Full Name</label>
                <div className="relative">
                  <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-silk/20" size={16} />
                  <input 
                    type="text" 
                    placeholder="ALEXANDER MCQUEEN"
                    className="w-full bg-white/5 border border-white/5 rounded-full py-4 pl-12 pr-6 text-xs outline-none focus:border-accent/30 transition-colors"
                  />
                </div>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-silk/40 ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-silk/20" size={16} />
                <input 
                  type="email" 
                  placeholder="name@livery.com"
                  className="w-full bg-white/5 border border-white/5 rounded-full py-4 pl-12 pr-6 text-xs outline-none focus:border-accent/30 transition-colors"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-silk/40 ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-silk/20" size={16} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/5 rounded-full py-4 pl-12 pr-6 text-xs outline-none focus:border-accent/30 transition-colors"
                  required
                />
              </div>
            </div>

            <button className="w-full py-5 bg-silk text-onyx rounded-full text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-colors">
              {isLogin ? "Sign In" : "Sign Up"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-[10px] uppercase tracking-widest text-silk/40 hover:text-silk transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

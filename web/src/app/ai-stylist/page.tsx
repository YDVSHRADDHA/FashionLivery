"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { Send, User, Sparkles, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIStylistPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Greetings. I am your LIVERY Creative Director. How can I assist with your silhouette today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Understood. Analyzing your Style DNA for those parameters. I recommend a structured charcoal overcoat paired with silk trousers for that specific context." 
      }]);
    }, 1000);
  };

  return (
    <main className="h-screen bg-onyx text-silk flex flex-col">
      <Navbar />
      
      <div className="flex-1 max-w-4xl mx-auto w-full pt-40 pb-32 px-6 flex flex-col">
        <header className="mb-12 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 text-accent text-[10px] uppercase tracking-[0.5em] mb-4 font-bold">
              <Sparkles size={14} /> Virtual Creative Director
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="text-4xl md:text-6xl font-display italic">Personal <span className="font-normal not-italic">Stylist</span></h1>
          </Reveal>
        </header>

        <div className="flex-1 overflow-y-auto no-scrollbar space-y-8 mb-12">
          <AnimatePresence initial={false}>
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] p-6 rounded-2xl ${m.role === "user" ? "bg-white/5 border border-white/10" : "glass-morphism border-accent/20"}`}>
                  <p className={`text-sm leading-relaxed ${m.role === "assistant" ? "font-light" : "font-normal"}`}>
                    {m.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <form onSubmit={handleSend} className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe an occasion or a silhouette..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-6 pl-8 pr-20 text-sm outline-none focus:border-accent/30 transition-all placeholder:text-silk/20"
          />
          <button 
            type="submit"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-silk text-onyx rounded-full flex items-center justify-center hover:bg-white transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </main>
  );
}

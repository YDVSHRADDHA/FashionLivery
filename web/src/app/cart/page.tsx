"use client";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { useLiveryStore } from "@/store/useLiveryStore";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, addToCart } = useLiveryStore();
  
  const subtotal = cart.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
    return acc + (priceNum * item.quantity);
  }, 0);

  return (
    <main className="min-h-screen bg-onyx text-silk">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <header className="mb-20">
            <Link href="/discover" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-silk/40 hover:text-silk transition-colors mb-8">
              <ArrowLeft size={12} /> Continue Discovery
            </Link>
            <Reveal>
              <h1 className="text-6xl md:text-8xl font-display leading-[1.1] mb-8 uppercase tracking-tight py-4">Shopping <br /><span className="italic font-normal">Bag</span></h1>
            </Reveal>
          </header>

          {cart.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
              <div className="lg:col-span-2 space-y-12">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-8 items-center border-b border-white/5 pb-12">
                    <div className="relative w-32 aspect-[3/4] bg-white/5">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-display uppercase tracking-tight">{item.name}</h3>
                          <p className="text-[10px] text-silk/40 uppercase tracking-[0.3em]">{item.brand}</p>
                        </div>
                        <p className="text-sm font-medium tracking-widest">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="flex items-center border border-white/10 rounded-full px-4 py-2 gap-4">
                          <button onClick={() => removeFromCart(item.id)} className="text-silk/40 hover:text-silk transition-colors"><Minus size={12} /></button>
                          <span className="text-xs font-medium w-4 text-center">{item.quantity}</span>
                          <button onClick={() => addToCart(item)} className="text-silk/40 hover:text-silk transition-colors"><Plus size={12} /></button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[9px] uppercase tracking-[0.3em] text-silk/20 hover:text-accent transition-colors flex items-center gap-2"
                        >
                          <Trash2 size={12} /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="glass-morphism p-10 rounded-2xl border-white/5 space-y-10">
                  <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-silk/40">Summary</h3>
                  <div className="space-y-4 border-b border-white/5 pb-8">
                    <div className="flex justify-between text-xs uppercase tracking-widest">
                      <span className="text-silk/40">Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-xs uppercase tracking-widest">
                      <span className="text-silk/40">Shipping</span>
                      <span>Complimentary</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xl font-display uppercase">
                    <span>Total</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <Link href="/checkout" className="w-full block py-6 bg-silk text-onyx text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all rounded-full shadow-xl text-center">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-silk/20 text-sm uppercase tracking-[0.4em] mb-8">Your bag is empty</p>
              <Link href="/discover" className="px-12 py-5 bg-silk text-onyx text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-colors inline-block">
                Start Discovering
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

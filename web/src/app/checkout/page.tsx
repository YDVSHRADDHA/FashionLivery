"use client";

import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { useLiveryStore } from "@/store/useLiveryStore";
import Link from "next/link";
import { ArrowLeft, CreditCard, ShieldCheck, Truck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart } = useLiveryStore();
  const router = useRouter();
  
  const subtotal = cart.reduce((acc, item) => {
    const priceNum = parseInt(item.price.replace(/[^0-9]/g, ''));
    return acc + (priceNum * item.quantity);
  }, 0);

  return (
    <main className="min-h-screen bg-onyx text-silk">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <header className="mb-20">
            <Link href="/cart" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-silk/40 hover:text-silk transition-colors mb-8">
              <ArrowLeft size={12} /> Return to Bag
            </Link>
            <Reveal>
              <h1 className="text-6xl md:text-8xl font-display leading-[1.1] mb-8 uppercase tracking-tight py-4">Finalize <br /><span className="italic font-normal">Order</span></h1>
            </Reveal>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left Side: Forms */}
            <div className="space-y-16">
              <div className="space-y-8">
                <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">01. Delivery Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input placeholder="FIRST NAME" className="bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:border-silk outline-none transition-colors" />
                  <input placeholder="LAST NAME" className="bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:border-silk outline-none transition-colors" />
                </div>
                <input placeholder="STREET ADDRESS" className="w-full bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:border-silk outline-none transition-colors" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <input placeholder="CITY" className="bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:border-silk outline-none transition-colors" />
                  <input placeholder="POSTAL CODE" className="bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:border-silk outline-none transition-colors" />
                  <input placeholder="COUNTRY" className="bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:border-silk outline-none transition-colors" />
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent">02. Payment Method</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="border border-white/10 p-6 rounded-sm flex items-center justify-between group cursor-pointer hover:border-silk transition-colors">
                    <div className="flex items-center gap-4">
                      <CreditCard size={20} className="text-silk/40 group-hover:text-silk" />
                      <span className="text-[10px] uppercase tracking-widest">Credit or Debit Card</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border border-white/20 group-hover:border-accent" />
                  </div>
                  <div className="border border-white/10 p-6 rounded-sm flex items-center justify-between group cursor-pointer opacity-40">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] uppercase tracking-widest italic">Digital Wallet (Coming Soon)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex flex-col gap-6 text-[10px] uppercase tracking-[0.2em] text-silk/40">
                <div className="flex items-center gap-3"><Truck size={14} /> Complimentary White Glove Delivery</div>
                <div className="flex items-center gap-3"><ShieldCheck size={14} /> Encrypted Secure Transaction</div>
              </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="lg:sticky lg:top-40 h-fit">
              <div className="glass-morphism p-10 rounded-2xl border-white/5 space-y-12">
                <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-silk/40">Order Review</h3>
                <div className="space-y-8 max-h-[300px] overflow-y-auto no-scrollbar pr-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-xs">
                      <div className="space-y-1">
                        <p className="uppercase tracking-widest font-medium">{item.name}</p>
                        <p className="text-[10px] text-silk/40">QTY: {item.quantity}</p>
                      </div>
                      <p className="font-medium tracking-widest">{item.price}</p>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-4 pt-8 border-t border-white/5">
                   <div className="flex justify-between text-[10px] uppercase tracking-widest text-silk/40">
                      <span>Subtotal</span>
                      <span>${subtotal.toLocaleString()}</span>
                   </div>
                   <div className="flex justify-between text-[10px] uppercase tracking-widest text-silk/40">
                      <span>Taxes & Duties</span>
                      <span>Calculated at next step</span>
                   </div>
                   <div className="flex justify-between text-2xl font-display uppercase pt-4">
                      <span>Total</span>
                      <span>${subtotal.toLocaleString()}</span>
                   </div>
                </div>

                <button 
                  onClick={() => router.push('/checkout/success')}
                  className="w-full py-6 bg-silk text-onyx text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all rounded-full shadow-2xl"
                >
                  Complete Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

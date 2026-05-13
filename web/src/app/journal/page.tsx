import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function JournalPage() {
  const articles = [
    { title: "The Future of Digital Identity", date: "May 12, 2026", category: "Philosophy" },
    { title: "Sustainable Silk: A Neural Approach", date: "May 10, 2026", category: "Technology" },
    { title: "Minimalism in the Age of AI", date: "May 08, 2026", category: "Design" },
  ];

  return (
    <main className="min-h-screen bg-onyx text-silk">
      <Navbar />
      
      <section className="pt-40 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <header className="mb-32">
            <Reveal>
              <h1 className="text-8xl md:text-[15vw] font-display leading-[0.8] mb-12 italic tracking-tighter">Journal</h1>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-silk/40 text-xl max-w-xl font-light">Dispatches from the intersection of fashion, technology, and identity.</p>
            </Reveal>
          </header>

          <div className="divide-y divide-white/5">
            {articles.map((art, i) => (
              <Reveal key={art.title} delay={0.1 * i}>
                <article className="py-16 group cursor-pointer flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                  <div className="space-y-4">
                    <div className="flex gap-4 items-center">
                       <span className="text-accent text-[9px] uppercase tracking-[0.4em] font-bold">{art.category}</span>
                       <span className="text-silk/20 text-[9px] uppercase tracking-[0.4em]">{art.date}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display group-hover:italic transition-all duration-500">{art.title}</h2>
                  </div>
                  <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-silk group-hover:text-onyx transition-all">
                    <ArrowUpRight size={24} />
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

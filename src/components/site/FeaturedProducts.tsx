import mozzBall from "@/assets/prod-mozz-ball.jpg";
import burrata from "@/assets/prod-burrata.jpg";
import mascarpone from "@/assets/prod-mascarpone.jpg";
import caciotta from "@/assets/prod-caciotta.jpg";
import queso from "@/assets/prod-queso.jpg";
import { Plus } from "lucide-react";

type P = { name: string; price: string; tag?: string; img: string };

const feature: P = { name: "Hand-Pulled Mozzarella, 8oz", price: "$14", tag: "Bestseller", img: mozzBall };
const grid: P[] = [
  { name: "Fresh Burrata", price: "$16", tag: "New Batch", img: burrata },
  { name: "Mascarpone Cream", price: "$11", img: mascarpone },
  { name: "Caciotta Wedge", price: "$22", tag: "Award-Winner", img: caciotta },
  { name: "Queso Fresco", price: "$9", img: queso },
];

function Card({ p, large = false }: { p: P; large?: boolean }) {
  return (
    <a href="#" className="group block">
      <div className={`relative overflow-hidden bg-butter ${large ? "aspect-[4/5]" : "aspect-square"}`}>
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {p.tag && (
          <span className="absolute top-4 left-4 bg-cream/95 text-ink text-[10px] tracking-[0.2em] uppercase font-medium px-2.5 py-1">
            {p.tag}
          </span>
        )}
        <button
          aria-label={`Add ${p.name}`}
          className="absolute bottom-4 right-4 w-10 h-10 bg-cream text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-olive hover:text-cream"
        >
          <Plus className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
      <div className="flex items-baseline justify-between mt-4 gap-3">
        <h3 className={`font-serif ${large ? "text-2xl" : "text-lg"} text-ink leading-tight`}>{p.name}</h3>
        <span className="font-sans text-[14px] text-ink/70 whitespace-nowrap">{p.price}</span>
      </div>
    </a>
  );
}

export function FeaturedProducts() {
  return (
    <section className="py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="kicker"><span className="rule-mark" />Issue No. 04</span>
            <h2 className="display-lg mt-4">Hand-picked this week.</h2>
          </div>
          <a href="#" className="hidden md:inline-block text-[13px] tracking-[0.18em] uppercase font-medium text-ink border-b border-ink pb-1 hover:text-olive hover:border-olive">
            Shop all
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <Card p={feature} large />
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {grid.map((p) => <Card key={p.name} p={p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

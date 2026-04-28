import heroImg from "@/assets/hero-mozzarella.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-24 lg:pt-28">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 items-center">
        <div className="lg:col-span-2 fade-up">
          <div className="relative overflow-hidden rounded-xl shadow-md ring-1 ring-ink/5">
            <img
              src={heroImg}
              alt="Hands stretching fresh mozzarella curd in a Dallas kitchen"
              className="w-full h-[60vh] lg:h-[78vh] object-cover rounded-xl"
              width={1280}
              height={1600}
            />
          </div>
          <p className="caption mt-3">
            Plate I — Paula at the curd table, Dallas, morning light.
          </p>
        </div>

        <div className="lg:col-span-1 lg:pl-2 fade-up">
          <div className="flex items-center mb-7">
            <span className="rule-mark" />
            <span className="kicker">Est. 1982 — Dallas, Texas</span>
          </div>
          <h1 className="display-xl text-ink">
            Made by hand<br />
            in Dallas<br />
            <em className="italic font-normal text-olive-deep">since 1982.</em>
          </h1>
          <p className="mt-7 text-[17px] leading-relaxed text-ink/75 max-w-sm font-serif">
            Italian-style cheeses, crafted the old-fashioned way — small batches,
            fresh milk, four decades of practiced hands.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <a
              href="#shop"
              className="group inline-flex items-center gap-3 bg-olive text-cream px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-olive-deep transition-colors"
            >
              Shop the Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
            </a>
            <a
              href="#story"
              className="text-[13px] tracking-[0.18em] uppercase font-medium text-ink border-b border-ink pb-1 hover:text-olive hover:border-olive transition-colors"
            >
              Meet Paula
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

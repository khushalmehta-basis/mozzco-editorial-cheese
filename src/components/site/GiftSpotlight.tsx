import g1 from "@/assets/gift-1.jpg";
import g2 from "@/assets/gift-2.jpg";
import g3 from "@/assets/gift-3.jpg";

const gifts = [
  { img: g1, name: "The Little Italy Box", caption: "Three fresh cheeses, twine and rosemary.", price: "$58" },
  { img: g2, name: "The Cellar Crate", caption: "Aged wedges, jam, crackers, a small wine.", price: "$118" },
  { img: g3, name: "The Sunday Tote", caption: "Soft cheeses, honey, figs in a canvas tote.", price: "$72" },
];

export function GiftSpotlight() {
  return (
    <section className="py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="kicker"><span className="rule-mark" />Gifting</span>
          <h2 className="display-lg mt-4">Cheese as a gift, since 1982.</h2>
          <p className="mt-5 font-serif text-[17px] text-ink/75 leading-relaxed">
            Hand-packed in Dallas, sent on ice with a small handwritten note.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {gifts.map((g) => (
            <a key={g.name} href="#" className="group block">
              <div className="overflow-hidden aspect-[4/5] mb-5 bg-butter">
                <img src={g.img} alt={g.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-[22px] text-ink leading-tight">{g.name}</h3>
                <span className="text-[14px] text-ink/70">{g.price}</span>
              </div>
              <p className="caption mt-2">{g.caption}</p>
            </a>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#" className="inline-flex items-center gap-3 border border-ink text-ink px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-ink hover:text-cream transition-colors">
            Build your own selection
          </a>
        </div>
      </div>
    </section>
  );
}

import gifts from "@/assets/cat-gifts.jpg";
import mozz from "@/assets/cat-mozzarella.jpg";
import cow from "@/assets/cat-cow.jpg";
import goat from "@/assets/cat-goat.jpg";

const cats = [
  { kicker: "01 — Selections", title: "Gifts & Selections", desc: "Boxed in Dallas. Shipped on ice.", img: gifts, offset: "lg:mt-0" },
  { kicker: "02 — Fresh", title: "Mozzarella Family", desc: "Pulled by hand, packed in brine.", img: mozz, offset: "lg:mt-24" },
  { kicker: "03 — Aged", title: "Cow's Milk", desc: "Caciotta, Crescenza, Montasio.", img: cow, offset: "lg:mt-12" },
  { kicker: "04 — Bright", title: "Goat's Milk", desc: "Chèvre, herbed logs, fresh rounds.", img: goat, offset: "lg:mt-32" },
];

export function CategoryGrid() {
  return (
    <section className="py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="kicker"><span className="rule-mark" />The Cheese Counter</span>
            <h2 className="display-lg mt-4">Find your kind of cheese.</h2>
          </div>
          <a href="#" className="hidden md:inline-block text-[13px] tracking-[0.18em] uppercase font-medium text-ink border-b border-ink pb-1 hover:text-olive hover:border-olive">
            Browse all
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cats.map((c) => (
            <a key={c.title} href="#" className={`group block ${c.offset}`}>
              <div className="overflow-hidden mb-5 aspect-[4/5]">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center mb-2">
                <span className="rule-mark" />
                <span className="kicker">{c.kicker}</span>
              </div>
              <h3 className="font-serif text-[26px] lg:text-[28px] leading-tight text-ink group-hover:text-olive-deep transition-colors">
                {c.title}
              </h3>
              <p className="caption mt-1.5 group-hover:underline underline-offset-4">
                {c.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

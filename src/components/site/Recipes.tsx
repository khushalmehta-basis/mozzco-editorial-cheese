import caprese from "@/assets/recipe-caprese.jpg";
import pasta from "@/assets/recipe-pasta.jpg";
import board from "@/assets/recipe-board.jpg";

const recipes = [
  { img: caprese, kicker: "10 min · Summer", title: "Torn caprese, the only way.", intro: "Big hands, ripe tomatoes, generous salt." },
  { img: pasta, kicker: "25 min · Weeknight", title: "Mascarpone pasta with lemon.", intro: "A bowl that tastes like a small holiday." },
  { img: board, kicker: "5 min · Weekend", title: "An honest cheese board.", intro: "Three cheeses, honey, walnuts. Don't overthink." },
];

export function Recipes() {
  return (
    <section className="py-28 lg:py-36 bg-butter">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="kicker"><span className="rule-mark" />From the Kitchen</span>
            <h2 className="display-lg mt-4">What we're cooking.</h2>
          </div>
          <a href="#" className="hidden md:inline-block text-[13px] tracking-[0.18em] uppercase font-medium text-ink border-b border-ink pb-1 hover:text-olive hover:border-olive">
            All recipes
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {recipes.map((r) => (
            <a key={r.title} href="#" className="group block">
              <div className="overflow-hidden aspect-[4/5] mb-6">
                <img src={r.img} alt={r.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="kicker">{r.kicker}</span>
              <h3 className="font-serif text-[26px] mt-3 leading-tight text-ink group-hover:text-olive-deep transition-colors">{r.title}</h3>
              <p className="mt-3 font-serif text-[16px] text-ink/70 leading-relaxed">{r.intro}</p>
              <span className="mt-5 inline-block text-[13px] tracking-[0.18em] uppercase font-medium text-terracotta border-b border-terracotta pb-0.5">
                Read the recipe
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

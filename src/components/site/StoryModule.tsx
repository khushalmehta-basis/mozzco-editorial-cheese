import paula from "@/assets/story-paula.jpg";

const pillars = [
  { t: "Made by hand", d: "Every curd, pulled by us." },
  { t: "Small-batch since 1982", d: "Forty-two years, one kitchen." },
  { t: "Award-winning", d: "Recognized, quietly, often." },
];

export function StoryModule() {
  return (
    <section id="story" className="py-28 lg:py-36 bg-butter">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <img
            src={paula}
            alt="Paula Lambert in the Mozzarella Company kitchen"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
          <p className="caption mt-3">Plate II — Paula in the original Dallas factory, est. 1982.</p>
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <div className="flex items-center mb-5">
            <span className="rule-mark" />
            <span className="kicker">A Dallas Story</span>
          </div>
          <h2 className="display-lg mb-8">Forty years in a Dallas kitchen.</h2>
          <p className="drop-cap font-serif text-[19px] leading-[1.65] text-ink/85 max-w-xl">
            Paula Lambert came back from Italy in 1982 with one impossible idea — that
            real mozzarella, the kind pulled fresh that morning, belonged in Texas too.
            She found a small downtown space, bought a vat, and got to work. Forty-two
            years later, the vat is bigger, but the hands are still ours.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 hairline-rule pt-10">
            {pillars.map((p) => (
              <a key={p.t} href="#" className="group block">
                <div className="w-8 h-px bg-olive mb-4 group-hover:w-12 transition-all" />
                <h3 className="font-serif text-[20px] text-ink leading-tight">{p.t}</h3>
                <p className="text-sm text-ink/65 mt-1.5">{p.d}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

const grid: Record<string, { name: string; note: string }[]> = {
  "0-0": [{ name: "Mascarpone", note: "Spreadable, mild, sweet cream." }],
  "0-1": [{ name: "Fresh Ricotta", note: "Soft, milky, gently savory." }],
  "0-2": [{ name: "Hoja Santa Goat", note: "Spreadable, herbal, vibrant." }],
  "1-0": [{ name: "Mozzarella, 8oz", note: "Soft, mild, milky." }],
  "1-1": [{ name: "Burrata", note: "Soft, creamy, rich." }],
  "1-2": [{ name: "Crescenza", note: "Soft, tangy, lactic." }],
  "2-0": [{ name: "Caciotta", note: "Semi-firm, gentle, buttery." }],
  "2-1": [{ name: "Queso Oaxaca", note: "Semi-firm, mellow, melts well." }],
  "2-2": [{ name: "Herbed Chèvre", note: "Semi-firm, bright, peppery." }],
  "3-0": [{ name: "Montasio", note: "Firm, nutty, restrained." }],
  "3-1": [{ name: "Aged Caciotta", note: "Firm, savory, deepening." }],
  "3-2": [{ name: "Deep Ellum Blue", note: "Firm, robust, unmistakable." }],
};

const textures = ["Spreadable", "Soft", "Semi-firm", "Hard"];
const tastes = ["Mild", "Balanced", "Robust"];

export function CheeseCompass() {
  const [sel, setSel] = useState<string>("1-1");
  const matches = grid[sel] ?? [];

  return (
    <section className="py-28 lg:py-36">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <span className="kicker"><span className="rule-mark" />The Cheese Compass</span>
          <h2 className="display-lg mt-4">Find your match by feel.</h2>
          <p className="mt-5 font-serif text-[17px] text-ink/75 leading-relaxed">
            Tell us how you like it — soft or firm, mild or robust — and we'll point
            you to the wedge that wants to be on your table tonight.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Compass grid */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* axis labels */}
              <div className="flex justify-between mb-3 px-1">
                {tastes.map((t) => (
                  <span key={t} className="kicker text-[10px]">{t}</span>
                ))}
              </div>
              <div className="flex">
                <div className="flex flex-col justify-between mr-3 py-1">
                  {textures.map((t) => (
                    <span key={t} className="kicker text-[10px] [writing-mode:vertical-rl] rotate-180">{t}</span>
                  ))}
                </div>
                <div className="flex-1 grid grid-cols-3 grid-rows-4 gap-1.5 bg-butter p-2">
                  {textures.map((_, r) =>
                    tastes.map((_, c) => {
                      const key = `${r}-${c}`;
                      const has = !!grid[key];
                      const active = sel === key;
                      return (
                        <button
                          key={key}
                          onClick={() => has && setSel(key)}
                          disabled={!has}
                          className={`aspect-[5/4] transition-all ${
                            active
                              ? "bg-olive"
                              : has
                              ? "bg-cream hover:bg-terracotta/15 cursor-pointer"
                              : "bg-cream/50 cursor-not-allowed"
                          }`}
                          aria-label={`${textures[r]}, ${tastes[c]}`}
                        />
                      );
                    })
                  )}
                </div>
              </div>
              <p className="caption mt-4">Texture (vertical) × Taste (horizontal)</p>
            </div>
          </div>

          {/* Result */}
          <div className="lg:col-span-2 bg-butter p-8 lg:p-10 min-h-[320px]">
            <span className="kicker">Suggested for you</span>
            <h3 className="font-serif text-[28px] mt-3 leading-tight">
              {textures[Number(sel[0])]} · {tastes[Number(sel[2])]}
            </h3>
            <ul className="mt-7 divide-y divide-hairline">
              {matches.map((m) => (
                <li key={m.name} className="py-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-serif text-[19px] text-ink">{m.name}</p>
                    <p className="caption mt-0.5 not-italic font-sans text-ink/60">{m.note}</p>
                  </div>
                  <a href="#" className="kicker text-terracotta whitespace-nowrap hover:underline underline-offset-4">Shop →</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

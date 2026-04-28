const mentions = ["Bon Appétit", "The New York Times", "Saveur", "Food & Wine", "Texas Monthly", "Garden & Gun"];

export function PressStrip() {
  return (
    <section className="py-20 border-t border-b border-hairline">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <p className="text-center font-serif italic text-[18px] text-ink/65 mb-10">
          Sold in fine markets across the country since 1982.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {mentions.map((m) => (
            <span key={m} className="font-serif text-[15px] tracking-wide text-ink/55 uppercase" style={{ letterSpacing: "0.18em" }}>
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

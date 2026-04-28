import team from "@/assets/team-curd-table.jpg";

const makers = [
  { n: "01", name: "Maria", note: "Forty years at the curd table." },
  { n: "02", name: "Lucia", note: "Stretches every ball by hand." },
  { n: "03", name: "Rosa", note: "Salts the brine before sunrise." },
  { n: "04", name: "Elena", note: "Keeps the vats running warm." },
  { n: "05", name: "Carmen", note: "Wraps each wheel in paper." },
];

export function TeamModule() {
  return (
    <section className="py-28 lg:py-36 bg-cream">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Heading column */}
          <div className="lg:col-span-12 max-w-3xl">
            <div className="flex items-center mb-5">
              <span className="rule-mark" />
              <span className="kicker">Plate III — The Curd Room</span>
            </div>
            <h2 className="display-lg leading-[1.04]">
              The hands behind <em className="italic font-normal text-olive-deep">every batch.</em>
            </h2>
          </div>

          {/* Photo */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden">
              <img
                src={team}
                alt="Mozzarella Company cheesemakers laughing around the curd table in the Dallas factory"
                loading="lazy"
                width={1600}
                height={1280}
                className="w-full aspect-[5/4] object-cover"
              />
              {/* Warm cream wash to harmonize with editorial palette */}
              <div
                aria-hidden
                className="absolute inset-0 bg-cream opacity-[0.08] mix-blend-multiply pointer-events-none"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/15 via-transparent to-transparent pointer-events-none"
              />
            </div>
            <p className="caption mt-3">
              Plate III — Curd cutting, 6:42 a.m., Dallas factory floor.
            </p>
          </div>

          {/* Right rail: credits */}
          <div className="lg:col-span-4 lg:pl-2 flex flex-col">
            <p className="font-serif text-[19px] leading-[1.6] text-ink/85 mb-8">
              Five cheesemakers. One curd table. Most mornings, this is exactly
              what it looks like — working a fresh batch before the city is
              awake.
            </p>

            <ul className="hairline-rule">
              {makers.map((m) => (
                <li
                  key={m.n}
                  className="group flex items-baseline gap-5 py-4 border-b border-hairline"
                >
                  <span className="kicker shrink-0 w-7">{m.n}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="block w-6 h-px bg-olive transition-all duration-300 group-hover:w-10" />
                      <h3 className="font-serif text-[20px] text-ink leading-tight">
                        {m.name}
                      </h3>
                    </div>
                    <p className="text-sm text-ink/65 mt-1.5 pl-9">{m.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

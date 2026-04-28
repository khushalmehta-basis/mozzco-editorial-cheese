const cols = [
  { t: "Shop", l: ["All cheese", "Mozzarella", "Cow's milk", "Goat's milk", "Selections"] },
  { t: "Gifts", l: ["Gift boxes", "Build your own", "Corporate", "Subscriptions"] },
  { t: "Story", l: ["About Paula", "The factory", "Press", "Awards"] },
  { t: "Visit", l: ["2944 Elm St, Dallas", "Mon–Fri · 9–5", "Sat · 10–3", "(214) 741-4072"] },
  { t: "Help", l: ["Shipping", "Returns", "Contact", "FAQ"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-cream pt-12 pb-10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between gap-14 mb-16">
          <div className="lg:max-w-xs">
            <p className="font-serif text-[16px] italic text-ink/70 leading-relaxed">
              Italian-style cheeses, made by hand in Dallas since 1982.
            </p>
            <p className="mt-6 text-[13px] text-ink/55">
              100% money-back guarantee on every order.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 lg:gap-12 flex-1">
            {cols.map((c) => (
              <div key={c.t}>
                <h4 className="kicker mb-5">{c.t}</h4>
                <ul className="space-y-3 text-[14px] text-ink/75">
                  {c.l.map((i) => (
                    <li key={i}><a href="#" className="hover:text-olive transition-colors">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="hairline-rule pt-6 flex flex-col sm:flex-row justify-between gap-3 text-[12px] text-ink/55">
          <p>© {new Date().getFullYear()} The Mozzarella Company. Dallas, Texas.</p>
          <p>Hand-cut, vacuum-sealed, shipped on ice.</p>
        </div>
      </div>
    </footer>
  );
}

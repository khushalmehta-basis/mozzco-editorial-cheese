import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="bg-butter py-24 lg:py-32">
      <div className="max-w-[820px] mx-auto px-6 text-center">
        <span className="kicker"><span className="rule-mark" />Letters from Dallas</span>
        <h2 className="display-lg mt-4">Seasonal drops & recipes from Paula.</h2>
        <p className="mt-4 font-serif text-[17px] text-ink/75">
          Plus 10% off your first order. No spam — we're a cheese shop.
        </p>
        <form
          onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 bg-cream border border-hairline px-5 py-3.5 text-[15px] text-ink placeholder:text-ink/40 focus:outline-none focus:border-olive"
          />
          <button
            type="submit"
            className="bg-olive text-cream px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-olive-deep transition-colors"
          >
            {done ? "Welcome." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}

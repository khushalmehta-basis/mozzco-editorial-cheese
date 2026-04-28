export function PullQuote() {
  return (
    <section className="bg-butter py-32 lg:py-44">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <span className="font-serif italic text-terracotta text-[80px] leading-none block -mb-8">"</span>
        <blockquote className="font-serif italic text-[34px] md:text-[44px] lg:text-[52px] leading-[1.18] text-ink tracking-tight">
          I fell in love with fresh mozzarella in Italy, and I had to bring it home to Texas.
        </blockquote>
        <div className="mt-10 flex items-center justify-center gap-4">
          <span className="block w-10 h-px bg-olive" />
          <p className="kicker">Paula Lambert, Founder</p>
          <span className="block w-10 h-px bg-olive" />
        </div>
      </div>
    </section>
  );
}

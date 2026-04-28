import classes from "@/assets/classes.jpg";

export function Classes() {
  return (
    <section className="relative">
      <div className="relative h-[80vh] lg:h-[78vh] overflow-hidden">
        <img
          src={classes}
          alt="A mozzarella-pulling class in Dallas"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-10">
            <div className="bg-cream max-w-md p-8 lg:p-12">
              <div className="flex items-center mb-5">
                <span className="rule-mark" />
                <span className="kicker">Experiences</span>
              </div>
              <h2 className="display-lg leading-[1.04]">
                Pull a fresh mozzarella with us in Dallas.
              </h2>
              <p className="mt-5 font-serif text-[17px] text-ink/75 leading-relaxed">
                Two hours, your hands, our curd. Saturdays at the factory.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-3 bg-olive text-cream px-7 py-3.5 text-[13px] tracking-[0.18em] uppercase font-medium hover:bg-olive-deep transition-colors"
              >
                Book a Class
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

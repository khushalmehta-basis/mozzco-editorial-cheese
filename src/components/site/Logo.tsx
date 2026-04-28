import logo from "@/assets/mozzco-logo.png";

type Variant = "nav" | "footer";

const sizes: Record<Variant, string> = {
  nav: "h-10 sm:h-11",
  footer: "h-16",
};

export function Logo({ variant = "nav", className = "" }: { variant?: Variant; className?: string }) {
  return (
    <a
      href="/"
      aria-label="Mozzco — Handmade Artisanal Cheeses & Creamery"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src={logo}
        alt="Mozzco — Handmade Artisanal Cheeses & Creamery"
        className={`${sizes[variant]} w-auto object-contain`}
        loading={variant === "nav" ? "eager" : "lazy"}
        decoding="async"
      />
    </a>
  );
}

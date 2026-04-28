import { Search, User, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Shop", "Gifts", "Classes", "Story", "Recipes"];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      {/* Announcement bar */}
      <div className="bg-olive text-cream text-[12px] tracking-[0.18em] uppercase text-center py-2 font-medium">
        Free shipping on Cheese Selections
      </div>
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur border-b border-hairline"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="/" className="font-serif text-xl tracking-tight text-ink">
            Mozzco<span className="text-olive">.</span>
          </a>
          <ul className="hidden md:flex items-center gap-9 text-[13px] tracking-[0.14em] uppercase font-medium text-ink/85">
            {links.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-olive transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 text-ink">
            <button aria-label="Search" className="hover:text-olive transition-colors">
              <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button aria-label="Account" className="hover:text-olive transition-colors hidden sm:block">
              <User className="w-[18px] h-[18px]" strokeWidth={1.5} />
            </button>
            <button aria-label="Cart" className="relative hover:text-olive transition-colors">
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              <span className="absolute -top-1.5 -right-2 bg-terracotta text-cream text-[10px] font-medium rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

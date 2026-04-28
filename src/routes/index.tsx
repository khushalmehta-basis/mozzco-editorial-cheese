import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { CategoryGrid } from "@/components/site/CategoryGrid";
import { PullQuote } from "@/components/site/PullQuote";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { StoryModule } from "@/components/site/StoryModule";
import { CheeseCompass } from "@/components/site/CheeseCompass";
import { Classes } from "@/components/site/Classes";
import { Recipes } from "@/components/site/Recipes";
import { GiftSpotlight } from "@/components/site/GiftSpotlight";
import { PressStrip } from "@/components/site/PressStrip";
import { Newsletter } from "@/components/site/Newsletter";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mozzarella Company — Italian-style cheeses, made by hand in Dallas since 1982" },
      { name: "description", content: "Hand-pulled mozzarella, burrata, mascarpone and more — small-batch Italian-style cheeses crafted in Dallas by Paula Lambert and team since 1982. Shipped on ice." },
      { property: "og:title", content: "Mozzarella Company — Made by hand in Dallas since 1982" },
      { property: "og:description", content: "Italian-style cheeses, crafted the old-fashioned way. Shop, gift, or pull your own at our Dallas classes." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <SiteNav />
      <Hero />
      <CategoryGrid />
      <PullQuote />
      <FeaturedProducts />
      <StoryModule />
      <CheeseCompass />
      <Classes />
      <Recipes />
      <GiftSpotlight />
      <PressStrip />
      <Newsletter />
      <SiteFooter />
    </main>
  );
}

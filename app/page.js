import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import DiscountCards from "@/components/DiscountCards";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto bg-white overflow-x-hidden relative">
      {/* Full-screen Hero Viewport */}
      <div className="px-4 py-3 md:px-8 md:py-4 lg:px-10 lg:py-3 min-h-screen lg:h-screen flex flex-col justify-between relative">
        <Navbar />
        <Hero />
      </div>

      {/* Category Section Below Hero */}
      <CategorySection />

      {/* Promotional Discount Cards Section */}
      <DiscountCards />
    </main>
  );
}

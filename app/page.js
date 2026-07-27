import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto bg-white px-6 py-4 md:px-8 md:py-5 lg:px-10 lg:py-2 flex flex-col gap-3 lg:gap-4 overflow-hidden relative">
      <Navbar />
      <Hero />
    </main>
  );
}

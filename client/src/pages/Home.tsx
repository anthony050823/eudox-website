import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Features />
        <Comparison />
        <EarlyAccess />
      </main>
      <Footer />
    </div>
  );
}

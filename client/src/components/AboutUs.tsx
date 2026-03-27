import { AnimatedSection } from "@/components/AnimatedSection";
import { Target, Zap, Shield } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Built for Precision",
    description:
      "We believe great investments are found, not stumbled upon. Eudox turns unstructured market signals into actionable intelligence — so you spend time on conviction, not cleanup.",
  },
  {
    icon: Zap,
    title: "Speed as Strategy",
    description:
      "In private markets, timing is alpha. Our agents run 24/7, surfacing opportunities the moment they emerge — before they reach a broker or hit a deck.",
  },
  {
    icon: Shield,
    title: "Founder-First",
    description:
      "We're operators and investors ourselves. Every feature we ship solves a problem we've lived — from deal sourcing to thesis alignment to relationship mapping.",
  },
];

export default function AboutUs() {
  return (
    <section id="about-us" className="py-24 bg-[#f5f6fb] dark:bg-[#11142d]">
      <div className="container">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#4ee8dc] mb-4">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We're on a mission to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]">
              democratize deal flow
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Private markets have always rewarded those with the best networks. We think that's the wrong moat. The best opportunities should go to the most prepared investors — not just the most connected ones.
          </p>
        </AnimatedSection>

        {/* Mission Statement */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B102C] to-[#11142d] dark:from-[#0d1230] dark:to-[#0B102C] border border-white/10 p-10 md:p-16 mb-12 text-center">
            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#4ee8dc]/10 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-64 h-32 bg-[#3dc4ff]/10 blur-3xl rounded-full pointer-events-none" />

            <p className="relative text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed max-w-4xl mx-auto">
              "In private markets, the investor who knows first wins. We built Eudox because speed isn't a feature — it's the entire advantage."
            </p>
            <div className="relative mt-8 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4ee8dc] to-[#3dc4ff] flex items-center justify-center overflow-hidden p-2">
                <img src="/eudox-logo-white.svg" alt="Eudox" className="w-full h-full object-contain" />
                </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">The Eudox Founders</div>
                <div className="text-white/50 text-xs">Emory · USC · Northwestern · Columbia</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} animation="fade-up" delay={i * 100}>
              <div className="group h-full p-8 rounded-3xl bg-white dark:bg-[#1a1b1f] border border-border hover:border-[#4ee8dc]/50 shadow-sm hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4ee8dc]/10 to-[#3dc4ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-[#3dc4ff]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        
      </div>
    </section>
  );
}

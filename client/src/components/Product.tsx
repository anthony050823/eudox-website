import { Brain, Network, Zap, Search } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export default function Product() {
  return (
    <section id="product" className="py-24 bg-white dark:bg-[#0B102C] relative overflow-hidden">
      <div className="container relative z-10">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#11142d] dark:text-white mb-6">
              The Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]">Deal Sourcing Agent</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eudox isn't just a database. It's an intelligent agent that works 24/7 to identify, vet, and prioritize investment opportunities that align with your specific thesis.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="group p-8 rounded-3xl bg-white dark:bg-[#1a1b1f] border border-border hover:border-[#4ee8dc]/50 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4ee8dc]/10 to-[#3dc4ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-7 h-7 text-[#3dc4ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#11142d] dark:text-white mb-3">Proactive Discovery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Don't wait for auctions. Our agent monitors millions of data points to find proprietary deals before they hit the market.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="group p-8 rounded-3xl bg-white dark:bg-[#1a1b1f] border border-border hover:border-[#4ee8dc]/50 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4ee8dc]/10 to-[#3dc4ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-7 h-7 text-[#3dc4ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#11142d] dark:text-white mb-3">Data Synthesis</h3>
              <p className="text-muted-foreground leading-relaxed">
                We connect disparate data points—financials, team changes, news, and more—into a coherent narrative for every target.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="group p-8 rounded-3xl bg-white dark:bg-[#1a1b1f] border border-border hover:border-[#4ee8dc]/50 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4ee8dc]/10 to-[#3dc4ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-[#3dc4ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#11142d] dark:text-white mb-3">Real-time Signals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Catch the perfect moment. We monitor trigger events like funding rounds, leadership shifts, and competitor moves in real-time.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={400} className="mt-24">
          <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B102C]/80 to-[#1a1b1f]/80 z-10"></div>
            <img 
              src="/images/feature-ai-agent.png" 
              alt="AI Agent Visualization" 
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center p-8 text-center">
              <div className="max-w-2xl">
                <h3 className="text-3xl font-bold text-white mb-4">Built for the Modern Dealmaker</h3>
                <p className="text-gray-300 text-lg mb-8">
                  Traditional databases are static. Eudox is dynamic. It learns from your preferences and gets smarter with every interaction.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm">
                    <Search className="w-4 h-4 text-[#4ee8dc]" /> Semantic Search
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm">
                    <Brain className="w-4 h-4 text-[#4ee8dc]" /> Investment-Aware LLM
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-sm">
                    <Network className="w-4 h-4 text-[#4ee8dc]" /> Relationship Mapping
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

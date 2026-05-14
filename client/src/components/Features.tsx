import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export default function Features() {
  const features = [
    "Automated thesis matching based on your investment criteria",
    "Deep web scanning for non-obvious signals",
    "Executive contact enrichment with verified emails",
    "Competitor landscape mapping",
    "Growth signal detection (hiring, traffic, tech stack)",
    "Automated outreach personalization"
  ];

  return (
    <section id="features" className="py-24 bg-[#f5f6fb] dark:bg-[#11142d]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="slide-right" className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] rounded-[2rem] opacity-20 blur-xl"></div>
              <div className="relative bg-white dark:bg-[#1a1b1f] rounded-3xl border border-border shadow-xl overflow-hidden">
                <div className="p-6 border-b border-border bg-gray-50/50 dark:bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-muted-foreground">eudox_agent_v1.0</div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#62e2d8] to-[#4cc3ff] flex items-center justify-center shrink-0 p-1.5">
                      <img src="/eudox-logo-white.svg" alt="Eudox" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-gray-100 dark:bg-white/5 rounded-2xl rounded-tl-none p-4 text-sm text-foreground">
                      I've analyzed 1,400 companies in the vertical SaaS space. Based on your thesis for "mission-critical B2B software," I've flagged 3 high-priority targets that just opened senior sales roles.
                    </div>
                  </div>
                  
                  <div className="flex gap-4 flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0">
                      <span className="text-gray-600 dark:text-gray-300 text-xs font-bold">You</span>
                    </div>
                    <div className="bg-[#3dc4ff]/10 dark:bg-[#3dc4ff]/20 rounded-2xl rounded-tr-none p-4 text-sm text-foreground">
                      Show me the top candidate. What's the growth signal?
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#62e2d8] to-[#4cc3ff] flex items-center justify-center shrink-0 p-1.5">
                      <img src="/eudox-logo-white.svg" alt="Eudox" className="w-full h-full object-contain" />
                    </div>
                    <div className="bg-gray-100 dark:bg-white/5 rounded-2xl rounded-tl-none p-4 text-sm text-foreground space-y-3">
                      <p><strong>Acme Corp</strong> matches 94% of your criteria.</p>
                      <div className="bg-white dark:bg-black/20 rounded-xl p-3 border border-border/50">
                        <div className="flex justify-between text-xs mb-2">
                          <span className="text-muted-foreground">Revenue Est.</span>
                          <span className="font-semibold">$12M - $15M ARR</span>
                        </div>
                        <div className="flex justify-between text-xs mb-2">
                          <span className="text-muted-foreground">Growth Signal</span>
                          <span className="text-green-500 font-medium">+45% Headcount</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Trigger</span>
                          <span className="text-[#3dc4ff] font-medium">New CTO Hired</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#11142d] dark:text-white mb-6">
              More Than Just Data. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]">Actionable Intelligence.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stop drowning in spreadsheets and outdated databases. Eudox gives you a competitive edge by automating the tedious parts of deal sourcing, allowing you to focus on building relationships and closing deals.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#4ee8dc] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

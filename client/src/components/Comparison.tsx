import { X, Check } from "lucide-react";

export default function Comparison() {
  return (
    <section id="comparison" className="py-24 bg-white dark:bg-[#0B102C]">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#11142d] dark:text-white mb-6">
            Why Eudox vs. <span className="text-muted-foreground line-through decoration-red-500/50">Generic Chat</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            General-purpose AI chatbots hallucinate data and lack context. Eudox is purpose-built for M&A professionals, trained on private market workflows and verified data sources.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Generic Chat Card */}
          <div className="p-8 rounded-3xl bg-gray-50 dark:bg-[#1a1b1f]/50 border border-border/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <X className="w-32 h-32" />
            </div>
            <h3 className="text-xl font-bold text-muted-foreground mb-6">Generic AI Chatbots</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Hallucinates financial data and company details</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>No real-time access to private market signals</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Cannot execute workflows (email, CRM sync)</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <span>Generic knowledge, lacks investment context</span>
              </li>
            </ul>
          </div>

          {/* Eudox Card */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#1a1b1f] border border-[#4ee8dc]/30 shadow-xl shadow-cyan-500/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]"></div>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Check className="w-32 h-32 text-[#4ee8dc]" />
            </div>
            <h3 className="text-xl font-bold text-[#11142d] dark:text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#4ee8dc]"></span> Eudox Agent
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground font-medium">
                <Check className="w-5 h-5 text-[#4ee8dc] shrink-0 mt-0.5" />
                <span>Verified data from trusted private market sources</span>
              </li>
              <li className="flex items-start gap-3 text-foreground font-medium">
                <Check className="w-5 h-5 text-[#4ee8dc] shrink-0 mt-0.5" />
                <span>Real-time monitoring of 16M+ companies</span>
              </li>
              <li className="flex items-start gap-3 text-foreground font-medium">
                <Check className="w-5 h-5 text-[#4ee8dc] shrink-0 mt-0.5" />
                <span>Autonomous workflow execution & CRM integration</span>
              </li>
              <li className="flex items-start gap-3 text-foreground font-medium">
                <Check className="w-5 h-5 text-[#4ee8dc] shrink-0 mt-0.5" />
                <span>Trained specifically on M&A and PE deal logic</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 rounded-3xl overflow-hidden relative h-64 md:h-80">
          <img 
            src="/images/comparison-bg.png" 
            alt="Data Comparison" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B102C] to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
            <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto">
              "The difference is clear. While others search, Eudox discovers."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

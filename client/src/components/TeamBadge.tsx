import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function TeamBadge() {
  const universities = [
    {
      name: "Emory University",
      logo: "/images/universities/emory-university.png",
      alt: "Emory University Logo",
      needsBackground: true
    },
    {
      name: "University of Southern California",
      logo: "/images/universities/usc.png",
      alt: "USC Logo",
      needsBackground: false // USC already has background
    },
    {
      name: "Northwestern University McCormick School of Engineering",
      logo: "/images/universities/northwestern-university.png",
      alt: "Northwestern University McCormick School of Engineering Logo",
      needsBackground: true
    }
  ];

  return (
    <div className="mt-12 p-8 rounded-3xl bg-white dark:bg-[#1a1b1f] border border-border shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#11142d] dark:text-white mb-3">
          Empowered by Elite College Students
        </h3>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Built by a team of elite students from Emory University, USC, and Northwestern University's McCormick School of Engineering, Eudox represents the convergence of top-tier academic excellence and real-world fintech innovation.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We're revolutionizing the traditionally manual and time-intensive process of deal sourcing in private markets. What once required weeks of research, countless cold calls, and endless spreadsheet management now happens autonomously through our AI-powered platform. By combining advanced machine learning with deep financial domain expertise, we've transformed reactive searching into proactive discovery—enabling dealmakers to identify high-potential opportunities before they hit the market.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to democratize access to private market intelligence, making institutional-grade deal sourcing capabilities available to firms of all sizes while dramatically reducing the time from opportunity identification to actionable insight.
          </p>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-12 items-center justify-center">
          {/* First set of logos */}
          {universities.map((university, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <ImageWithFallback
                src={university.logo}
                alt={university.alt}
                className={`max-w-full max-h-full object-contain ${
                  university.needsBackground ? 'dark:bg-white dark:px-4 dark:py-3' : ''
                }`}
                fallbackClassName="w-full h-full"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {universities.map((university, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <ImageWithFallback
                src={university.logo}
                alt={university.alt}
                className={`max-w-full max-h-full object-contain ${
                  university.needsBackground ? 'dark:bg-white dark:px-4 dark:py-3' : ''
                }`}
                fallbackClassName="w-full h-full"
                style={{height: '75px'}}
              />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

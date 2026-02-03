import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function TeamBadge() {
  const universities = [
    {
      name: "Emory University",
      logo: "/images/universities/emory-university.png",
      alt: "Emory University Logo"
    },
    {
      name: "University of Southern California",
      logo: "/images/universities/usc.png",
      alt: "USC Logo"
    },
    {
      name: "Northwestern University McCormick School of Engineering",
      logo: "/images/universities/northwestern-university.png",
      alt: "Northwestern University McCormick School of Engineering Logo"
    }
  ];

  return (
    <div className="mt-12 p-8 rounded-3xl bg-white dark:bg-[#1a1b1f] border border-border shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#11142d] dark:text-white mb-3">
          Empowered by Elite College Students
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We're accelerating traditional yet crucial finance sourcing processes with cutting-edge AI technology, transforming how dealmakers discover and evaluate opportunities.
        </p>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-12 items-center justify-center">
          {/* First set of logos */}
          {universities.map((university, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-48 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105 bg-white dark:bg-white rounded-xl p-3"
            >
              <ImageWithFallback
                src={university.logo}
                alt={university.alt}
                className="max-w-full max-h-full object-contain"
                fallbackClassName="w-full h-full"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {universities.map((university, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-48 h-24 flex items-center justify-center transition-all duration-300 hover:scale-105 bg-white dark:bg-white rounded-xl p-3"
            >
              <ImageWithFallback
                src={university.logo}
                alt={university.alt}
                className="max-w-full max-h-full object-contain"
                fallbackClassName="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      
      
      {/* Career Section */}
      <div className="mt-8 pt-8 border-t border-border text-center">
        <h4 className="text-lg font-semibold text-[#11142d] dark:text-white mb-3">
          Join Our Team
        </h4>
        <p className="text-muted-foreground mb-4">
          We're looking for people with unique skills and passion in fintech and AI SaaS.
        </p>
        <p className="text-sm text-muted-foreground">
          Feel free to email{" "}
          <a 
            href="mailto:contact@eudox.ai" 
            className="text-[#3dc4ff] hover:text-[#4ee8dc] font-medium underline transition-colors"
          >
            contact@eudox.ai
          </a>
          {" "}to join our group.
        </p>
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

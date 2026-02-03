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
      name: "Northwestern University",
      logo: "/images/universities/northwestern-university.png",
      alt: "Northwestern University Logo"
    }
  ];

  return (
    <div className="mt-12 p-8 rounded-3xl bg-white dark:bg-[#1a1b1f] border border-border shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[#11142d] dark:text-white mb-3">
          Empowered by Elite College Students
        </h3>
      </div>
      
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-12 items-center justify-center">
          {/* First set of logos */}
          {universities.map((university, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-105 bg-white px-6 py-4"
            >
              <ImageWithFallback
                src={university.logo}
                alt={university.alt}
                className="max-h-16 object-contain"
                fallbackClassName="w-full h-full"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {universities.map((university, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 flex items-center justify-center transition-all duration-300 hover:scale-105 bg-white px-6 py-4"
            >
              <ImageWithFallback
                src={university.logo}
                alt={university.alt}
                className="max-h-16 object-contain"
                fallbackClassName="w-full h-full"
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

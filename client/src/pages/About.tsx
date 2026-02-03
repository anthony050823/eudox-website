import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function About() {
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
      needsBackground: false
    },
    {
      name: "Northwestern University McCormick School of Engineering",
      logo: "/images/universities/northwestern-university.png",
      alt: "Northwestern University McCormick School of Engineering Logo",
      needsBackground: true
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#11142d] dark:text-white mb-6">
              About Eudox
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowered by Elite College Students
            </p>
          </div>

          {/* University Logos */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-16">
            {universities.map((university, index) => (
              <div
                key={index}
                className="w-48 h-24 flex items-center justify-center"
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
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#1a1b1f] border border-border shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Built by a team of elite students from Emory University, USC, and Northwestern University's McCormick School of Engineering, Eudox represents the convergence of top-tier academic excellence and real-world fintech innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We're revolutionizing the traditionally manual and time-intensive process of deal sourcing in private markets. What once required weeks of research, countless cold calls, and endless spreadsheet management now happens autonomously through our AI-powered platform. By combining advanced machine learning with deep financial domain expertise, we've transformed reactive searching into proactive discovery—enabling dealmakers to identify high-potential opportunities before they hit the market.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to democratize access to private market intelligence, making institutional-grade deal sourcing capabilities available to firms of all sizes while dramatically reducing the time from opportunity identification to actionable insight.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

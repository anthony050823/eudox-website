import { Link } from "wouter";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [feedbackData, setFeedbackData] = useState({ name: '', email: '', message: '' });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

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
    },
    {
      name: "Columbia College",
      logo: "/images/universities/columbia.png",
      alt: "Columbia College Logo"
    }
  ];

  const feedbackMutation = trpc.feedback.submit.useMutation({
    onSuccess: () => {
      setFeedbackSubmitted(true);
      toast.success("Thank you! Your feedback has been submitted.");
      setTimeout(() => {
        setFeedbackModalOpen(false);
        setFeedbackSubmitted(false);
        setFeedbackData({ name: '', email: '', message: '' });
      }, 2000);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit feedback. Please try again.");
    },
  });

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    feedbackMutation.mutate(feedbackData);
  };
  
  return (
    <footer className="bg-white dark:bg-[#0B102C] border-t border-border/40 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 flex items-center justify-center overflow-hidden">
                <ImageWithFallback 
                  src={resolvedTheme === 'dark' ? "/logo-dark.svg" : "/logo-light.svg"}
                  alt="Eudox" 
                  className="w-full h-full object-contain"
                  fallbackClassName="w-full h-full"
                />
              </div>
              <span className="text-xl font-bold text-[#11142d] dark:text-white">Eudox</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Engineering the autonomous deal sourcing agent for private markets. 
              Moving beyond reactive search to proactive discovery.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Visit Eudox on Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/eudox/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Visit Eudox on LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#comparison" className="hover:text-primary transition-colors">Why Eudox</a></li>
              <li>
                <button 
                  onClick={() => setFeedbackModalOpen(true)}
                  className="hover:text-primary transition-colors text-left"
                >
                  Feedbacks
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <button 
                  data-about-button
                  onClick={() => setAboutModalOpen(true)}
                  className="hover:text-primary transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCareerModalOpen(true)}
                  className="hover:text-primary transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 font-sans">Legal</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li>
                <button
                  data-privacy-button
                  onClick={() => setPrivacyModalOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  data-terms-button
                  onClick={() => setTermsModalOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  data-cookie-button
                  onClick={() => setCookieModalOpen(true)}
                  className="text-muted-foreground hover:text-primary transition-colors font-medium text-left"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Eudox Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            All systems operational
          </div>
        </div>
      </div>
      
      {/* Career Modal */}
      <Dialog open={careerModalOpen} onOpenChange={setCareerModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Join Our Team</DialogTitle>
            <DialogDescription className="text-base pt-4">
              We're looking for people with unique skills and passion in fintech and AI SaaS.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-4">
              Feel free to email us to join our group:
            </p>
            <a 
              href="mailto:contact@eudox.ai"
              className="inline-flex items-center gap-2 text-[#3dc4ff] hover:text-[#4ee8dc] font-medium transition-colors"
            >
              <Mail size={18} />
              contact@eudox.ai
            </a>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Feedback Modal */}
      <Dialog open={feedbackModalOpen} onOpenChange={setFeedbackModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Share Your Feedback</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Tell us about your experience with Eudox and share any UI/UX improvements or features you'd like to see.
            </DialogDescription>
          </DialogHeader>
          {feedbackSubmitted ? (
            <div className="py-8 text-center">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <p className="text-lg font-semibold text-foreground">Thank you for your feedback!</p>
              <p className="text-sm text-muted-foreground mt-2">We appreciate you taking the time to help us improve.</p>
            </div>
          ) : (
            <form onSubmit={handleFeedbackSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={feedbackData.name}
                  onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={feedbackData.email}
                  onChange={(e) => setFeedbackData({ ...feedbackData, email: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Feedback</Label>
                <Textarea
                  id="message"
                  placeholder="Share your thoughts on UI/UX, features you'd like to see, or general feedback..."
                  value={feedbackData.message}
                  onChange={(e) => setFeedbackData({ ...feedbackData, message: e.target.value })}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Feedback
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
      
      {/* About Us Modal */}
      <Dialog open={aboutModalOpen} onOpenChange={setAboutModalOpen}>
        <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center">About Eudox</DialogTitle>
            <DialogDescription className="text-center text-lg pt-2">
              Empowered by Elite College Students
            </DialogDescription>
          </DialogHeader>
          
          {/* University Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 py-6">
            {universities.map((university, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white px-6 py-4"
              >
                <ImageWithFallback
                  src={university.logo}
                  alt={university.alt}
                  className="max-h-17 object-contain"
                  fallbackClassName="w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-4 pt-4">
            <p className="text-base text-muted-foreground leading-relaxed">
              Built by a team of elite students from Emory University, USC, and Northwestern University's McCormick School of Engineering, Eudox represents the convergence of top-tier academic excellence and real-world fintech innovation.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              We're revolutionizing the traditionally manual and time-intensive process of deal sourcing in private markets. What once required weeks of research, countless cold calls, and endless spreadsheet management now happens autonomously through our AI-powered platform. By combining advanced machine learning with deep financial domain expertise, we've transformed reactive searching into proactive discovery—enabling dealmakers to identify high-potential opportunities before they hit the market.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our mission is to democratize access to private market intelligence, making institutional-grade deal sourcing capabilities available to firms of all sizes while dramatically reducing the time from opportunity identification to actionable insight.
            </p>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Privacy Policy Modal */}
      <Dialog open={privacyModalOpen} onOpenChange={setPrivacyModalOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">Privacy Policy</DialogTitle>
            <DialogDescription>
              Last Updated: December 10, 2024
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
              <p className="text-muted-foreground leading-relaxed">
                EudoxAi, Inc. ("Eudox," "we," "us," or "our") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our autonomous deal sourcing platform and related services.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">2. Information We Collect</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We collect information you provide directly, information collected automatically, business information and deal data, and communications data.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">3. How We Use Your Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use your information to provide and improve our Services, process transactions, personalize your experience, communicate with you, and ensure security and compliance.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">4. Information Sharing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share information with service providers, during business transfers, for legal requirements, or with your consent.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">5. Data Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures including encryption, secure authentication, regular audits, and access controls to protect your information.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">6. Your Rights</h3>
              <p className="text-muted-foreground leading-relaxed">
                You have rights to access, correct, delete, and port your data. Contact us at <a href="mailto:privacy@eudox.ai" className="text-primary hover:underline">privacy@eudox.ai</a> to exercise these rights.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">7. Contact Us</h3>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Privacy Policy, contact us at <a href="mailto:privacy@eudox.ai" className="text-primary hover:underline">privacy@eudox.ai</a>.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Terms of Service Modal */}
      <Dialog open={termsModalOpen} onOpenChange={setTermsModalOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">Terms of Service</DialogTitle>
            <DialogDescription>
              Last Updated: December 10, 2024
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h3>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using Eudox's Services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">2. Service Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eudox provides an AI-powered autonomous deal sourcing platform for private market opportunities. Our Services include deal discovery, valuation analysis, and real-time monitoring.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">3. User Accounts</h3>
              <p className="text-muted-foreground leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">4. Acceptable Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                You agree not to misuse our Services, violate laws, infringe intellectual property rights, or interfere with platform operations.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">5. Intellectual Property</h3>
              <p className="text-muted-foreground leading-relaxed">
                All content, features, and functionality of our Services are owned by Eudox and protected by intellectual property laws.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">6. Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Eudox provides Services "as is" without warranties. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">7. Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                For questions, contact us at <a href="mailto:legal@eudox.ai" className="text-primary hover:underline">legal@eudox.ai</a>.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Cookie Policy Modal */}
      <Dialog open={cookieModalOpen} onOpenChange={setCookieModalOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">Cookie Policy</DialogTitle>
            <DialogDescription>
              Last Updated: December 10, 2024
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 text-sm">
            <section>
              <h3 className="text-lg font-semibold mb-2">1. What Are Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. They help us provide, secure, and improve our Services.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">2. Types of Cookies We Use</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Essential Cookies:</strong> Required for basic functionality and security.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Analytics Cookies:</strong> Help us understand how users interact with our Services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Preference Cookies:</strong> Remember your settings and preferences.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">3. Managing Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can control cookies through your browser settings. Note that disabling certain cookies may affect functionality.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">4. Third-Party Cookies</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use trusted third-party services that may set cookies for analytics, security, and payment processing.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">5. Updates</h3>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy periodically. Changes will be posted on this page with an updated date.
              </p>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2">6. Contact</h3>
              <p className="text-muted-foreground leading-relaxed">
                For questions, contact us at <a href="mailto:privacy@eudox.ai" className="text-primary hover:underline">privacy@eudox.ai</a>.
              </p>
            </section>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}

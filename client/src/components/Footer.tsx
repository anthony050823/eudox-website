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

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [feedbackModalOpen, setFeedbackModalOpen] = useState(false);
  const [feedbackData, setFeedbackData] = useState({ name: '', email: '', message: '' });
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', feedbackData);
    setFeedbackSubmitted(true);
    setTimeout(() => {
      setFeedbackModalOpen(false);
      setFeedbackSubmitted(false);
      setFeedbackData({ name: '', email: '', message: '' });
    }, 2000);
  };
  
  return (
    <footer className="bg-white dark:bg-[#0B102C] border-t border-border/40 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
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
              <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li>
                <button 
                  onClick={() => setFeedbackModalOpen(true)}
                  className="hover:text-primary transition-colors text-left"
                >
                  Feedback
                </button>
              </li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-6 font-sans">Legal</h4>
            <ul className="space-y-4 text-sm font-sans">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors font-medium">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors font-medium">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors font-medium">Cookie Policy</Link></li>
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
              We'd love to hear about your experience and suggestions for improvement.
            </DialogDescription>
          </DialogHeader>
          {feedbackSubmitted ? (
            <div className="py-8 text-center">
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <p className="text-lg font-semibold text-foreground">Thank you for your feedback!</p>
              <p className="text-sm text-muted-foreground mt-2">We appreciate you taking the time to share your thoughts.</p>
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
                  placeholder="Share your thoughts, suggestions, or experience..."
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
    </footer>
  );
}

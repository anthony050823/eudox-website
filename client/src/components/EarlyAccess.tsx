import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { AnimatedSection } from "./AnimatedSection";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const submitMutation = trpc.earlyAccess.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you! Your request has been submitted successfully.");
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        message: "",
      });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to submit request. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="early-access" className="py-24 bg-[#f5f6fb] dark:bg-[#0B102C] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ImageWithFallback 
          src="/images/early-access-bg.png" 
          alt="Background Pattern" 
          className="w-full h-full object-cover opacity-30"
          fallbackClassName="w-full h-full"
          loading="lazy"
        />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedSection animation="slide-right">
            <h2 className="text-3xl md:text-4xl font-bold text-[#11142d] dark:text-white mb-6">
              Join the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]">Deal Origination</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Secure your spot in our early access program. We're onboarding a limited number of firms each week to ensure the highest quality of service.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1b1f] flex items-center justify-center shadow-sm border border-border">
                  <span className="font-bold text-[#3dc4ff]">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Priority Access</h4>
                  <p className="text-sm text-muted-foreground">Be the first to test new autonomous features.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1b1f] flex items-center justify-center shadow-sm border border-border">
                  <span className="font-bold text-[#3dc4ff]">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Founder Onboarding</h4>
                  <p className="text-sm text-muted-foreground">Direct setup support from our engineering team.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white dark:bg-[#1a1b1f] flex items-center justify-center shadow-sm border border-border">
                  <span className="font-bold text-[#3dc4ff]">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Locked-in Pricing</h4>
                  <p className="text-sm text-muted-foreground">Early partners get preferred rates for life.</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-white dark:bg-[#1a1b1f] rounded-2xl border border-border shadow-lg">
              <h4 className="font-semibold text-foreground mb-4">Pricing Plans</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border/50">
                  <div>
                    <span className="font-medium">Starter</span>
                    <p className="text-xs text-muted-foreground">For individual dealmakers</p>
                  </div>
                  <span className="font-bold text-xl">$499<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">Pro Firm</span>
                    <p className="text-xs text-muted-foreground">For teams up to 5</p>
                  </div>
                  <span className="font-bold text-xl">$1,999<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-left">
            <div id="contact">
            <Card className="border-border shadow-2xl bg-white/80 dark:bg-[#1a1b1f]/80 backdrop-blur-xl">
              <CardHeader>
                <CardTitle>Request Access</CardTitle>
                <CardDescription>Fill out the form below and we'll be in touch within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input 
                        id="firstName" 
                        placeholder="Jane" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="jane@firm.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Firm / Company Name</Label>
                    <Input 
                      id="company" 
                      placeholder="Acme Capital" 
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input 
                      id="role" 
                      placeholder="Partner, Associate, etc." 
                      value={formData.role}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">What's your primary deal sourcing challenge?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your current workflow..." 
                      className="min-h-[100px]" 
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff] hover:opacity-90 text-white border-0 h-12 text-base font-semibold shadow-lg shadow-cyan-500/20"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? "Submitting..." : "Submit Request"}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground pt-2">
                    By submitting, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </form>
              </CardContent>
            </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

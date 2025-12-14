import { Shield, FileText, Users, CreditCard, AlertCircle, CheckCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export default function TermsSection() {
  const termsCategories = [
    {
      icon: Shield,
      title: "Service Rules & Usage",
      items: [
        "You must be 18+ or have legal capacity to enter into binding contracts",
        "One account per user; sharing credentials is prohibited",
        "Use the service only for lawful M&A deal sourcing purposes",
        "Do not attempt to reverse engineer, hack, or disrupt the platform",
        "Respect intellectual property rights of Eudox and third parties"
      ]
    },
    {
      icon: FileText,
      title: "Liability Limitations",
      items: [
        "Service provided \"as is\" without warranties of any kind",
        "We are not liable for investment decisions made using our platform",
        "Not responsible for third-party data accuracy or completeness",
        "Maximum liability limited to fees paid in the 12 months prior to claim",
        "No liability for indirect, incidental, or consequential damages"
      ]
    },
    {
      icon: Users,
      title: "User Responsibilities",
      items: [
        "Maintain confidentiality of your account credentials",
        "Ensure all information provided is accurate and up-to-date",
        "Comply with all applicable laws and regulations",
        "Respect usage limits based on your subscription tier",
        "Report any security vulnerabilities or unauthorized access immediately"
      ]
    },
    {
      icon: CreditCard,
      title: "Payment & Subscriptions",
      items: [
        "Subscription fees are billed monthly or annually in advance",
        "Starter: $499/mo (500 queries), Pro: $1,999/mo (3,000 queries), Enterprise: Custom",
        "Automatic renewal unless cancelled 7 days before billing date",
        "No refunds for partial months or unused queries",
        "Price changes effective on next renewal with 30 days notice"
      ]
    },
    {
      icon: AlertCircle,
      title: "Account Management",
      items: [
        "We may suspend accounts for Terms violations without prior notice",
        "Termination for cause: no refund; data deleted after 30 days",
        "You may cancel anytime; access continues until end of billing period",
        "Data export available for 30 days post-cancellation",
        "Reactivation subject to approval and current pricing"
      ]
    },
    {
      icon: CheckCircle,
      title: "Intellectual Property",
      items: [
        "Eudox retains all rights to platform, algorithms, and proprietary data",
        "You retain ownership of your uploaded investment criteria and notes",
        "Limited license granted to use platform features during active subscription",
        "No right to resell, redistribute, or create derivative works",
        "Feedback and suggestions become our property without compensation"
      ]
    }
  ];

  return (
    <section id="terms" className="py-24 bg-white dark:bg-[#0B102C]">
      <div className="container">
        <AnimatedSection animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#11142d] dark:text-white mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ee8dc] to-[#3dc4ff]">Service</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Clear guidelines for using Eudox. By accessing our platform, you agree to these terms which govern your use of our autonomous deal sourcing service.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {termsCategories.map((category, index) => (
            <AnimatedSection key={category.title} animation="fade-up" delay={index * 100}>
              <div className="h-full p-8 rounded-3xl bg-[#f5f6fb] dark:bg-[#1a1b1f] border border-border hover:border-[#4ee8dc]/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4ee8dc]/10 to-[#3dc4ff]/10 flex items-center justify-center mb-6">
                  <category.icon className="w-7 h-7 text-[#3dc4ff]" />
                </div>
                <h3 className="text-xl font-bold text-[#11142d] dark:text-white mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-[#4ee8dc] mt-1 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#4ee8dc]/5 to-[#3dc4ff]/5 border border-[#4ee8dc]/20 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#4ee8dc] shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-foreground mb-2">Important Legal Notice</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These Terms of Service constitute a legally binding agreement between you and Eudox Inc. 
                  For complete legal details including dispute resolution, governing law, and data handling practices, 
                  please review our full <a href="/terms" className="text-[#3dc4ff] hover:underline">Terms of Service</a> and{" "}
                  <a href="/privacy" className="text-[#3dc4ff] hover:underline">Privacy Policy</a>. 
                  Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

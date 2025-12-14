import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B102C]">
      <div className="container py-16 max-w-4xl relative">
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-20 right-4 md:right-8 z-50 bg-background/80 backdrop-blur-sm border border-border hover:bg-accent"
          onClick={() => setLocation("/")}
          aria-label="Close and return to home"
        >
          <X className="h-5 w-5" />
        </Button>
        <AnimatedSection animation="fade-up">
          <h1 className="text-4xl font-bold text-[#11142d] dark:text-white mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            
            {/* 1. ESTABLISHES RULES */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">1. Acceptance and Scope</h2>
              <p className="text-foreground leading-relaxed mb-4">
                By accessing or using the Eudox platform (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all users, including visitors, registered users, and subscribers.
              </p>
              <p className="text-foreground leading-relaxed">
                Eudox Inc. ("Eudox," "we," "us," or "our") provides an autonomous AI-powered deal sourcing platform for mergers and acquisitions professionals. The Service includes access to our website, software applications, AI agent, data analytics, and related features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">2. User Eligibility and Account Rules</h2>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Age and Capacity:</strong> You must be at least 18 years old and have the legal capacity to enter into binding contracts. If you are accepting these Terms on behalf of an organization, you represent that you have the authority to bind that organization.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Account Registration:</strong> To access certain features, you must create an account by providing accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>One Account Per User:</strong> Each user may maintain only one account. Account sharing, credential sharing, or transferring accounts to third parties is strictly prohibited.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Prohibited Uses:</strong> You may not use the Service for any unlawful purpose, to compete with Eudox, to reverse engineer our technology, to scrape or harvest data through automated means not provided by our API, to transmit malware or harmful code, or to violate any applicable laws or regulations.
              </p>
            </section>

            {/* 2. LIMITS LIABILITY */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">3. Disclaimers and Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.1 Service "As Is"</h3>
              <p className="text-foreground leading-relaxed mb-4">
                The Service is provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, secure, or free from viruses or other harmful components.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.2 Investment Decisions</h3>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Not Financial Advice:</strong> The Service provides data, analytics, and AI-generated insights for informational purposes only. Eudox does not provide investment advice, legal advice, or recommendations to buy, sell, or hold any securities or assets. You are solely responsible for your investment decisions and due diligence.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>No Guarantee of Results:</strong> We make no representations or warranties regarding the accuracy, completeness, reliability, or timeliness of any data, analysis, or recommendations provided through the Service. Investment outcomes are inherently uncertain, and past performance does not guarantee future results.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.3 Third-Party Data</h3>
              <p className="text-foreground leading-relaxed mb-4">
                The Service aggregates data from third-party sources. We are not responsible for the accuracy, completeness, or reliability of third-party data. We do not endorse or verify information provided by third parties.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.4 Limitation of Damages</h3>
              <p className="text-foreground leading-relaxed mb-4">
                To the maximum extent permitted by law, Eudox and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, arising out of or related to your use of or inability to use the Service.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Maximum Liability Cap:</strong> In no event shall our total liability to you for all claims arising out of or related to these Terms or the Service exceed the amount you paid to Eudox in the twelve (12) months immediately preceding the event giving rise to liability, or one hundred dollars ($100), whichever is greater.
              </p>
            </section>

            {/* 3. DEFINES RIGHTS & RESPONSIBILITIES */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">4. User Rights and Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">4.1 User Responsibilities</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You agree to use the Service in compliance with all applicable laws and regulations. You are responsible for ensuring that all information you provide is accurate, current, and complete. You must promptly update your account information if it changes.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You agree to maintain the security and confidentiality of your account credentials. You must immediately notify us of any unauthorized access to your account or any security breach. You are responsible for all activities that occur under your account, whether or not authorized by you.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You agree to respect usage limits based on your subscription tier. Exceeding usage limits may result in service restrictions, additional charges, or account suspension.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">4.2 Eudox's Responsibilities</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox will use commercially reasonable efforts to provide the Service in accordance with the features and functionality described in your subscription plan. We will make reasonable efforts to maintain the availability and performance of the Service, subject to scheduled maintenance and unforeseen outages.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                We will handle your personal data in accordance with our Privacy Policy. We will implement reasonable security measures to protect your data from unauthorized access, disclosure, or destruction.
              </p>
              <p className="text-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice, subject to the terms of your active subscription. We will provide advance notice of material changes that adversely affect your rights where reasonably practicable.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">4.3 Indemnification</h3>
              <p className="text-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Eudox and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to your use of the Service, your violation of these Terms, your violation of any rights of another party, or your violation of any applicable laws or regulations.
              </p>
            </section>

            {/* 4. MANAGES ACCOUNTS */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">5. Account Management and Termination</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">5.1 Suspension and Termination by Eudox</h3>
              <p className="text-foreground leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account immediately, without prior notice, if we determine in our sole discretion that you have violated these Terms, engaged in fraudulent or illegal activity, posed a security risk, or otherwise acted in a manner detrimental to Eudox or other users.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Termination for Cause:</strong> If your account is terminated for cause (violation of Terms), you will not be entitled to any refund of prepaid fees, and you will remain liable for all outstanding amounts owed to Eudox.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Data Deletion:</strong> Upon termination, your account data will be retained for thirty (30) days to allow for data export or account reactivation. After thirty (30) days, all account data will be permanently deleted and cannot be recovered.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">5.2 Cancellation by User</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You may cancel your subscription at any time through your account settings or by contacting our support team at support@eudox.com. Cancellation will be effective at the end of your current billing cycle.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You will retain access to the Service until the end of your current billing period. No refunds or credits will be provided for partial months of service, unused features, or unused queries.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Data Export:</strong> You may export your data at any time during your active subscription or within thirty (30) days after cancellation. After thirty (30) days, your data will be permanently deleted.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">5.3 Reactivation</h3>
              <p className="text-foreground leading-relaxed">
                If you wish to reactivate a canceled or suspended account, you may do so by contacting our support team. Reactivation is subject to our approval and current pricing. Previously negotiated discounts or promotional rates may no longer be available upon reactivation.
              </p>
            </section>

            {/* 5. COVERS SPECIFICS */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">6. Payment Terms and Billing</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.1 Subscription Plans and Pricing</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox offers the following subscription plans:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
                <li><strong>Starter Plan:</strong> $499 per month (500 AI queries, single user)</li>
                <li><strong>Pro Firm Plan:</strong> $1,999 per month (3,000 AI queries, up to 5 users)</li>
                <li><strong>Enterprise Plan:</strong> Custom pricing (unlimited queries and users)</li>
              </ul>
              <p className="text-foreground leading-relaxed mb-4">
                All fees are in U.S. dollars and are exclusive of applicable taxes, duties, or similar governmental assessments. You are responsible for paying all applicable taxes.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.2 Billing and Payment</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Subscription fees are billed in advance on a monthly or annual basis, depending on your selected billing cycle. By providing payment information, you authorize Eudox to charge your designated payment method on a recurring basis until you cancel your subscription.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                If your payment method fails or your account becomes past due, we may suspend your access to the Service until payment is received. You are responsible for providing current, complete, and accurate billing information and promptly updating such information if it changes.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.3 Automatic Renewal</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Your subscription will automatically renew at the end of each billing cycle unless you cancel at least seven (7) days before the renewal date. You will be charged the then-current subscription fee for your plan.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.4 Price Changes</h3>
              <p className="text-foreground leading-relaxed mb-4">
                We reserve the right to change our pricing at any time. Price changes will be communicated to you at least thirty (30) days in advance via email or through the Service. Price changes will take effect on your next billing cycle following the notice period.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Your continued use of the Service after a price change constitutes your acceptance of the new pricing. If you do not agree to the price change, you may cancel your subscription before the new price takes effect.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.5 Refund Policy</h3>
              <p className="text-foreground leading-relaxed">
                All subscription fees are non-refundable except as expressly provided in these Terms or required by applicable law. We do not provide refunds or credits for partial months of service, unused features, unused queries, or early cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">7. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.1 Eudox's Intellectual Property</h3>
              <p className="text-foreground leading-relaxed mb-4">
                The Service, including all software, algorithms, AI models, data compilations, designs, graphics, text, and other content provided by Eudox (collectively, "Eudox Content"), is owned by Eudox and is protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Subject to your compliance with these Terms, Eudox grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service during your active subscription solely for your internal business purposes.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You may not copy, modify, distribute, sell, lease, sublicense, reverse engineer, decompile, or create derivative works based on the Service or any Eudox Content, except as expressly permitted by these Terms or applicable law.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.2 User-Generated Content</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You retain ownership of any investment criteria, notes, saved searches, or other content you upload or create through the Service ("User Content"). By uploading or creating User Content, you grant Eudox a worldwide, non-exclusive, royalty-free license to use, store, process, and display your User Content solely to provide and improve the Service.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You represent and warrant that you have all necessary rights to grant this license and that your User Content does not violate any third-party rights or applicable laws.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.3 Feedback and Suggestions</h3>
              <p className="text-foreground leading-relaxed">
                If you provide Eudox with any feedback, suggestions, or ideas regarding the Service ("Feedback"), you grant Eudox a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and incorporate such Feedback into the Service without any obligation to compensate you or provide attribution.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">8. Data Privacy and Security</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Your use of the Service is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. By using the Service, you consent to the collection and use of your information as described in the Privacy Policy.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                We implement reasonable administrative, technical, and physical security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
              <p className="text-foreground leading-relaxed">
                You are responsible for maintaining the security of your account credentials and for any activities that occur under your account. You agree to immediately notify us of any unauthorized access or security breach.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">9. Dispute Resolution and Governing Law</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">9.1 Governing Law</h3>
              <p className="text-foreground leading-relaxed mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">9.2 Dispute Resolution</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association (AAA). The arbitration shall be conducted in Wilmington, Delaware, or remotely via videoconference.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Class Action Waiver:</strong> You agree that any arbitration or proceeding shall be conducted on an individual basis and not as a class action, consolidated action, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">9.3 Exceptions</h3>
              <p className="text-foreground leading-relaxed">
                Notwithstanding the foregoing, either party may seek injunctive or equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">10. Modifications to Terms</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last Updated" date at the top of this page. We may also notify you via email or through the Service.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Your continued use of the Service after the effective date of the modified Terms constitutes your acceptance of the changes. If you do not agree to the modified Terms, you must stop using the Service and cancel your subscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">11. General Provisions</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.1 Entire Agreement</h3>
              <p className="text-foreground leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Eudox regarding the Service and supersede all prior agreements and understandings.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.2 Severability</h3>
              <p className="text-foreground leading-relaxed mb-4">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.3 Waiver</h3>
              <p className="text-foreground leading-relaxed mb-4">
                No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or any other term.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.4 Assignment</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. Eudox may assign or transfer these Terms without restriction.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.5 Force Majeure</h3>
              <p className="text-foreground leading-relaxed">
                Eudox shall not be liable for any failure or delay in performance due to causes beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">12. Contact Information</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions, concerns, or complaints regarding these Terms or the Service, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground mb-2"><strong>Eudox Inc.</strong></p>
                <p className="text-foreground mb-2">Email: legal@eudox.com</p>
                <p className="text-foreground mb-2">Support: support@eudox.com</p>
                <p className="text-foreground">Address: 123 Innovation Drive, Wilmington, DE 19801, United States</p>
              </div>
            </section>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

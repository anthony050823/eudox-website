
import { useEffect } from "react";
import { useLocation } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-[#0B102C] text-[#1d1d1f] dark:text-white">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-20 right-4 md:right-8 z-50 bg-white/80 dark:bg-[#1d1d1f]/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#2d2d2f]"
        onClick={() => setLocation("/")}
        aria-label="Close and return to home"
      >
        <X className="h-5 w-5" />
      </Button>

      {/* Main Content */}
      <div className="mx-auto max-w-[980px] px-6 md:px-8 py-16 md:py-24">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-4 tracking-tight">
          Eudox Terms of Service
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        {/* Introduction */}
        <div className="mb-12 text-base leading-relaxed">
          <p className="mb-4">
            These terms and conditions create a contract between you and Eudox Inc. (the "Agreement"). Please read the Agreement carefully.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-16 bg-white dark:bg-[#1d1d1f] rounded-2xl p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Table of Contents</h2>
          <nav className="space-y-3">
            {[
              { id: "section-1", title: "1. Acceptance and Scope" },
              { id: "section-2", title: "2. User Eligibility and Account Rules" },
              { id: "section-3", title: "3. Disclaimers and Limitation of Liability" },
              { id: "section-4", title: "4. User Rights and Responsibilities" },
              { id: "section-5", title: "5. Account Management and Termination" },
              { id: "section-6", title: "6. Payment Terms and Billing" },
              { id: "section-7", title: "7. Intellectual Property Rights" },
              { id: "section-8", title: "8. Data Privacy and Security" },
              { id: "section-9", title: "9. Dispute Resolution and Governing Law" },
              { id: "section-10", title: "10. Modifications to Terms" },
              { id: "section-11", title: "11. General Provisions" },
              { id: "section-12", title: "12. Contact Information" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-blue-600 dark:text-blue-400 hover:underline transition-colors"
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {/* Section 1 */}
          <section id="section-1" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">1. Acceptance and Scope</h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                By accessing or using the Eudox autonomous deal sourcing platform (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must immediately cease all use of the Service. These Terms constitute a legally binding agreement between you ("User," "you," or "your") and Eudox Inc. ("Eudox," "we," "us," or "our").
              </p>
              <p>
                <strong>Service Description:</strong> Eudox provides an AI-powered autonomous deal sourcing platform specifically designed for mergers and acquisitions (M&A) professionals, private equity firms, venture capital investors, and corporate development teams. Our Service continuously monitors over sixteen million (16,000,000) companies across global markets, proactively identifying investment opportunities that match your specified investment thesis and criteria before they become widely known in the market.
              </p>
              <p>
                The Service includes but is not limited to: (a) real-time monitoring of company signals including funding events, leadership changes, revenue growth patterns, and market expansion activities; (b) AI-driven analysis and scoring of potential acquisition targets based on your custom investment criteria; (c) automated deal alert notifications delivered via email and in-platform dashboards; (d) executive contact enrichment providing verified email addresses and LinkedIn profiles of key decision-makers; (e) integration capabilities with customer relationship management (CRM) systems including Salesforce, HubSpot, and Microsoft Dynamics; and (f) API access for programmatic data retrieval and workflow automation.
              </p>
              <p>
                If you are entering into these Terms on behalf of a company, investment firm, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms. In such cases, references to "you" shall refer to both you individually and the entity you represent.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="section-2" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">2. User Eligibility and Account Rules</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">2.1 Eligibility Requirements</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                You must be at least eighteen (18) years of age and have the legal capacity to enter into binding contracts under applicable law. The Service is intended exclusively for professional use by qualified investment professionals, M&A advisors, and corporate development personnel. You represent that you are using the Service for legitimate business purposes related to investment analysis, deal sourcing, or corporate development activities.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">2.2 Account Registration and Security</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                To access the Service, you must create an account by providing accurate, current, and complete information including your full name, business email address, company name, job title, and payment information. You agree to promptly update your account information if any changes occur. You are solely responsible for maintaining the confidentiality and security of your account credentials, including your username and password.
              </p>
              <p>
                You must immediately notify us at security@eudox.com of any unauthorized access to your account, suspected security breach, or any other security concern. You acknowledge that you are responsible for all activities that occur under your account, whether or not authorized by you, until you notify us of a security breach and we have had a reasonable opportunity to act.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">2.3 Account Restrictions</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                Each user may maintain only one active account. Account sharing, credential sharing, or transferring your account to third parties is strictly prohibited. Team collaboration features are available through multi-user subscription plans (Pro Firm and Enterprise tiers), which allow multiple authorized users within your organization to access the Service under a single subscription.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">2.4 Prohibited Uses</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                You may not use the Service to: (a) compete with Eudox or develop a competing product or service; (b) reverse engineer, decompile, disassemble, or attempt to discover the source code or underlying algorithms of the Service; (c) scrape, harvest, or extract data through automated means not explicitly provided by our official API; (d) transmit viruses, malware, or any other harmful code; (e) violate any applicable laws, regulations, or third-party rights; (f) use the Service for illegal activities including money laundering, fraud, or market manipulation; (g) access or attempt to access accounts, data, or systems not intended for you; or (h) interfere with or disrupt the integrity or performance of the Service.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="section-3" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">3. Disclaimers and Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">3.1 Service Provided "As Is"</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p className="font-semibold uppercase">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p>
                We do not warrant that the Service will be uninterrupted, error-free, secure, or free from viruses or other harmful components. We do not guarantee the accuracy, completeness, reliability, or timeliness of any data, analysis, or recommendations provided through the Service.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">3.2 Not Investment or Legal Advice</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p className="font-semibold">CRITICAL DISCLAIMER:</p>
              <p>
                The Service provides data aggregation, analysis, and AI-generated insights for informational purposes only. Eudox does not provide investment advice, financial advice, legal advice, tax advice, or recommendations to buy, sell, hold, or invest in any securities, companies, or assets. You are solely responsible for conducting your own due diligence, analysis, and decision-making regarding any investment opportunities identified through the Service.
              </p>
              <p>
                Investment decisions involve substantial risk and may result in significant financial loss. Past performance of companies or investment strategies does not guarantee future results. You should consult with qualified legal, financial, and tax advisors before making any investment decisions. Eudox is not a registered investment advisor, broker-dealer, or financial institution, and does not provide fiduciary services.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">3.3 Third-Party Data Sources</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                The Service aggregates data from numerous third-party sources including public company filings, news articles, social media, job postings, funding databases, and other publicly available information. We are not responsible for the accuracy, completeness, reliability, or timeliness of third-party data. We do not independently verify all information provided by third-party sources. You acknowledge that data may contain errors, omissions, or outdated information, and you agree to independently verify any critical information before relying on it for investment decisions.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">3.4 AI-Generated Content Limitations</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                Our AI algorithms analyze data to identify patterns, trends, and potential investment opportunities. However, AI-generated insights, scores, and recommendations are probabilistic in nature and may not accurately predict future outcomes. The AI may produce false positives (identifying opportunities that do not materialize) or false negatives (missing relevant opportunities). You should not rely solely on AI-generated insights without conducting independent analysis and verification.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">3.5 Limitation of Damages</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p className="font-semibold uppercase">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EUDOX, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, BUSINESS OPPORTUNITIES, OR INVESTMENT LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p>
                <strong>MAXIMUM LIABILITY CAP:</strong> In no event shall our total aggregate liability to you for all claims arising out of or related to these Terms or the Service exceed the greater of: (a) the total amount you paid to Eudox in subscription fees during the twelve (12) months immediately preceding the event giving rise to liability; or (b) one hundred dollars ($100).
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="section-4" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">4. User Rights and Responsibilities</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">4.1 User Responsibilities</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                You agree to use the Service in compliance with all applicable laws and regulations. You are responsible for ensuring that all information you provide is accurate, current, and complete. You must promptly update your account information if it changes.
              </p>
              <p>
                You agree to maintain the security and confidentiality of your account credentials. You must immediately notify us of any unauthorized access to your account or any security breach. You are responsible for all activities that occur under your account, whether or not authorized by you.
              </p>
              <p>
                You agree to respect usage limits based on your subscription tier. Exceeding usage limits may result in service restrictions, additional charges, or account suspension.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">4.2 Eudox's Responsibilities</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                Eudox will use commercially reasonable efforts to provide the Service in accordance with the features and functionality described in your subscription plan. We will make reasonable efforts to maintain the availability and performance of the Service, subject to scheduled maintenance and unforeseen outages.
              </p>
              <p>
                We will handle your personal data in accordance with our Privacy Policy. We will implement reasonable security measures to protect your data from unauthorized access, disclosure, or destruction.
              </p>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice, subject to the terms of your active subscription. We will provide advance notice of material changes that adversely affect your rights where reasonably practicable.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">4.3 Indemnification</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                You agree to indemnify, defend, and hold harmless Eudox and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable attorneys' fees) arising out of or related to your use of the Service, your violation of these Terms, your violation of any rights of another party, or your violation of any applicable laws or regulations.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="section-5" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">5. Account Management and Termination</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">5.1 Suspension and Termination by Eudox</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                We reserve the right to suspend or terminate your account immediately, without prior notice, if we determine in our sole discretion that you have violated these Terms, engaged in fraudulent or illegal activity, posed a security risk, or otherwise acted in a manner detrimental to Eudox or other users.
              </p>
              <p>
                <strong>Termination for Cause:</strong> If your account is terminated for cause (violation of Terms), you will not be entitled to any refund of prepaid fees, and you will remain liable for all outstanding amounts owed to Eudox.
              </p>
              <p>
                <strong>Data Deletion:</strong> Upon termination, your account data will be retained for thirty (30) days to allow for data export or account reactivation. After thirty (30) days, all account data will be permanently deleted and cannot be recovered.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">5.2 Cancellation by User</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                You may cancel your subscription at any time through your account settings or by contacting our support team at support@eudox.com. Cancellation will be effective at the end of your current billing cycle.
              </p>
              <p>
                You will retain access to the Service until the end of your current billing period. No refunds or credits will be provided for partial months of service, unused features, or unused queries.
              </p>
              <p>
                <strong>Data Export:</strong> You may export your data at any time during your active subscription or within thirty (30) days after cancellation. After thirty (30) days, your data will be permanently deleted.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">5.3 Reactivation</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                If you wish to reactivate a canceled or suspended account, you may do so by contacting our support team. Reactivation is subject to our approval and current pricing. Previously negotiated discounts or promotional rates may no longer be available upon reactivation.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="section-6" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">6. Payment Terms and Billing</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">6.1 Subscription Plans and Pricing</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>Eudox offers the following subscription plans:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Starter Plan:</strong> $499 per month (500 AI queries, single user)</li>
                <li><strong>Pro Firm Plan:</strong> $1,999 per month (3,000 AI queries, up to 5 users)</li>
                <li><strong>Enterprise Plan:</strong> Custom pricing (unlimited queries and users)</li>
              </ul>
              <p>
                All fees are in U.S. dollars and are exclusive of applicable taxes, duties, or similar governmental assessments. You are responsible for paying all applicable taxes.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">6.2 Billing and Payment</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                Subscription fees are billed in advance on a monthly or annual basis, depending on your selected billing cycle. By providing payment information, you authorize Eudox to charge your designated payment method on a recurring basis until you cancel your subscription.
              </p>
              <p>
                If your payment method fails or your account becomes past due, we may suspend your access to the Service until payment is received. You are responsible for providing current, complete, and accurate billing information and promptly updating such information if it changes.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">6.3 Automatic Renewal</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                Your subscription will automatically renew at the end of each billing cycle unless you cancel at least seven (7) days before the renewal date. You will be charged the then-current subscription fee for your plan.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">6.4 Price Changes</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                We reserve the right to change our pricing at any time. Price changes will be communicated to you at least thirty (30) days in advance via email or through the Service. Price changes will take effect on your next billing cycle following the notice period.
              </p>
              <p>
                Your continued use of the Service after a price change constitutes your acceptance of the new pricing. If you do not agree to the price change, you may cancel your subscription before the new price takes effect.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">6.5 Refund Policy</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                All subscription fees are non-refundable except as expressly provided in these Terms or required by applicable law. We do not provide refunds or credits for partial months of service, unused features, unused queries, or early cancellation.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="section-7" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">7. Intellectual Property Rights</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">7.1 Eudox's Intellectual Property</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                The Service, including all software, algorithms, AI models, data compilations, designs, graphics, text, and other content provided by Eudox (collectively, "Eudox Content"), is owned by Eudox and is protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p>
                Subject to your compliance with these Terms, Eudox grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service during your active subscription solely for your internal business purposes.
              </p>
              <p>
                You may not copy, modify, distribute, sell, lease, sublicense, reverse engineer, decompile, or create derivative works based on the Service or any Eudox Content, except as expressly permitted by these Terms or applicable law.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">7.2 User-Generated Content</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                You retain ownership of any investment criteria, notes, saved searches, or other content you upload or create through the Service ("User Content"). By uploading or creating User Content, you grant Eudox a worldwide, non-exclusive, royalty-free license to use, store, process, and display your User Content solely to provide and improve the Service.
              </p>
              <p>
                You represent and warrant that you have all necessary rights to grant this license and that your User Content does not violate any third-party rights or applicable laws.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">7.3 Feedback and Suggestions</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                If you provide Eudox with any feedback, suggestions, or ideas regarding the Service ("Feedback"), you grant Eudox a perpetual, irrevocable, worldwide, royalty-free license to use, modify, and incorporate such Feedback into the Service without any obligation to compensate you or provide attribution.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="section-8" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">8. Data Privacy and Security</h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                Your use of the Service is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. By using the Service, you consent to the collection and use of your information as described in the Privacy Policy.
              </p>
              <p>
                We implement reasonable administrative, technical, and physical security measures to protect your data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
              <p>
                You are responsible for maintaining the security of your account credentials and for any activities that occur under your account. You agree to immediately notify us of any unauthorized access or security breach.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="section-9" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">9. Dispute Resolution and Governing Law</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">9.1 Governing Law</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">9.2 Dispute Resolution</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                Any dispute, claim, or controversy arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the Commercial Arbitration Rules of the American Arbitration Association (AAA). The arbitration shall be conducted in Wilmington, Delaware, or remotely via videoconference.
              </p>
              <p>
                <strong>Class Action Waiver:</strong> You agree that any arbitration or proceeding shall be conducted on an individual basis and not as a class action, consolidated action, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">9.3 Exceptions</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                Notwithstanding the foregoing, either party may seek injunctive or equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="section-10" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">10. Modifications to Terms</h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last Updated" date at the top of this page. We may also notify you via email or through the Service.
              </p>
              <p>
                Your continued use of the Service after the effective date of the modified Terms constitutes your acceptance of the changes. If you do not agree to the modified Terms, you must stop using the Service and cancel your subscription.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="section-11" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">11. General Provisions</h2>
            
            <h3 className="text-xl font-semibold mb-4 mt-8">11.1 Entire Agreement</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Eudox regarding the Service and supersede all prior agreements and understandings.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">11.2 Severability</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">11.3 Waiver</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or any other term.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">11.4 Assignment</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. Eudox may assign or transfer these Terms without restriction.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4 mt-8">11.5 Force Majeure</h3>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                Eudox shall not be liable for any failure or delay in performance due to causes beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="section-12" className="scroll-mt-24">
            <h2 className="text-3xl font-semibold mb-6">12. Contact Information</h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              <p>
                If you have any questions, concerns, or complaints regarding these Terms or the Service, please contact us at:
              </p>
              <div className="bg-white dark:bg-[#1d1d1f] rounded-xl p-6 mt-6">
                <p className="font-semibold mb-2">Eudox Inc.</p>
                <p>Email: <a href="mailto:privacy@eudox.ai" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@eudox.ai</a></p>
                <p>Support: <a href="mailto:support@eudox.ai" className="text-blue-600 dark:text-blue-400 hover:underline">support@eudox.ai</a></p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-300 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Eudox Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

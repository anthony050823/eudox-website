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
      <div className="container py-16 max-w-4xl relative z-10">
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
            
            {/* 1. Acceptance and Scope */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">1. Acceptance and Scope</h2>
              <p className="text-foreground leading-relaxed mb-4">
                By accessing or using the Eudox autonomous deal sourcing platform (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you must immediately cease all use of the Service. These Terms constitute a legally binding agreement between you ("User," "you," or "your") and Eudox Inc. ("Eudox," "we," "us," or "our").
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Service Description:</strong> Eudox provides an AI-powered autonomous deal sourcing platform specifically designed for mergers and acquisitions (M&A) professionals, private equity firms, venture capital investors, and corporate development teams. Our Service continuously monitors over sixteen million (16,000,000) companies across global markets, proactively identifying investment opportunities that match your specified investment thesis and criteria before they become widely known in the market.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The Service includes but is not limited to: (a) real-time monitoring of company signals including funding events, leadership changes, revenue growth patterns, and market expansion activities; (b) AI-driven analysis and scoring of potential acquisition targets based on your custom investment criteria; (c) automated deal alert notifications delivered via email and in-platform dashboards; (d) executive contact enrichment providing verified email addresses and LinkedIn profiles of key decision-makers; (e) integration capabilities with customer relationship management (CRM) systems including Salesforce, HubSpot, and Microsoft Dynamics; and (f) API access for programmatic data retrieval and workflow automation.
              </p>
              <p className="text-foreground leading-relaxed">
                If you are entering into these Terms on behalf of a company, investment firm, or other legal entity, you represent and warrant that you have the authority to bind such entity to these Terms. In such cases, references to "you" shall refer to both you individually and the entity you represent.
              </p>
            </section>

            {/* 2. User Eligibility and Account Rules */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">2. User Eligibility and Account Rules</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">2.1 Eligibility Requirements</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You must be at least eighteen (18) years of age and have the legal capacity to enter into binding contracts under applicable law. The Service is intended exclusively for professional use by qualified investment professionals, M&A advisors, and corporate development personnel. You represent that you are using the Service for legitimate business purposes related to investment analysis, deal sourcing, or corporate development activities.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">2.2 Account Registration and Security</h3>
              <p className="text-foreground leading-relaxed mb-4">
                To access the Service, you must create an account by providing accurate, current, and complete information including your full name, business email address, company name, job title, and payment information. You agree to promptly update your account information if any changes occur. You are solely responsible for maintaining the confidentiality and security of your account credentials, including your username and password.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You must immediately notify us at security@eudox.com of any unauthorized access to your account, suspected security breach, or any other security concern. You acknowledge that you are responsible for all activities that occur under your account, whether or not authorized by you, until you notify us of a security breach and we have had a reasonable opportunity to act.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">2.3 Account Restrictions</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Each user may maintain only one active account. Account sharing, credential sharing, or transferring your account to third parties is strictly prohibited. Team collaboration features are available through multi-user subscription plans (Pro Firm and Enterprise tiers), which allow multiple authorized users within your organization to access the Service under a single subscription.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">2.4 Prohibited Uses</h3>
              <p className="text-foreground leading-relaxed">
                You may not use the Service to: (a) compete with Eudox or develop a competing product or service; (b) reverse engineer, decompile, disassemble, or attempt to discover the source code or underlying algorithms of the Service; (c) scrape, harvest, or extract data through automated means not explicitly provided by our official API; (d) transmit viruses, malware, or any other harmful code; (e) violate any applicable laws, regulations, or third-party rights; (f) use the Service for illegal activities including money laundering, fraud, or market manipulation; (g) access or attempt to access accounts, data, or systems not intended for you; or (h) interfere with or disrupt the integrity or performance of the Service.
              </p>
            </section>

            {/* 3. Disclaimers and Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">3. Disclaimers and Limitation of Liability</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.1 Service Provided "As Is"</h3>
              <p className="text-foreground leading-relaxed mb-4">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. We do not warrant that the Service will be uninterrupted, error-free, secure, or free from viruses or other harmful components. We do not guarantee the accuracy, completeness, reliability, or timeliness of any data, analysis, or recommendations provided through the Service.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.2 Not Investment or Legal Advice</h3>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>CRITICAL DISCLAIMER:</strong> The Service provides data aggregation, analysis, and AI-generated insights for informational purposes only. Eudox does not provide investment advice, financial advice, legal advice, tax advice, or recommendations to buy, sell, hold, or invest in any securities, companies, or assets. You are solely responsible for conducting your own due diligence, analysis, and decision-making regarding any investment opportunities identified through the Service.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Investment decisions involve substantial risk and may result in significant financial loss. Past performance of companies or investment strategies does not guarantee future results. You should consult with qualified legal, financial, and tax advisors before making any investment decisions. Eudox is not a registered investment advisor, broker-dealer, or financial institution, and does not provide fiduciary services.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.3 Third-Party Data Sources</h3>
              <p className="text-foreground leading-relaxed mb-4">
                The Service aggregates data from numerous third-party sources including public company filings, news articles, social media, job postings, funding databases, and other publicly available information. We are not responsible for the accuracy, completeness, reliability, or timeliness of third-party data. We do not independently verify all information provided by third-party sources. You acknowledge that data may contain errors, omissions, or outdated information, and you agree to independently verify any critical information before relying on it for investment decisions.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.4 AI-Generated Content Limitations</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Our AI algorithms analyze data to identify patterns, trends, and potential investment opportunities. However, AI-generated insights, scores, and recommendations are probabilistic in nature and may not accurately predict future outcomes. The AI may produce false positives (identifying opportunities that do not materialize) or false negatives (missing relevant opportunities). You should not rely solely on AI-generated insights without conducting independent analysis and verification.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.5 Limitation of Damages</h3>
              <p className="text-foreground leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EUDOX, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, REVENUE, DATA, GOODWILL, BUSINESS OPPORTUNITIES, OR INVESTMENT LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>MAXIMUM LIABILITY CAP:</strong> In no event shall our total aggregate liability to you for all claims arising out of or related to these Terms or the Service exceed the greater of: (a) the total amount you paid to Eudox in subscription fees during the twelve (12) months immediately preceding the event giving rise to liability, or (b) five hundred dollars ($500 USD). This limitation applies regardless of the legal theory under which liability is asserted, including contract, tort, negligence, strict liability, or otherwise.
              </p>
            </section>

            {/* 4. User Rights and Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">4. User Rights and Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">4.1 License Grant to User</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Subject to your compliance with these Terms and payment of applicable subscription fees, Eudox grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service during your active subscription period solely for your internal business purposes related to investment analysis and deal sourcing. This license does not include any right to: (a) resell, redistribute, or provide access to the Service to third parties; (b) use the Service for the benefit of any third party; (c) create derivative works based on the Service; or (d) access the Service to build a competitive product or service.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">4.2 User Responsibilities</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You agree to: (a) use the Service in compliance with all applicable laws, regulations, and industry standards, including securities laws, data protection laws, and anti-money laundering regulations; (b) maintain accurate and current account information; (c) safeguard your account credentials and prevent unauthorized access; (d) respect usage limits based on your subscription tier and refrain from exceeding allocated quotas for queries, profile views, and contact enrichments; (e) immediately notify us of any security breaches, unauthorized access, or suspected misuse of the Service; (f) conduct independent due diligence and verification of all information obtained through the Service; and (g) comply with all applicable laws when contacting companies or executives identified through the Service, including anti-spam laws and privacy regulations.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">4.3 Eudox's Responsibilities</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox will: (a) use commercially reasonable efforts to provide the Service in accordance with the features and functionality described in your subscription plan; (b) maintain reasonable security measures to protect your data from unauthorized access, disclosure, or destruction; (c) handle your personal data in accordance with our Privacy Policy; (d) provide customer support as specified in your subscription plan; (e) make reasonable efforts to maintain Service availability and performance, subject to scheduled maintenance windows and unforeseen outages; and (f) provide advance notice of material changes to the Service that adversely affect your rights, where reasonably practicable.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time, with or without notice, provided that we will make reasonable efforts to minimize disruption to active subscribers and provide migration paths for critical features where feasible.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">4.4 Indemnification</h3>
              <p className="text-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Eudox and its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees and court costs) arising out of or related to: (a) your use of the Service; (b) your violation of these Terms; (c) your violation of any rights of another party, including intellectual property rights or privacy rights; (d) your violation of any applicable laws or regulations; (e) any investment decisions you make based on information obtained through the Service; or (f) any content, data, or information you submit to the Service.
              </p>
            </section>

            {/* 5. Account Management and Termination */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">5. Account Management and Termination</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">5.1 Suspension and Termination by Eudox</h3>
              <p className="text-foreground leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account and access to the Service immediately, without prior notice or liability, if we determine in our sole discretion that: (a) you have violated these Terms or any applicable laws; (b) you have engaged in fraudulent, illegal, or abusive activity; (c) your account poses a security risk to the Service or other users; (d) you have provided false, misleading, or incomplete information during registration; (e) your payment method has failed or your account is past due; (f) you are using the Service for competitive analysis or to develop a competing product; or (g) you have otherwise acted in a manner detrimental to Eudox, the Service, or other users.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Termination for Cause:</strong> If your account is terminated for cause (violation of Terms), you will not be entitled to any refund of prepaid subscription fees, and you will remain liable for all outstanding amounts owed to Eudox, including any fees incurred before termination.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Data Retention and Deletion:</strong> Upon termination, your access to the Service will be immediately revoked. Your account data, including saved searches, deal alerts, notes, and exported data, will be retained for thirty (30) calendar days to allow for data export or account reactivation. After thirty (30) days, all account data will be permanently deleted from our production systems and cannot be recovered. We may retain certain data for longer periods as required by law or for legitimate business purposes such as fraud prevention, dispute resolution, or compliance with legal obligations.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">5.2 Cancellation by User</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You may cancel your subscription at any time through your account settings dashboard or by contacting our customer support team at support@eudox.com. Cancellation will be effective at the end of your current billing cycle (monthly or annual, depending on your subscription). You will retain full access to the Service until the end of your current billing period.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                No refunds or credits will be provided for: (a) partial months or years of service; (b) unused features, queries, profile views, or contact enrichments; (c) early cancellation of annual subscriptions; or (d) cancellation due to dissatisfaction with the Service, except as expressly provided in Section 6.5 (Refund Policy) or as required by applicable law.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Data Export:</strong> You may export your data at any time during your active subscription or within thirty (30) days after cancellation. We provide data export functionality in CSV, Excel, and JSON formats (availability depends on your subscription tier). After thirty (30) days, your data will be permanently deleted and cannot be recovered.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">5.3 Account Reactivation</h3>
              <p className="text-foreground leading-relaxed">
                If you wish to reactivate a canceled or suspended account, you may do so by contacting our support team at support@eudox.com within thirty (30) days of cancellation or suspension. Reactivation is subject to our approval and will be charged at the then-current pricing for your subscription tier. Previously negotiated discounts, promotional rates, or grandfathered pricing may no longer be available upon reactivation. If your account was terminated for cause, reactivation may be denied at our sole discretion.
              </p>
            </section>

            {/* 6. Payment Terms and Billing */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">6. Payment Terms and Billing</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.1 Subscription Plans and Pricing</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox offers the following subscription plans tailored to different user needs:
              </p>
              
              <div className="bg-muted p-6 rounded-lg mb-4">
                <p className="text-foreground mb-2"><strong>Starter Plan - $499 per month</strong></p>
                <p className="text-foreground mb-2">Designed for individual dealmakers, independent consultants, and solo practitioners.</p>
                <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                  <li>Single user account (no team collaboration)</li>
                  <li>500 AI agent queries per month</li>
                  <li>Access to 1,000 detailed company profiles per month</li>
                  <li>20 active saved searches and deal alerts</li>
                  <li>50 executive contact enrichments per month</li>
                  <li>Basic email support (48-hour response time)</li>
                  <li>Standard data refresh (72-hour frequency)</li>
                  <li>CSV data export only (max 100 records per export)</li>
                  <li>No CRM integration or API access</li>
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg mb-4">
                <p className="text-foreground mb-2"><strong>Pro Firm Plan - $1,999 per month</strong></p>
                <p className="text-foreground mb-2">Designed for investment firms, corporate development teams, and professional services organizations.</p>
                <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                  <li>Up to 5 user accounts with team collaboration and shared workspaces</li>
                  <li>3,000 AI agent queries per month (shared across all users)</li>
                  <li>Access to 10,000 detailed company profiles per month</li>
                  <li>100 active saved searches and deal alerts per team</li>
                  <li>500 executive contact enrichments per month</li>
                  <li>Priority email and chat support (12-hour response time)</li>
                  <li>Enhanced data refresh (24-hour frequency)</li>
                  <li>CRM integration with Salesforce, HubSpot, and Microsoft Dynamics</li>
                  <li>API access with 1,000 requests per day rate limit</li>
                  <li>Advanced data export in CSV, Excel, and JSON (max 5,000 records per export)</li>
                  <li>Custom investment thesis modeling and advanced filtering</li>
                  <li>Quarterly business review with dedicated customer success manager</li>
                </ul>
              </div>

              <div className="bg-muted p-6 rounded-lg mb-4">
                <p className="text-foreground mb-2"><strong>Enterprise Plan - Custom Pricing</strong></p>
                <p className="text-foreground mb-2">Designed for large investment firms, global corporations, and institutional investors with extensive deal sourcing needs.</p>
                <ul className="list-disc list-inside space-y-1 text-foreground text-sm">
                  <li>Unlimited user accounts with advanced role-based access controls</li>
                  <li>Unlimited AI agent queries and company profile access</li>
                  <li>Unlimited saved searches, deal alerts, and executive contact enrichments</li>
                  <li>Dedicated account management and 24/7 priority support</li>
                  <li>Real-time data refresh and early access to new features</li>
                  <li>Custom CRM integrations and white-label API access</li>
                  <li>Unlimited data exports in all formats with bulk export capabilities</li>
                  <li>Custom AI model training on proprietary deal data and investment criteria</li>
                  <li>On-premise deployment options and single sign-on (SSO) integration</li>
                  <li>Service Level Agreement (SLA) with 99.9% uptime guarantee</li>
                  <li>Dedicated infrastructure and data isolation options for enhanced security</li>
                  <li>Custom feature development and API endpoints tailored to your workflow</li>
                </ul>
              </div>

              <p className="text-foreground leading-relaxed mb-4">
                All fees are stated in United States Dollars (USD) and are exclusive of applicable taxes, duties, levies, tariffs, or similar governmental assessments of any nature, including value-added tax (VAT), goods and services tax (GST), sales tax, use tax, or withholding tax. You are responsible for paying all applicable taxes associated with your subscription.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.2 Billing and Payment</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Subscription fees are billed in advance on a monthly or annual basis, depending on your selected billing cycle. Annual subscriptions receive a discount of approximately 15% compared to monthly billing. By providing payment information (credit card, debit card, or ACH bank account), you authorize Eudox to charge your designated payment method on a recurring basis until you cancel your subscription.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                If your payment method fails, is declined, or your account becomes past due, we may: (a) suspend your access to the Service until payment is received; (b) attempt to charge alternative payment methods on file; (c) send you email notifications regarding the payment failure; or (d) terminate your account if payment is not received within thirty (30) days. You are responsible for providing current, complete, and accurate billing information and promptly updating such information if it changes (e.g., new card number, expiration date, billing address).
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.3 Automatic Renewal</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Your subscription will automatically renew at the end of each billing cycle (monthly or annually) unless you cancel at least seven (7) calendar days before the renewal date. You will be charged the then-current subscription fee for your plan at the time of renewal. We will send you an email reminder at least fourteen (14) days before your subscription renews, providing you with an opportunity to cancel if you do not wish to continue.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.4 Price Changes</h3>
              <p className="text-foreground leading-relaxed mb-4">
                We reserve the right to change our subscription pricing at any time. Price changes will be communicated to you at least thirty (30) calendar days in advance via email to your registered email address or through prominent notice within the Service. Price changes will take effect on your next billing cycle following the notice period.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Your continued use of the Service after a price change takes effect constitutes your acceptance of the new pricing. If you do not agree to the price change, you may cancel your subscription before the new price takes effect, and you will not be charged the increased rate.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">6.5 Refund Policy</h3>
              <p className="text-foreground leading-relaxed mb-4">
                All subscription fees are generally non-refundable except as expressly provided in these Terms or as required by applicable consumer protection laws. We do not provide refunds or credits for: (a) partial months or years of service; (b) unused features, queries, profile views, or contact enrichments; (c) early cancellation of annual subscriptions; or (d) dissatisfaction with the Service.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Exception for New Subscribers:</strong> If you are a first-time subscriber and are not satisfied with the Service, you may request a full refund within fourteen (14) calendar days of your initial subscription purchase by contacting support@eudox.com. This one-time refund guarantee applies only to your first subscription purchase and does not apply to renewals, upgrades, or subsequent subscriptions.
              </p>
            </section>

            {/* 7. Intellectual Property Rights */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">7. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.1 Eudox's Intellectual Property</h3>
              <p className="text-foreground leading-relaxed mb-4">
                The Service, including all software, algorithms, machine learning models, AI systems, data compilations, databases, designs, graphics, user interfaces, text, documentation, and other content provided by Eudox (collectively, "Eudox Content"), is owned by Eudox Inc. and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The Eudox name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Eudox Inc. or its affiliates or licensors. You may not use such marks without our prior written permission. All other names, logos, product and service names, designs, and slogans mentioned in the Service are the trademarks of their respective owners.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You may not: (a) copy, modify, distribute, sell, lease, sublicense, or create derivative works based on the Service or any Eudox Content; (b) reverse engineer, decompile, disassemble, or attempt to discover the source code, algorithms, or underlying technology of the Service; (c) remove, alter, or obscure any copyright, trademark, or other proprietary rights notices from the Service; (d) use any automated systems (robots, spiders, scrapers) to access or extract data from the Service except through our official API; or (e) frame, mirror, or otherwise incorporate the Service into any other website or application without our prior written consent.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.2 User-Generated Content</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You retain ownership of any investment criteria, custom filters, saved searches, notes, annotations, tags, or other content you create, upload, or input into the Service ("User Content"). By creating or uploading User Content, you grant Eudox a worldwide, non-exclusive, royalty-free, fully paid-up, transferable, sublicensable license to use, store, process, reproduce, modify, adapt, display, and transmit your User Content solely to: (a) provide and operate the Service; (b) improve and enhance the Service; (c) develop new features and functionality; and (d) comply with legal obligations.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You represent and warrant that: (a) you have all necessary rights, licenses, and permissions to grant this license; (b) your User Content does not infringe or violate any third-party intellectual property rights, privacy rights, or other rights; (c) your User Content does not contain any unlawful, harmful, threatening, abusive, defamatory, or otherwise objectionable material; and (d) your User Content complies with all applicable laws and regulations.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.3 Feedback and Suggestions</h3>
              <p className="text-foreground leading-relaxed">
                If you provide Eudox with any feedback, suggestions, ideas, enhancement requests, recommendations, or other input regarding the Service ("Feedback"), you grant Eudox a perpetual, irrevocable, worldwide, royalty-free, fully paid-up, transferable, sublicensable license to use, implement, modify, commercialize, and incorporate such Feedback into the Service and our other products and services without any obligation to compensate you, provide attribution, or obtain your further consent. You waive any moral rights you may have in such Feedback.
              </p>
            </section>

            {/* 8. Data Privacy and Security */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">8. Data Privacy and Security</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Your use of the Service is also governed by our Privacy Policy, which describes in detail how we collect, use, store, share, and protect your personal information and account data. By using the Service, you consent to the collection, use, and processing of your information as described in the Privacy Policy, which is incorporated into these Terms by reference.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Data Security Measures:</strong> We implement reasonable administrative, technical, and physical security measures designed to protect your data from unauthorized access, disclosure, alteration, or destruction. These measures include: (a) encryption of data in transit using TLS 1.2 or higher; (b) encryption of sensitive data at rest using AES-256 or equivalent; (c) regular security audits and penetration testing; (d) employee background checks and security training; (e) access controls and authentication mechanisms; (f) intrusion detection and prevention systems; and (g) regular backups and disaster recovery procedures.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                However, no method of transmission over the internet or electronic storage is completely secure. We cannot guarantee absolute security of your data. You acknowledge and accept the inherent security risks of transmitting data over the internet and storing data electronically. You agree that we shall not be liable for any unauthorized access, disclosure, alteration, or destruction of your data resulting from circumstances beyond our reasonable control.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Data Breach Notification:</strong> In the event of a data breach that affects your account or personal information, we will notify you via email within seventy-two (72) hours of becoming aware of the breach, as required by applicable data protection laws. The notification will include: (a) a description of the breach; (b) the types of data affected; (c) the steps we are taking to address the breach; and (d) recommended actions you should take to protect yourself.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Your Security Responsibilities:</strong> You are responsible for: (a) maintaining the security and confidentiality of your account credentials; (b) using strong, unique passwords; (c) enabling two-factor authentication if available; (d) immediately notifying us of any unauthorized access or security breach; (e) ensuring that your devices and networks are secure; and (f) complying with your organization's security policies and procedures when using the Service.
              </p>
            </section>

            {/* 9. Dispute Resolution and Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">9. Dispute Resolution and Governing Law</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">9.1 Governing Law</h3>
              <p className="text-foreground leading-relaxed mb-4">
                These Terms and any disputes arising out of or related to these Terms or the Service shall be governed by and construed in accordance with the laws of the State of Delaware, United States of America, without regard to its conflict of law principles. The United Nations Convention on Contracts for the International Sale of Goods shall not apply to these Terms.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">9.2 Mandatory Arbitration</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Any dispute, claim, or controversy arising out of or relating to these Terms, the Service, or the breach, termination, enforcement, interpretation, or validity thereof (collectively, "Disputes") shall be resolved through final and binding arbitration rather than in court, except as set forth in Section 9.4 (Exceptions to Arbitration).
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The arbitration shall be conducted in accordance with the Commercial Arbitration Rules of the American Arbitration Association (AAA) then in effect. The arbitration shall be conducted by a single neutral arbitrator selected in accordance with AAA rules. The arbitration shall take place in Wilmington, Delaware, or remotely via videoconference at the arbitrator's discretion or by mutual agreement of the parties.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The arbitrator shall have the authority to award any relief that would be available in court, including monetary damages, injunctive relief, and declaratory relief. The arbitrator's decision shall be final and binding, and judgment on the arbitration award may be entered in any court having jurisdiction. Each party shall bear its own costs and attorneys' fees, unless the arbitrator determines that the prevailing party is entitled to recover such costs and fees.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">9.3 Class Action Waiver</h3>
              <p className="text-foreground leading-relaxed mb-4">
                YOU AND EUDOX AGREE THAT ANY ARBITRATION OR PROCEEDING SHALL BE CONDUCTED ON AN INDIVIDUAL BASIS AND NOT AS A CLASS ACTION, CONSOLIDATED ACTION, REPRESENTATIVE ACTION, OR MASS ARBITRATION. YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT, CLASS-WIDE ARBITRATION, PRIVATE ATTORNEY GENERAL ACTION, OR ANY OTHER PROCEEDING WHERE SOMEONE ACTS IN A REPRESENTATIVE CAPACITY ON BEHALF OF A CLASS OF INDIVIDUALS.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                If a court or arbitrator determines that this class action waiver is unenforceable, then the arbitration agreement in Section 9.2 shall be null and void, and the Dispute shall be resolved in court in accordance with Section 9.5 (Jurisdiction and Venue).
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">9.4 Exceptions to Arbitration</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Notwithstanding Section 9.2, either party may seek injunctive or equitable relief in any court of competent jurisdiction to: (a) prevent the actual or threatened infringement, misappropriation, or violation of intellectual property rights; (b) enforce confidentiality obligations; or (c) prevent irreparable harm where monetary damages would be inadequate.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">9.5 Jurisdiction and Venue</h3>
              <p className="text-foreground leading-relaxed">
                To the extent that arbitration does not apply or is found to be unenforceable, you agree that any legal action or proceeding arising out of or related to these Terms or the Service shall be brought exclusively in the state or federal courts located in Wilmington, Delaware, and you irrevocably consent to the personal jurisdiction and venue of such courts.
              </p>
            </section>

            {/* 10. Modifications to Terms */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">10. Modifications to Terms</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We reserve the right to modify, amend, or update these Terms at any time at our sole discretion. We will provide notice of material changes by: (a) posting the updated Terms on our website with a new "Last Updated" date at the top of this page; (b) sending you an email notification to your registered email address; or (c) displaying a prominent notice within the Service. For non-material changes, we may update the Terms without additional notice.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Material changes to these Terms will take effect thirty (30) calendar days after we provide notice, except for changes required by law, which may take effect immediately. Your continued use of the Service after the effective date of the modified Terms constitutes your acceptance of the changes. If you do not agree to the modified Terms, you must stop using the Service and cancel your subscription before the effective date.
              </p>
              <p className="text-foreground leading-relaxed">
                We encourage you to review these Terms periodically to stay informed of any updates. The "Last Updated" date at the top of this page indicates when the Terms were last revised.
              </p>
            </section>

            {/* 11. General Provisions */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">11. General Provisions</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.1 Entire Agreement</h3>
              <p className="text-foreground leading-relaxed mb-4">
                These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Eudox regarding the Service and supersede all prior or contemporaneous agreements, communications, proposals, and understandings, whether written or oral, relating to the subject matter hereof.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.2 Severability</h3>
              <p className="text-foreground leading-relaxed mb-4">
                If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall remain in full force and effect. The invalid, illegal, or unenforceable provision shall be deemed modified to the minimum extent necessary to make it valid, legal, and enforceable while preserving its original intent.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.3 Waiver</h3>
              <p className="text-foreground leading-relaxed mb-4">
                No waiver of any term, condition, or provision of these Terms shall be deemed a further or continuing waiver of such term or any other term. Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.4 Assignment</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You may not assign, transfer, delegate, or sublicense these Terms or your rights and obligations under these Terms without our prior written consent. Any attempted assignment in violation of this provision shall be null and void. Eudox may freely assign or transfer these Terms and its rights and obligations hereunder without restriction, including in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of its assets.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.5 Force Majeure</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox shall not be liable for any failure or delay in performance of its obligations under these Terms due to causes beyond its reasonable control, including but not limited to: acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, earthquakes, accidents, pandemics, epidemics, strikes, labor disputes, shortages of transportation facilities, fuel, energy, labor, or materials, failure of third-party service providers or data sources, internet outages, cyberattacks, or government restrictions.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.6 Survival</h3>
              <p className="text-foreground leading-relaxed mb-4">
                The following provisions shall survive termination or expiration of these Terms: Sections 3 (Disclaimers and Limitation of Liability), 4.4 (Indemnification), 5.1 (Data Retention and Deletion), 6 (Payment Terms), 7 (Intellectual Property Rights), 8 (Data Privacy and Security), 9 (Dispute Resolution and Governing Law), and 11 (General Provisions).
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.7 Relationship of the Parties</h3>
              <p className="text-foreground leading-relaxed mb-4">
                The relationship between you and Eudox is that of independent contractors. Nothing in these Terms shall be construed to create a partnership, joint venture, agency, employment, or fiduciary relationship between you and Eudox. Neither party has the authority to bind the other or to incur obligations on behalf of the other.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">11.8 Export Compliance</h3>
              <p className="text-foreground leading-relaxed">
                The Service may be subject to export control laws and regulations of the United States and other countries. You agree to comply with all applicable export and import laws and regulations. You represent that you are not: (a) located in a country that is subject to a U.S. Government embargo or that has been designated by the U.S. Government as a "terrorist supporting" country; or (b) listed on any U.S. Government list of prohibited or restricted parties, including the Treasury Department's list of Specially Designated Nationals or the U.S. Department of Commerce Denied Person's List or Entity List.
              </p>
            </section>

            {/* 12. Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">12. Contact Information</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have any questions, concerns, complaints, or requests regarding these Terms, the Service, your account, or your data, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground mb-2"><strong>Eudox Inc.</strong></p>
                <p className="text-foreground mb-2"><strong>Legal Department</strong></p>
                <p className="text-foreground mb-2">Email: legal@eudox.com</p>
                <p className="text-foreground mb-2">Customer Support: support@eudox.com</p>
                <p className="text-foreground mb-2">Security Issues: security@eudox.com</p>
                <p className="text-foreground mb-2">Data Privacy: privacy@eudox.com</p>
                <p className="text-foreground">Mailing Address: 123 Innovation Drive, Suite 500, Wilmington, DE 19801, United States</p>
              </div>
              <p className="text-foreground leading-relaxed mt-6">
                For customer support inquiries, please visit our Help Center at help.eudox.com or contact our support team via the in-platform chat feature available to all subscribers.
              </p>
            </section>

          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

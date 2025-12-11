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
          <p className="text-muted-foreground mb-8">Last Updated: December 10, 2024</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground leading-relaxed mb-4">
                These Terms of Service ("<strong>Terms</strong>") constitute a legally binding agreement between you ("<strong>you</strong>," "<strong>your</strong>," or "<strong>User</strong>") and Eudox, Inc. ("<strong>Eudox</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") governing your access to and use of the Eudox autonomous deal sourcing platform, including our website, software, applications, AI agent, and all related services (collectively, the "<strong>Services</strong>").
              </p>
              <p className="text-foreground leading-relaxed">
                By creating an account, accessing, or using our Services, you acknowledge that you have read, understood, and agree to be bound by these Terms, our Privacy Policy, and our Cookie Policy. If you do not agree to these Terms, you must immediately cease all use of our Services. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms, and references to "you" shall refer to such entity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">2. Description of Services</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox provides an AI-powered autonomous deal sourcing platform designed for mergers and acquisitions professionals, private equity firms, venture capital investors, and corporate development teams. Our Services utilize advanced machine learning algorithms, natural language processing, and proprietary data aggregation to proactively identify, analyze, and recommend investment opportunities that align with your specified investment thesis and criteria.
              </p>
              <p className="text-foreground leading-relaxed">
                The Services include but are not limited to automated monitoring of over sixteen million (16,000,000) companies across global markets, real-time detection of trigger events such as funding rounds, leadership changes, and market signals, AI-driven analysis and scoring of potential acquisition targets, customizable deal sourcing parameters and investment thesis matching, executive contact enrichment and verified email discovery, integration capabilities with customer relationship management (CRM) systems, and automated outreach personalization and workflow execution. We reserve the right to modify, suspend, or discontinue any aspect of the Services at any time, with or without notice, subject to the terms of your active subscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">3. Subscription Plans and Usage Limits</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox offers tiered subscription plans with specific usage limits, features, and pricing. Your rights to use the Services are strictly limited by the subscription plan you have purchased. Exceeding the usage limits of your plan without upgrading may result in service restrictions or additional charges.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.1 Starter Plan</h3>
              <div className="bg-muted p-6 rounded-lg mb-4">
                <p className="text-foreground mb-2"><strong>Price:</strong> $499 per month</p>
                <p className="text-foreground mb-2"><strong>Target Users:</strong> Individual dealmakers, independent consultants, and solo practitioners</p>
                <p className="text-foreground mb-4"><strong>Usage Limits and Features:</strong></p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Single user account with no team collaboration features</li>
                  <li>Maximum of five hundred (500) AI agent queries per month</li>
                  <li>Access to up to one thousand (1,000) detailed company profiles per month</li>
                  <li>Up to twenty (20) active saved searches and deal alerts</li>
                  <li>Maximum of fifty (50) executive contact enrichments per month</li>
                  <li>Basic email support with forty-eight (48) hour response time</li>
                  <li>Standard data refresh frequency of seventy-two (72) hours</li>
                  <li>No CRM integration or API access</li>
                  <li>Data export limited to CSV format, maximum one hundred (100) records per export</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.2 Pro Firm Plan</h3>
              <div className="bg-muted p-6 rounded-lg mb-4">
                <p className="text-foreground mb-2"><strong>Price:</strong> $1,999 per month</p>
                <p className="text-foreground mb-2"><strong>Target Users:</strong> Investment firms, corporate development teams, and professional services organizations</p>
                <p className="text-foreground mb-4"><strong>Usage Limits and Features:</strong></p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Up to five (5) user accounts with team collaboration and shared workspaces</li>
                  <li>Maximum of three thousand (3,000) AI agent queries per month across all users</li>
                  <li>Access to up to ten thousand (10,000) detailed company profiles per month</li>
                  <li>Up to one hundred (100) active saved searches and deal alerts per team</li>
                  <li>Maximum of five hundred (500) executive contact enrichments per month</li>
                  <li>Priority email and chat support with twelve (12) hour response time</li>
                  <li>Enhanced data refresh frequency of twenty-four (24) hours</li>
                  <li>CRM integration with Salesforce, HubSpot, and Microsoft Dynamics</li>
                  <li>API access with rate limit of one thousand (1,000) requests per day</li>
                  <li>Advanced data export in CSV, Excel, and JSON formats, maximum five thousand (5,000) records per export</li>
                  <li>Custom investment thesis modeling and advanced filtering</li>
                  <li>Quarterly business review with dedicated customer success manager</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">3.3 Enterprise Plan</h3>
              <div className="bg-muted p-6 rounded-lg mb-4">
                <p className="text-foreground mb-2"><strong>Price:</strong> Custom pricing based on requirements</p>
                <p className="text-foreground mb-2"><strong>Target Users:</strong> Large investment firms, global corporations, and institutional investors</p>
                <p className="text-foreground mb-4"><strong>Usage Limits and Features:</strong></p>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  <li>Unlimited user accounts with advanced role-based access controls</li>
                  <li>Unlimited AI agent queries and company profile access</li>
                  <li>Unlimited saved searches, deal alerts, and executive contact enrichments</li>
                  <li>Dedicated account management and twenty-four/seven (24/7) priority support</li>
                  <li>Real-time data refresh and early access to new features</li>
                  <li>Custom CRM integrations and white-label API access</li>
                  <li>Unlimited data exports in all formats with bulk export capabilities</li>
                  <li>Custom AI model training on proprietary deal data</li>
                  <li>On-premise deployment options and single sign-on (SSO) integration</li>
                  <li>Service level agreement (SLA) with ninety-nine point nine percent (99.9%) uptime guarantee</li>
                  <li>Dedicated infrastructure and data isolation options</li>
                </ul>
              </div>

              <p className="text-foreground leading-relaxed">
                Usage limits reset on the first day of each billing cycle. Unused queries, profile views, or other limited resources do not roll over to subsequent billing periods. If you exceed your plan's usage limits, we reserve the right to throttle, restrict, or suspend access to certain features until you upgrade your subscription or the next billing cycle begins. We will make reasonable efforts to notify you before imposing such restrictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">4. Account Registration and Security</h2>
              <p className="text-foreground leading-relaxed mb-4">
                To access certain features of the Services, you must create an account by providing accurate, current, and complete information. You are solely responsible for maintaining the confidentiality of your account credentials, including your username and password, and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
              </p>
              <p className="text-foreground leading-relaxed">
                You represent and warrant that you are at least eighteen (18) years of age and have the legal capacity to enter into these Terms. You may not use the Services if you are a competitor of Eudox or if you are using the Services for competitive analysis, benchmarking, or reverse engineering purposes. We reserve the right to refuse service, terminate accounts, or remove or edit content at our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">5. Payment Terms and Billing</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Subscription fees are billed in advance on a monthly basis and are non-refundable except as expressly provided in these Terms or required by applicable law. By providing payment information, you authorize us to charge the applicable subscription fees to your designated payment method on a recurring basis until you cancel your subscription. All fees are exclusive of applicable taxes, duties, or similar governmental assessments, which you are responsible for paying.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                We reserve the right to change our pricing upon thirty (30) days' notice, which may be provided by email or through the Services. Price changes will take effect at the start of the next billing cycle following the notice period. Your continued use of the Services after the price change constitutes your acceptance of the new pricing. If you do not agree to the price change, you may cancel your subscription before the new price takes effect.
              </p>
              <p className="text-foreground leading-relaxed">
                If your payment method fails or your account is past due, we may suspend or terminate your access to the Services until payment is received. You are responsible for providing current, complete, and accurate billing information and promptly updating such information if it changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">6. Cancellation and Refunds</h2>
              <p className="text-foreground leading-relaxed mb-4">
                You may cancel your subscription at any time through your account settings or by contacting our customer support team. Cancellation will be effective at the end of your current billing cycle, and you will retain access to the Services until that time. We do not provide refunds or credits for partial months of service or for unused features or content.
              </p>
              <p className="text-foreground leading-relaxed">
                If you cancel during a free trial period, your cancellation will be effective immediately, and you will not be charged. If you signed up for a discounted promotional rate, canceling and resubscribing may result in losing that promotional pricing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">7. Acceptable Use Policy</h2>
              <p className="text-foreground leading-relaxed mb-4">
                You agree to use the Services only for lawful purposes and in accordance with these Terms. You shall not use the Services to violate any applicable local, state, national, or international law or regulation; infringe upon or misappropriate the intellectual property rights of Eudox or any third party; transmit any material that is defamatory, obscene, offensive, or otherwise objectionable; engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Services; attempt to gain unauthorized access to the Services, other accounts, computer systems, or networks; interfere with or disrupt the Services or servers or networks connected to the Services; use any robot, spider, scraper, or other automated means to access the Services without our prior written permission; reverse engineer, decompile, disassemble, or otherwise attempt to discover the source code of the Services; remove, alter, or obscure any proprietary notices on the Services; or resell, sublicense, or redistribute the Services or any data obtained from the Services without our express written consent.
              </p>
              <p className="text-foreground leading-relaxed">
                We reserve the right to investigate and take appropriate legal action against anyone who violates this Acceptable Use Policy, including removing offending content, suspending or terminating accounts, and reporting violations to law enforcement authorities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">8. Intellectual Property Rights</h2>
              <p className="text-foreground leading-relaxed mb-4">
                The Services, including all software, algorithms, databases, text, graphics, logos, icons, images, audio clips, video clips, data compilations, and other content, are owned by Eudox or our licensors and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws. Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Services solely for your internal business purposes in accordance with your subscription plan.
              </p>
              <p className="text-foreground leading-relaxed">
                You retain all rights to any data, content, or materials that you submit, upload, or input into the Services ("<strong>User Content</strong>"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free, sublicensable license to use, copy, modify, create derivative works of, distribute, publicly display, and publicly perform your User Content solely to the extent necessary to provide the Services to you and to improve our Services. This license terminates when you delete your User Content or close your account, except to the extent that the User Content has been shared with others and they have not deleted it, or as necessary to comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">9. Data Accuracy and Limitations</h2>
              <p className="text-foreground leading-relaxed mb-4">
                While we strive to provide accurate, timely, and comprehensive data through our Services, we do not warrant or guarantee the accuracy, completeness, reliability, or timeliness of any information, data, or recommendations provided by the Services or our AI agent. The Services aggregate data from publicly available sources, proprietary databases, and third-party data providers, and such data may contain errors, omissions, or inaccuracies.
              </p>
              <p className="text-foreground leading-relaxed">
                You acknowledge that the Services are tools to assist in your deal sourcing and investment analysis processes and should not be relied upon as the sole basis for making investment decisions. You are solely responsible for conducting your own due diligence, verification, and analysis before pursuing any investment opportunity identified through the Services. Eudox is not a registered investment advisor, broker-dealer, or financial institution, and the Services do not constitute investment advice, financial advice, or recommendations to buy or sell any securities or assets.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-foreground leading-relaxed mb-4">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, EUDOX DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-foreground leading-relaxed">
                EUDOX DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. EUDOX DOES NOT WARRANT THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED OR THAT THE SERVICES WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS. YOU ASSUME ALL RESPONSIBILITY AND RISK FOR YOUR USE OF THE SERVICES AND ANY DECISIONS MADE BASED ON INFORMATION OBTAINED THROUGH THE SERVICES.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">11. Limitation of Liability</h2>
              <p className="text-foreground leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL EUDOX, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICES, EVEN IF EUDOX HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EUDOX'S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE AMOUNT YOU PAID TO EUDOX IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER. THESE LIMITATIONS APPLY REGARDLESS OF THE LEGAL THEORY ON WHICH THE CLAIM IS BASED, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">12. Indemnification</h2>
              <p className="text-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless Eudox, its affiliates, and their respective officers, directors, employees, agents, and licensors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from your use of the Services, your violation of these Terms, your violation of any rights of another party, or your User Content. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate with our defense of such claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">13. Term and Termination</h2>
              <p className="text-foreground leading-relaxed mb-4">
                These Terms commence on the date you first access or use the Services and continue until terminated by either party. You may terminate these Terms at any time by canceling your subscription and ceasing all use of the Services. We may suspend or terminate your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
              </p>
              <p className="text-foreground leading-relaxed">
                Upon termination, your right to use the Services will immediately cease, and you must promptly destroy all copies of any materials obtained from the Services. The following sections shall survive termination: Sections 5 (Payment Terms), 8 (Intellectual Property Rights), 9 (Data Accuracy and Limitations), 10 (Disclaimer of Warranties), 11 (Limitation of Liability), 12 (Indemnification), 15 (Dispute Resolution and Arbitration), 16 (Governing Law), and 17 (General Provisions).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">14. Modifications to Terms</h2>
              <p className="text-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time in our sole discretion. We will provide notice of material changes by posting the updated Terms on our website with a new "Last Updated" date and, where required by law, by sending you an email notification or displaying a prominent notice within the Services. Your continued use of the Services after the effective date of the updated Terms constitutes your acceptance of the changes. If you do not agree to the modified Terms, you must stop using the Services and cancel your subscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">15. Dispute Resolution and Arbitration</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be resolved through binding arbitration administered by the American Arbitration Association (AAA) in accordance with its Commercial Arbitration Rules. The arbitration shall be conducted by a single arbitrator in the English language in [Your Jurisdiction]. The arbitrator's decision shall be final and binding, and judgment on the award may be entered in any court having jurisdiction.
              </p>
              <p className="text-foreground leading-relaxed">
                YOU AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. You may opt out of this arbitration agreement by sending written notice to legal@eudox.com within thirty (30) days of first accepting these Terms. If you opt out, this arbitration provision will not apply to you, but all other terms of these Terms will remain in effect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">16. Governing Law</h2>
              <p className="text-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the State of [Your State], United States, without regard to its conflict of law principles. Any legal action or proceeding arising out of or related to these Terms that is not subject to arbitration shall be brought exclusively in the federal or state courts located in [Your County], [Your State], and you consent to the personal jurisdiction of such courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">17. General Provisions</h2>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Eudox regarding the Services and supersede all prior or contemporaneous understandings and agreements, whether written or oral.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Severability:</strong> If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Waiver:</strong> No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Assignment:</strong> You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. We may assign these Terms without restriction.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>Force Majeure:</strong> Eudox shall not be liable for any failure or delay in performance due to causes beyond our reasonable control, including acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">18. Contact Information</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have questions or concerns about these Terms, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Eudox, Inc.</p>
                <p className="text-foreground">Legal Department</p>
                <p className="text-foreground">Email: legal@eudox.com</p>
                <p className="text-foreground">Address: [Your Company Address]</p>
                <p className="text-foreground">Phone: 1-800-EUDOX-AI</p>
              </div>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

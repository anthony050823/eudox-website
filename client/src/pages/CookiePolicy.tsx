import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
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
          <h1 className="text-4xl font-bold text-[#11142d] dark:text-white mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 10, 2024</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">1. Introduction</h2>
              <p className="text-foreground leading-relaxed mb-4">
                This Cookie Policy explains how Eudox, Inc. ("<strong>Eudox</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") uses cookies and similar tracking technologies when you visit our website at eudox.com or use our autonomous deal sourcing platform and related services (collectively, the "<strong>Services</strong>"). This policy provides detailed information about the types of cookies we use, why we use them, and how you can control your cookie preferences.
              </p>
              <p className="text-foreground leading-relaxed">
                By continuing to use our Services, you consent to our use of cookies and similar technologies as described in this Cookie Policy. This policy should be read in conjunction with our Privacy Policy and Terms of Service, which provide additional information about how we collect, use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">2. What Are Cookies?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, smartphone, or other electronic device) when you visit a website. Cookies contain information that is transferred to your device's hard drive and allow websites to recognize your device, remember your preferences, and provide enhanced functionality. Cookies may be set by the website you are visiting ("<strong>first-party cookies</strong>") or by third-party services that run content or provide analytics on the website ("<strong>third-party cookies</strong>").
              </p>
              <p className="text-foreground leading-relaxed">
                Cookies can be "<strong>session cookies</strong>" that are deleted when you close your browser, or "<strong>persistent cookies</strong>" that remain on your device for a set period or until you manually delete them. We use both session and persistent cookies to provide, secure, and improve our Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">3. Similar Tracking Technologies</h2>
              <p className="text-foreground leading-relaxed mb-4">
                In addition to cookies, we use other tracking technologies that function similarly to cookies, including web beacons (also known as pixel tags or clear GIFs), which are small graphic images embedded in web pages or emails that allow us to track page views, email opens, and user behavior; local storage objects (such as HTML5 local storage and IndexedDB) that allow us to store data locally on your device for improved performance and offline functionality; software development kits (SDKs) and application programming interfaces (APIs) that collect usage data from our mobile applications and integrated services; and device fingerprinting techniques that collect information about your device configuration to identify and authenticate users.
              </p>
              <p className="text-foreground leading-relaxed">
                For simplicity, this Cookie Policy refers to all these technologies collectively as "<strong>cookies</strong>" unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">4. Types of Cookies We Use</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We use several categories of cookies to provide and improve our Services. The following table describes the types of cookies we use, their purpose, and their duration:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Cookie Category</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Purpose</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Duration</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Can Be Disabled?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-semibold text-foreground">Strictly Necessary Cookies</td>
                      <td className="border border-border p-3 text-foreground">Essential for the operation of our Services, including authentication, security, load balancing, and core functionality. Without these cookies, certain features cannot be provided.</td>
                      <td className="border border-border p-3 text-foreground">Session or up to 1 year</td>
                      <td className="border border-border p-3 text-foreground">No - Required for service operation</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-semibold text-foreground">Performance and Analytics Cookies</td>
                      <td className="border border-border p-3 text-foreground">Collect information about how visitors use our Services, including pages visited, time spent, errors encountered, and user flow. Help us improve performance and user experience.</td>
                      <td className="border border-border p-3 text-foreground">Up to 2 years</td>
                      <td className="border border-border p-3 text-foreground">Yes - Can be disabled via cookie settings</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-semibold text-foreground">Functional Cookies</td>
                      <td className="border border-border p-3 text-foreground">Remember your preferences and settings, such as language selection, theme preferences, saved searches, and customization options. Enhance user experience by providing personalized features.</td>
                      <td className="border border-border p-3 text-foreground">Up to 1 year</td>
                      <td className="border border-border p-3 text-foreground">Yes - Can be disabled, but may affect functionality</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-semibold text-foreground">Targeting and Advertising Cookies</td>
                      <td className="border border-border p-3 text-foreground">Track your browsing activity across websites to deliver relevant advertisements and measure advertising campaign effectiveness. May be set by advertising partners.</td>
                      <td className="border border-border p-3 text-foreground">Up to 1 year</td>
                      <td className="border border-border p-3 text-foreground">Yes - Can be disabled via cookie settings</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-semibold text-foreground">Social Media Cookies</td>
                      <td className="border border-border p-3 text-foreground">Enable social media sharing features and track social media interactions. Set by third-party social media platforms when you use their sharing buttons or widgets.</td>
                      <td className="border border-border p-3 text-foreground">Up to 1 year</td>
                      <td className="border border-border p-3 text-foreground">Yes - Can be disabled via cookie settings</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">5. Specific Cookies We Use</h2>
              <p className="text-foreground leading-relaxed mb-4">
                The following table provides detailed information about specific cookies used on our Services:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Cookie Name</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Provider</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Purpose</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Expiration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-mono text-sm text-foreground">eudox_session</td>
                      <td className="border border-border p-3 text-foreground">Eudox (First-party)</td>
                      <td className="border border-border p-3 text-foreground">Maintains your authenticated session and prevents unauthorized access</td>
                      <td className="border border-border p-3 text-foreground">Session</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-mono text-sm text-foreground">eudox_csrf</td>
                      <td className="border border-border p-3 text-foreground">Eudox (First-party)</td>
                      <td className="border border-border p-3 text-foreground">Protects against cross-site request forgery attacks</td>
                      <td className="border border-border p-3 text-foreground">Session</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-mono text-sm text-foreground">eudox_preferences</td>
                      <td className="border border-border p-3 text-foreground">Eudox (First-party)</td>
                      <td className="border border-border p-3 text-foreground">Stores your theme, language, and display preferences</td>
                      <td className="border border-border p-3 text-foreground">1 year</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-mono text-sm text-foreground">eudox_analytics</td>
                      <td className="border border-border p-3 text-foreground">Eudox (First-party)</td>
                      <td className="border border-border p-3 text-foreground">Tracks usage patterns and feature adoption for product improvement</td>
                      <td className="border border-border p-3 text-foreground">2 years</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-mono text-sm text-foreground">_ga, _gid</td>
                      <td className="border border-border p-3 text-foreground">Google Analytics (Third-party)</td>
                      <td className="border border-border p-3 text-foreground">Collects anonymous usage statistics and visitor demographics</td>
                      <td className="border border-border p-3 text-foreground">2 years / 24 hours</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-mono text-sm text-foreground">_fbp</td>
                      <td className="border border-border p-3 text-foreground">Facebook Pixel (Third-party)</td>
                      <td className="border border-border p-3 text-foreground">Tracks conversions and enables targeted advertising on Facebook</td>
                      <td className="border border-border p-3 text-foreground">3 months</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-mono text-sm text-foreground">li_sugr</td>
                      <td className="border border-border p-3 text-foreground">LinkedIn Insight Tag (Third-party)</td>
                      <td className="border border-border p-3 text-foreground">Enables LinkedIn advertising and conversion tracking</td>
                      <td className="border border-border p-3 text-foreground">3 months</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-mono text-sm text-foreground">intercom-*</td>
                      <td className="border border-border p-3 text-foreground">Intercom (Third-party)</td>
                      <td className="border border-border p-3 text-foreground">Powers customer support chat and messaging features</td>
                      <td className="border border-border p-3 text-foreground">9 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground leading-relaxed">
                This list is representative of the main cookies we use but is not exhaustive. Additional cookies may be set by third-party services integrated with our platform. We regularly review and update our cookie usage to ensure compliance with privacy regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">6. Third-Party Cookies and Services</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We use third-party services that may set cookies on your device to provide functionality, analytics, advertising, and support services. These third parties have their own privacy policies and cookie policies that govern their use of your information. We do not control third-party cookies and recommend that you review the privacy policies of these third parties to understand their data practices.
              </p>
              <p className="text-foreground leading-relaxed">
                Third-party services we use include Google Analytics for website analytics and user behavior tracking, Facebook Pixel and LinkedIn Insight Tag for advertising and conversion tracking, Intercom for customer support and messaging, Stripe for payment processing, Salesforce and HubSpot for customer relationship management (CRM) integration, and content delivery networks (CDNs) for improved performance and security. You can opt out of certain third-party tracking by visiting the Network Advertising Initiative opt-out page or the Digital Advertising Alliance opt-out page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">7. How to Control Cookies</h2>
              <p className="text-foreground leading-relaxed mb-4">
                You have several options for managing and controlling cookies on your device. Most web browsers automatically accept cookies by default, but you can modify your browser settings to decline cookies or alert you when cookies are being sent. Please note that disabling certain cookies may affect the functionality and performance of our Services.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.1 Browser Settings</h3>
              <p className="text-foreground leading-relaxed mb-4">
                You can control cookies through your browser settings. Each browser is different, so consult your browser's help menu for instructions on how to manage cookies. Common browsers provide cookie management through the following paths:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground mb-4">
                <li><strong>Google Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Mozilla Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Manage and delete cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.2 Cookie Preference Center</h3>
              <p className="text-foreground leading-relaxed mb-4">
                We provide a Cookie Preference Center within our Services where you can view and manage your cookie preferences. You can access this center at any time through the cookie banner displayed on your first visit or through your account settings. The Cookie Preference Center allows you to enable or disable specific categories of cookies, such as analytics, advertising, and functional cookies, while strictly necessary cookies remain enabled to ensure core functionality.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.3 Do Not Track Signals</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Some browsers offer a "Do Not Track" (DNT) signal that requests websites not to track your browsing activity. Currently, there is no industry standard for responding to DNT signals, and our Services do not respond to DNT signals at this time. However, you can control tracking through the cookie management options described above.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">7.4 Mobile Device Settings</h3>
              <p className="text-foreground leading-relaxed">
                If you access our Services through a mobile device, you can control tracking through your device settings. On iOS devices, you can limit ad tracking through Settings → Privacy → Tracking. On Android devices, you can opt out of personalized ads through Settings → Google → Ads → Opt out of Ads Personalization.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">8. Consequences of Disabling Cookies</h2>
              <p className="text-foreground leading-relaxed">
                While you have the right to disable cookies, doing so may impact your experience with our Services. Disabling strictly necessary cookies will prevent you from accessing certain features and may result in authentication failures, loss of saved preferences, inability to maintain session state, and reduced security protections. Disabling performance and analytics cookies will limit our ability to improve the Services and identify technical issues. Disabling functional cookies will prevent us from remembering your preferences and customization settings. Disabling advertising cookies will result in less relevant advertisements but will not reduce the total number of ads you see.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">9. Updates to This Cookie Policy</h2>
              <p className="text-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our cookie practices, technology, or legal requirements. We will notify you of material changes by posting the updated Cookie Policy on our website with a new "Last Updated" date. We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies. Your continued use of our Services after the effective date of the updated Cookie Policy constitutes your acceptance of the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">10. Contact Us</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have questions or concerns about our use of cookies or this Cookie Policy, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Eudox, Inc.</p>
                <p className="text-foreground">Privacy Team</p>
                <p className="text-foreground">Email: privacy@eudox.com</p>
                <p className="text-foreground">Address: [Your Company Address]</p>
                <p className="text-foreground">Phone: 1-800-EUDOX-AI</p>
              </div>
              <p className="text-foreground leading-relaxed mt-4">
                We are committed to transparency in our data practices and will respond to your inquiries in a timely manner.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

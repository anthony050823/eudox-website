import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Redirect to homepage and trigger privacy modal
    setLocation("/");
    setTimeout(() => {
      const privacyButton = document.querySelector('[data-privacy-button]') as HTMLButtonElement;
      if (privacyButton) privacyButton.click();
    }, 100);
  }, [setLocation]);

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
          <h1 className="text-4xl font-bold text-[#11142d] dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: December 10, 2024</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">1. Introduction</h2>
              <p className="text-foreground leading-relaxed mb-4">
                EudoxAi, Inc. ("<strong>Eudox</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") is committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our autonomous deal sourcing platform and related services (collectively, the "<strong>Services</strong>"). By accessing or using our Services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
              </p>
              <p className="text-foreground leading-relaxed">
                This Privacy Policy applies to all users of our Services, including visitors to our website, early access program participants, and paying subscribers. If you do not agree with the terms of this Privacy Policy, please discontinue use of our Services immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">2.1 Information You Provide Directly</h3>
              <p className="text-foreground leading-relaxed mb-4">
                We collect information that you voluntarily provide to us when you register for an account, subscribe to our Services, participate in our early access program, or communicate with us. This information may include your full name, business email address, company name, job title or role, phone number, billing and payment information, and any other information you choose to provide in forms, surveys, or direct communications with our team.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">2.2 Information Collected Automatically</h3>
              <p className="text-foreground leading-relaxed mb-4">
                When you access our Services, we automatically collect certain technical and usage information through cookies, web beacons, and similar tracking technologies. This includes your IP address, browser type and version, device identifiers, operating system, referring and exit pages, clickstream data, pages viewed and time spent on pages, search queries within our platform, features and functions used, and interaction patterns with our AI agent.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">2.3 Business Information and Deal Data</h3>
              <p className="text-foreground leading-relaxed mb-4">
                In the course of providing our autonomous deal sourcing Services, we collect and process business-related information that you input into our platform. This includes your investment thesis and criteria, target company preferences, deal sourcing parameters, saved searches and alerts, notes and annotations on potential deals, and CRM integration data. We also aggregate and analyze data from publicly available sources, proprietary databases, and third-party data providers to deliver our Services, but this aggregated market data is not considered your personal information.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">2.4 Communications Data</h3>
              <p className="text-foreground leading-relaxed">
                We collect information from your communications with us, including the content of messages sent through our platform, support tickets and customer service inquiries, feedback and survey responses, and email correspondence. We may record customer support calls for quality assurance and training purposes, with your consent where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We use the information we collect for legitimate business purposes, including to provide, maintain, and improve our Services; to process your transactions and manage your subscription; to personalize your experience and deliver customized deal recommendations through our AI agent; to communicate with you about your account, updates, and promotional offers; to respond to your inquiries and provide customer support; to detect, prevent, and address technical issues, fraud, and security threats; to comply with legal obligations and enforce our Terms of Service; to conduct research, analytics, and product development; and to send you marketing communications in accordance with your preferences and applicable law.
              </p>
              <p className="text-foreground leading-relaxed">
                Our AI-powered deal sourcing agent uses machine learning algorithms to analyze your investment criteria, historical preferences, and interaction patterns to provide increasingly relevant and timely deal opportunities. This processing is essential to delivering the core functionality of our Services and is conducted in accordance with strict data security protocols.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes. We may share your information only in the following limited circumstances:
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Service Providers:</strong> We engage trusted third-party service providers to perform functions on our behalf, including cloud hosting and infrastructure providers, payment processors and billing services, customer relationship management (CRM) platforms, email delivery and communication services, analytics and monitoring tools, and security and fraud prevention services. These service providers have access to your information only to perform specific tasks on our behalf and are obligated to protect your information and use it only for the purposes for which it was disclosed.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, reorganization, bankruptcy, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information is transferred and becomes subject to a different privacy policy.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities, including to comply with a subpoena, court order, or other legal process; to protect the rights, property, or safety of Eudox, our users, or the public; to enforce our Terms of Service or investigate potential violations; or to detect, prevent, or address fraud, security, or technical issues.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>With Your Consent:</strong> We may share your information with third parties when you have given us explicit consent to do so, such as when you authorize integration with third-party CRM systems or collaboration tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">5. Data Security</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We implement industry-standard technical, administrative, and physical security measures designed to protect your information from unauthorized access, disclosure, alteration, and destruction. These measures include encryption of data in transit using TLS 1.3 or higher, encryption of sensitive data at rest using AES-256 encryption, secure authentication mechanisms including multi-factor authentication options, regular security audits and penetration testing, access controls and principle of least privilege for employee access, secure development practices and code reviews, and incident response and breach notification procedures.
              </p>
              <p className="text-foreground leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to protect your information using commercially reasonable means, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">6. Data Retention</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Account information and subscription data are retained for the duration of your active subscription and for a reasonable period thereafter to comply with legal obligations, resolve disputes, and enforce our agreements. Usage data and analytics are typically retained for up to twenty-four (24) months for product improvement and security purposes. Communications and support records are retained for up to three (3) years for quality assurance and legal compliance. Financial and transaction records are retained for up to seven (7) years to comply with tax and accounting regulations.
              </p>
              <p className="text-foreground leading-relaxed">
                When you close your account or request deletion of your information, we will delete or anonymize your personal information within thirty (30) days, except where we are required to retain certain information for legal, regulatory, or legitimate business purposes. Aggregated and anonymized data that cannot be used to identify you may be retained indefinitely for analytics and research purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">7. Your Privacy Rights</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Depending on your jurisdiction, you may have certain rights regarding your personal information. These rights may include the right to access and obtain a copy of your personal information, the right to correct inaccurate or incomplete information, the right to delete your personal information subject to certain exceptions, the right to restrict or object to certain processing activities, the right to data portability in a structured, machine-readable format, the right to withdraw consent where processing is based on consent, and the right to lodge a complaint with a supervisory authority.
              </p>
              <p className="text-foreground leading-relaxed">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@eudox.ai" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@eudox.ai</a>. We will respond to your request within thirty (30) days or as otherwise required by applicable law. We may require verification of your identity before processing your request to protect your information from unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">8. International Data Transfers</h2>
              <p className="text-foreground leading-relaxed">
                Eudox is based in the United States, and your information may be transferred to, stored, and processed in the United States or other countries where our service providers operate. These countries may have data protection laws that differ from those in your jurisdiction. When we transfer your information internationally, we implement appropriate safeguards to protect your information in accordance with this Privacy Policy and applicable law, including the use of Standard Contractual Clauses approved by the European Commission for transfers from the European Economic Area.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">9. Children's Privacy</h2>
              <p className="text-foreground leading-relaxed">
                Our Services are not directed to individuals under the age of eighteen (18), and we do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information promptly. If you believe we have collected information from a child, please contact us immediately at <a href="mailto:privacy@eudox.ai" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@eudox.ai</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">10. Third-Party Links and Services</h2>
              <p className="text-foreground leading-relaxed">
                Our Services may contain links to third-party websites, applications, or services that are not owned or controlled by Eudox. This Privacy Policy does not apply to third-party services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing them with your information. When you integrate third-party services with our platform (such as CRM systems), you authorize us to access and process information from those services in accordance with your integration settings and this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">11. California Privacy Rights</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA). These rights include the right to know what personal information we collect, use, disclose, and sell; the right to delete personal information subject to certain exceptions; the right to opt-out of the sale or sharing of personal information; the right to correct inaccurate personal information; the right to limit the use and disclosure of sensitive personal information; and the right to non-discrimination for exercising your privacy rights.
              </p>
              <p className="text-foreground leading-relaxed">
                We do not sell your personal information as defined by the CCPA. To exercise your California privacy rights, please contact us at <a href="mailto:privacy@eudox.ai" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@eudox.ai</a> or call our toll-free number at 1-800-EUDOX-AI. You may designate an authorized agent to make requests on your behalf, subject to verification requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">12. European Privacy Rights (GDPR)</h2>
              <p className="text-foreground leading-relaxed">
                If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR) and equivalent laws. We process your personal information based on the following legal grounds: performance of a contract when necessary to provide our Services to you, legitimate interests in operating, improving, and securing our Services, compliance with legal obligations to which we are subject, and consent where you have provided explicit consent for specific processing activities. You have the right to object to processing based on legitimate interests and to withdraw consent at any time without affecting the lawfulness of processing based on consent before withdrawal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated Privacy Policy on our website with a new "Last Updated" date and, where required by law, by sending you an email notification or displaying a prominent notice within our Services. Your continued use of our Services after the effective date of the updated Privacy Policy constitutes your acceptance of the changes. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">14. Contact Us</h2>
              <p className="text-foreground leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">EudoxAi, Inc.</p>
                <p className="text-foreground">Privacy Team</p>
                <p className="text-foreground">Email: <a href="mailto:privacy@eudox.ai" className="text-blue-600 dark:text-blue-400 hover:underline">privacy@eudox.ai</a></p>
                <p className="text-foreground">Phone: 1-800-EUDOX-AI</p>
              </div>
              <p className="text-foreground leading-relaxed mt-4">
                We are committed to working with you to resolve any privacy concerns in a timely and transparent manner.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

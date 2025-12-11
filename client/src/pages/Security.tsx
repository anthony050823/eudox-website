import { AnimatedSection } from "@/components/AnimatedSection";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { X, Shield, Lock, Eye, Server, Key, FileCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Security() {
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
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold text-[#11142d] dark:text-white">Security & Data Protection</h1>
          </div>
          <p className="text-muted-foreground mb-8">Last Updated: December 10, 2024</p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <p className="text-foreground leading-relaxed mb-4">
                At Eudox, security and data protection are fundamental to our mission of providing autonomous deal sourcing for private markets. We understand that our clients entrust us with highly sensitive business intelligence, competitive insights, and proprietary deal flow data. This Security page provides comprehensive information about the technical, organizational, and procedural safeguards we implement to protect your data and maintain your privacy throughout every stage of our service delivery.
              </p>
              <p className="text-foreground leading-relaxed">
                Our security program is built on industry-leading frameworks including SOC 2 Type II compliance, ISO 27001 certification standards, and GDPR requirements. We employ a defense-in-depth strategy that combines multiple layers of protection, continuous monitoring, and proactive threat detection to ensure the confidentiality, integrity, and availability of your data. This page details our security architecture, data protection measures, compliance certifications, and incident response capabilities.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-0">Infrastructure Security</h2>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox operates on enterprise-grade cloud infrastructure provided by Amazon Web Services (AWS), leveraging their global network of secure data centers with physical security controls including 24/7 surveillance, biometric access controls, and environmental monitoring. Our infrastructure architecture is designed with security as the foundation, implementing network segmentation, private subnets, and strict firewall rules to isolate sensitive components and minimize attack surfaces.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Network Security</h3>
              <p className="text-foreground leading-relaxed mb-4">
                All data transmitted to and from Eudox services is encrypted using Transport Layer Security (TLS) 1.3, the latest and most secure version of the protocol, with perfect forward secrecy enabled to ensure that even if encryption keys are compromised in the future, past communications remain secure. We enforce HTTPS for all web traffic and reject any attempts to connect via unencrypted HTTP. Our API endpoints implement certificate pinning to prevent man-in-the-middle attacks, and we use Web Application Firewalls (WAF) to filter malicious traffic and protect against common web exploits such as SQL injection, cross-site scripting (XSS), and distributed denial-of-service (DDoS) attacks.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Network traffic is continuously monitored using intrusion detection systems (IDS) and intrusion prevention systems (IPS) that analyze patterns and signatures to identify and block suspicious activity in real-time. We implement rate limiting and throttling mechanisms to prevent abuse and ensure service availability. All network logs are centralized, encrypted, and retained for forensic analysis and compliance auditing purposes.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Server and Application Security</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Our application servers run in hardened environments with minimal software packages installed, reducing the attack surface and eliminating unnecessary services that could introduce vulnerabilities. We apply security patches and updates within 24 hours of release for critical vulnerabilities and within 7 days for high-severity issues. Operating systems and application frameworks are regularly scanned for known vulnerabilities using automated tools, and any identified issues are prioritized for remediation based on severity and exploitability.
              </p>
              <p className="text-foreground leading-relaxed">
                Application code undergoes rigorous security testing including static application security testing (SAST) during development, dynamic application security testing (DAST) in staging environments, and penetration testing by third-party security firms on a quarterly basis. We follow secure coding practices based on OWASP Top 10 guidelines, implement input validation and output encoding to prevent injection attacks, and use parameterized queries to protect against SQL injection. All authentication tokens and session identifiers are generated using cryptographically secure random number generators and are invalidated after logout or expiration.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Server className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-0">Data Protection & Encryption</h2>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Data protection is implemented through multiple layers of encryption, access controls, and isolation mechanisms. We recognize that the deal flow intelligence, company profiles, and market insights processed by Eudox represent significant competitive advantages for our clients, and we treat all data with the highest level of confidentiality and protection.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Encryption at Rest</h3>
              <p className="text-foreground leading-relaxed mb-4">
                All data stored in our databases, file systems, and backup systems is encrypted at rest using AES-256 encryption, a military-grade standard approved by the U.S. National Security Agency for protecting classified information. Encryption keys are managed through AWS Key Management Service (KMS) with automatic key rotation enabled every 90 days. Master keys are stored in hardware security modules (HSMs) that meet FIPS 140-2 Level 3 standards, ensuring that cryptographic operations are performed in tamper-resistant hardware and that keys cannot be extracted or compromised.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Database encryption is implemented at the storage layer, ensuring that all data files, transaction logs, and temporary files are protected. We use separate encryption keys for each customer environment in our multi-tenant architecture, providing cryptographic isolation between clients. Encryption keys are never stored alongside the encrypted data, and access to keys requires multi-factor authentication and is logged for audit purposes.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Encryption in Transit</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Beyond TLS 1.3 for external communications, we also encrypt all internal traffic between microservices using mutual TLS (mTLS), ensuring that even within our private network, data cannot be intercepted or tampered with. Service-to-service authentication is enforced through certificate-based authentication, and all certificates are short-lived (24-48 hours) and automatically rotated to minimize the impact of potential compromises.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Data Isolation and Segmentation</h3>
              <p className="text-foreground leading-relaxed">
                Customer data is logically isolated through database-level partitioning and row-level security policies that ensure queries can only access data belonging to the authenticated user's organization. We implement strict access controls at the application layer, validating authorization for every data access request. For Enterprise tier customers, we offer dedicated database instances and compute resources to provide physical isolation and eliminate the risk of resource contention or data leakage through side-channel attacks in multi-tenant environments.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Key className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-0">Access Control & Authentication</h2>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Access to Eudox services and data is governed by a comprehensive identity and access management (IAM) framework that implements the principle of least privilege, ensuring that users and systems have only the minimum permissions necessary to perform their functions. We employ multiple layers of authentication and authorization to verify identities and enforce access policies.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">User Authentication</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox supports multiple authentication methods to balance security and user convenience. For standard access, we require strong passwords meeting complexity requirements (minimum 12 characters, including uppercase, lowercase, numbers, and special characters) and enforce password rotation every 90 days. Passwords are never stored in plain text; instead, we use bcrypt hashing with adaptive cost factors that increase computational requirements over time to resist brute-force attacks even as computing power advances.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Multi-factor authentication (MFA) is required for all user accounts and can be implemented through time-based one-time passwords (TOTP) using authenticator apps, SMS verification codes, or hardware security keys supporting FIDO2/WebAuthn standards. For Enterprise customers, we support single sign-on (SSO) integration with corporate identity providers using SAML 2.0 or OpenID Connect protocols, allowing centralized user management and leveraging existing authentication infrastructure.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Role-Based Access Control (RBAC)</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Access permissions are managed through a role-based access control system that defines granular permissions for different user roles within an organization. Standard roles include Viewer (read-only access to deal flow and reports), Analyst (ability to create searches and save opportunities), Manager (team management and configuration), and Administrator (full account control including billing and security settings). Custom roles can be created for Enterprise customers to match specific organizational structures and compliance requirements.
              </p>
              <p className="text-foreground leading-relaxed">
                All access attempts are logged with detailed context including user identity, IP address, timestamp, resource accessed, and action performed. Failed authentication attempts trigger progressive security measures including temporary account lockouts after 5 failed attempts within 15 minutes, and suspicious patterns such as login attempts from unusual locations or devices trigger security alerts to account administrators and may require additional verification before access is granted.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-0">Privacy by Design</h2>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox implements privacy by design principles throughout our product development lifecycle, ensuring that privacy and data protection are considered from the earliest stages of system design rather than being added as an afterthought. Our approach to privacy encompasses data minimization, purpose limitation, transparency, and user control.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Data Minimization</h3>
              <p className="text-foreground leading-relaxed mb-4">
                We collect and process only the minimum data necessary to provide our autonomous deal sourcing services. User registration requires only essential information such as name, email address, and company affiliation. We do not collect sensitive personal information such as social security numbers, financial account details, or health information unless explicitly required for specific features and with clear user consent. Data collection practices are regularly reviewed to identify opportunities to reduce data retention and eliminate unnecessary processing.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Purpose Limitation</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Data collected for one purpose is not repurposed for other uses without explicit user consent. For example, contact information provided for account creation is used solely for authentication, service delivery, and essential communications, and is never shared with third parties for marketing purposes or sold to data brokers. Our AI agents process company and market data exclusively to identify relevant deal opportunities for the requesting user and do not use this data to train models that benefit other customers or third parties.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">User Control and Transparency</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Users maintain full control over their data through our privacy dashboard, accessible from account settings. The dashboard provides visibility into what data we collect, how it is used, and with whom it is shared. Users can exercise their privacy rights including the right to access (download a copy of all personal data), the right to rectification (correct inaccurate information), the right to erasure (request deletion of personal data), the right to restriction of processing (limit how data is used), and the right to data portability (receive data in a structured, machine-readable format).
              </p>
              <p className="text-foreground leading-relaxed">
                We provide clear, understandable explanations of how our AI agents make decisions and identify opportunities, avoiding opaque "black box" algorithms. Users can review the criteria and signals used to surface specific deals, understand why certain companies were flagged as potential targets, and provide feedback to refine future recommendations. This transparency builds trust and ensures that users can validate the quality and relevance of our autonomous sourcing capabilities.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-0">Compliance & Certifications</h2>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox maintains compliance with major data protection regulations and industry standards to ensure that our security and privacy practices meet the highest benchmarks recognized globally. Our compliance program includes regular audits, continuous monitoring, and proactive updates to address evolving regulatory requirements.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Compliance Framework</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Status</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-semibold text-foreground">SOC 2 Type II</td>
                      <td className="border border-border p-3 text-foreground"><span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-green-600" /> Certified</span></td>
                      <td className="border border-border p-3 text-foreground">Annual audit of security, availability, processing integrity, confidentiality, and privacy controls by independent CPA firm</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-semibold text-foreground">GDPR</td>
                      <td className="border border-border p-3 text-foreground"><span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-green-600" /> Compliant</span></td>
                      <td className="border border-border p-3 text-foreground">EU General Data Protection Regulation compliance including data subject rights, lawful basis for processing, and cross-border data transfers</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-semibold text-foreground">CCPA</td>
                      <td className="border border-border p-3 text-foreground"><span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-green-600" /> Compliant</span></td>
                      <td className="border border-border p-3 text-foreground">California Consumer Privacy Act compliance including disclosure requirements, opt-out mechanisms, and consumer rights</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 font-semibold text-foreground">ISO 27001</td>
                      <td className="border border-border p-3 text-foreground"><span className="inline-flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-green-600" /> In Progress</span></td>
                      <td className="border border-border p-3 text-foreground">International standard for information security management systems (ISMS); certification expected Q2 2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground leading-relaxed">
                Compliance documentation including SOC 2 reports, data processing agreements (DPAs), and business associate agreements (BAAs) are available to customers under non-disclosure agreements. We conduct annual third-party security audits and penetration tests, and results are shared with Enterprise customers upon request. Our compliance team monitors regulatory developments globally and updates our practices proactively to maintain compliance as new requirements emerge.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-0">Incident Response & Business Continuity</h2>
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                Despite our comprehensive security measures, we recognize that no system is completely immune to security incidents. Eudox maintains a formal incident response plan that defines procedures for detecting, containing, investigating, and recovering from security events. Our incident response team is available 24/7 and follows industry best practices based on NIST Cybersecurity Framework and SANS Incident Handler's Handbook.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Detection and Monitoring</h3>
              <p className="text-foreground leading-relaxed mb-4">
                Our security operations center (SOC) monitors systems continuously using security information and event management (SIEM) tools that aggregate logs from all infrastructure components and apply machine learning algorithms to detect anomalies and potential threats. Automated alerts are triggered for suspicious activities such as unusual data access patterns, failed authentication attempts from multiple locations, privilege escalation attempts, or unexpected changes to system configurations. Security analysts review alerts and investigate potential incidents following documented playbooks.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Incident Response Process</h3>
              <p className="text-foreground leading-relaxed mb-4">
                When a security incident is confirmed, our incident response team immediately initiates containment procedures to limit the scope and impact. This may include isolating affected systems, revoking compromised credentials, blocking malicious IP addresses, or temporarily disabling affected features. Forensic analysis is conducted to determine the root cause, identify affected data, and assess the extent of the breach. We maintain detailed incident logs and preserve evidence for potential legal or regulatory proceedings.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Customer notification is a priority in our incident response process. For incidents involving unauthorized access to customer data, we notify affected customers within 72 hours of discovery, as required by GDPR and other data breach notification laws. Notifications include a description of the incident, the types of data affected, the actions we have taken to contain and remediate the issue, and recommendations for customers to protect themselves. We provide ongoing updates as our investigation progresses and offer support resources to affected customers.
              </p>

              <h3 className="text-xl font-semibold text-[#11142d] dark:text-white mt-6 mb-3">Business Continuity and Disaster Recovery</h3>
              <p className="text-foreground leading-relaxed">
                Eudox maintains comprehensive business continuity and disaster recovery plans to ensure service availability even in the face of major disruptions such as natural disasters, infrastructure failures, or cyberattacks. Our infrastructure is deployed across multiple availability zones within AWS regions, providing automatic failover capabilities if one zone becomes unavailable. Database backups are performed continuously with point-in-time recovery capabilities, and backups are replicated to geographically separate regions to protect against regional disasters. We conduct disaster recovery drills quarterly to validate our procedures and recovery time objectives (RTO of 4 hours) and recovery point objectives (RPO of 15 minutes).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">Employee Security Training</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Our employees are our first line of defense against security threats. All Eudox employees undergo comprehensive security awareness training during onboarding and participate in annual refresher training covering topics such as phishing recognition, password security, social engineering tactics, secure coding practices, and data handling procedures. Employees with access to production systems or customer data receive additional specialized training on secure operations, incident response, and privacy regulations.
              </p>
              <p className="text-foreground leading-relaxed">
                We conduct regular simulated phishing campaigns to test employee vigilance and provide immediate feedback and additional training to those who fall for simulated attacks. Security awareness is reinforced through internal communications, security bulletins highlighting recent threats, and recognition programs that reward employees who report security concerns or demonstrate exemplary security practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">Third-Party Security</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Eudox carefully evaluates the security posture of all third-party vendors and service providers before integrating their services into our platform. Our vendor security assessment process includes reviewing SOC 2 reports, security questionnaires, penetration test results, and compliance certifications. We require vendors to meet minimum security standards including encryption of data in transit and at rest, regular security testing, incident response capabilities, and compliance with relevant regulations.
              </p>
              <p className="text-foreground leading-relaxed">
                Contracts with third-party vendors include security requirements, data processing agreements that define how customer data may be used, breach notification obligations, and rights to audit vendor security controls. We maintain an inventory of all third-party integrations and regularly review vendor security postures to ensure ongoing compliance with our standards. Vendors with access to customer data are subject to the same access controls and monitoring as our internal systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">Vulnerability Management</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We maintain a proactive vulnerability management program that includes automated vulnerability scanning of all infrastructure components, regular penetration testing by third-party security firms, and a responsible disclosure program that allows security researchers to report vulnerabilities safely. Identified vulnerabilities are prioritized based on severity, exploitability, and potential impact, and are tracked through remediation using our security ticketing system.
              </p>
              <p className="text-foreground leading-relaxed">
                Our responsible disclosure program offers recognition and rewards to security researchers who identify and report vulnerabilities responsibly. We commit to acknowledging reports within 24 hours, providing updates on remediation progress, and publicly crediting researchers (with their permission) once vulnerabilities are resolved. This collaborative approach helps us identify and fix security issues before they can be exploited by malicious actors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">Contact Our Security Team</h2>
              <p className="text-foreground leading-relaxed mb-4">
                We welcome questions, feedback, and reports related to security and privacy. If you have identified a potential security vulnerability, please report it to our security team immediately through our responsible disclosure program. For general security inquiries, compliance documentation requests, or to report a security concern, please contact us at:
              </p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-2">Eudox Security Team</p>
                <p className="text-foreground">Security Vulnerabilities: security@eudox.com</p>
                <p className="text-foreground">Compliance & Privacy: privacy@eudox.com</p>
                <p className="text-foreground">General Security Inquiries: info@eudox.com</p>
                <p className="text-foreground mt-4">PGP Key Fingerprint: [Your PGP Key Fingerprint]</p>
              </div>
              <p className="text-foreground leading-relaxed mt-4">
                We take all security reports seriously and will investigate promptly. For urgent security matters, please mark your communication as "URGENT - SECURITY" in the subject line to ensure immediate attention from our security team.
              </p>
            </section>

            <section className="bg-muted/30 p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-[#11142d] dark:text-white mb-4">Security Commitment</h2>
              <p className="text-foreground leading-relaxed">
                Security and privacy are not just compliance checkboxes at Eudox—they are core values that guide every decision we make. We are committed to maintaining the highest standards of data protection, continuously improving our security posture, and earning the trust of our customers through transparency and accountability. As threats evolve and new technologies emerge, we will continue to invest in security innovation and maintain our position as a trusted partner for autonomous deal sourcing in private markets.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

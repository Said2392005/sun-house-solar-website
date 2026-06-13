import type { Metadata } from 'next'
import PolicyLayout from '@/components/layout/PolicyLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | Sun House Solar',
  description: 'Privacy policy for Sun House Solar (Raje Power Trading). Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      badge="Legal"
      icon="🔒"
      lastUpdated="June 2026"
    >
      <div className="prose-policy">
        <div className="highlight-box">
          This Privacy Policy describes how <strong>Sun House Solar</strong> (operating under
          Raje Power Trading), located at C 30/46, Near Yallaling Maharaj Math, Padma Nagar,
          New Paccha Peth, Solapur – 413006, collects, uses, and safeguards your personal
          information when you use our website, contact us, or use the GreenVolt application.
        </div>

        <h2>1. Information We Collect</h2>
        <h3>1.1 Information You Provide</h3>
        <p>
          When you contact us through the website, request a quote, or use our services, we may
          collect the following personal information:
        </p>
        <ul>
          <li>Full name</li>
          <li>Mobile number and/or email address</li>
          <li>Property address or location details</li>
          <li>Solar system capacity and installation details</li>
          <li>Service history and maintenance records</li>
          <li>Payment information (processed securely via authorised payment gateways)</li>
        </ul>

        <h3>1.2 GreenVolt App Data</h3>
        <p>
          If you use the GreenVolt mobile application, we may additionally collect:
        </p>
        <ul>
          <li>Device identifier and operating system information</li>
          <li>Location data (for field engineer tracking and service scheduling)</li>
          <li>Service booking history and feedback ratings</li>
          <li>Solar system performance data (energy generation logs)</li>
          <li>Push notification preferences</li>
        </ul>

        <h3>1.3 Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect standard technical information
          such as IP address, browser type, pages visited, and time spent on pages. This data is
          used in aggregate form only and cannot identify you personally.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the personal information we collect to:</p>
        <ul>
          <li>Respond to your enquiries and provide quotes</li>
          <li>Schedule and manage solar installation and service visits</li>
          <li>Send service reminders and maintenance alerts</li>
          <li>Process payments and issue invoices</li>
          <li>Improve our products, services, and customer experience</li>
          <li>Comply with legal and regulatory obligations</li>
          <li>Send promotional offers (only with your consent)</li>
        </ul>

        <h2>3. Sharing of Information</h2>
        <p>
          We do <strong>not sell, trade, or rent</strong> your personal information to third
          parties. We may share your information in the following limited circumstances:
        </p>
        <ul>
          <li>
            <strong>Service Partners:</strong> With trusted field engineers or service contractors
            who assist in delivering our services, strictly on a need-to-know basis.
          </li>
          <li>
            <strong>Manufacturers &amp; Warranty:</strong> With solar panel or equipment
            manufacturers for warranty registration or claims processing.
          </li>
          <li>
            <strong>Legal Compliance:</strong> When required by law, court order, or government
            authority.
          </li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable technical and organisational security measures to protect your
          personal data against unauthorised access, alteration, disclosure, or destruction.
          However, no method of transmission over the Internet or electronic storage is 100%
          secure, and we cannot guarantee absolute security.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain your personal data for as long as necessary to fulfil the purposes described
          in this policy, to provide ongoing services (such as AMC), and to comply with our legal
          obligations. Customer service records are typically retained for a minimum of 3 years.
        </p>

        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data (subject to legal retention requirements)</li>
          <li>Withdraw consent for promotional communications at any time</li>
          <li>Raise a complaint regarding data handling</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at{' '}
          <a href="tel:9175084823">9175084823</a>.
        </p>

        <h2>7. Cookies</h2>
        <p>
          Our website may use essential cookies to ensure basic functionality. We do not use
          tracking cookies for advertising purposes without your explicit consent.
        </p>

        <h2>8. Children&apos;s Privacy</h2>
        <p>
          Our services are not directed to individuals under 18 years of age. We do not knowingly
          collect personal information from minors. If you believe a minor has provided us with
          personal information, please contact us immediately.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this
          page with an updated &quot;Last Updated&quot; date. We encourage you to review this policy
          periodically.
        </p>

        <h2>10. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact:</p>
        <div className="highlight-box">
          <strong>Sun House Solar – Raje Power Trading</strong><br />
          C 30/46, Near Yallaling Maharaj Math, Padma Nagar,<br />
          New Paccha Peth, Solapur – 413006<br />
          📞 <a href="tel:9175084823">9175084823</a>
        </div>
      </div>
    </PolicyLayout>
  )
}

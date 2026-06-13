import type { Metadata } from 'next'
import PolicyLayout from '@/components/layout/PolicyLayout'

export const metadata: Metadata = {
  title: 'Disclaimer | Sun House Solar',
  description: 'Legal disclaimer for Sun House Solar (Raje Power Trading). Information about website use, solar energy estimates, and liability limitations.',
}

export default function DisclaimerPage() {
  return (
    <PolicyLayout
      title="Disclaimer"
      badge="Legal"
      icon="⚖️"
      lastUpdated="June 2026"
    >
      <div className="prose-policy">
        <div className="highlight-box">
          Please read this disclaimer carefully before using the Sun House Solar website or relying
          on any information, estimates, or representations made by
          <strong> Sun House Solar (Raje Power Trading)</strong>.
        </div>

        <h2>1. Website Information</h2>
        <p>
          The information provided on this website is for general informational purposes only.
          While we strive to keep the information accurate and up to date, we make no
          representations or warranties of any kind, express or implied, about the completeness,
          accuracy, reliability, suitability, or availability of the information, products,
          services, or related graphics on the website.
        </p>
        <p>
          Any reliance you place on such information is strictly at your own risk. Product
          availability, prices, and specifications are subject to change without prior notice.
        </p>

        <h2>2. Solar Energy Estimates &amp; Performance Claims</h2>
        <div className="warning-box">
          ⚠️ All solar energy generation estimates, bill savings projections, and performance
          figures provided verbally, in quotations, or on this website are
          <strong> approximate estimates only</strong>.
        </div>
        <p>
          Actual solar energy generation and savings depend on numerous variable factors including
          but not limited to:
        </p>
        <ul>
          <li>Geographic location and roof orientation</li>
          <li>Local weather conditions, cloud cover, and seasonal variation</li>
          <li>Roof shading from trees, buildings, or other obstructions</li>
          <li>Actual electricity tariff rates charged by your DISCOM</li>
          <li>System degradation over time</li>
          <li>Net metering policy and rates applicable at time of installation</li>
          <li>Usage patterns of the property</li>
        </ul>
        <p>
          Sun House Solar does not guarantee any specific energy output, electricity bill savings,
          return on investment period, or system performance. Past performance of similar systems
          is not indicative of future results.
        </p>

        <h2>3. Product Brand &amp; Trademark Disclaimer</h2>
        <p>
          All brand names, logos, and trademarks mentioned on this website (including but not
          limited to Waaree, Adani Solar, Tata Power Solaroof, Vikram Solar, Reliance New Energy,
          Finolex, Polycab, Shreenath Enterprises, Premier Energies, Precision Pipes, and Qbits)
          are the property of their respective owners.
        </p>
        <p>
          Sun House Solar is an authorised dealer/distributor for the brands indicated as such.
          Mention of any brand on this website does not imply endorsement of Sun House Solar by
          those brands unless explicitly stated.
        </p>

        <h2>4. GreenVolt Application</h2>
        <p>
          The GreenVolt mobile application is a proprietary tool used for service management by
          Sun House Solar customers and staff. Sun House Solar is not responsible for:
        </p>
        <ul>
          <li>Disruptions in app availability due to server maintenance or technical issues</li>
          <li>Loss of data due to device failure, uninstallation, or user error</li>
          <li>Inaccuracies in solar generation data caused by faulty sensors or meters</li>
        </ul>

        <h2>5. Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites (such as Google Maps, brand
          manufacturer websites, or payment gateways). These are provided for your convenience
          only. Sun House Solar has no control over the content of those websites and accepts no
          responsibility for them or for any loss or damage that may arise from your use of them.
        </p>

        <h2>6. Government Subsidies &amp; Schemes</h2>
        <p>
          Information about government solar subsidies (such as PM Surya Ghar Yojana or MNRE
          schemes) is provided for general guidance. Subsidy availability, eligibility criteria,
          and amounts are determined solely by the relevant government authority and are subject
          to change. Sun House Solar does not guarantee approval of any subsidy application.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by applicable law, Sun House Solar and Raje Power
          Trading shall not be liable for any direct, indirect, incidental, consequential, or
          punitive damages arising out of or in connection with:
        </p>
        <ul>
          <li>Use or inability to use our website, products, or services</li>
          <li>Any errors or omissions in website content</li>
          <li>Unauthorised access to or alteration of your data</li>
          <li>Any other matter relating to our website or services</li>
        </ul>

        <h2>8. Professional Advice</h2>
        <p>
          Nothing on this website constitutes technical, financial, legal, or professional advice.
          Before making any significant investment in solar energy systems, we recommend consulting
          a qualified solar engineer and your electricity distribution company (DISCOM) to assess
          suitability for your specific property.
        </p>

        <h2>9. Changes to Disclaimer</h2>
        <p>
          Sun House Solar reserves the right to modify this disclaimer at any time. Changes will
          take effect immediately upon posting to the website. Continued use of the website after
          changes constitutes acceptance of the revised disclaimer.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For any questions or concerns regarding this disclaimer, please contact:
        </p>
        <div className="highlight-box">
          <strong>Sun House Solar – Raje Power Trading</strong><br />
          C 30/46, Near Yallaling Maharaj Math, Padma Nagar,<br />
          New Paccha Peth, Solapur – 413006<br />
          📞 <a href="tel:9175084823">9175084823</a><br />
          🕐 Mon–Sat: 9 AM – 7 PM
        </div>
      </div>
    </PolicyLayout>
  )
}

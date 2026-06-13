import type { Metadata } from 'next'
import PolicyLayout from '@/components/layout/PolicyLayout'

export const metadata: Metadata = {
  title: 'Return Policy | Sun House Solar',
  description: 'Return policy for solar panels, inverters, cables and accessories purchased from Sun House Solar (Raje Power Trading), Solapur.',
}

export default function ReturnPolicyPage() {
  return (
    <PolicyLayout
      title="Return Policy"
      badge="Legal"
      icon="↩️"
      lastUpdated="June 2026"
    >
      <div className="prose-policy">
        <div className="highlight-box">
          At <strong>Sun House Solar (Raje Power Trading)</strong>, we are committed to your
          satisfaction. Please read our return policy carefully before making a purchase. By
          purchasing from us, you agree to the terms outlined below.
        </div>

        <h2>1. Eligibility for Returns</h2>
        <p>
          Products purchased from Sun House Solar may be eligible for return under the following
          conditions:
        </p>
        <ul>
          <li>The return request is made within <strong>7 calendar days</strong> of delivery or
          purchase for most physical products.</li>
          <li>The product is in its <strong>original, unused condition</strong> with all original
          packaging, manuals, accessories, and invoice.</li>
          <li>The product has not been installed, modified, or tampered with.</li>
          <li>The product defect or damage is reported within <strong>48 hours</strong> of
          receipt if caused during transit.</li>
        </ul>

        <h2>2. Non-Returnable Items</h2>
        <p>The following items are <strong>not eligible for return</strong>:</p>
        <ul>
          <li>Solar panels and inverters that have been <strong>installed or commissioned</strong></li>
          <li>Custom-fabricated mounting structures</li>
          <li>Cables and wires that have been cut to length</li>
          <li>Earthing materials, MC4 connectors, and BOS accessories once opened from packaging</li>
          <li>Products damaged due to improper handling, installation errors, or environmental
          factors (lightning, flooding, etc.) after delivery</li>
          <li>Products with removed, tampered, or unreadable serial numbers</li>
          <li>Products purchased under special discount or clearance sale</li>
        </ul>

        <h2>3. Manufacturer Warranty vs. Return</h2>
        <div className="warning-box">
          ⚠️ Please note: Most solar products (panels, inverters) are covered by
          <strong> manufacturer warranty</strong> (not return) in case of defects discovered
          after installation. The return policy applies to pre-installation conditions only.
        </div>
        <p>
          If you discover a manufacturing defect <strong>before installation</strong>, please
          contact us immediately. For post-installation defects, you must directly contact the
          manufacturer&apos;s warranty service or we will assist you in raising the warranty claim.
        </p>

        <h2>4. How to Initiate a Return</h2>
        <p>To initiate a return request, please follow these steps:</p>
        <ol>
          <li>
            Call us at <a href="tel:9175084823"><strong>9175084823</strong></a> or visit our
            office within the eligible return period.
          </li>
          <li>
            Provide your <strong>original invoice/bill</strong>, product details, and reason for
            return.
          </li>
          <li>
            Our team will inspect the product (either in person or via photographs) and determine
            eligibility.
          </li>
          <li>
            Approved returns must be physically brought to or shipped to our office at your cost.
            We do not offer pickup service for returns unless the product was delivered by us and
            the damage was caused in transit.
          </li>
          <li>
            Once we receive and inspect the returned product, we will process an exchange or
            credit note within <strong>3–5 working days</strong>.
          </li>
        </ol>

        <h2>5. Return for Transit Damage</h2>
        <p>
          If you receive a product that was damaged during delivery, please:
        </p>
        <ul>
          <li>Do <strong>not</strong> accept the delivery if the outer packaging shows visible
          damage, or note the damage on the delivery receipt.</li>
          <li>Photograph the damaged packaging and product immediately.</li>
          <li>Report to us within <strong>48 hours</strong> of delivery.</li>
          <li>We will arrange for a replacement or full credit at no additional cost to you.</li>
        </ul>

        <h2>6. Exchange Policy</h2>
        <p>
          In eligible cases, we offer <strong>product exchange</strong> for the same or
          equivalent model. Cash refunds are governed by our{' '}
          <a href="/refund-policy">Refund Policy</a>.
        </p>

        <h2>7. Service-Related Returns</h2>
        <p>
          For disputes related to installation or service quality, please contact us directly.
          We are committed to resolving service issues promptly through revisits, corrections,
          or compensation as applicable.
        </p>

        <h2>8. Contact for Returns</h2>
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

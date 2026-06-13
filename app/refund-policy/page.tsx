import type { Metadata } from 'next'
import PolicyLayout from '@/components/layout/PolicyLayout'

export const metadata: Metadata = {
  title: 'Refund Policy | Sun House Solar',
  description: 'Refund policy for products and services from Sun House Solar (Raje Power Trading), Solapur.',
}

export default function RefundPolicyPage() {
  return (
    <PolicyLayout
      title="Refund Policy"
      badge="Legal"
      icon="💳"
      lastUpdated="June 2026"
    >
      <div className="prose-policy">
        <div className="highlight-box">
          This Refund Policy outlines the terms under which <strong>Sun House Solar
          (Raje Power Trading)</strong> processes refunds for products purchased and services
          rendered. Please read this policy carefully before placing an order or booking a service.
        </div>

        <h2>1. General Refund Principles</h2>
        <p>
          We strive to ensure complete customer satisfaction with every purchase and service.
          Refunds are processed on a case-by-case basis and are subject to the conditions outlined
          in this policy. Sun House Solar reserves the right to approve or decline refund requests
          at its sole discretion.
        </p>

        <h2>2. Refund Eligibility — Products</h2>
        <p>A refund may be issued for products in the following situations:</p>
        <ul>
          <li>
            <strong>Defective or damaged product received:</strong> Reported within 48 hours of
            delivery with supporting photographs.
          </li>
          <li>
            <strong>Wrong product delivered:</strong> Product delivered does not match the
            confirmed order specification.
          </li>
          <li>
            <strong>Product not available:</strong> If a product is out of stock after payment
            confirmation and no suitable alternative is available.
          </li>
          <li>
            <strong>Return approved:</strong> Product returned within the terms of our{' '}
            <a href="/return-policy">Return Policy</a> and passes quality inspection.
          </li>
        </ul>

        <h2>3. Non-Refundable Situations</h2>
        <div className="warning-box">
          ⚠️ Refunds will <strong>not</strong> be issued in the following cases:
        </div>
        <ul>
          <li>Products that have been installed, used, or commissioned</li>
          <li>Damage caused by improper installation by the customer or a third party</li>
          <li>Damage caused by environmental factors, power surges, or natural events</li>
          <li>Products with tampered or missing serial numbers or warranty seals</li>
          <li>Change of mind after installation has commenced</li>
          <li>Service charges for work already completed and delivered</li>
          <li>Custom-fabricated or specially ordered items</li>
          <li>Products purchased under clearance, special discount, or promotional pricing</li>
        </ul>

        <h2>4. Refund Eligibility — Services</h2>
        <p>
          For solar installation, maintenance, cleaning, and AMC services:
        </p>
        <ul>
          <li>
            <strong>Service not performed:</strong> If a service was fully paid but not performed,
            a full refund or rescheduling will be offered.
          </li>
          <li>
            <strong>Partial completion:</strong> If a service was partially completed due to our
            fault, a proportional refund may be issued after review.
          </li>
          <li>
            <strong>Customer cancellation before service:</strong> Cancellations made at least
            <strong> 24 hours before</strong> the scheduled service date are eligible for a full
            refund. Cancellations within 24 hours may attract a cancellation charge of up to 20%
            of the service fee.
          </li>
          <li>
            <strong>AMC Plans:</strong> Annual Maintenance Contracts are non-refundable once the
            first service visit has been completed. Unused services within an AMC period are not
            refundable but may be transferred to a new property owner.
          </li>
        </ul>

        <h2>5. Refund Process</h2>
        <p>To request a refund, follow these steps:</p>
        <ol>
          <li>
            Contact us at <a href="tel:9175084823"><strong>9175084823</strong></a> with your
            invoice number, reason for refund, and supporting documentation.
          </li>
          <li>
            Our team will review the request within <strong>2 working days</strong> and confirm
            eligibility.
          </li>
          <li>
            If eligible, the refund will be processed within <strong>5–7 working days</strong>
            from approval.
          </li>
        </ol>

        <h2>6. Refund Methods</h2>
        <p>Refunds are issued through the original payment method where possible:</p>
        <ul>
          <li><strong>Cash purchase:</strong> Cash refund at our office or bank transfer (NEFT/UPI)</li>
          <li><strong>UPI / Bank Transfer:</strong> Refunded to the same UPI ID or bank account</li>
          <li><strong>Cheque:</strong> Refund by account-payee cheque within 7 working days</li>
        </ul>
        <p>
          In some cases, at our discretion and with customer agreement, we may issue a
          <strong> credit note</strong> valid for 6 months instead of a cash refund.
        </p>

        <h2>7. Dispute Resolution</h2>
        <p>
          If you are not satisfied with our refund decision, you may escalate the matter by
          visiting our office in person with your invoice and all relevant documentation. We are
          committed to resolving all disputes fairly and promptly.
        </p>

        <h2>8. Contact for Refund Requests</h2>
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

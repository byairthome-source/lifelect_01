"use client";

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-12 bg-bg-light">
        <div className="container-main max-w-3xl">
          <p className="section-label mb-4">Legal</p>
          <h1 className="section-title mb-4">Privacy Policy</h1>
          <p className="section-body">
            Last updated: June 2026
          </p>
        </div>
      </section>

      <div className="divider container-main" />

      <article className="section-spacing-sm bg-bg-light">
        <div className="container-main max-w-3xl space-y-8 text-body text-novu-near-black-55 leading-relaxed">
          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">1. Information We Collect</h2>
            <p>
              When you visit lifelect.com or contact us through our website, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-novu-near-black-60 font-medium">Contact Information</strong> — name, email address, phone number, and company name when you submit a contact form or inquiry.</li>
              <li><strong className="text-novu-near-black-60 font-medium">Usage Data</strong> — IP address, browser type, pages visited, and time spent on our site, collected via standard web analytics.</li>
              <li><strong className="text-novu-near-black-60 font-medium">Communication Records</strong> — copies of correspondence when you email us or use our contact forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">2. How We Use Your Information</h2>
            <p>We use collected information for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>To respond to your inquiries and provide product information</li>
              <li>To process OEM/ODM partnership requests and wholesale pricing inquiries</li>
              <li>To improve our website and user experience</li>
              <li>To send occasional business updates (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">3. Data Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information. We may share data with:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-novu-near-black-60 font-medium">Service Providers</strong> — third-party vendors who assist with website hosting, email delivery, and analytics, bound by data processing agreements.</li>
              <li><strong className="text-novu-near-black-60 font-medium">Legal Requirements</strong> — when required by law or to protect our rights and safety.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">4. Cookies</h2>
            <p>
              We use essential cookies for website functionality and analytics cookies to understand site usage. You can manage cookie preferences through your browser settings. See our{" "}
              <a href="/cookies" className="text-novu-orange hover:underline">Cookies Policy</a> for details.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data
              against unauthorized access, alteration, disclosure, or destruction. Our website uses SSL/TLS
              encryption for all data transmission.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">6. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Data portability</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at <a href="mailto:privacy@lifelect.com" className="text-novu-orange hover:underline">privacy@lifelect.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">7. Contact Us</h2>
            <p>
              For questions about this Privacy Policy, please contact:
            </p>
            <address className="mt-3 not-italic">
              <p>Lifelect Technology Co., Ltd.</p>
              <p>Bao&apos;an District, Shenzhen, China</p>
              <p>
                Email: <a href="mailto:privacy@lifelect.com" className="text-novu-orange hover:underline">privacy@lifelect.com</a>
              </p>
            </address>
          </section>
        </div>
      </article>
    </>
  );
}

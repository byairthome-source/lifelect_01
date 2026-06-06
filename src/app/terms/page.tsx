"use client";

export default function TermsPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-12 bg-bg-light">
        <div className="container-main max-w-3xl">
          <p className="section-label mb-4">Legal</p>
          <h1 className="section-title mb-4">Terms of Service</h1>
          <p className="section-body">
            Last updated: June 2026
          </p>
        </div>
      </section>

      <div className="divider container-main" />

      <article className="section-spacing-sm bg-bg-light">
        <div className="container-main max-w-3xl space-y-8 text-body text-novu-near-black-55 leading-relaxed">
          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using lifelect.com (&quot;the Website&quot;), you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, please do not use our Website.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">2. Website Use</h2>
            <p>The Website is provided for informational and business communication purposes. You agree to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Use the Website in compliance with all applicable laws and regulations</li>
              <li>Not engage in any activity that disrupts or interferes with the Website&apos;s operation</li>
              <li>Not attempt to gain unauthorized access to any part of the Website or its systems</li>
              <li>Provide accurate and truthful information when using our contact forms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">3. Intellectual Property</h2>
            <p>
              All content on this Website — including text, graphics, logos, images, product descriptions, and
              software — is the property of Lifelect Technology Co., Ltd. or its content suppliers and is
              protected by international copyright and trademark laws.
            </p>
            <p className="mt-3">
              &quot;Lifelect&quot; and the Lifelect logo are trademarks of Lifelect Technology Co., Ltd. You may not use
              these marks without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">4. Product Information</h2>
            <p>
              Product specifications, pricing, and availability shown on this Website are for informational
              purposes and do not constitute a binding offer. All purchases are subject to separate agreements
              including sales contracts, purchase orders, or distribution agreements.
            </p>
            <p className="mt-3">
              We reserve the right to modify product specifications without prior notice as part of our
              continuous improvement process.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">5. Limitation of Liability</h2>
            <p>
              The Website and its content are provided &quot;as is&quot; without warranties of any kind, either express or
              implied. Lifelect Technology Co., Ltd. shall not be liable for any damages arising from the use
              or inability to use the Website or its content.
            </p>
            <p className="mt-3">
              This limitation applies to direct, indirect, incidental, consequential, and punitive damages,
              whether in contract, tort, or otherwise, even if advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">6. Third-Party Links</h2>
            <p>
              The Website may contain links to third-party websites. These links are provided for convenience
              only. We do not endorse or assume responsibility for the content or practices of any third-party
              sites.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">7. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the People&apos;s Republic
              of China. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of
              the courts in Shenzhen, China.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon
              posting to the Website. Your continued use of the Website after changes are posted constitutes
              acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">9. Contact</h2>
            <p>
              For questions about these Terms, please contact us at{" "}
              <a href="mailto:legal@lifelect.com" className="text-novu-orange hover:underline">legal@lifelect.com</a>.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}

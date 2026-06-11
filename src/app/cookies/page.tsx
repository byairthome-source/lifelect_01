export default function CookiesPage() {
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-12 bg-bg-light">
        <div className="container-main max-w-3xl">
          <p className="section-label mb-4">Legal</p>
          <h1 className="section-title mb-4">Cookies Policy</h1>
          <p className="section-body">
            Last updated: June 2026
          </p>
        </div>
      </section>

      <div className="divider container-main" />

      <article className="section-spacing-sm bg-bg-light">
        <div className="container-main max-w-3xl space-y-8 text-body text-novu-near-black-55 leading-relaxed">
          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They are widely used
              to make websites work efficiently and provide information to site owners.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">2. How We Use Cookies</h2>
            <p>Lifelect uses the following types of cookies:</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>
                <strong className="text-novu-near-black-60 font-medium">Essential Cookies</strong> — required for the website to function.
                These enable core functionality such as security and network management. The site cannot function
                properly without these cookies.
              </li>
              <li>
                <strong className="text-novu-near-black-60 font-medium">Analytics Cookies</strong> — help us understand how visitors
                interact with our website by collecting and reporting information anonymously. We use this data
                to improve our content and user experience.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">3. Third-Party Cookies</h2>
            <p>
              Some cookies may be set by third-party services that appear on our pages:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-novu-near-black-60 font-medium">Google Fonts</strong> — we use Google Fonts to serve the Inter typeface. Google may set cookies for font delivery and usage analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">4. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Delete all cookies from your browser</li>
              <li>Block cookies by default and allow them on a per-site basis</li>
              <li>Set your browser to clear cookies when you close it</li>
            </ul>
            <p className="mt-3">
              Note that disabling essential cookies may affect website functionality. For guidance on managing
              cookies, visit your browser&apos;s help documentation or{" "}
              <a href="https://www.allaboutcookies.org" className="text-novu-orange hover:underline" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">5. Updates to This Policy</h2>
            <p>
              We may update this Cookies Policy from time to time. Changes will be posted on this page with an
              updated date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-section-sm text-novu-near-black font-light mb-4">6. Contact</h2>
            <p>
              For questions about our use of cookies, contact us at{" "}
              <a href="mailto:privacy@lifelect.com" className="text-novu-orange hover:underline">privacy@lifelect.com</a>.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}

"use client";

import { useState } from "react";
import { globalOffices } from "@/data/offices";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formTs] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true); setError("");
    const f = e.currentTarget;
    const data = {
      fullName: (f.elements.namedItem("name") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      company: (f.elements.namedItem("company") as HTMLInputElement).value,
      phone: (f.elements.namedItem("phone") as HTMLInputElement).value,
      subject: (f.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (f.elements.namedItem("website") as HTMLInputElement).value,
      ts: (f.elements.namedItem("ts") as HTMLInputElement).value,
    };
    try {
      const res = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch { setError("Failed to send message. Please try again."); }
    finally { setSubmitting(false); }
  }
  return (
    <>
      <section className="pt-32 lg:pt-40 pb-12 bg-bg-light">
        <div className="container-main">
          <p className="section-label mb-4">Contact</p>
          <h1 className="section-title mb-4">Get In Touch</h1>
          <p className="section-body">
            Have a question about our products? Interested in wholesale pricing or OEM partnerships? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="divider container-main" />

      <section className="py-16 md:py-20 bg-bg-light">
        <div className="container-main grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-section-sm text-novu-near-black font-light mb-8">Send Us a Message</h2>
            {success ? (
              <div className="bg-green-50 rounded-2xl p-10 text-center">
                <h3 className="text-body-lg text-novu-near-black mb-2">Thank You!</h3>
                <p className="text-body-sm text-novu-near-black-55">Your message has been sent. We&apos;ll respond within 4 hours.</p>
              </div>
            ) : (
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              {error && <div className="bg-red-50 text-red-700 text-body-sm px-4 py-3 rounded-xl" role="alert">{error}</div>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Full Name *</label>
                  <input id="contact-name" name="name" type="text" required className="w-full bg-bg-light border border-novu-warm-200 px-4 py-3 text-body text-novu-near-black placeholder:text-novu-near-black-15 focus:border-novu-orange transition-colors rounded-sm min-h-[44px]" placeholder="John Smith" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Email *</label>
                  <input id="contact-email" name="email" type="email" required className="w-full bg-bg-light border border-novu-warm-200 px-4 py-3 text-body text-novu-near-black placeholder:text-novu-near-black-15 focus:border-novu-orange transition-colors rounded-sm min-h-[44px]" placeholder="john@acme.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-company" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Company</label>
                  <input id="contact-company" name="company" type="text" className="w-full bg-bg-light border border-novu-warm-200 px-4 py-3 text-body text-novu-near-black placeholder:text-novu-near-black-15 focus:border-novu-orange transition-colors rounded-sm min-h-[44px]" placeholder="Acme Corp" />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Phone</label>
                  <input id="contact-phone" name="phone" type="tel" className="w-full bg-bg-light border border-novu-warm-200 px-4 py-3 text-body text-novu-near-black placeholder:text-novu-near-black-15 focus:border-novu-orange transition-colors rounded-sm min-h-[44px]" placeholder="+1 234 567 890" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Subject</label>
                <select id="contact-subject" name="subject" className="w-full bg-bg-light border border-novu-warm-200 px-4 py-3 text-body text-novu-near-black focus:border-novu-orange transition-colors rounded-sm min-h-[44px]">
                  <option>General Inquiry</option>
                  <option>Wholesale Pricing</option>
                  <option>OEM / ODM Partnership</option>
                  <option>Distribution Opportunity</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Message *</label>
                <textarea id="contact-message" name="message" required rows={5} className="w-full bg-bg-light border border-novu-warm-200 px-4 py-3 text-body text-novu-near-black placeholder:text-novu-near-black-15 focus:border-novu-orange transition-colors resize-none rounded-sm" placeholder="Tell us about your requirements..." />
              </div>
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
              <input type="hidden" name="ts" value={formTs} />
              <button type="submit" disabled={submitting} className="btn-primary">{submitting ? "Sending..." : "Send Message"}</button>
            </form>
            )}
          </div>

          <div>
            <h2 className="text-section-sm text-novu-near-black font-light mb-8">Contact Info</h2>
            <div className="space-y-8">
              {[
                { label: "Email", value: "info@lifelect.com" },
                { label: "WhatsApp", value: "+86-133-6803-9556" },
                { label: "Working Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM (GMT+8)" },
              ].map((item) => (
                <div key={item.label} className="border-t border-novu-warm-100 pt-5">
                  <h3 className="text-label-sm text-novu-near-black-55 uppercase tracking-[0.1em] mb-2">{item.label}</h3>
                  <p className="text-body text-novu-near-black-60">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider container-main" />

      <section className="py-16 md:py-20 bg-novu-warm-50">
        <div className="container-main">
          <h2 className="text-section-md text-novu-near-black font-light mb-12">Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {globalOffices.map((office) => (
              <div key={office.city} className="bg-white rounded-2xl p-7 border border-novu-warm-100 hover:border-novu-warm-200 hover:shadow-card-float hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-novu-orange" />
                  <h3 className="text-body-lg text-novu-near-black">{office.city}</h3>
                </div>
                <p className="text-label-sm text-novu-orange uppercase tracking-[0.1em] mb-4">{office.role}</p>
                <div className="space-y-2 text-body-sm text-novu-near-black-55">
                  <p>{office.address}</p>
                  <p>{office.phone}</p>
                  <p>{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

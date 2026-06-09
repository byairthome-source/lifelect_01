"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function QuickQuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formTs] = useState(() => Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const f = e.currentTarget;
    const body = {
      fullName: (f.elements.namedItem("name") as HTMLInputElement).value,
      company: (f.elements.namedItem("company") as HTMLInputElement).value,
      email: (f.elements.namedItem("email") as HTMLInputElement).value,
      phone: (f.elements.namedItem("whatsapp") as HTMLInputElement).value,
      subject: "Quick Quote Request",
      message: (f.elements.namedItem("requirement") as HTMLTextAreaElement).value,
      website: (f.elements.namedItem("website") as HTMLInputElement).value,
      ts: (f.elements.namedItem("ts") as HTMLInputElement).value,
    };
    try {
      const res = await fetch("/api/inquiries", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
      toast.success("Quote request sent! We'll respond within 4 hours.");
    } catch {
      toast.error("Failed to send. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputClass = "w-full bg-white border border-novu-warm-200 rounded-sm px-4 py-3 text-body-sm text-novu-near-black placeholder:text-novu-near-black-15 focus:border-novu-orange transition-colors min-h-[44px]";
  const labelClass = "block text-label-sm text-novu-near-black-55 mb-1.5 uppercase tracking-[0.1em]";

  if (success) {
    return (
      <div className="bg-green-50 rounded-2xl p-10 text-center">
        <h3 className="text-body-lg text-novu-near-black mb-2">Thank You!</h3>
        <p className="text-body-sm text-novu-near-black-55">Your request has been received. Our sales team will respond within 4 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qq-name" className={labelClass}>Name *</label>
          <input id="qq-name" name="name" type="text" required className={inputClass} placeholder="John Smith" />
        </div>
        <div>
          <label htmlFor="qq-company" className={labelClass}>Company Name *</label>
          <input id="qq-company" name="company" type="text" required className={inputClass} placeholder="Acme Corp" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qq-email" className={labelClass}>Email *</label>
          <input id="qq-email" name="email" type="email" required className={inputClass} placeholder="john@acme.com" />
        </div>
        <div>
          <label htmlFor="qq-whatsapp" className={labelClass}>WhatsApp *</label>
          <input id="qq-whatsapp" name="whatsapp" type="tel" required className={inputClass} placeholder="+1 234 567 890" />
        </div>
      </div>
      <div>
        <label htmlFor="qq-requirement" className={labelClass}>Product Requirement</label>
        <textarea id="qq-requirement" name="requirement" rows={3} className={inputClass} placeholder="Tell us about your needs — product type, quantity, target market..." />
      </div>
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="ts" value={formTs} />
      <button type="submit" disabled={submitting} className="btn-primary w-full justify-center py-3.5">
        {submitting ? "Sending..." : "Send Your Requirement →"}
      </button>
    </form>
  );
}

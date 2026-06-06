"use client";

import { useState, useRef } from "react";
import { validateInquiryForm, type ValidationErrors } from "@/lib/validation";

interface InquiryModalProps {
  open: boolean;
  productName?: string;
  productId?: string;
  onClose: () => void;
}

export default function InquiryModal({ open, productName, productId, onClose }: InquiryModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<ValidationErrors>({});
  const [formTs] = useState(() => Date.now());
  const formRef = useRef<HTMLFormElement>(null);

  if (!open) return null;

  function validate(): boolean {
    const form = formRef.current!;
    const data = {
      fullName: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
    };
    const errors = validateInquiryForm(data);
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function clearFieldError(field: string) {
    setFieldErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (!validate()) return;

    setSubmitting(true);
    const form = e.currentTarget;
    const data = {
      fullName: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      subject: productName ? `Product Inquiry: ${productName}` : "General Inquiry",
      productId: productId || undefined,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      ts: (form.elements.namedItem("ts") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess(true);
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
    >
      <div className="absolute inset-0 bg-bg-light/80 backdrop-blur-sm" aria-hidden="true" />
      <div
        className="relative bg-white border border-novu-warm-200 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl shadow-glass-inset-light"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-7 border-b border-novu-warm-100">
          <div>
            <h2 className="text-body-lg text-novu-near-black">Request a Quote</h2>
            {productName && <p className="text-body-sm text-novu-orange mt-1">{productName}</p>}
          </div>
          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-novu-near-black-55 hover:text-novu-near-black transition-colors"
            aria-label="Close dialog"
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M4 4l10 10M4 14L14 4" />
            </svg>
          </button>
        </div>

        {success ? (
          <div className="p-7 text-center">
            <svg className="w-12 h-12 mx-auto mb-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="text-body-lg text-novu-near-black mb-2">Thank You!</h3>
            <p className="text-body-sm text-novu-near-black-55">We&apos;ll get back to you within 4 hours.</p>
          </div>
        ) : (
          <form ref={formRef} className="p-7 space-y-5" onSubmit={handleSubmit}>
            {error && <div className="bg-red-50 text-red-700 text-body-sm px-4 py-3 rounded-xl">{error}</div>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="inq-name" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Full Name *</label>
                <input id="inq-name" name="name" type="text" required className={`w-full bg-bg-light border px-4 py-3 text-body text-novu-near-black focus:outline-none focus:border-novu-orange/50 transition-colors min-h-[44px] rounded-sm ${fieldErrors.fullName ? "border-red-400" : "border-novu-warm-200"}`} placeholder="John Smith" onBlur={validate} onChange={() => clearFieldError("fullName")} />
                {fieldErrors.fullName && <p className="text-red-500 text-label-sm mt-1">{fieldErrors.fullName}</p>}
              </div>
              <div>
                <label htmlFor="inq-company" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Company *</label>
                <input id="inq-company" name="company" type="text" required className="w-full bg-bg-light border border-novu-warm-200 px-4 py-3 text-body text-novu-near-black focus:outline-none focus:border-novu-orange/50 transition-colors min-h-[44px] rounded-sm" placeholder="Acme Corp" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="inq-email" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Email *</label>
                <input id="inq-email" name="email" type="email" required className={`w-full bg-bg-light border px-4 py-3 text-body text-novu-near-black focus:outline-none focus:border-novu-orange/50 transition-colors min-h-[44px] rounded-sm ${fieldErrors.email ? "border-red-400" : "border-novu-warm-200"}`} placeholder="john@acme.com" onBlur={validate} onChange={() => clearFieldError("email")} />
                {fieldErrors.email && <p className="text-red-500 text-label-sm mt-1">{fieldErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="inq-phone" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Phone</label>
                <input id="inq-phone" name="phone" type="tel" className={`w-full bg-bg-light border px-4 py-3 text-body text-novu-near-black focus:outline-none focus:border-novu-orange/50 transition-colors min-h-[44px] rounded-sm ${fieldErrors.phone ? "border-red-400" : "border-novu-warm-200"}`} placeholder="+1 234 567 890" onBlur={validate} onChange={() => clearFieldError("phone")} />
                {fieldErrors.phone && <p className="text-red-500 text-label-sm mt-1">{fieldErrors.phone}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="inq-message" className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Message *</label>
              <textarea id="inq-message" name="message" required rows={4} className={`w-full bg-bg-light border px-4 py-3 text-body text-novu-near-black focus:outline-none focus:border-novu-orange/50 transition-colors resize-none min-h-[44px] rounded-sm ${fieldErrors.message ? "border-red-400" : "border-novu-warm-200"}`} placeholder="Tell us about your requirements..." onBlur={validate} onChange={() => clearFieldError("message")} />
              {fieldErrors.message && <p className="text-red-500 text-label-sm mt-1">{fieldErrors.message}</p>}
            </div>
            <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <input type="hidden" name="ts" value={formTs} />
            <button type="submit" disabled={submitting} className="btn-primary w-full py-3 mt-2 justify-center">
              {submitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

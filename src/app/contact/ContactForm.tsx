"use client";

import { useState } from "react";

const serviceOptions = [
  "Strategic IT Consultation",
  "AI-Driven Transformation",
  "Web & Mobile App Development",
  "Startup Acceleration",
  "Growth Engineering",
  "Enterprise Platforms",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with real API call
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const inputClass =
    "w-full bg-white border border-card-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/50 outline-none transition-all duration-300 focus:border-accent-cyan/50 focus:ring-1 focus:ring-accent-cyan/20 focus:bg-card-bg";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & Email row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
            Full Name <span className="text-accent-cyan">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
            Email <span className="text-accent-cyan">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Phone & Company row */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+880 1XXX-XXXXXX"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
            Company
          </label>
          <input
            type="text"
            name="company"
            placeholder="Your Company"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      {/* Service select */}
      <div>
        <label className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
          Service Interested In
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`${inputClass} appearance-none cursor-pointer`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%238a8a9a' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right 16px center",
          }}
        >
          <option value="" className="bg-white">
            Select a service...
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-white">
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-medium text-muted mb-2 tracking-wide uppercase">
          Message <span className="text-accent-cyan">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project, timeline, and goals..."
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-gradient w-full text-center text-sm !py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="w-4 h-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                className="opacity-25"
              />
              <path
                d="M4 12a8 8 0 018-8"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Sending...
          </span>
        ) : status === "sent" ? (
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Message Sent!
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}

"use client"

import { useState } from "react"

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "#080b14",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 8,
  padding: "14px 16px",
  color: "#ffffff",
  fontSize: 16,
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s",
}

export default function ContactForm() {
  const [focused, setFocused] = useState<string | null>(null)

  const getBorder = (field: string) =>
    focused === field ? "1px solid #00c6d7" : "1px solid rgba(255,255,255,0.12)"

  return (
    <div className="w-full bg-[#0f1526] border border-white/10 rounded-[14px] p-10">
      <h2
        className="font-serif font-extrabold text-white mb-8"
        style={{ fontSize: 22, letterSpacing: "-0.03em" }}
      >
        Send us a message
      </h2>

      <form
        action="mailto:admin@kawie-digital.com"
        method="post"
        encType="text/plain"
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-sm font-medium text-[#8892a8]">Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
            style={{ ...inputBase, border: getBorder("name") }}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-sm font-medium text-[#8892a8]">Company Name</label>
          <input
            type="text"
            name="company"
            placeholder="Your company name"
            required
            style={{ ...inputBase, border: getBorder("company") }}
            onFocus={() => setFocused("company")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-sm font-medium text-[#8892a8]">Industry</label>
          <select
            name="industry"
            required
            defaultValue=""
            className="text-[#8892a8]"
            style={{
              ...inputBase,
              border: getBorder("industry"),
              appearance: "none",
              cursor: "pointer",
            }}
            onFocus={() => setFocused("industry")}
            onBlur={() => setFocused(null)}
            onChange={(e) => {
              e.target.style.color = "#ffffff"
            }}
          >
            <option value="" disabled>
              Select your industry
            </option>
            <option value="Oil & Gas" className="bg-[#0f1526]">
              Oil &amp; Gas
            </option>
            <option value="Construction" className="bg-[#0f1526]">
              Construction
            </option>
            <option value="Offshore & Shipping" className="bg-[#0f1526]">
              Offshore &amp; Shipping
            </option>
            <option value="Workforce Operations" className="bg-[#0f1526]">
              Workforce Operations
            </option>
            <option value="SME" className="bg-[#0f1526]">
              SME
            </option>
            <option value="Other" className="bg-[#0f1526]">
              Other
            </option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-sm font-medium text-[#8892a8]">Message</label>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell us about your enquiry..."
            required
            style={{ ...inputBase, border: getBorder("message"), resize: "vertical" }}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <button
          type="submit"
          className="w-full font-sans font-medium text-base transition-all duration-200 mt-1"
          style={{
            background: "#00c6d7",
            color: "#080b14",
            borderRadius: 8,
            padding: "15px 24px",
            border: "none",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(-2px)"
            el.style.opacity = "0.88"
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLElement
            el.style.transform = "translateY(0)"
            el.style.opacity = "1"
          }}
        >
          Send Message &rarr;
        </button>

        <p className="font-sans text-sm text-[#8892a8] text-center">
          &#10003; We&apos;ll reply within 24 hours to{" "}
          <span className="text-[#c8d0e0]">admin@kawie-digital.com</span>
        </p>
      </form>
    </div>
  )
}

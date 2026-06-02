"use client"

import { useState } from "react"
import { faqs } from "@/data/faqs"

export default function Faq() {
  // First item open by default
  const [openId, setOpenId] = useState<number | null>(1)

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8" style={{ color: "#444", letterSpacing: "0.8px" }}>
          Frequently asked questions
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={faq.id !== faqs[faqs.length - 1].id ? "border-b" : ""}
                style={{ borderColor: "rgb(204, 204, 204)" }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-0"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base font-medium pr-6 leading-snug"
                    style={{ color: "#444", fontSize: 18 }}
                  >
                    {faq.question}
                  </span>
                  {/* Chevron — rotates 180° when open */}
                  <span
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill={isOpen ? "#444" : "#252525"}
                    >
                      <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
                    </svg>
                  </span>
                </button>

                {/* Answer — collapsible */}
                {isOpen && (
                  <div className="pb-5 pr-10">
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#444", fontSize: 16 }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

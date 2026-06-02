"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cities } from "@/data/cities"
import BusSvg from "./BusSvg"

const cityNames = cities.map((c) => c.displayName)
const DISPLAY_DURATION = 2600 // ms each city is shown
const ANIM_DURATION    = 430  // ms for the slide animation

// ── Hero component ─────────────────────────────────────────────────────────

export default function Hero() {
  const [idx,   setIdx]  = useState(0)
  const [phase, setPhase] = useState<"idle" | "animating">("idle")

  // Next city index — computed at render, used for the incoming ticker text
  const nextIdx = (idx + 1) % cityNames.length

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase("animating")
      setTimeout(() => {
        setIdx((i) => (i + 1) % cityNames.length)
        setPhase("idle")
      }, ANIM_DURATION)
    }, DISPLAY_DURATION)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #F8F1FF 0%, #ffffff 100%)",
        minHeight: 340,
      }}
    >
      {/* Animated background — cityscape + bus */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Scrolling cityscape — two tiles side-by-side, translateX(-50%) = one tile width */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            display: "flex",
            animation: "scrollCityscape 32s linear infinite",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/buildings.svg" alt="" height={180} style={{ display: "block", flexShrink: 0 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/buildings.svg" alt="" height={180} style={{ display: "block", flexShrink: 0 }} />
        </div>

        {/* Hopping bus — inlined SVG to preserve mix-blend-mode */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "7%",
            animation: "busHop 2.4s ease-in-out infinite",
            transformOrigin: "bottom center",
          }}
        >
          <BusSvg width={260} height={131} />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          FOREGROUND CONTENT
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-14">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/logo.svg"
            alt="Headout × Niyo"
            width={296}
            height={65}
            priority
          />
        </div>

        {/* ── Headline ─────────────────────────────────────────────────── */}
        <h1
          className="leading-tight mb-4"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 48,
            fontWeight: 500,
            color: "#444444",
            maxWidth: 660,
          }}
        >
          Hop-on and hop-off across{" "}
          <span
            style={{
              display: "inline-block",
              position: "relative",
              overflow: "hidden",
              verticalAlign: "bottom",
              height: "1.15em",
              minWidth: "200px",
              color: "#8000FF",
              fontWeight: 500,
            }}
          >
            {/* Outgoing */}
            <span
              key={`out-${idx}-${phase}`}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                animation:
                  phase === "animating"
                    ? `slideOutUp ${ANIM_DURATION}ms ease-in forwards`
                    : "none",
              }}
            >
              {cityNames[idx]}
            </span>

            {/* Incoming */}
            {phase === "animating" && (
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  animation: `slideInFromBottom ${ANIM_DURATION}ms ease-out forwards`,
                }}
              >
                {cityNames[nextIdx]}
              </span>
            )}

            {/* Invisible spacer */}
            <span aria-hidden="true" style={{ visibility: "hidden", display: "block" }}>
              {cityNames[idx]}
            </span>
          </span>
          {" "}and get rewarded !
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg" style={{ color: "#555" }}>
          Book now and get 15% off using your Niyo Global Card
        </p>
      </div>
    </section>
  )
}

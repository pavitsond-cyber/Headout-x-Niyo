"use client"

import { useState } from "react"
import Image from "next/image"
import type { City } from "@/types"

interface CityCircleProps {
  city: City
  isSelected: boolean
  onClick: () => void
}

function CityCircle({ city, isSelected, onClick }: CityCircleProps) {
  const [isHovered, setIsHovered] = useState(false)
  const active = isSelected || isHovered

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col items-center cursor-pointer select-none flex-shrink-0"
      style={{
        paddingTop: 28,
        paddingBottom: 24,
        borderBottom: isSelected ? "3px solid #8000ff" : "3px solid transparent",
        background: "transparent",
        border: "none",
        outline: "none",
      }}
      aria-pressed={isSelected}
    >
      {/* Circle */}
      <div
        className="relative overflow-hidden flex-shrink-0"
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          border: isSelected ? "2.5px solid white" : "4px solid transparent",
          boxShadow: isSelected ? "0 0 0 2.5px #8000ff" : "",
          transition: "border 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        <Image
          src={`${city.imageUrl}?w=300`}
          alt={city.displayName}
          fill
          sizes="100px"
          className="object-cover"
          style={{ transition: "opacity 0.3s ease" }}
        />
        {/* Purple tint overlay */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "rgba(80, 0, 128, 0.5)",
            opacity: active ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
        {/* White checkmark */}
        {isSelected && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M28 6.6665L11.5 23.9998L4 16.121"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>

      {/* City name */}
      <span
        className="mt-3 font-bold text-base text-center"
        style={{
          color: active ? "#8000ff" : "#444444",
          transition: "color 0.3s ease",
        }}
      >
        {city.displayName}
      </span>
    </button>
  )
}

interface CityCarouselProps {
  cities: City[]
  selectedIndex: number
  onSelect: (index: number) => void
}

export default function CityCarousel({ cities, selectedIndex, onSelect }: CityCarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const cityWidth = 120
  const gap = 32
  const visibleWidth = 1200
  const containerWidth = cities.length * (cityWidth + gap) - gap

  const canScrollLeft = scrollPosition > 0
  const canScrollRight = scrollPosition < containerWidth - visibleWidth - gap

  const handleScroll = (direction: "left" | "right") => {
    const maxScroll = containerWidth - visibleWidth - gap
    setScrollPosition((prev) => {
      if (direction === "left") return Math.max(prev - (cityWidth + gap), 0)
      return Math.min(prev + (cityWidth + gap), maxScroll)
    })
  }

  const chevronBtn =
    "absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center cursor-pointer border-0 transition-opacity"

  return (
    <div className="relative w-full max-w-6xl mx-auto px-6">
      {/* Left button */}
      {canScrollLeft && (
        <button
          onClick={() => handleScroll("left")}
          className={chevronBtn}
          style={{ left: 8 }}
          aria-label="Scroll left"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M11.334 1.333L4.667 8l6.667 6.667"
              stroke="#444"
              strokeWidth="1.47"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Right button */}
      {canScrollRight && (
        <button
          onClick={() => handleScroll("right")}
          className={chevronBtn}
          style={{ right: 8 }}
          aria-label="Scroll right"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4.667 1.333L11.334 8l-6.667 6.667"
              stroke="#444"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}

      {/* Left fade */}
      {canScrollLeft && (
        <div
          className="absolute top-0 left-0 w-24 h-full z-[5] pointer-events-none"
          style={{ background: "linear-gradient(to right, #F8F6FF, transparent)" }}
        />
      )}

      {/* Right fade */}
      {canScrollRight && (
        <div
          className="absolute top-0 right-0 w-24 h-full z-[5] pointer-events-none"
          style={{ background: "linear-gradient(to left, #F8F6FF, transparent)" }}
        />
      )}

      {/* Scroll container */}
      <div className="overflow-hidden">
        <div
          className="flex"
          style={{
            gap: gap,
            transform: `translateX(-${scrollPosition}px)`,
            transition: "transform 0.3s ease",
          }}
        >
          {cities.map((city, index) => (
            <CityCircle
              key={city.name}
              city={city}
              isSelected={selectedIndex === index}
              onClick={() => onSelect(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

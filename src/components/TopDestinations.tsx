"use client"

import { useState } from "react"
import { cities, allTgids } from "@/data/cities"
import { LISTING_URL } from "@/lib/constants"
import type { Product } from "@/types"
import CityCarousel from "./CityCarousel"
import ProductGrid from "./ProductGrid"

interface TopDestinationsProps {
  allProducts: Product[]
}

export default function TopDestinations({ allProducts }: TopDestinationsProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const handleSelect = (index: number) => {
    setSelectedIndex((prev) => (prev === index ? -1 : index))
  }

  const activeTgids =
    selectedIndex === -1 ? allTgids : cities[selectedIndex].tgids

  const activeTgidSet = new Set(activeTgids)
  const filteredProducts = allProducts.filter((p) => activeTgidSet.has(p.tgid))

  return (
    <section className="w-full">
      {/* Header row + city carousel share the tinted background */}
      <div style={{ backgroundColor: "#F8F6FF" }} className="w-full pb-4">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-2 flex items-center justify-between">
          <h2 className="text-2xl font-bold" style={{ color: "#2d2d2d" }}>
            Top destinations
          </h2>
          <a
            href={LISTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold underline"
            style={{ color: "#8000FF" }}
          >
            See all
          </a>
        </div>

        {/* City carousel */}
        <CityCarousel
          cities={cities}
          selectedIndex={selectedIndex}
          onSelect={handleSelect}
        />
      </div>

      {/* Product grid — white background */}
      <div style={{ backgroundColor: "#ffffff" }} className="pb-10">
        <ProductGrid products={filteredProducts} />
      </div>
    </section>
  )
}

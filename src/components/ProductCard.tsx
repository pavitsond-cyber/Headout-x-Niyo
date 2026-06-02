import Image from "next/image"
import type { Product } from "@/types"

function abbreviateCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return String(n)
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.pdpUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      {/* Image — rounded corners only, no card bg or shadow */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "16/9", borderRadius: "4px" }}
      >
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text sits directly on page background */}
      <div className="pt-3">
        {/* City (left) · Rating (right) */}
        <div className="flex items-center justify-between mb-2">
          <span
            style={{ fontFamily: "var(--font-text)", fontSize: "12px", color: "#888888" }}
          >
            {product.city}
          </span>
          {product.reviewCount > 0 && (
            <span className="text-sm font-semibold" style={{ fontFamily: "var(--font-text)" }}>
              <span style={{ color: "#E91E8C" }}>
                {product.rating.toFixed(1)}&nbsp;★
              </span>
              <span style={{ color: "#888888" }}>
                &nbsp;({abbreviateCount(product.reviewCount)})
              </span>
            </span>
          )}
        </div>

        {/* Title — Halyard Display Bold */}
        <h3
          className="leading-snug"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "17px",
            fontWeight: 500,
            color: "#444444",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "14px",
          }}
        >
          {product.title}
        </h3>

        {/* Price — Halyard Text Bold, no "from" label */}
        <p
          style={{ fontFamily: "var(--font-text)", fontSize: "17px", fontWeight: 500, color: "#666666" }}
        >
          ₹{product.price.toLocaleString("en-IN")}
          {product.originalPrice && (
            <span className="ml-2 text-sm font-normal text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </p>
      </div>
    </a>
  )
}

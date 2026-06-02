import Image from "next/image"
import type { Review } from "@/types"

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="18" height="16" viewBox="0 0 20 18" fill="none">
          <path
            d="M10 0.833344L12.575 6.10001L18.3333 6.92501L14.1667 11.0083L15.15 16.7417L10 13.9917L4.85001 16.7417L5.83334 11.0083L1.66667 6.92501L7.42501 6.10001L10 0.833344Z"
            fill="#E91E8C"
            stroke="#E91E8C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div
      className="rounded-lg p-5 flex flex-col gap-4 border"
      style={{
        background: "linear-gradient(rgb(254, 249, 255) 0%, rgb(248, 245, 255) 100%)",
        borderColor: "rgb(240, 240, 240)",
      }}
    >
      {/* Header: user + stars */}
      <div className="flex items-start justify-between gap-3">
        {/* Avatar + user info */}
        <div className="flex items-center gap-3">
          <div
            className="relative flex-shrink-0 rounded-full overflow-hidden"
            style={{ width: 44, height: 44 }}
          >
            <Image
              src={review.avatarUrl}
              alt={review.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-base" style={{ color: "#444", letterSpacing: "0.8px" }}>
              {review.name}
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-base">{review.countryFlag}</span>
              <span className="text-sm" style={{ color: "#666" }}>
                {review.country}
              </span>
            </div>
          </div>
        </div>
        <StarRating count={review.rating} />
      </div>

      {/* Review text */}
      <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
        {review.reviewText}
      </p>

      {/* Separator */}
      <div className="w-full h-px" style={{ backgroundColor: "rgb(168, 173, 184)" }} />

      {/* Experience link */}
      <a
        href={review.experienceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs underline"
        style={{ color: "#888" }}
      >
        {review.experienceName}
      </a>
    </div>
  )
}

import { reviews } from "@/data/reviews"
import ReviewCard from "./ReviewCard"

export default function Reviews() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-8" style={{ color: "#2d2d2d", letterSpacing: "0.8px" }}>
          Hop on, hop off, and hear what others think!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

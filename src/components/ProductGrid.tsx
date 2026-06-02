import type { Product } from "@/types"
import ProductCard from "./ProductCard"

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12 text-center text-gray-400">
        No products found for this city yet.
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.tgid} product={product} />
        ))}
      </div>
    </div>
  )
}

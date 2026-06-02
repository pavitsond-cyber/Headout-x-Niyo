import Hero from "@/components/Hero"
import TopDestinations from "@/components/TopDestinations"
import Reviews from "@/components/Reviews"
import Faq from "@/components/Faq"
import Footer from "@/components/Footer"
import { fetchAllProducts } from "@/lib/api"

export default async function Home() {
  const allProducts = await fetchAllProducts()

  return (
    <main className="w-full">
      {/* 1. Hero / first fold */}
      <Hero />

      {/* 2 & 3. Top destinations + city carousel + product grid */}
      <TopDestinations allProducts={allProducts} />

      {/* 4. Reviews */}
      <Reviews />

      {/* 5. FAQ accordion */}
      <Faq />

      {/* 6. Footer */}
      <Footer />
    </main>
  )
}

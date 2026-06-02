import { allTgids, cities } from "@/data/cities"
import type { Product } from "@/types"

const HEADOUT_BASE = "https://www.headout.com"
const API_URL = "https://api.headout.com/api/v6/tour-groups/"

interface ApiListingPrice {
  currencyCode: string
  originalPrice: number
  finalPrice: number
  minimumPayablePrice: number
  type: string
  bestDiscount: number
}

interface ApiTourGroup {
  id: number
  name: string
  cityDisplayName: string
  imageUrl: string
  averageRating: number
  ratingCount: number
  listingPrice: ApiListingPrice | null
  tourGroupUrl: string
}

interface ApiResponse {
  tourGroups: ApiTourGroup[]
}

export async function fetchAllProducts(): Promise<Product[]> {
  // Union of the default "all" list and every city's own TGIDs so that
  // city-level filtering always has the right products available client-side.
  const tgidSet = new Set(allTgids)
  for (const city of cities) {
    for (const id of city.tgids) {
      tgidSet.add(id)
    }
  }
  const ids = [...tgidSet].join(",")
  const url = `${API_URL}?currency=INR&ids[]=${ids}`

  const res = await fetch(url, { next: { revalidate: 3600 } })
  if (!res.ok) throw new Error(`Headout API error: ${res.status}`)

  const data: ApiResponse = await res.json()

  return data.tourGroups
    .filter((tg): tg is ApiTourGroup & { listingPrice: ApiListingPrice } =>
      tg.listingPrice !== null
    )
    .map((tg) => ({
      tgid: tg.id,
      title: tg.name,
      city: tg.cityDisplayName,
      imageUrl: tg.imageUrl,
      rating: tg.averageRating,
      reviewCount: tg.ratingCount,
      price: tg.listingPrice.finalPrice,
      originalPrice:
        tg.listingPrice.originalPrice !== tg.listingPrice.finalPrice
          ? tg.listingPrice.originalPrice
          : undefined,
      pdpUrl: `${HEADOUT_BASE}${tg.tourGroupUrl}`,
    }))
}

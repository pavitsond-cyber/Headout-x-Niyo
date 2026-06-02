export interface Product {
  tgid: number
  title: string
  city: string
  imageUrl: string
  rating: number
  reviewCount: number
  price: number
  originalPrice?: number
  pdpUrl: string
}

export interface City {
  name: string
  displayName: string
  imageUrl: string
  tgids: number[]
}

export interface Review {
  id: number
  name: string
  country: string
  countryFlag: string
  avatarUrl: string
  rating: number
  reviewText: string
  experienceName: string
  experienceUrl: string
}

export interface Faq {
  id: number
  question: string
  answer: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

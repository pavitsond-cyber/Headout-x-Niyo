import type { Review } from "@/types"

// Content extracted from Ref/Testimonial.html
export const reviews: Review[] = [
  {
    id: 1,
    name: "Nassila",
    country: "Spain",
    // Spain flag emoji used as fallback; real flag SVG from framerusercontent used in component
    countryFlag: "🇪🇸",
    avatarUrl: "https://framerusercontent.com/images/LrNgWn3Xw8MarMPRoetaF2BYvs.svg",
    rating: 5,
    reviewText:
      "Great experience. On board you'll have audio to follow a detailed cultural and artistic urban experience of the city.",
    experienceName: "Barcelona City Tour",
    experienceUrl:
      "https://www.headout.com/hop-on-hop-off-tours/barcelona-city-tour-1-or-2-day-hop-on-hop-off-tour-e-3436/",
  },
  {
    id: 2,
    name: "Nadine",
    country: "France",
    countryFlag: "🇫🇷",
    avatarUrl: "https://framerusercontent.com/images/Ht1rrpTlBrzvqAO8GQ4DWqn3g8M.svg",
    rating: 5,
    reviewText:
      "Bus stops were easy to find, no long waiting time for a bus (5 Min. max). Overall great hopp on/off experience.",
    experienceName: "Hour Hop-On Hop-Off Tour of Paris",
    experienceUrl:
      "https://www.headout.com/tootbus-paris/tootbus-12-day-hop-on-hop-off-sightseeing-bus-tour-e-2895/",
  },
  {
    id: 3,
    name: "Mark",
    country: "Italy",
    countryFlag: "🇮🇹",
    avatarUrl: "https://framerusercontent.com/images/mSzNlY1vYhvDd2HsUj9skgTxEc.svg",
    rating: 5,
    reviewText:
      "We loved the experience, the tour covers the best tourist attractions in Rome. The support team was amazing. Thank you.",
    experienceName: "Hour Hop-On Hop-Off Rome Tour",
    experienceUrl:
      "https://www.headout.com/hop-on-hop-off-tours/green-line-3-stops-1-day-24-hr-48-hr-72-hr-hop-on-hop-off-tour-of-rome-e-15898/",
  },
]

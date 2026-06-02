import type { FooterColumn } from "@/types"

// Extracted from Ref/Footer.html
export const footerColumns: FooterColumn[] = [
  {
    title: "GET HELP 24/7",
    links: [
      { label: "Help center", href: "https://hub-help.headout.com/hc/en-us" },
      {
        label: "Chat with us",
        href: "https://static.zdassets.com/web_widget/latest/liveChat.html?v=10#key=headout.zendesk.com",
      },
      { label: "Call us", href: "tel:13478970100" },
      { label: "support@headout.com", href: "mailto:support@headout.com" },
    ],
  },
  {
    title: "CITIES",
    links: [
      { label: "New York", href: "https://www.headout.com/things-to-do-city-new-york/" },
      { label: "Las Vegas", href: "https://www.headout.com/things-to-do-city-las-vegas/" },
      { label: "Rome", href: "https://www.headout.com/things-to-do-city-rome/" },
      { label: "Paris", href: "https://www.headout.com/things-to-do-city-paris/" },
      { label: "London", href: "https://www.headout.com/things-to-do-city-london/" },
      { label: "Dubai", href: "https://www.headout.com/things-to-do-city-dubai/" },
      { label: "Barcelona", href: "https://www.headout.com/things-to-do-city-barcelona/" },
      { label: "+192 more", href: "https://www.headout.com/cities/" },
    ],
  },
  {
    title: "HEADOUT",
    links: [
      { label: "Our story", href: "https://www.headout.com/about/" },
      { label: "Careers", href: "https://careers.headout.com/" },
      { label: "Newsroom", href: "https://www.headout.com/newsroom/" },
      { label: "Company blog", href: "https://www.headout.com/blog/" },
      { label: "Travel blog", href: "https://www.headout.com/blog/travel/" },
      { label: "Reviews", href: "https://www.headout.com/reviews/" },
    ],
  },
  {
    title: "PARTNERS",
    links: [
      { label: "Experience providers", href: "https://www.headout.com/list-your-experience/" },
      { label: "Affiliates", href: "https://www.headout.com/affiliates/" },
      { label: "Creators & influencers", href: "https://www.headout.com/creators/" },
    ],
  },
]

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/headout/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/headout/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/headout", icon: "youtube" },
  { label: "Facebook", href: "https://www.facebook.com/headout/", icon: "facebook" },
  { label: "X / Twitter", href: "https://twitter.com/headout", icon: "twitter" },
]

export const paymentIcons = [
  "VISA", "Mastercard", "Amex", "PayPal", "Maestro", "Apple Pay",
  "Google Pay", "Discover", "Diners", "JCB", "FPX", "Revolut",
]

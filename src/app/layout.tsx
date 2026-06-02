import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const halyardDisplay = localFont({
  src: [
    { path: "../../public/fonts/halyard-display/HalyardDisplay-Regular.otf",  weight: "400", style: "normal" },
    { path: "../../public/fonts/halyard-display/HalyardDisplay-Medium.otf",   weight: "500", style: "normal" },
    { path: "../../public/fonts/halyard-display/HalyardDisplay-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/halyard-display/HalyardDisplay-Bold.otf",     weight: "700", style: "normal" },
  ],
  variable: "--font-halyard-display",
  display: "swap",
})

const halyardText = localFont({
  src: [
    { path: "../../public/fonts/halyard-text/HalyardText-Regular.otf",  weight: "400", style: "normal" },
    { path: "../../public/fonts/halyard-text/HalyardText-Medium.otf",   weight: "500", style: "normal" },
    { path: "../../public/fonts/halyard-text/HalyardText-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../../public/fonts/halyard-text/HalyardText-Bold.otf",     weight: "700", style: "normal" },
  ],
  variable: "--font-halyard-text",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Headout × Niyo | Hop-on Hop-off Bus Tours",
  description:
    "Book hop-on hop-off sightseeing bus tours across 80+ cities and get 15% off using your Niyo Global Card.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${halyardDisplay.variable} ${halyardText.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ backgroundColor: "#F8F6FF" }}
      >
        {children}
      </body>
    </html>
  )
}

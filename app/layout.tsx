import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import localFont from "next/font/local"

import "./globals.css"

import { Golos_Text } from 'next/font/google'


const golosText = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-golos-text",
})

const bbhSansBartle = localFont({
  src: "./fonts/BBHSansBartle-Regular.ttf",
  variable: "--font-bbh-sans-bartle",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Jared Clark | Principal Product Designer",
  description: "Principal UX Product Designer specializing in enterprise fintech transformation.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${golosText.variable} ${bbhSansBartle.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

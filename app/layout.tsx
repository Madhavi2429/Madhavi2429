import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Footer from "./_components/Footer"
import Navigation from "./_components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Steve Kaplan AI - AI Growth Strategist & Software Developer",
  description:
    "Strategic consulting services and custom software development for B2B SaaS growth. AI-powered strategies, ABM campaigns, and proprietary platform development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full font-sans flex flex-col justify-start items-center max-w-[1920px] mx-auto">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}

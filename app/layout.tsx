import type { Metadata } from "next"
import localFont from "next/font/local"
import Navbar from "@/components/navbar"
import { Providers } from "@/components/providers"
import "./globals.css"

const plexMono = localFont({
  src: "../fonts/plex_mono/IBMPlexMono-Regular.ttf",
  variable: "--font-plex-mono",
  weight: "400",
})

export const metadata: Metadata = {
  title: "How to Plan an Economy",
  description: "A tool for exploring economic planning models.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${plexMono.className} antialiased`}
        >
          <Navbar />
          {children}
        </body>
      </html>
    </Providers>
  )
}

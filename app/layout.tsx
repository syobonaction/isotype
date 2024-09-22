import type { Metadata } from "next"
import Header from "./components/Header"
import localFont from "next/font/local"
import "./globals.css"

const plexMono = localFont({
  src: "./fonts/plex_mono/IBMPlexMono-Regular.ttf",
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
    <html lang="en">
      <body
        className={`${plexMono.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

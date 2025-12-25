import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JPV DAV Public School | Premier Education in Katni, Madhya Pradesh",
  description:
    "JPV DAV Public School, established in 1998 near F.C.I. Godown, Pureni Katni, offers quality education without gender discrimination. Admissions open for 2025-26. Online fee payment available.",
  keywords:
    "JPV DAV Public School, Katni school, Madhya Pradesh education, DAV school, best school in Katni, admission 2025, online fee payment",
  authors: [{ name: "JPV DAV Public School" }],
  generator: "v0.app",
  openGraph: {
    title: "JPV DAV Public School | Premier Education in Katni",
    description: "Quality education since 1998. Admissions open for 2025-26.",
    url: "https://jpvdavps.ac.in",
    siteName: "JPV DAV Public School",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPV DAV Public School | Premier Education in Katni",
    description: "Quality education since 1998. Admissions open for 2025-26.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

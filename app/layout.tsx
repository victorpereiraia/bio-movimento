import type { Metadata } from "next"
import { DM_Sans, Geist_Mono } from "next/font/google"

import "./globals.css"

const dmSans = DM_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteTitle =
  "Núcleo de Saúde Bio Movimento | Fisioterapia e Pilates em São Bernardo do Campo"
const siteDescription =
  "Clínica de fisioterapia especializada e Pilates em São Bernardo do Campo. Atendimento particular nas especialidades ortopédica, neurológica e gerontologia."

function metadataBaseUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return new URL(explicit)
  if (process.env.VERCEL_URL) return new URL(`https://${process.env.VERCEL_URL}`)
  return new URL("http://localhost:3000")
}

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "fisioterapia",
    "pilates",
    "São Bernardo do Campo",
    "Bio Movimento",
    "fisioterapia ortopédica",
    "fisioterapia neurológica",
    "gerontologia",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: "Núcleo de Saúde Bio Movimento",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 735,
        alt: "Núcleo de Saúde Bio Movimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${geistMono.variable} min-h-screen bg-[#F8F9FA] font-sans text-[#1A1A2E] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

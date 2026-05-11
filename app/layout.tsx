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

export const metadata: Metadata = {
  title:
    "Núcleo de Saúde Bio Movimento | Fisioterapia e Pilates em São Bernardo do Campo",
  description:
    "Clínica de fisioterapia especializada e Pilates em São Bernardo do Campo. Atendimento particular nas especialidades ortopédica, neurológica e gerontologia.",
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

"use client"

import Link from "next/link"
import { motion } from "framer-motion"

import { buttonVariants } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function HeroSection() {
  return (
    <section
      className="relative isolate overflow-hidden pb-0 pt-8 md:pt-12"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[#F8F9FA]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-24 right-[-20%] -z-10 h-[420px] w-[420px] rounded-full bg-[#00C9A7]/20 blur-3xl md:right-[-10%]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-[-25%] -z-10 h-[380px] w-[380px] rounded-full bg-[#7B2FBE]/15 blur-3xl md:left-[-15%]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8 lg:pb-28">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#00C9A7] sm:text-sm">
            Núcleo de Saúde Bio Movimento
          </p>
          <h1
            id="hero-heading"
            className="text-balance bg-gradient-to-br from-[#1A1A2E] via-[#1A1A2E] to-[#7B2FBE]/90 bg-clip-text text-3xl font-semibold leading-tight text-transparent sm:text-4xl lg:text-5xl"
          >
            Cuidando do seu corpo, transformando sua vida!
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-[#1A1A2E]/80 sm:text-lg">
            Fisioterapia especializada e Pilates em São Bernardo do Campo.
            Atendimento personalizado para cada fase da sua vida.
          </p>
          <div className="mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 self-center sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 min-h-11 w-full touch-manipulation bg-gradient-to-br from-[#00C9A7] to-[#7B2FBE] text-white shadow-lg shadow-[#7B2FBE]/20 hover:opacity-95 sm:w-auto sm:min-w-[220px]"
              )}
            >
              Agendar pelo WhatsApp
            </a>
            <Link
              href="#servicos"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 min-h-11 w-full touch-manipulation border-[#1A1A2E]/15 bg-white/80 text-[#1A1A2E] backdrop-blur-sm hover:bg-white sm:w-auto sm:min-w-[220px]"
              )}
            >
              Conheça nossos serviços
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="relative -mb-px text-[#00C9A7]" aria-hidden>
        <svg
          className="block w-full translate-y-px"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}

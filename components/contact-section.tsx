import { Clock, MapPin, MessageCircle } from "lucide-react"

import { InstagramIcon } from "@/components/icons/instagram"
import { MotionReveal } from "@/components/motion-reveal"
import { buttonVariants } from "@/components/ui/button"
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/constants"
import { cn } from "@/lib/utils"

const MAP_EMBED_SRC =
  "https://maps.google.com/maps?q=Av.+Capit%C3%A3o+Casa,+600,+Bairro+dos+Casas,+S%C3%A3o+Bernardo+do+Campo+-+SP,+Brasil&hl=pt-BR&z=16&output=embed"

export function ContactSection() {
  return (
    <section
      id="contato"
      className="scroll-mt-28 bg-[#F8F9FA] py-16 sm:scroll-mt-32 sm:py-20 lg:py-24"
      aria-labelledby="contato-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center">
          <h2
            id="contato-heading"
            className="text-3xl font-semibold tracking-tight text-[#1A1A2E] sm:text-4xl"
          >
            Fale Conosco
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#1A1A2E]/75">
            Estamos em São Bernardo do Campo — venha nos visitar ou fale com a
            equipe pelo WhatsApp.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-start">
          <MotionReveal>
            <ul className="flex flex-col gap-6 text-[#1A1A2E]">
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C9A7]/20 to-[#7B2FBE]/15 text-[#00C9A7]">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-[#1A1A2E]">Endereço</p>
                  <p className="mt-1 text-[#1A1A2E]/80">
                    Av. Capitão Casa, 600 — Bairro dos Casas, São Bernardo do
                    Campo – SP
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00C9A7]/20 to-[#7B2FBE]/15 text-[#7B2FBE]">
                  <Clock className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-[#1A1A2E]">Horário</p>
                  <p className="mt-1 text-[#1A1A2E]/80">
                    Segunda a sexta: 7h às 20h
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 text-[#128C7E]">
                  <MessageCircle className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-[#1A1A2E]">WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-[#00C9A7] underline-offset-4 hover:underline"
                  >
                    (11) 94064-0787
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#E4405F]/15 to-[#7B2FBE]/10 text-[#E4405F]">
                  <InstagramIcon className="size-5" />
                </span>
                <div>
                  <p className="font-semibold text-[#1A1A2E]">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-[#00C9A7] underline-offset-4 hover:underline"
                  >
                    @studiobiomovimento
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-10 flex h-12 w-full items-center justify-center bg-gradient-to-br from-[#00C9A7] to-[#7B2FBE] text-white shadow-lg hover:opacity-95 sm:w-auto sm:px-10"
              )}
            >
              Agendar pelo WhatsApp
            </a>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="overflow-hidden rounded-2xl border border-[#1A1A2E]/10 bg-white shadow-lg shadow-black/[0.04]">
              <iframe
                title="Localização — Núcleo de Saúde Bio Movimento"
                src={MAP_EMBED_SRC}
                className="aspect-[4/3] min-h-[280px] w-full border-0 lg:min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}

import { Activity, Brain, HeartPulse } from "lucide-react"

import { MotionReveal } from "@/components/motion-reveal"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WHATSAPP_URL } from "@/lib/constants"
import { cn } from "@/lib/utils"

const specialties = [
  {
    icon: Activity,
    title: "Fisioterapia Ortopédica",
    description:
      "Tratamento de lesões musculoesqueléticas, pós-cirúrgico, dores na coluna, articulações e reabilitação de atletas.",
  },
  {
    icon: Brain,
    title: "Fisioterapia Neurológica",
    description:
      "Reabilitação de pacientes com AVC, Parkinson, lesões neurológicas e outras condições do sistema nervoso.",
  },
  {
    icon: HeartPulse,
    title: "Fisioterapia em Gerontologia",
    description:
      "Cuidado especializado para idosos, focado em mobilidade, equilíbrio, prevenção de quedas e qualidade de vida.",
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-28 bg-[#F8F9FA] py-16 sm:scroll-mt-32 sm:py-20 lg:py-24"
      aria-labelledby="servicos-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center">
          <div className="flex flex-col items-center gap-4">
            <Badge
              variant="outline"
              className="border-[#00C9A7]/40 bg-white px-4 py-1 text-[#1A1A2E] shadow-sm"
            >
              Atendimento 100% particular
            </Badge>
            <h2
              id="servicos-heading"
              className="text-3xl font-semibold tracking-tight text-[#1A1A2E] sm:text-4xl"
            >
              Fisioterapia
            </h2>
            <p className="max-w-2xl text-base text-[#1A1A2E]/75 sm:text-lg">
              Atendimento particular especializado nas seguintes áreas:
            </p>
          </div>
        </MotionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {specialties.map((s, i) => (
            <MotionReveal key={s.title} delay={i * 0.08}>
              <Card className="group h-full overflow-hidden border-[#1A1A2E]/8 bg-white shadow-md shadow-black/[0.03] transition-shadow hover:shadow-lg">
                <div
                  className="relative h-36 bg-gradient-to-br from-[#00C9A7]/15 via-[#F8F9FA] to-[#7B2FBE]/15"
                  aria-hidden
                >
                  <div className="absolute inset-4 flex items-center justify-center rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-bl-xl rounded-tr-xl bg-gradient-to-br from-[#00C9A7]/25 to-[#7B2FBE]/20 ring-1 ring-[#1A1A2E]/5">
                    <s.icon
                      className="size-14 text-[#00C9A7] transition-transform duration-300 group-hover:scale-105"
                      strokeWidth={1.25}
                    />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-[#1A1A2E]">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-[#1A1A2E]/75">
                    {s.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-14 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 bg-gradient-to-br from-[#00C9A7] to-[#7B2FBE] text-white shadow-md hover:opacity-95"
            )}
          >
            Tire suas dúvidas pelo WhatsApp
          </a>
        </MotionReveal>
      </div>
    </section>
  )
}

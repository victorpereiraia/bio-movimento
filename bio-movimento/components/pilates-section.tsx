import { ClipboardList, Target, Users } from "lucide-react"

import { MotionReveal } from "@/components/motion-reveal"
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

const modalities = [
  {
    title: "Pilates em Aparelho",
    description:
      "Uso de equipamentos específicos (Reformer, Cadillac, etc.) para exercícios de alta precisão.",
  },
  {
    title: "Pilates Solo (Mat)",
    description:
      "Exercícios no solo com foco em respiração, postura e controle corporal.",
  },
]

const differentiators = [
  { emoji: "👥", text: "Máximo 4 alunos por turma" },
  { emoji: "🎯", text: "Aulas individualizadas disponíveis" },
  { emoji: "📋", text: "Avaliação para montagem do programa ideal" },
]

export function PilatesSection() {
  return (
    <section
      id="pilates"
      className="scroll-mt-28 bg-white py-16 sm:scroll-mt-32 sm:py-20 lg:py-24"
      aria-labelledby="pilates-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center">
          <h2
            id="pilates-heading"
            className="text-3xl font-semibold tracking-tight text-[#1A1A2E] sm:text-4xl"
          >
            Pilates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#1A1A2E]/75 sm:text-lg">
            Aulas personalizadas para o seu objetivo
          </p>
          <p className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-[#1A1A2E]/80">
            Oferecemos aulas de Pilates em aparelho e solo, com turmas reduzidas
            de no máximo 4 alunos por horário, garantindo atenção individualizada
            para cada aluno. Também disponibilizamos aulas individuais para quem
            prefere um atendimento exclusivo.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {modalities.map((m, i) => (
            <MotionReveal key={m.title} delay={i * 0.08}>
              <Card className="h-full border-[#1A1A2E]/8 bg-[#F8F9FA]/80 shadow-md transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 inline-flex rounded-full bg-gradient-to-br from-[#00C9A7]/20 to-[#7B2FBE]/15 p-3">
                    {i === 0 ? (
                      <Target
                        className="size-6 text-[#00C9A7]"
                        strokeWidth={1.75}
                      />
                    ) : (
                      <ClipboardList
                        className="size-6 text-[#7B2FBE]"
                        strokeWidth={1.75}
                      />
                    )}
                  </div>
                  <CardTitle className="text-xl text-[#1A1A2E]">{m.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-[#1A1A2E]/75">
                    {m.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal className="mt-12">
          <div className="rounded-2xl border border-[#1A1A2E]/8 bg-gradient-to-br from-[#00C9A7]/8 via-[#F8F9FA] to-[#7B2FBE]/10 p-6 shadow-inner sm:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#00C9A7]">
                  <Users className="size-4" aria-hidden />
                  Diferenciais
                </div>
                <ul className="grid gap-4 sm:grid-cols-3">
                  {differentiators.map((d) => (
                    <li
                      key={d.text}
                      className="flex items-start gap-3 text-sm font-medium text-[#1A1A2E] sm:text-base"
                    >
                      <span className="text-xl leading-none" aria-hidden>
                        {d.emoji}
                      </span>
                      {d.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className="mt-10">
          <Card className="overflow-hidden border-[#7B2FBE]/20 bg-gradient-to-br from-[#1A1A2E] to-[#252542] text-white shadow-xl">
            <CardContent className="flex flex-col items-start gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle className="text-xl text-white sm:text-2xl">
                  Consulte nossos planos
                </CardTitle>
                <p className="mt-2 max-w-xl text-base leading-relaxed text-white/80">
                  Entre em contato pelo WhatsApp para saber mais sobre turmas e
                  modalidades — sem compromisso.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 shrink-0 bg-[#25D366] text-white hover:bg-[#20bd5a]"
                )}
              >
                Falar pelo WhatsApp
              </a>
            </CardContent>
          </Card>
        </MotionReveal>
      </div>
    </section>
  )
}

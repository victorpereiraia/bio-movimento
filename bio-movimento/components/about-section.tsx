import { MotionReveal } from "@/components/motion-reveal"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const highlights = [
  {
    emoji: "🏥",
    title: "8 anos de experiência",
    description:
      "História construída com dedicação e resultados ao lado dos nossos pacientes.",
  },
  {
    emoji: "👩‍⚕️",
    title: "Fundado por fisioterapeutas",
    description:
      "Paula Cunha e Juliana Lucco transformaram um sonho em um espaço de cuidado.",
  },
  {
    emoji: "💚",
    title: "Atendimento humanizado",
    description:
      "Técnica de ponta com escuta ativa e um ambiente acolhedor em cada sessão.",
  },
]

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="scroll-mt-28 bg-gradient-to-b from-[#00C9A7] to-[#00b896] py-16 text-white sm:scroll-mt-32 sm:py-20 lg:py-24"
      aria-labelledby="sobre-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <h2
            id="sobre-heading"
            className="text-center text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Nossa História
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-white/95 sm:text-lg">
            O Núcleo de Saúde Bio Movimento nasceu de um sonho compartilhado entre
            duas fisioterapeutas que trabalhavam juntas e, nas conversas do dia a
            dia, alimentavam o desejo de um dia terem seu próprio espaço. Paula
            Cunha e Juliana Lucco transformaram esse sonho em realidade, e há 8
            anos a Bio Movimento cuida da saúde e do bem-estar dos seus pacientes
            com dedicação, técnica e muito acolhimento.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <MotionReveal key={item.title} delay={i * 0.08}>
              <Card className="h-full border-white/15 bg-white/10 text-white shadow-lg shadow-black/10 ring-white/10 backdrop-blur-sm">
                <CardHeader className="pb-2">
                  <span className="text-3xl" aria-hidden>
                    {item.emoji}
                  </span>
                  <CardTitle className="text-lg font-semibold text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed text-white/85">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </MotionReveal>
          ))}
        </div>
      </div>

      <div className="relative -mb-px text-[#F8F9FA]" aria-hidden>
        <svg
          className="block w-full translate-y-px"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,32L120,37.3C240,43,480,53,720,48C960,43,1200,21,1320,10.7L1440,0L1440,80L1320,80C1200,80,960,80,720,80C480,80,240,80,120,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  )
}

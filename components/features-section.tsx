"use client"

import { useEffect, useRef } from "react"
import { Compass, QrCode, Flame, DoorOpen } from "lucide-react"

const features = [
  {
    icon: Compass,
    title: "Exploracion del Laberinto Oscuro",
    description:
      "Navega a traves de corredores oscuros e impredecibles, donde cada giro puede ser tu ultimo. La oscuridad es tu mayor enemigo.",
  },
  {
    icon: QrCode,
    title: "Desafios Mentales con QR",
    description:
      "Escanea codigos QR ocultos en las paredes del laberinto. Cada codigo desbloquea un acertijo que pondra a prueba tu inteligencia.",
  },
  {
    icon: Flame,
    title: "Monstruos y Trampas de Fuego",
    description:
      "Criaturas digitales acechan en las sombras. Trampas de fuego se activan sin previo aviso. Mantente alerta o seras consumido.",
  },
  {
    icon: DoorOpen,
    title: "Compuertas Dinamicas",
    description:
      "Las puertas solo se abren con respuestas correctas. Cada decision cuenta. Un error puede significar quedar atrapado para siempre.",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll(".feature-card")
    cards?.forEach((card, i) => {
      card.classList.add("opacity-0")
      ;(card as HTMLElement).style.animationDelay = `${i * 150}ms`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6" ref={sectionRef}>
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs tracking-[0.3em] text-neon-cyan/60 uppercase">
            {"// CARACTERISTICAS"}
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {"Que te espera dentro"}
          </h2>
          <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
        </div>

        {/* Feature cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card group relative rounded-lg border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-neon-cyan/30 hover:bg-card"
            >
              {/* Glow effect on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
                background: "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(180 100% 50% / 0.04), transparent 40%)"
              }} />

              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-neon-cyan/20 bg-neon-cyan/5 transition-all duration-300 group-hover:border-neon-cyan/40 group-hover:shadow-[0_0_15px_hsl(180_100%_50%/0.15)]">
                  <feature.icon className="h-5 w-5 text-neon-cyan" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

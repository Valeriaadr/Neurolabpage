"use client"

import { useEffect, useRef } from "react"
import { Route, Smartphone, ShieldCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Route,
    title: "Explora el Laberinto",
    description:
      "Adentrate en los oscuros corredores digitales. Cada camino es diferente, cada decision importa.",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Escanea Codigos QR",
    description:
      "Usa tu telefono para escanear los codigos ocultos en las paredes. Cada QR contiene un desafio unico.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Responde y Sobrevive",
    description:
      "Responde correctamente para desbloquear compuertas y avanzar. Un error puede costarte todo.",
  },
]

export function HowItWorksSection() {
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

    const items = sectionRef.current?.querySelectorAll(".step-item")
    items?.forEach((item, i) => {
      item.classList.add("opacity-0")
      ;(item as HTMLElement).style.animationDelay = `${i * 200}ms`
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6" ref={sectionRef}>
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs tracking-[0.3em] text-neon-cyan/60 uppercase">
           
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tres pasos para sobrevivir
          </h2>
          <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="step-item relative text-center">
              {/* Connector line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute top-12 right-0 hidden h-px w-full translate-x-1/2 bg-gradient-to-r from-neon-cyan/20 to-neon-cyan/5 md:block" />
              )}

              {/* Step number */}
              <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-neon-cyan/15 bg-neon-cyan/[0.03]" />
                <div className="absolute inset-2 rounded-full border border-neon-cyan/10" />
                <step.icon className="relative z-10 h-8 w-8 text-neon-cyan" />
              </div>

              <span className="mb-2 block font-mono text-xs tracking-widest text-neon-cyan/50">
                PASO {step.number}
              </span>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

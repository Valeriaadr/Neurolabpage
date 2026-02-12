"use client"

import { useEffect, useRef } from "react"
import { Download } from "lucide-react"

export function CtaSection() {
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

    const el = sectionRef.current?.querySelector(".cta-content")
    if (el) {
      el.classList.add("opacity-0")
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="cta" className="relative py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-neon-cyan/[0.03] blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center" ref={sectionRef}>
        <div className="cta-content">
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-neon-cyan/60 uppercase">
          
          </p>

          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {"Estas listo para enfrentar "}
            <span className="neon-glow text-neon-cyan">tu mente</span>
            {"?"}
          </h2>

          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            Descarga NEUROLAB: Protocolo 17 y demuestra que puedes sobrevivir al
            laberinto digital mas peligroso jamas creado.
          </p>

          <a
            href="#"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-md bg-neon-cyan px-10 py-4 text-base font-bold tracking-wide text-background transition-all duration-300 hover:shadow-[0_0_40px_hsl(180_100%_50%/0.5)]"
          >
            <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
            <span className="relative z-10">Descargar Juego</span>
            <div className="absolute inset-0 bg-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
          </a>

          <p className="mt-6 font-mono text-[10px] tracking-wider text-muted-foreground/50 uppercase">
            Disponible para Windows / macOS / Linux
          </p>
        </div>
      </div>
    </section>
  )
}

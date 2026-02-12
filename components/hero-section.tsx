"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

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

    const children = titleRef.current?.parentElement?.querySelectorAll(".reveal")
    children?.forEach((child) => {
      child.classList.add("opacity-0")
      observer.observe(child)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="hero"
      className="noise-bg relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Scanline effect */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
        <div className="animate-scanline absolute left-0 h-[2px] w-full bg-neon-cyan/5" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(180 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(180 100% 50% / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        <div ref={titleRef}>
          <p className="reveal mb-6 font-mono text-xs tracking-[0.4em] text-neon-cyan/70 uppercase md:text-sm">
            {"/// PROTOCOLO ACTIVO ///"}
          </p>

          <h1 className="reveal animate-glitch-skew mb-4 text-5xl font-black tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <span className="neon-glow text-neon-cyan">NEURO</span>
            <span className="text-foreground">LAB</span>
          </h1>

          <h2 className="reveal mb-6 font-mono text-lg font-light tracking-wider text-muted-foreground md:text-xl">
            Protocolo 17
          </h2>

          <p className="reveal mb-4 text-xl font-medium text-foreground/90 md:text-2xl">
            {'"Demuestra que tu mente puede sobrevivir."'}
          </p>

          <p className="reveal mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Estas atrapado dentro de un laberinto digital lleno de monstruos,
            trampas de fuego y desafios inteligentes. Para escapar, debes
            escanear codigos QR con tu telefono y responder correctamente para
            abrir compuertas y sobrevivir.
          </p>

          <div className="reveal flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#cta"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-neon-cyan px-8 py-3.5 text-sm font-bold tracking-wide text-background transition-all duration-300 hover:shadow-[0_0_30px_hsl(180_100%_50%/0.5)]"
            >
              <span className="relative z-10">Descargar Juego</span>
              <div className="absolute inset-0 bg-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            </a>
            <a
              href="#trailer"
              className="group inline-flex items-center gap-2 rounded-md border border-neon-cyan/30 bg-neon-cyan/5 px-8 py-3.5 text-sm font-semibold tracking-wide text-neon-cyan transition-all duration-300 hover:border-neon-cyan/60 hover:bg-neon-cyan/10 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.15)]"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Ver Trailer
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-float">
        <a href="#features" aria-label="Desplazar hacia abajo">
          <ChevronDown className="h-6 w-6 text-neon-cyan/50" />
        </a>
      </div>
    </section>
  )
}

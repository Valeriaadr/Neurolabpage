"use client"

import { useEffect, useRef } from "react"
import { Play } from "lucide-react"

export function TrailerSection() {
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

    const el = sectionRef.current?.querySelector(".trailer-content")
    if (el) {
      el.classList.add("opacity-0")
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="trailer" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.02] to-transparent" />

      <div className="mx-auto max-w-5xl px-6" ref={sectionRef}>
        <div className="trailer-content">
          {/* Section header */}
          <div className="mb-12 text-center">
            <p className="mb-3 font-mono text-xs tracking-[0.3em] text-neon-cyan/60 uppercase">
              
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              TRAILER OFICIAL
            </h2>
            <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
          </div>

          {/* Video container */}
          <div className="group relative overflow-hidden rounded-lg border border-border bg-card/30">
            {/* Cinematic frame borders */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-lg border border-neon-cyan/10 transition-all duration-500 group-hover:border-neon-cyan/20" />

            {/* Corner decorations */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-8 w-8 border-t-2 border-l-2 border-neon-cyan/40 rounded-tl-lg" />
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-8 w-8 border-t-2 border-r-2 border-neon-cyan/40 rounded-tr-lg" />
            <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-8 border-b-2 border-l-2 border-neon-cyan/40 rounded-bl-lg" />
            <div className="pointer-events-none absolute bottom-0 right-0 z-10 h-8 w-8 border-b-2 border-r-2 border-neon-cyan/40 rounded-br-lg" />

            {/* Video embed (16:9 ratio) */}
            <div className="relative aspect-video w-full bg-card">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-neon-cyan/50 bg-neon-cyan/10 transition-all duration-300 group-hover:border-neon-cyan/80 group-hover:bg-neon-cyan/20 group-hover:shadow-[0_0_40px_hsl(180_100%_50%/0.3)]">
                  <Play className="ml-1 h-8 w-8 text-neon-cyan" />
                </div>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Reproducir Trailer
                </p>
              </div>

              {/* Noise overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-5" style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
              }} />
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-neon-cyan" />
                <span className="font-mono text-[10px] tracking-wider text-neon-cyan/70 uppercase">
                  Trailer Disponible
                </span>
              </div>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                time
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

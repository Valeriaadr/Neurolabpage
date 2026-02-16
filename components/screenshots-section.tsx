"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const screenshots = [
  {
    src: "/images/screenshot-1.jpg",
    alt: "Imagen uno",
  },
  {
    src: "/images/screenshot-2.jpg",
    alt: "Imagen dos",
  },
  {
    src: "/images/screenshot-3.jpg",
    alt: "Imagen tres",
  },
  {
    src: "/images/screenshot-4.jpg",
    alt: "Imagen cuatro",
  },
]
 
export function ScreenshotsSection() {
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
      { threshold: 0.05 }
    )

    const items = sectionRef.current?.querySelectorAll(".screenshot-item")
    items?.forEach((item, i) => {
      item.classList.add("opacity-0")
      ;(item as HTMLElement).style.animationDelay = `${i * 100}ms`
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="screenshots" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/[0.015] to-transparent" />

      <div className="mx-auto max-w-7xl px-6" ref={sectionRef}>
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs tracking-[0.3em] text-neon-cyan/60 uppercase">
            
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vista previa del juego
          </h2>
          <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
        </div>

        {/* Screenshot grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {screenshots.map((screenshot) => (
            <div
              key={screenshot.src}
              className="screenshot-item group relative overflow-hidden rounded-lg border border-border bg-card/30"
            >
              <div className="relative aspect-video">
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Border glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-lg border border-neon-cyan/0 transition-all duration-500 group-hover:border-neon-cyan/20 group-hover:shadow-[inset_0_0_30px_hsl(180_100%_50%/0.05)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

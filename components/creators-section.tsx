"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const creators = [
  {
    name: "Creador 1",
    image: "/creators/creator-1.jpg",
  },
  {
    name: "Creador 2",
    image: "/creators/creator-2.jpg",
  },
  {
    name: "Creador 3",
    image: "/creators/creator-3.jpg",
  },
  {
    name: "Creador 4",
    image: "/creators/creator-4.jpg",
  },
]

export function CreatorsSection() {
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

    const cards = sectionRef.current?.querySelectorAll(".creator-card")
    cards?.forEach((card, i) => {
      card.classList.add("opacity-0")
      ;(card as HTMLElement).style.animationDelay = `${i * 150}ms`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="creators" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6" ref={sectionRef}>
        {/* Section header */}
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs tracking-[0.3em] text-neon-cyan/60 uppercase">
            El equipo
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Creadores
          </h2>
          <div className="mx-auto h-px w-20 bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
        </div>

        {/* Creator cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {creators.map((creator) => (
            <div
              key={creator.name}
              className="creator-card group relative flex flex-col items-center rounded-lg border border-border bg-card/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-neon-cyan/30 hover:bg-card"
            >
              {/* Glow effect on hover */}
              <div
                className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at 50% 50%, hsl(180 100% 50% / 0.04), transparent 40%)",
                }}
              />

              <div className="relative z-10 flex flex-col items-center">
                {/* Avatar */}
                <div className="mb-5 h-28 w-28 overflow-hidden rounded-full border-2 border-neon-cyan/20 transition-all duration-300 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_20px_hsl(180_100%_50%/0.15)]">
                  <Image
                    src={creator.image}
                    alt={creator.name}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-neon-cyan">
                  {creator.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

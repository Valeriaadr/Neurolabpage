"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Caracteristicas", href: "#features" },
  { label: "Trailer", href: "#trailer" },
  { label: "Como Funciona", href: "#how-it-works" },
  { label: "Galeria", href: "#screenshots" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-neon-cyan/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-mono text-lg font-bold tracking-widest text-neon-cyan neon-glow">
            NEUROLAB
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-300 hover:text-neon-cyan"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-md border border-neon-cyan/50 bg-neon-cyan/10 px-5 py-2 text-sm font-semibold text-neon-cyan transition-all duration-300 hover:bg-neon-cyan/20 hover:shadow-[0_0_20px_hsl(180_100%_50%/0.3)]"
          >
            Descargar
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-b border-neon-cyan/10 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-wide text-muted-foreground transition-colors duration-300 hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md border border-neon-cyan/50 bg-neon-cyan/10 px-5 py-2 text-center text-sm font-semibold text-neon-cyan transition-all duration-300 hover:bg-neon-cyan/20"
            >
              Descargar
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

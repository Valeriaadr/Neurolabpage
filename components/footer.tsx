import { Twitter, Youtube, Instagram, Github } from "lucide-react"

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="text-center">
            <span className="font-mono text-lg font-bold tracking-widest text-neon-cyan neon-glow">
              NEUROLAB
            </span>
            <p className="mt-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
              FANTASTIC 4
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-neon-cyan/30 hover:text-neon-cyan hover:shadow-[0_0_15px_hsl(180_100%_50%/0.1)]"
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              {"© 2026 NEUROLAB Studios. Todos los derechos reservados."}
            </p>
            <p className="mt-1 font-mono text-[10px] text-muted-foreground/40">
              {"Un juego indie de horror psicologico"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

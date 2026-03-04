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

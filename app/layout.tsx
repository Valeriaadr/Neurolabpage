import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'NEUROLAB: Protocolo 17 - Sobrevive al Laberinto Digital',
  description:
    'Atrapado dentro de un laberinto digital lleno de monstruos, trampas de fuego y desafios inteligentes. Escanea codigos QR y responde correctamente para sobrevivir.',
  keywords: ['NEUROLAB', 'juego', 'horror', 'laberinto', 'QR', 'indie game'],
}

export const viewport: Viewport = {
  themeColor: '#00ffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}

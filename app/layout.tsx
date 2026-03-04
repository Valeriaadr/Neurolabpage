import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ServiceWorkerRegistration } from '@/components/service-worker-registration'

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
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'NEUROLAB',
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export const viewport: Viewport = {
  themeColor: '#00ffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="apple-touch-icon" href="/icons/icon-192x192.jpg" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  )
}

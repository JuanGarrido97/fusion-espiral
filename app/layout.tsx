import type { Metadata } from 'next'
import { Bodoni_Moda, Lora, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bodoni',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
})

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  style: ['normal', 'italic'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Fusión Espiral — Joyería Artesanal',
  description:
    'Piezas únicas en plata, oro y piedras de la cordillera. Hechas a mano por la Familia Garrido en Santiago de Chile.',
  keywords: ['joyería artesanal', 'plata 925', 'joyas Chile', 'Santiago', 'anillos', 'collares'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${bodoniModa.variable} ${lora.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}

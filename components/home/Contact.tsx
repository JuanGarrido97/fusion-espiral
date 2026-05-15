'use client'

import { useState } from 'react'
import Reveal from '@/components/shared/Reveal'

const WA_NUMBER = '56995030144'

export default function Contact() {
  const [nombre, setNombre] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = [
      'Hola Fusión Espiral ✨',
      `Soy: ${nombre}`,
      tel ? `Tel/WA: ${tel}` : null,
      email ? `Email: ${email}` : null,
      '',
      mensaje,
    ].filter(l => l !== null).join('\n')

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`,
      '_blank'
    )
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="section section--cream" id="contacto" style={{ paddingBottom: 0 }}>
      <div className="contact contact--form">
        <Reveal className="contact__info">
          <div className="section-num" style={{ color: 'var(--blue)' }}>08 / Hablemos</div>
          <div className="display" style={{ marginTop: 16 }}>
            ¿Quieres algo <span className="it">a medida?</span>
          </div>
          <div className="contact__wa-list">
            <div className="wa-item">
              <span className="wa-item__l">WhatsApp</span>
              <span className="wa-item__r">+56 9 9503 0144</span>
            </div>
            <div className="wa-item">
              <span className="wa-item__l">Email</span>
              <span className="wa-item__r">hola@fusionespiral.cl</span>
            </div>
            <div className="wa-item">
              <span className="wa-item__l">Taller</span>
              <span className="wa-item__r">Santiago Centro</span>
            </div>
            <div className="wa-item">
              <span className="wa-item__l">Horario</span>
              <span className="wa-item__r">Lun–Vie · 10 a 19h</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="contact__form-wrap">
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="cf-field">
              <label htmlFor="cf-nombre">Nombre</label>
              <input
                id="cf-nombre"
                type="text"
                placeholder="Tu nombre"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="cf-field">
              <label htmlFor="cf-tel">Teléfono / WhatsApp</label>
              <input
                id="cf-tel"
                type="tel"
                placeholder="+56 9 ..."
                value={tel}
                onChange={e => setTel(e.target.value)}
              />
            </div>
            <div className="cf-field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                type="email"
                placeholder="tu@correo.cl"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="cf-field">
              <label htmlFor="cf-mensaje">Mensaje</label>
              <textarea
                id="cf-mensaje"
                placeholder="Cuéntanos qué tienes en mente..."
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
                required
              />
            </div>
            <div className="cf-actions">
              <button type="submit" className="btn" disabled={sent}>
                {sent ? 'WhatsApp abierto ✓' : <>Enviar por WhatsApp <span className="arrow" /></>}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

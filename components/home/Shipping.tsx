import Reveal from '@/components/shared/Reveal'
import { shippingRegions } from '@/lib/data'

function ChileMap() {
  return (
    <svg viewBox="0 0 200 600" preserveAspectRatio="xMidYMid meet">
      <defs>
        <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.6" fill="rgba(244,237,224,0.25)" />
        </pattern>
      </defs>
      <path
        d="M 100 20 L 105 60 L 102 110 L 108 160 L 104 220 L 110 280 L 106 340 L 112 400 L 108 470 L 100 540 L 92 580 L 95 540 L 88 480 L 92 410 L 86 340 L 92 280 L 86 220 L 92 160 L 88 110 L 95 60 Z"
        fill="url(#dots)"
        stroke="var(--blue-soft)"
        strokeWidth="1.2"
        opacity="0.9"
      />
      {[
        { y: 60,  name: 'Arica' },
        { y: 130, name: 'Antofagasta' },
        { y: 220, name: 'La Serena' },
        { y: 290, name: 'Santiago', main: true },
        { y: 340, name: 'Concepción' },
        { y: 410, name: 'Pto. Montt' },
        { y: 540, name: 'Punta Arenas' },
      ].map((c, i) => (
        <g key={i} transform={`translate(100 ${c.y})`}>
          <circle r={c.main ? 5 : 2.5} fill={c.main ? 'var(--blue-soft)' : 'var(--cream)'} />
          {c.main && (
            <circle r="11" fill="none" stroke="var(--blue-soft)" strokeWidth="1" opacity="0.5" />
          )}
          <text x="14" y="3" fill="var(--cream)" fontSize="10" fontFamily="JetBrains Mono, monospace" letterSpacing="2">
            {c.name.toUpperCase()}
          </text>
          <line x1="-30" y1="0" x2="-6" y2="0" stroke="rgba(244,237,224,0.25)" strokeWidth="0.5" />
        </g>
      ))}
    </svg>
  )
}

export default function Shipping() {
  return (
    <section className="section section--cream" id="envios">
      <div className="shipping">
        <Reveal>
          <div className="section-num">06 / Envíos</div>
          <h2 className="shipping__title">
            A todo <span className="it">Chile.</span><br />
            Punto.
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(10,22,34,0.78)', maxWidth: 380 }}>
            Despachamos desde Arica hasta Punta Arenas con Chilexpress y Starken.
            Cada envío sale en bolsa de algodón con tarjeta de cuidados.
          </p>
          <div className="shipping__map">
            <span className="shipping__map-label">Cobertura · Chile</span>
            <ChileMap />
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="shipping__cards">
            <div className="ship-card">
              <h3 className="ship-card__h">Estándar</h3>
              <div className="ship-card__sub">2 a 5 días</div>
              <p className="ship-card__desc">
                Chilexpress a sucursal o domicilio. Costo según ciudad — desde $3.490.
              </p>
            </div>
            <div className="ship-card">
              <h3 className="ship-card__h">Retiro</h3>
              <div className="ship-card__sub">Sin costo</div>
              <p className="ship-card__desc">
                Pasa por el taller en Santiago Centro. Ideal para piezas hechas a medida.
              </p>
            </div>
          </div>
          <div className="shipping__regions">
            {shippingRegions.map(r => (
              <div key={r.region} className="shipping__region">
                <span>{r.region}</span>
                <span>{r.time}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

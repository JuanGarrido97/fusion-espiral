import Spiral from '@/components/shared/Spiral'

const items = [
  'Envíos a todo Chile',
  'Diseños personalizados',
  'Plata 925 · Oro 18k',
  'Hecho a mano en Santiago',
  'Atención por WhatsApp',
]

const all = [...items, ...items, ...items]

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__track">
        {all.map((it, i) => (
          <span key={i} className="ticker__item">
            <Spiral size={11} stroke="#f4ede0" thickness={1} turns={2.5} />
            {it}
            <span className="ticker__sep">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}

'use client'

import PH from '@/components/shared/PH'
import Reveal from '@/components/shared/Reveal'
import { categories, catImages } from '@/lib/data'

interface CategoriesProps {
  onPick: (id: string) => void
}

export default function Categories({ onPick }: CategoriesProps) {
  return (
    <section className="section section--cream" id="categorias">
      <div className="cats">
        <Reveal className="cats__head">
          <div className="section-num">02 / Colecciones</div>
          <h2 className="cats__title">
            Por <span className="it">familia</span><br />de pieza.
          </h2>
        </Reveal>
        <Reveal className="cats__head-r" delay={1}>
          <div
            className="mono"
            style={{
              color: 'rgba(10,22,34,0.6)',
              maxWidth: 280,
              textTransform: 'none',
              letterSpacing: '0.05em',
              fontSize: 13,
            }}
          >
          </div>
        </Reveal>
        <div className="cats__grid--uniform">
          {categories.map((c, i) => (
            <Reveal key={c.id} className="cat" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div onClick={() => onPick(c.id)}>
                {catImages[c.id]
                  ? <PH src={catImages[c.id]} alt={c.name} ratio="1/1" />
                  : <PH dark={c.tone !== 'blue'} withSpiral={i % 3 === 0} label={`${c.id}`} ratio="1/1" />
                }
                <span className="cat__num">/{String(i + 1).padStart(2, '0')}</span>
                <div className="cat__label">
                  <span className="name">{c.name}</span>
                  <span className="count">{c.count} piezas →</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

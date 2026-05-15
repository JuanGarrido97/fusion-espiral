import PH from '@/components/shared/PH'
import Reveal from '@/components/shared/Reveal'

const igImgs: (string | null)[] = [
  '/images/jewels/dijes-espiral-azul.jpeg',
  '/images/jewels/anillos-mosaico-plata.jpeg',
  '/images/jewels/pulsera-espiral-azul.jpeg',
  null, null,
  '/images/jewels/dije-lapis-pirita.jpeg',
  null,
  '/images/jewels/anillos-cobre-mosaico.jpeg',
  null, null, null, null,
]

export default function Instagram() {
  return (
    <section className="section section--paper">
      <div className="ig-head">
        <Reveal>
          <div className="section-num">07 / Instagram</div>
          <h2 className="ig-title">@fusion.<span className="it">espiral</span></h2>
        </Reveal>
        <Reveal delay={1}>
          <button className="btn btn--ghost">
            Seguir en Instagram <span className="arrow" />
          </button>
        </Reveal>
      </div>
      <Reveal className="ig-grid" delay={1}>
        {igImgs.map((src, i) => (
          <div className="ig-cell" key={i}>
            {src
              ? <PH src={src} alt="" ratio="1/1" />
              : <PH dark={i % 2 === 0} withSpiral={i % 5 === 0} label={`post ${String(i + 1).padStart(2, '0')}`} ratio="1/1" />
            }
          </div>
        ))}
      </Reveal>
    </section>
  )
}

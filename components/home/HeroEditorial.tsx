import PH from '@/components/shared/PH'

interface HeroEditorialProps {
  onShop: () => void
  onCustom: () => void
}

export default function HeroEditorial({ onShop, onCustom }: HeroEditorialProps) {
  return (
    <section className="hero hero--editorial" id="top">
      <div className="hero__corner hero__corner--tr">
        <span>Est. en familia · Santiago, Chile</span>
      </div>
      <div className="hero__left">
        <div className="mono" style={{ color: 'var(--blue)', marginBottom: 28 }}>
          Joyería Artesanal — Vol. 01 / 2026
        </div>
        <h1 className="hero__title">
          Fusión<br />
          <span className="it">Espiral</span><br />
          Joyas.
        </h1>
        <div className="hero__cta-row" style={{ marginTop: 48 }}>
          <button className="btn" onClick={onShop}>Ver catálogo <span className="arrow" /></button>
          <button className="btn btn--ghost" onClick={onCustom}>Diseño a medida</button>
        </div>
      </div>
      <div className="hero__right">
        <div className="hero__rotate">↳ Colección Espiral · 2026</div>
        <div className="hero__visual">
          <PH src="/images/jewels/dijes-espiral-azul.jpeg" alt="Dijes espiral del mar" />
          <PH src="/images/jewels/anillos-mosaico-plata.jpeg" alt="Anillos mosaico plata" />
          <PH src="/images/jewels/dije-lapis-pirita.jpeg" alt="Dije lapislázuli pirita" />
        </div>
      </div>
    </section>
  )
}

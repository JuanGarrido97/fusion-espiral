import PH from '@/components/shared/PH'
import Reveal from '@/components/shared/Reveal'

export default function About() {
  return (
    <section className="section section--paper" id="historia">
      <div className="about">
        <Reveal>
          <div style={{ position: 'relative' }}>
            <PH dark withSpiral label="familia · taller · 1500×2000" ratio="3/4" className="about__img" />
            <div className="about__img-2">
              <PH dark={false} label="taller · 800×800" ratio="1/1" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="section-num">04 / Historia</div>
          <h2 className="about__title">
            Un negocio<br />
            de <span className="it">familia</span>.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: 'rgba(10,22,34,0.78)', margin: 0 }}>
            Fusión Espiral nace de las manos de <strong>Mario Garrido</strong>, el papá,
            que llevaba años trabajando la plata por su cuenta. Hoy el taller lo
            llevan él y sus dos hijos — <strong>Felipe</strong> y <strong>Mario</strong> —
            los tres metiendo mano en cada pieza.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(10,22,34,0.78)', margin: 0 }}>
            Trabajamos en un taller compacto en Santiago. Todo lo que ves en
            esta tienda salió de ahí — desde el boceto en un cuaderno cuadriculado
            hasta el último pulido a mano.
          </p>
          <div className="about__sig">— Mario, Felipe y Mario Garrido</div>
          <div className="about__sig-name">Familia Garrido · Fusión Espiral</div>
        </Reveal>
      </div>
    </section>
  )
}

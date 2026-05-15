import PH from '@/components/shared/PH'
import Reveal from '@/components/shared/Reveal'
import Mixed from '@/components/shared/Mixed'
import { processSteps } from '@/lib/data'

export default function Process() {
  return (
    <section className="section section--navy" id="proceso">
      <div className="process__head">
        <Reveal>
          <div className="section-num" style={{ color: 'var(--blue-soft)' }}>05 / Proceso</div>
          <h2 className="process__title">
            Conoce<br />
            nuestro<span className="it">trabajo.</span>
          </h2>
        </Reveal>

      </div>
      <div className="process__steps">
        {processSteps.map((s, i) => (
          <Reveal key={s.num} className="step" delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
            <div className="step__num">/ {s.num}</div>
            <h3 className="step__name"><Mixed parts={s.name} /></h3>
            <p className="step__desc">{s.desc}</p>
            <PH dark className="step__img" label={`paso ${s.num}`} withSpiral={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

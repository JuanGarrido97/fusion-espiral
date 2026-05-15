'use client'

import { useState, useEffect, useMemo } from 'react'
import PH from '@/components/shared/PH'
import Reveal from '@/components/shared/Reveal'
import { products } from '@/lib/data'
import { formatCLP } from '@/lib/formatters'
import type { Product } from '@/types'

const ALL_CATS = [
  { id: 'all',        label: 'Todas' },
  { id: 'anillos',    label: 'Anillos' },
  { id: 'aretes',     label: 'Aretes' },
  { id: 'collares',   label: 'Collares' },
  { id: 'pulseras',   label: 'Pulseras' },
  { id: 'tobilleras', label: 'Tobilleras' },
]

const ALL_MATS = [
  { id: 'all',     label: 'Cualquiera' },
  { id: 'Plata',   label: 'Plata 925' },
  { id: 'Oro',     label: 'Oro 18k' },
  { id: 'Cobre',   label: 'Cobre' },
  { id: 'Bronce',  label: 'Bronce' },
  { id: 'piedras', label: 'Con piedras' },
]

interface CatalogProps {
  onQuick: (product: Product) => void
  presetCat: string | null
}

export default function Catalog({ onQuick, presetCat }: CatalogProps) {
  const [cat, setCat] = useState('all')
  const [mat, setMat] = useState('all')

  useEffect(() => {
    if (presetCat) setCat(presetCat)
  }, [presetCat])

  const filtered = useMemo(() => {
    return products.filter(p => {
      if (cat !== 'all' && p.catId !== cat) return false
      if (mat !== 'all') {
        const matStr = p.materials.join(' ').toLowerCase()
        if (mat === 'piedras') {
          if (!/lapis|ágata|agata|perla|turquesa|madreperla|piedras|conchas/i.test(p.desc + ' ' + matStr)) return false
        } else if (!matStr.includes(mat.toLowerCase())) return false
      }
      return true
    })
  }, [cat, mat])

  return (
    <section className="section section--cream" id="catalogo">
      <Reveal className="catalog__head">
        <div>
          <div className="section-num">03 / Catálogo</div>
          <h2 className="catalog__title">
            Piezas <span className="it">disponibles</span>
          </h2>
        </div>
        <div className="catalog__count">
          {filtered.length} de {products.length} piezas
        </div>
      </Reveal>

      <Reveal className="filters" delay={1}>
        <span className="filter__group-label">Tipo</span>
        {ALL_CATS.map(f => (
          <button
            key={f.id}
            className={`filter${cat === f.id ? ' is-active' : ''}`}
            onClick={() => setCat(f.id)}
          >
            {f.label}
          </button>
        ))}
      </Reveal>

      <div className="catalog__body">
        <Reveal className="catalog__sidebar">
          <span className="filter__group-label" style={{ display: 'block', marginBottom: 16 }}>Material</span>
          <div className="catalog__mat-list">
            {ALL_MATS.map(f => (
              <button
                key={f.id}
                className={`filter filter--mat${mat === f.id ? ' is-active' : ''}`}
                onClick={() => setMat(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="products">
          {filtered.map((p, i) => (
            <Reveal key={p.id} className="product" delay={((i % 3) + 1) as 1 | 2 | 3}>
              <article onClick={() => onQuick(p)}>
                <div className="product__img">
                  {p.img
                    ? <PH src={p.img} alt={p.name} style={{ width: '100%', height: '100%' }} />
                    : <PH dark={i % 2 === 0} withSpiral={i % 3 === 0} label={`${p.id} · ${p.cat.toLowerCase()}`} style={{ width: '100%', height: '100%' }} />
                  }
                  <span className="product__num">N°{p.id}</span>
                  <button
                    className="product__quick"
                    onClick={e => { e.stopPropagation(); onQuick(p) }}
                  >
                    Vista rápida +
                  </button>
                </div>
                <div className="product__meta">
                  <div>
                    <h3 className="product__name">{p.name}</h3>
                    <span className="product__cat">{p.cat}</span>
                  </div>
                  <span className="product__price">{formatCLP(p.price)}</span>
                </div>
                <div className="product__variants">
                  {p.variants.map(v => (
                    <span
                      key={v.id}
                      className="product__variant-dot"
                      style={{ background: v.color }}
                      title={v.name}
                    />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
          {!filtered.length && (
            <div style={{ gridColumn: '1 / -1', padding: '60px 12px', textAlign: 'center' }}>
              <div className="display" style={{ fontSize: 36, color: 'var(--ink)' }}>
                No hay piezas <em style={{ color: 'var(--blue)' }}>aún</em>
              </div>
              <div className="mono" style={{ marginTop: 12, color: 'rgba(10,22,34,0.55)' }}>
                Prueba con otro filtro
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState, useEffect } from 'react'
import PH from '@/components/shared/PH'
import { formatCLP } from '@/lib/formatters'
import type { CartItem, Product } from '@/types'

interface QuickViewProps {
  product: Product
  onClose: () => void
  onAdd: (item: CartItem) => void
}

export default function QuickView({ product, onClose, onAdd }: QuickViewProps) {
  const [variantIdx, setVariantIdx] = useState(0)
  const [size, setSize] = useState(product.sizes ? product.sizes[0] : undefined)
  const [qty, setQty] = useState(1)
  const [zoom, setZoom] = useState(false)
  const [thumbIdx, setThumbIdx] = useState(0)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onEsc)
    }
  }, [onClose])

  const variant = product.variants[variantIdx]
  const thumbs = [0, 1, 2, 3]

  const handleAdd = () => {
    onAdd({
      ...product,
      qty,
      variantId: variant.id,
      variantName: variant.name,
      size,
    })
    onClose()
  }

  return (
    <div
      className="qv-overlay"
      onClick={e => (e.target as HTMLElement).classList.contains('qv-overlay') && onClose()}
    >
      <div className="qv">
        <button className="qv__close" onClick={onClose}>×</button>
        <div className="qv__gallery">
          <div
            className={`qv__main${zoom ? ' is-zoomed' : ''}`}
            onClick={() => setZoom(!zoom)}
          >
            {product.img
              ? <PH src={product.img} alt={product.name} style={{ width: '100%', height: '100%' }} />
              : <PH dark withSpiral={thumbIdx === 0} label={`${product.id} · vista ${thumbIdx + 1}/4`} style={{ width: '100%', height: '100%' }} />
            }
          </div>
          <div className="qv__thumbs">
            {thumbs.map(i => (
              <div
                key={i}
                className={`qv__thumb${i === thumbIdx ? ' is-active' : ''}`}
                onClick={() => setThumbIdx(i)}
              >
                {product.img
                  ? <PH src={product.img} alt="" ratio="4/5" />
                  : <PH dark label="" ratio="4/5" />
                }
              </div>
            ))}
          </div>
        </div>
        <div className="qv__info">
          <div className="qv__cat">{product.cat} · N°{product.id}</div>
          <h2 className="qv__name">
            {product.name.split(' ').map((w, i, arr) =>
              i === arr.length - 1
                ? <span key={i} className="it">{w}</span>
                : w + ' '
            )}
          </h2>
          <div className="qv__price">{formatCLP(product.price)} CLP</div>
          <p className="qv__desc">{product.desc}</p>

          <div className="qv__row">
            <div className="qv__row-label">
              <span>Material</span>
              <span style={{ color: 'var(--ink)' }}>{variant.name}</span>
            </div>
            <div className="qv__variants">
              {product.variants.map((v, i) => (
                <button
                  key={v.id}
                  className={`qv__variant${i === variantIdx ? ' is-active' : ''}`}
                  onClick={() => setVariantIdx(i)}
                >
                  <span className="qv__variant-dot" style={{ background: v.color }} />
                  {v.name}
                </button>
              ))}
            </div>
          </div>

          {product.sizes && (
            <div className="qv__row">
              <div className="qv__row-label">
                <span>Talla</span>
                <span style={{ color: 'var(--ink)' }}>{size}</span>
              </div>
              <div className="qv__variants">
                {product.sizes.map(s => (
                  <button
                    key={s}
                    className={`qv__variant${s === size ? ' is-active' : ''}`}
                    onClick={() => setSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="qv__row">
            <div className="qv__row-label"><span>Cantidad</span></div>
            <div className="qv__qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <div className="qv__cta-row">
            <button className="btn" onClick={handleAdd}>
              Agregar a la bolsa <span className="arrow" />
            </button>
            <button className="btn btn--ghost">Personalizar</button>
          </div>

          <div className="qv__details">
            {Object.entries(product.details).map(([k, v]) => (
              <div key={k}>
                <span className="qv__detail-key">{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

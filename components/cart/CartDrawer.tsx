'use client'

import PH from '@/components/shared/PH'
import { formatCLP } from '@/lib/formatters'
import type { CartItem } from '@/types'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
  items: CartItem[]
  onQty: (index: number, delta: number) => void
  onRemove: (index: number) => void
}

export default function CartDrawer({ open, onClose, items, onQty, onRemove }: CartDrawerProps) {
  if (!open) return null

  const subtotal = items.reduce((a, b) => a + b.price * b.qty, 0)
  const ship = items.length ? 4990 : 0

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <aside className="cart">
        <header className="cart__head">
          <h2 className="cart__title">
            Tu bolsa{' '}
            <span className="display-italic" style={{ color: 'var(--blue)' }}>·</span>{' '}
            {items.length}
          </h2>
          <button className="cart__close" onClick={onClose}>×</button>
        </header>
        <div className="cart__items">
          {!items.length && (
            <div className="cart__empty">
              <div className="display">
                Tu bolsa está <em style={{ color: 'var(--blue)' }}>vacía</em>
              </div>
              <div className="mono" style={{ marginTop: 18, color: 'rgba(10,22,34,0.55)' }}>
                Explora el catálogo →
              </div>
            </div>
          )}
          {items.map((it, i) => (
            <div key={i} className="cart-item">
              <PH
                src={it.img}
                alt={it.name}
                ratio="4/5"
                className="cart-item__img"
              />
              <div>
                <h4 className="cart-item__name">{it.name}</h4>
                <div className="cart-item__variant">
                  {it.variantName} · talla {it.size || '—'}
                </div>
                <div className="cart-item__qty">
                  <button onClick={() => onQty(i, -1)}>−</button>
                  <span>{it.qty}</span>
                  <button onClick={() => onQty(i, 1)}>+</button>
                </div>
              </div>
              <div>
                <div className="cart-item__price">{formatCLP(it.price * it.qty)}</div>
                <button className="cart-item__remove" onClick={() => onRemove(i)}>
                  quitar
                </button>
              </div>
            </div>
          ))}
        </div>
        <footer className="cart__foot">
          <div className="cart__sub">
            <span>Subtotal</span>
            <span>{formatCLP(subtotal)}</span>
          </div>
          <div className="cart__sub">
            <span>Envío Chile</span>
            <span>{ship ? formatCLP(ship) : '—'}</span>
          </div>
          <div className="cart__total">
            <span className="cart__total-l">Total</span>
            <span className="cart__total-r">{formatCLP(subtotal + ship)}</span>
          </div>
          <button className="btn cart__btn">
            Ir a pagar <span className="arrow" />
          </button>
          <div className="cart__note">Pago seguro · Webpay · Transferencia</div>
        </footer>
      </aside>
    </>
  )
}

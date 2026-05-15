'use client'

import Spiral from '@/components/shared/Spiral'

interface NavProps {
  cartCount: number
  onOpenCart: () => void
  scrollY: number
  onNav: (id: string) => void
}

const links = [
  { id: 'categorias', label: 'Categorías' },
  { id: 'catalogo',   label: 'Catálogo' },
  { id: 'historia',   label: 'Historia' },
  { id: 'proceso',    label: 'Proceso' },
  { id: 'envios',     label: 'Envíos' },
  { id: 'contacto',   label: 'Contacto' },
]

export default function Nav({ cartCount, onOpenCart, scrollY, onNav }: NavProps) {
  const isDark = scrollY > 80 && scrollY < 720

  return (
    <nav className={`nav${isDark ? ' is-dark' : ''}`}>
      <a className="nav__logo" onClick={() => onNav('top')} href="#top">
        <span className="nav__logo-mark">
          <Spiral size={20} stroke={isDark ? '#0a1622' : '#f4ede0'} thickness={1.2} turns={3.2} />
        </span>
        <span>Fusión Espiral</span>
      </a>
      <div className="nav__links">
        {links.map(l => (
          <a key={l.id} onClick={() => onNav(l.id)}>{l.label}</a>
        ))}
      </div>
      <div className="nav__actions">
        <button className="nav__cart" onClick={onOpenCart}>
          <span>Bolsa</span>
          <span className="nav__cart-count">{cartCount}</span>
        </button>
      </div>
    </nav>
  )
}

'use client'

import { useState } from 'react'
import { useCart } from '@/hooks/useCart'
import { useScrollY } from '@/hooks/useScrollY'
import Nav from '@/components/layout/Nav'
import Ticker from '@/components/layout/Ticker'
import FabWhatsApp from '@/components/layout/FabWhatsApp'
import CartDrawer from '@/components/cart/CartDrawer'
import HeroEditorial from '@/components/home/HeroEditorial'
import Categories from '@/components/home/Categories'
import About from '@/components/home/About'
import Process from '@/components/home/Process'
import Shipping from '@/components/home/Shipping'
import Instagram from '@/components/home/Instagram'
import Contact from '@/components/home/Contact'
import Footer from '@/components/home/Footer'
import Catalog from '@/components/catalog/Catalog'
import QuickView from '@/components/catalog/QuickView'
import type { Product } from '@/types'

export default function ShopClient() {
  const { cart, addToCart, updateQty, removeItem } = useCart()
  const scrollY = useScrollY()
  const [cartOpen, setCartOpen] = useState(false)
  const [quick, setQuick] = useState<Product | null>(null)
  const [presetCat, setPresetCat] = useState<string | null>(null)

  const onNav = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  const onPickCat = (id: string) => {
    setPresetCat(id)
    setTimeout(() => onNav('catalogo'), 60)
  }

  const onWA = () => {
    window.open(
      'https://wa.me/56995030144?text=' +
        encodeURIComponent('Hola Fusión Espiral, me gustaría preguntar por una pieza ✨'),
      '_blank'
    )
  }

  const cartCount = cart.reduce((a, b) => a + b.qty, 0)

  return (
    <div className="shell">
      <Nav
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        scrollY={scrollY}
        onNav={onNav}
      />

      <HeroEditorial onShop={() => onNav('catalogo')} onCustom={onWA} />
      <Ticker />
      <Categories onPick={onPickCat} />
      <Catalog onQuick={setQuick} presetCat={presetCat} />
      <About />
      <Process />
      <Shipping />
      <Instagram />
      <Contact />
      <Footer />

      {quick && (
        <QuickView
          product={quick}
          onClose={() => setQuick(null)}
          onAdd={item => { addToCart(item); setQuick(null) }}
        />
      )}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onQty={updateQty}
        onRemove={removeItem}
      />

      <FabWhatsApp onClick={onWA} />
    </div>
  )
}

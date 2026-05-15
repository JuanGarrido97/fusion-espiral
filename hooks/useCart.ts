'use client'

import { useState, useEffect, useCallback } from 'react'
import type { CartItem } from '@/types'

const STORAGE_KEY = 'fe_cart'

function loadCart(): CartItem[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    setCart(loadCart())
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = useCallback((item: CartItem) => {
    setCart(prev => {
      const i = prev.findIndex(
        p => p.id === item.id && p.variantId === item.variantId && p.size === item.size
      )
      if (i >= 0) {
        const next = [...prev]
        next[i] = { ...next[i], qty: next[i].qty + item.qty }
        return next
      }
      return [...prev, item]
    })
  }, [])

  const updateQty = useCallback((index: number, delta: number) => {
    setCart(prev =>
      prev.map((p, i) => i === index ? { ...p, qty: Math.max(1, p.qty + delta) } : p)
    )
  }, [])

  const removeItem = useCallback((index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }, [])

  return { cart, addToCart, updateQty, removeItem }
}

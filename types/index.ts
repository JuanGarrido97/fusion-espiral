export interface ProductVariant {
  id: string
  name: string
  color: string
}

export interface ProductSize {
  value: string
}

export interface Product {
  id: string
  name: string
  cat: string
  catId: string
  price: number
  img?: string
  desc: string
  materials: string[]
  variants: ProductVariant[]
  sizes?: string[]
  details: Record<string, string>
}

export interface Category {
  id: string
  name: string
  count: number
  tone: string
  layout: string
}

export interface ProcessStep {
  num: string
  name: string | Array<string | { it: string }>
  desc: string
}

export interface ShippingRegion {
  region: string
  time: string
}

export interface CartItem extends Product {
  qty: number
  variantId: string
  variantName: string
  size?: string
}

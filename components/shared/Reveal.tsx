'use client'

import { useRef, useState, useEffect } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number
  as?: keyof React.JSX.IntrinsicElements
  className?: string
  [key: string]: unknown
}

export default function Reveal({
  children,
  delay,
  as: Tag = 'div',
  className = '',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setSeen(true)),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  const classes = [
    'reveal',
    seen ? 'is-in' : '',
    delay ? `reveal--d${delay}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    // @ts-expect-error — dynamic tag with ref
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}

import type { CSSProperties } from 'react'
import Image from 'next/image'
import Spiral from './Spiral'

interface PHProps {
  label?: string
  dark?: boolean
  ratio?: string
  withSpiral?: boolean
  style?: CSSProperties
  className?: string
  src?: string
  alt?: string
}

export default function PH({
  label,
  dark,
  ratio,
  withSpiral,
  style,
  className = '',
  src,
  alt,
}: PHProps) {
  if (src) {
    return (
      <div
        className={`ph ph--photo ${className}`}
        style={{ aspectRatio: ratio, ...(style || {}) }}
      >
        <Image
          src={src}
          alt={alt || label || ''}
          fill
          sizes="(max-width: 880px) 100vw, 33vw"
          quality={65}
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
      </div>
    )
  }

  return (
    <div
      className={`ph${dark ? ' dark' : ''} ${className}`}
      style={{ aspectRatio: ratio, ...(style || {}) }}
    >
      {withSpiral && (
        <div className="ph-spiral">
          <Spiral size={140} stroke={dark ? '#f4ede0' : '#0f2a44'} thickness={1} turns={4.5} />
        </div>
      )}
      {label && <span className="ph-label">{label}</span>}
    </div>
  )
}

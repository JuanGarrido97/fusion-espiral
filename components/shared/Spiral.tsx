interface SpiralProps {
  size?: number
  stroke?: string
  thickness?: number
  turns?: number
}

export default function Spiral({
  size = 28,
  stroke = 'currentColor',
  thickness = 1.4,
  turns = 3.4,
}: SpiralProps) {
  const cx = size / 2
  const cy = size / 2
  const maxR = size / 2 - thickness
  const steps = 200
  const points: [number, number][] = []

  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const angle = t * turns * Math.PI * 2
    const r = maxR * t
    points.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)])
  }

  const d = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(2)} ${p[1].toFixed(2)}`)
    .join(' ')

  return (
    <svg
      className="spiral-mark"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden
    >
      <circle
        cx={cx}
        cy={cy}
        r={maxR + thickness * 0.4}
        fill="none"
        stroke={stroke}
        strokeWidth={thickness * 0.6}
        opacity="0.4"
      />
      <path d={d} fill="none" stroke={stroke} strokeWidth={thickness} strokeLinecap="round" />
    </svg>
  )
}

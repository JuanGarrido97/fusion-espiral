import React from 'react'

type MixedPart = string | { it: string }

interface MixedProps {
  parts: string | MixedPart[]
}

export default function Mixed({ parts }: MixedProps) {
  if (typeof parts === 'string') return <>{parts}</>

  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === 'string') {
          return (
            <React.Fragment key={i}>
              {i > 0 ? ' ' : ''}
              {p}
            </React.Fragment>
          )
        }
        return (
          <React.Fragment key={i}>
            {i > 0 ? ' ' : ''}
            <span className="display-italic" style={{ color: 'var(--blue-soft)' }}>
              {p.it}
            </span>
          </React.Fragment>
        )
      })}
    </>
  )
}

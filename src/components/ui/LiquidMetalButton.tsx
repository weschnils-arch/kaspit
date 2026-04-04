import type React from 'react'
import { useCallback, useRef, useState } from 'react'

interface LiquidMetalButtonProps {
  label?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function LiquidMetalButton({
  label = 'Get Started',
  onClick,
  className = '',
  type = 'button',
}: LiquidMetalButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleId = useRef(0)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const ripple = { x, y, id: rippleId.current++ }
        setRipples((prev) => [...prev, ripple])
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== ripple.id))
        }, 600)
      }
      onClick?.()
    },
    [onClick],
  )

  return (
    <>
      <style>{`
        @property --lm-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes lm-spin {
          from { --lm-angle: 0deg; }
          to { --lm-angle: 360deg; }
        }
        @keyframes lm-ripple {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
        }
        .lm-ring {
          position: absolute;
          inset: 0;
          animation: lm-spin 4s linear infinite;
          background: conic-gradient(
            from var(--lm-angle),
            #606060 0%,
            #a8a8a8 8%,
            #e0e0e0 15%,
            #ffffff 20%,
            #c0c0c0 28%,
            #787878 35%,
            #989898 42%,
            #d8d8d8 50%,
            #ffffff 55%,
            #b0b0b0 62%,
            #686868 70%,
            #888888 78%,
            #cccccc 85%,
            #f0f0f0 90%,
            #989898 95%,
            #606060 100%
          );
        }
        .lm-ring:hover,
        button:hover .lm-ring {
          animation-duration: 2s;
          filter: brightness(1.25);
        }
        .lm-fill {
          position: absolute;
          inset: 1px;
          background: linear-gradient(180deg, #181818 0%, #0a0a0a 100%);
        }
      `}</style>
      <button
        ref={buttonRef}
        type={type}
        className={`${className}`}
        style={{
          position: 'relative',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          outline: 'none',
          padding: 0,
          transform: isPressed ? 'scale(0.98)' : 'scale(1)',
          transition: 'transform 0.15s ease',
          overflow: 'hidden',
        }}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setIsPressed(false) }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        aria-label={label}
      >
        {/* Spinning metallic ring — fills entire button */}
        <div className="lm-ring" />
        {/* Dark inner fill — 1px inset for thin border */}
        <div className="lm-fill" />
        {/* Label on top */}
        <span
          style={{
            position: 'relative',
            zIndex: 2,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px 48px',
            fontSize: '0.875rem',
            color: isHovered ? '#d0d0d0' : '#909090',
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            transition: 'color 0.3s ease',
          }}
        >
          {label}
        </span>

        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            style={{
              position: 'absolute',
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
              pointerEvents: 'none',
              animation: 'lm-ripple 0.6s ease-out',
              zIndex: 20,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </button>
    </>
  )
}

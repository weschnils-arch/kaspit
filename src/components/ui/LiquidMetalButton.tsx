import { liquidMetalFragmentShader, ShaderMount } from '@paper-design/shaders'
import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import type React from 'react'
import { Link } from 'react-router-dom'

interface LiquidMetalButtonProps {
  label?: string
  onClick?: () => void
  to?: string
  colorScheme?: 'gold' | 'silver'
  style?: React.CSSProperties
  type?: 'button' | 'submit'
}

const SILVER_UNIFORMS = {
  u_repetition: 4,
  u_softness: 0.5,
  u_shiftRed: 0.3,
  u_shiftBlue: 0.3,
  u_distortion: 0,
  u_contour: 0,
  u_angle: 45,
  u_scale: 8,
  u_shape: 1,
  u_offsetX: 0.1,
  u_offsetY: -0.1,
}

const GOLD_UNIFORMS = {
  u_colorBack: [0.06, 0.04, 0.02, 1] as [number, number, number, number],
  u_colorTint: [0.85, 0.7, 0.35, 1] as [number, number, number, number],
  u_repetition: 4,
  u_softness: 0.5,
  u_shiftRed: 0.15,
  u_shiftBlue: -0.05,
  u_distortion: 0,
  u_contour: 0,
  u_angle: 45,
  u_scale: 8,
  u_shape: 1,
  u_offsetX: 0.1,
  u_offsetY: -0.1,
}

export function LiquidMetalButton({
  label = 'Get Started',
  onClick,
  to,
  colorScheme = 'silver',
  style,
  type = 'button',
}: LiquidMetalButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const shaderRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shaderMount = useRef<any>(null)
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const rippleId = useRef(0)

  const uniforms = useMemo(
    () => (colorScheme === 'silver' ? SILVER_UNIFORMS : GOLD_UNIFORMS),
    [colorScheme]
  )

  // Inject global styles once
  useEffect(() => {
    const styleId = 'shader-canvas-style-metal'
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style')
      style.id = styleId
      style.textContent = `
        .shader-container-metal canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }
        @keyframes metal-ripple {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  // Mount shader
  useEffect(() => {
    if (!shaderRef.current) return

    if (shaderMount.current?.destroy) {
      shaderMount.current.destroy()
    }

    try {
      shaderMount.current = new ShaderMount(
        shaderRef.current,
        liquidMetalFragmentShader,
        uniforms,
        undefined,
        0.6
      )
    } catch (error) {
      console.error('Failed to load shader:', error)
    }

    return () => {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy()
        shaderMount.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update uniforms when color scheme changes
  useEffect(() => {
    if (shaderMount.current?.setUniforms) {
      shaderMount.current.setUniforms(uniforms)
    }
  }, [uniforms])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    shaderMount.current?.setSpeed?.(1)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    setIsPressed(false)
    shaderMount.current?.setSpeed?.(0.6)
  }, [])

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (shaderMount.current?.setSpeed) {
        shaderMount.current.setSpeed(2.4)
        setTimeout(() => {
          shaderMount.current?.setSpeed?.(isHovered ? 1 : 0.6)
        }, 300)
      }

      const el = buttonRef.current
      if (el) {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const ripple = { x, y, id: rippleId.current++ }
        setRipples(prev => [...prev, ripple])
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== ripple.id))
        }, 600)
      }

      onClick?.()
    },
    [isHovered, onClick]
  )

  const inner = (
    <div style={{ position: 'relative', display: 'inline-block', ...style }}>
      <div style={{ perspective: '1000px', perspectiveOrigin: '50% 50%' }}>
        <div
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: '200px',
            height: '48px',
            transformStyle: 'preserve-3d',
            transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transform: 'none',
          }}
        >
          {/* Text layer — floats on top */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transformStyle: 'preserve-3d',
              transform: 'translateZ(20px)',
              zIndex: 30,
              pointerEvents: 'none',
              padding: '0 2rem',
            }}
          >
            <span
              style={{
                fontSize: '0.8125rem',
                color: '#666666',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textShadow: '0px 1px 2px rgba(0, 0, 0, 0.5)',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </span>
          </div>

          {/* Dark inner layer */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              transformStyle: 'preserve-3d',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease',
              transform: `translateZ(10px) ${isPressed ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)'}`,
              zIndex: 20,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '2px',
                left: '2px',
                right: '2px',
                bottom: '2px',
                background: 'linear-gradient(180deg, #202020 0%, #000000 100%)',
                boxShadow: isPressed
                  ? 'inset 0px 2px 4px rgba(0, 0, 0, 0.4), inset 0px 1px 2px rgba(0, 0, 0, 0.3)'
                  : 'none',
                transition: 'box-shadow 0.15s ease',
              }}
            />
          </div>

          {/* Shader layer — the liquid metal surface */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              transformStyle: 'preserve-3d',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease',
              transform: `translateZ(0px) ${isPressed ? 'translateY(1px) scale(0.98)' : 'translateY(0) scale(1)'}`,
              zIndex: 10,
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                boxShadow: isPressed
                  ? '0px 0px 0px 1px rgba(0, 0, 0, 0.5), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)'
                  : isHovered
                    ? '0px 0px 0px 1px rgba(0, 0, 0, 0.4), 0px 12px 6px 0px rgba(0, 0, 0, 0.05), 0px 8px 5px 0px rgba(0, 0, 0, 0.1), 0px 4px 4px 0px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.2)'
                    : '0px 0px 0px 1px rgba(0, 0, 0, 0.3), 0px 36px 14px 0px rgba(0, 0, 0, 0.02), 0px 20px 12px 0px rgba(0, 0, 0, 0.08), 0px 9px 9px 0px rgba(0, 0, 0, 0.12), 0px 2px 5px 0px rgba(0, 0, 0, 0.15)',
                transition: 'box-shadow 0.15s ease',
                background: 'rgb(0 0 0 / 0)',
              }}
            >
              <div
                ref={shaderRef}
                className="shader-container-metal"
                style={{
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>

          {/* Invisible clickable surface */}
          {!to && (
            <button
              type={type}
              ref={buttonRef as React.RefObject<HTMLButtonElement>}
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={() => setIsPressed(true)}
              onMouseUp={() => setIsPressed(false)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
                zIndex: 40,
                transformStyle: 'preserve-3d',
                transform: 'translateZ(25px)',
                overflow: 'hidden',
                padding: '0 2rem',
              }}
              aria-label={label}
            >
              {ripples.map(ripple => (
                <span
                  key={ripple.id}
                  style={{
                    position: 'absolute',
                    left: `${ripple.x}px`,
                    top: `${ripple.y}px`,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
                    pointerEvents: 'none',
                    animation: 'metal-ripple 0.6s ease-out',
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </div>
    </div>
  )

  if (to) {
    return (
      <Link
        to={to}
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        style={{
          display: 'inline-block',
          textDecoration: 'none',
          cursor: 'pointer',
          position: 'relative',
          zIndex: 40,
        }}
      >
        {inner}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            style={{
              position: 'absolute',
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%)',
              pointerEvents: 'none',
              animation: 'metal-ripple 0.6s ease-out',
            }}
          />
        ))}
      </Link>
    )
  }

  return inner
}

import { ShaderMount, liquidMetalFragmentShader } from '@paper-design/shaders'
import { useEffect, useRef, useState } from 'react'

interface LiquidMetalButtonProps {
  label: string
  style?: React.CSSProperties
  className?: string
}

export default function LiquidMetalButton({ label, style, className }: LiquidMetalButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const shaderRef = useRef<ShaderMount | null>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    shaderRef.current = new ShaderMount(
      containerRef.current,
      liquidMetalFragmentShader,
      {
        u_colorBack: [0.04, 0.05, 0.06, 1],
        u_colorTint: [0.82, 0.88, 0.94, 0.25],
        u_softness: 0,
        u_repetition: 1.8,
        u_shiftRed: 3.5,
        u_shiftBlue: 4.0,
        u_distortion: 0.3,
        u_contour: 0,
        u_angle: 38,
        u_shape: 0,
        u_isImage: false,
      },
      undefined,
      0.5
    )

    return () => {
      shaderRef.current?.dispose()
      shaderRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!shaderRef.current) return
    shaderRef.current.setUniforms({
      u_distortion: hovered ? 0.65 : 0.3,
    })
  }, [hovered])

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.875rem 2rem',
        cursor: 'pointer',
        borderRadius: 0,
        transition: 'transform 0.15s ease',
        transform: hovered ? 'scale(1.02)' : 'scale(1)',
        ...style,
      }}
    >
      {/* Shader canvas fills the background */}
      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Text label on top */}
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          fontSize: '0.875rem',
          fontWeight: 700,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: '#0a0b0e',
          whiteSpace: 'nowrap',
          textShadow: '0 1px 2px rgba(255,255,255,0.15)',
        }}
      >
        {label}
      </span>
    </div>
  )
}

import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseOpacity: number
}

/**
 * Constellation network effect for the hero section.
 * Sits inside its own positioned wrapper. Particles drift slowly,
 * connect to nearby neighbours, and gently pull toward the cursor.
 * Stronger lines are drawn between particles + mouse for the
 * "follows my pointer" feel.
 */
// Theme color palettes — RGB tuples used to build rgba strings inline
const PALETTES = {
  silver: {
    dot: '192, 198, 206',     // cool light grey
    line: '170, 178, 188',    // slightly darker grey for connections
    mouseLine: '210, 216, 224',
    glow: '210, 216, 224',
  },
  gold: {
    dot: '212, 196, 156',
    line: '201, 169, 110',
    mouseLine: '212, 196, 156',
    glow: '212, 196, 156',
  },
} as const

export default function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999, active: false })
  const particlesRef = useRef<Particle[]>([])
  const animRef = useRef<number>(0)
  const { theme } = useTheme()
  const paletteRef = useRef(PALETTES[theme])

  // Keep palette ref in sync with current theme so the animation loop
  // (which closes over the initial value) always reads the latest colors.
  useEffect(() => {
    paletteRef.current = PALETTES[theme]
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      // Density scales with area
      const target = Math.max(60, Math.floor((width * height) / 9000))
      particlesRef.current = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.4 + 0.6,
        baseOpacity: Math.random() * 0.45 + 0.25,
      }))
    }
    resize()

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height
      mouseRef.current = { x, y, active: inside }
    }
    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave)

    const CONNECT = 130
    const MOUSE_REACH = 180

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      const particles = particlesRef.current
      const mouse = mouseRef.current
      const palette = paletteRef.current

      // Update + draw particles
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        p.x = Math.max(0, Math.min(width, p.x))
        p.y = Math.max(0, Math.min(height, p.y))

        // Gentle drift toward mouse
        if (mouse.active) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_REACH && dist > 1) {
            const force = (1 - dist / MOUSE_REACH) * 0.0008
            p.vx += dx * force
            p.vy += dy * force
          }
        }

        // Clamp velocity
        const maxV = 0.35
        p.vx = Math.max(-maxV, Math.min(maxV, p.vx))
        p.vy = Math.max(-maxV, Math.min(maxV, p.vy))

        // Slight friction so they don't spiral away
        p.vx *= 0.995
        p.vy *= 0.995

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${palette.dot}, ${p.baseOpacity})`
        ctx.fill()
      }

      // Particle ↔ particle connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < CONNECT) {
            const alpha = (1 - dist / CONNECT) * 0.22
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(${palette.line}, ${alpha})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      // Particle ↔ mouse connections — the "follows the cursor" feeling
      if (mouse.active) {
        for (const p of particles) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_REACH) {
            const alpha = (1 - dist / MOUSE_REACH) * 0.55
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(${palette.mouseLine}, ${alpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }

        // Subtle mouse glow
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 40)
        grad.addColorStop(0, `rgba(${palette.glow}, 0.18)`)
        grad.addColorStop(1, `rgba(${palette.glow}, 0)`)
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animRef.current)
      ro.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="absolute inset-y-0 right-0 w-full lg:w-[60%] pointer-events-none"
      style={{
        // Fade the left edge so it blends behind text on smaller screens
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, #000 45%, #000 100%)',
        maskImage:
          'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, #000 45%, #000 100%)',
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}

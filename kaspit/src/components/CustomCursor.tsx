import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`
      requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('mousemove', onMove)

    // Expand on interactive elements
    const addHover = () => {
      ring.style.width = '48px'
      ring.style.height = '48px'
      ring.style.borderColor = 'rgba(77, 110, 255, 0.6)'
      dot.style.opacity = '0'
    }
    const removeHover = () => {
      ring.style.width = '40px'
      ring.style.height = '40px'
      ring.style.borderColor = 'rgba(77, 110, 255, 0.4)'
      dot.style.opacity = '1'
    }

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          background: '#4D6EFF',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'opacity 0.2s ease',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(77, 110, 255, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />
    </>
  )
}

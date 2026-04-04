import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let nodes: Node[] = []
    const nodeCount = 80
    const connectionDistance = 150
    let mouse = { x: -1000, y: -1000 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createNodes = () => {
      nodes = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      }))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Mouse repulsion
        const dx = node.x - mouse.x
        const dy = node.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 200) {
          node.vx += (dx / dist) * 0.02
          node.vy += (dy / dist) * 0.02
        }

        // Dampen velocity
        node.vx *= 0.999
        node.vy *= 0.999

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 88, 184, ${node.opacity})`
        ctx.fill()
      })

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(59, 88, 184, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    const handleMouse = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY }
    }

    resize()
    createNodes()
    animate()

    window.addEventListener('resize', () => {
      resize()
      createNodes()
    })
    window.addEventListener('mousemove', handleMouse)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}

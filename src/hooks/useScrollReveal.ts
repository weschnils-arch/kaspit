import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal<T extends HTMLElement>(delay = 0) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const children = ref.current.querySelectorAll('[data-reveal]')
    const targets = children.length > 0 ? Array.from(children) : [ref.current]

    gsap.fromTo(
      targets,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [delay])

  return ref
}

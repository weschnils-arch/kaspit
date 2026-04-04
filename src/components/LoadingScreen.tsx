import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const rafRef = useRef<number>(0)
  const startRef = useRef<number>(0)

  useEffect(() => {
    const duration = 2400 // ms total loading time

    const animate = (timestamp: number) => {
      if (!startRef.current) startRef.current = timestamp
      const elapsed = timestamp - startRef.current
      const raw = Math.min(elapsed / duration, 1)

      // Ease out cubic for smooth deceleration near 100%
      const eased = 1 - Math.pow(1 - raw, 3)
      setProgress(Math.round(eased * 100))

      if (raw < 1) {
        rafRef.current = requestAnimationFrame(animate)
      } else {
        // Hold at 100% briefly, then exit
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 600) // wait for exit animation
        }, 300)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [onComplete])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Logo */}
          <motion.img
            src={`${import.meta.env.BASE_URL}images/kaspit-logo-full.webp`}
            alt="KASPIT Security Solutions"
            className="h-14 md:h-20 w-auto mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Progress bar container */}
          <div className="w-48 md:w-64">
            {/* Bar track */}
            <div className="h-[1px] w-full bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-white/70"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.05 }}
              />
            </div>

            {/* Percentage */}
            <div className="mt-4 flex justify-between items-baseline">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-white/30 font-light">
                Loading
              </span>
              <span className="text-[0.75rem] tracking-[0.15em] text-white/50 font-light tabular-nums">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

type AccentMode = 'gold' | 'silver'

interface ThemeContextType {
  accent: AccentMode
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  accent: 'gold',
  toggle: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [accent, setAccent] = useState<AccentMode>('gold')

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent)
  }, [accent])

  const toggle = () => setAccent(a => a === 'gold' ? 'silver' : 'gold')

  return (
    <ThemeContext.Provider value={{ accent, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

import { useEffect } from 'react'

const PREFIX = 'KASPIT'

/**
 * Sets <title> on mount and restores the default on unmount.
 * Brand prefix is prepended automatically — pass the page-specific portion.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = `${PREFIX} · ${title}`
    return () => {
      document.title = previous
    }
  }, [title])
}

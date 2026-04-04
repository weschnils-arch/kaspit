import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import LiquidMetalButton from './LiquidMetalButton'

interface MetalCTAProps {
  to: string
  label: string
  icon?: React.ReactNode
  className?: string
  width?: number
  height?: number
  variant?: 'primary' | 'outline'
  fullWidth?: boolean
}

export default function MetalCTA({
  to,
  label,
  icon,
  className = '',
  variant = 'primary',
}: MetalCTAProps) {
  const { theme } = useTheme()

  // Outline buttons stay as-is in both modes
  if (variant === 'outline') {
    return (
      <Link to={to} className={`btn-outline ${className}`}>
        {label}
        {icon}
      </Link>
    )
  }

  // Gold mode = normal btn-primary
  if (theme === 'gold') {
    return (
      <Link to={to} className={`btn-primary ${className}`}>
        {label}
        {icon}
      </Link>
    )
  }

  // Silver mode = liquid metal shader button (auto-sized)
  return (
    <Link to={to} className={`inline-block ${className}`}>
      <LiquidMetalButton label={label} />
    </Link>
  )
}

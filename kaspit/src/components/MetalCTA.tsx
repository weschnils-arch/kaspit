import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import LiquidMetalButton from './LiquidMetalButton'

interface MetalCTAProps {
  to: string
  label: string
  secondary?: boolean
  style?: React.CSSProperties
  className?: string
}

export default function MetalCTA({ to, label, secondary = false, style, className }: MetalCTAProps) {
  const { accent } = useTheme()

  if (accent === 'silver' && !secondary) {
    return (
      <Link to={to} style={{ textDecoration: 'none', display: 'inline-block' }}>
        <LiquidMetalButton label={label} style={style} className={className} />
      </Link>
    )
  }

  if (secondary) {
    return (
      <Link to={to} className={`btn-secondary ${className ?? ''}`} style={style}>
        {label}
      </Link>
    )
  }

  return (
    <Link to={to} className={`btn-primary ${className ?? ''}`} style={style}>
      <span>{label}</span>
    </Link>
  )
}

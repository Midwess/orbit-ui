import {
  forwardRef,
  type ButtonHTMLAttributes,
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { Icon, type IconName } from '../../components/ui/Icon'

export type ButtonTone = 'accent' | 'neutral' | 'quiet' | 'danger'
export type ButtonSize = 'default' | 'compact'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: ButtonTone
  size?: ButtonSize
  icon?: IconName
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { tone = 'neutral', size = 'default', icon, children, className = '', type = 'button', ...props },
  ref,
) {
  return <button ref={ref} type={type} className={`u-button u-button--${tone} u-button--${size} ${className}`.trim()} {...props}>{icon ? <Icon name={icon} size={18} /> : null}<span>{children}</span></button>
})

export type IconActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  icon: IconName
}

export const IconAction = forwardRef<HTMLButtonElement, IconActionProps>(function IconAction(
  { label, icon, className = '', type = 'button', ...props },
  ref,
) {
  return <button ref={ref} type={type} className={`u-icon-action ${className}`.trim()} aria-label={label} title={label} {...props}><Icon name={icon} size={19} /></button>
})

export type SurfaceTone = 'base' | 'coral' | 'violet' | 'cyan' | 'sage' | 'yellow'
export type SurfaceProps = HTMLAttributes<HTMLElement> & { tone?: SurfaceTone }

export const Surface = forwardRef<HTMLElement, SurfaceProps>(function Surface(
  { tone = 'base', className = '', children, ...props },
  ref,
) {
  return <section ref={ref} className={`u-surface u-surface--${tone} ${className}`.trim()} {...props}>{children}</section>
})

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'accent' | 'violet'
export type BadgeProps = HTMLAttributes<HTMLSpanElement> & { tone?: BadgeTone }

export function Badge({ tone = 'neutral', className = '', children, ...props }: BadgeProps) {
  return <span className={`u-badge u-badge--${tone} ${className}`.trim()} {...props}>{children}</span>
}

export type AvatarSize = 'small' | 'default' | 'large'
export type AvatarProps = HTMLAttributes<HTMLSpanElement> & { name: string; color?: string; size?: AvatarSize }

export function Avatar({ name, color = 'var(--u-violet)', size = 'default', className = '', ...props }: AvatarProps) {
  const initials = name.split(/\s+/).filter(Boolean).map((part) => part[0]).slice(0, 2).join('').toUpperCase()
  return <span className={`u-avatar u-avatar--${size} ${className}`.trim()} style={{ '--avatar-color': color } as CSSProperties} aria-label={name} {...props}>{initials}</span>
}

export function AvatarGroup({ people, className = '', ...props }: HTMLAttributes<HTMLSpanElement> & { people: Array<Pick<AvatarProps, 'name' | 'color'>> }) {
  return <span className={`u-avatar-group ${className}`.trim()} {...props}>{people.map((person) => <Avatar key={person.name} name={person.name} color={person.color} size="small" />)}</span>
}

export function ProgressBar({ value, label }: { value: number; label: string }) {
  const normalizedValue = Math.min(100, Math.max(0, value))
  return <div className="u-progress" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={normalizedValue}><span><span>{label}</span><b>{normalizedValue}%</b></span><i><i style={{ width: `${normalizedValue}%` }} /></i></div>
}

export function ViewHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: ReactNode }) {
  return <header className="u-view-heading"><div><span>{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action}</header>
}

export function SectionTitle({ title, meta, action }: { title: string; meta?: string; action?: ReactNode }) {
  return <header className="u-section-title"><div><h2>{title}</h2>{meta ? <p>{meta}</p> : null}</div>{action}</header>
}

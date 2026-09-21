import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Reveal({
	children,
	className = '',
	style,
}: {
	children: ReactNode
	className?: string
	style?: React.CSSProperties
}) {
	const ref = useReveal<HTMLDivElement>()
	return (
		<div ref={ref} className={`reveal ${className}`} style={style}>
			{children}
		</div>
	)
}

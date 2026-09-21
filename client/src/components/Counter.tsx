import { useEffect, useState } from 'react'

export default function Counter({
	value,
	suffix = '',
}: {
	value: number
	suffix?: string
}) {
	const [display, setDisplay] = useState(0)

	useEffect(() => {
		const reduceMotion =
			window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
		if (reduceMotion) {
			setDisplay(value)
			return
		}
		let raf = 0
		let start: number | null = null
		const duration = 700
		function step(ts: number) {
			if (start === null) start = ts
			const progress = Math.min((ts - start) / duration, 1)
			const eased = 1 - (1 - progress) ** 3
			setDisplay(Math.round(eased * value))
			if (progress < 1) raf = requestAnimationFrame(step)
		}
		raf = requestAnimationFrame(step)
		return () => cancelAnimationFrame(raf)
	}, [value])

	return (
		<>
			{display}
			{suffix}
		</>
	)
}

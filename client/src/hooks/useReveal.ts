import { useEffect, useRef } from 'react'

/** Adds the `.in` class once the element enters the viewport, and leaves it
 * alone (no opacity:0 lock-in) when the user prefers reduced motion. */
export function useReveal<T extends HTMLElement>() {
	const ref = useRef<T | null>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		const reduceMotion = window.matchMedia?.(
			'(prefers-reduced-motion: reduce)'
		).matches
		if (reduceMotion || !('IntersectionObserver' in window)) {
			el.classList.add('in')
			return
		}

		const io = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.classList.add('in')
					io.unobserve(el)
				}
			},
			{ threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
		)
		io.observe(el)
		return () => io.disconnect()
	}, [])

	return ref
}

import { useEffect, useState } from 'react'

// The menus mark the section being read.
export function useActiveSection() {
	const [active, setActive] = useState('')

	useEffect(() => {
		const spy = new IntersectionObserver(
			entries => {
				entries.forEach(e => {
					if (e.isIntersecting) setActive(e.target.id)
				})
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		)
		document.querySelectorAll('main > section').forEach(s => spy.observe(s))
		return () => spy.disconnect()
	}, [])

	return active
}

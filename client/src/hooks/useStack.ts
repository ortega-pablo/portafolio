import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import type { StackHandle } from '../three/createStack'
import { stages } from '../data/content'

type StackRefs = {
	canvas: RefObject<HTMLCanvasElement | null>
	host: RefObject<HTMLDivElement | null>
	hero: RefObject<HTMLElement | null>
	rows: RefObject<HTMLOListElement | null>
	note: RefObject<HTMLParagraphElement | null>
}

type NetworkNavigator = Navigator & { connection?: { saveData?: boolean } }

function hasWebGL() {
	try {
		const c = document.createElement('canvas')
		return !!(c.getContext('webgl2') || c.getContext('webgl'))
	} catch {
		return false
	}
}

function afterLoad(run: () => void) {
	const later = () => {
		if ('requestIdleCallback' in window) window.requestIdleCallback(run)
		else setTimeout(run, 200)
	}
	if (document.readyState === 'complete') later()
	else window.addEventListener('load', later, { once: true })
}

// Three.js arrives after the text. If it cannot, or less motion was requested, the still image stays.
export function useStack({ canvas, host, hero, rows, note }: StackRefs) {
	const stack = useRef<StackHandle | null>(null)
	const [live, setLive] = useState(false)
	const [paused, setPaused] = useState(false)

	useEffect(() => {
		const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
		const saveData = (navigator as NetworkNavigator).connection?.saveData
		if (reduce || saveData || !hasWebGL()) return

		let cancelled = false
		afterLoad(async () => {
			if (
				cancelled ||
				!canvas.current ||
				!host.current ||
				!hero.current ||
				!rows.current ||
				!note.current
			)
				return
			try {
				const { createStack } = await import('../three/createStack')
				if (cancelled) return
				const handle = createStack({
					canvas: canvas.current,
					host: host.current,
					hero: hero.current,
					rows: rows.current,
					note: note.current,
					names: stages.map(s => s.name),
					compact: window.matchMedia('(max-width: 1100px)'),
				})
				if (!handle) return
				stack.current = handle
				await document.fonts
					.load('800 66px Anybody', 'Descubrir')
					.catch(() => [])
				if (cancelled) return
				handle.setLayers()
				setLive(true)
			} catch {
				// Without the 3D chunk the still image is the graphic.
			}
		})

		return () => {
			cancelled = true
			stack.current?.dispose()
			stack.current = null
		}
	}, [canvas, host, hero, rows, note])

	const togglePause = useCallback(() => {
		setPaused(value => {
			stack.current?.setPaused(!value)
			return !value
		})
	}, [])

	const focusStage = useCallback((stage: number | null) => {
		stack.current?.focus(stage)
	}, [])

	return { live, paused, togglePause, focusStage }
}

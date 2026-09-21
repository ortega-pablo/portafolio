import { useEffect, useRef } from 'react'

type Node = { x: number; y: number; vx: number; vy: number }

export default function HeroCanvas() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const hero = canvas?.closest('.hero') as HTMLElement | null
		if (!canvas || !hero) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const reduceMotion =
			window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
		const dpr = Math.min(window.devicePixelRatio || 1, 2)
		let width = 0
		let height = 0
		let nodes: Node[] = []
		let raf = 0
		let running = !reduceMotion

		function colorVar(name: string): string {
			const v = getComputedStyle(document.documentElement)
				.getPropertyValue(name)
				.trim()
			return v || '182,112,47'
		}

		function resize() {
			if (!hero || !canvas) return
			const rect = hero.getBoundingClientRect()
			width = rect.width
			height = rect.height
			canvas.width = width * dpr
			canvas.height = height * dpr
			canvas.style.width = `${width}px`
			canvas.style.height = `${height}px`
			ctx?.setTransform(dpr, 0, 0, dpr, 0, 0)
			const count = Math.max(
				18,
				Math.min(46, Math.round((width * height) / 26000))
			)
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * width,
				y: Math.random() * height,
				vx: (Math.random() - 0.5) * 0.25,
				vy: (Math.random() - 0.5) * 0.25,
			}))
		}

		function frame() {
			if (!ctx) return
			const lineColor = colorVar('--canvas-line')
			const dotColor = colorVar('--canvas-dot')
			ctx.clearRect(0, 0, width, height)

			for (const n of nodes) {
				n.x += n.vx
				n.y += n.vy
				if (n.x < 0 || n.x > width) n.vx *= -1
				if (n.y < 0 || n.y > height) n.vy *= -1
			}

			for (let a = 0; a < nodes.length; a++) {
				for (let b = a + 1; b < nodes.length; b++) {
					const dx = nodes[a].x - nodes[b].x
					const dy = nodes[a].y - nodes[b].y
					const dist = Math.sqrt(dx * dx + dy * dy)
					const maxDist = 150
					if (dist < maxDist) {
						const alpha = (1 - dist / maxDist) * 0.35
						ctx.strokeStyle = `rgba(${lineColor},${alpha.toFixed(3)})`
						ctx.lineWidth = 1
						ctx.beginPath()
						ctx.moveTo(nodes[a].x, nodes[a].y)
						ctx.lineTo(nodes[b].x, nodes[b].y)
						ctx.stroke()
					}
				}
			}

			for (const n of nodes) {
				ctx.fillStyle = `rgba(${dotColor},0.75)`
				ctx.beginPath()
				ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
				ctx.fill()
			}

			if (running) raf = requestAnimationFrame(frame)
		}

		resize()
		if (running) raf = requestAnimationFrame(frame)
		else frame()

		const onResize = () => resize()
		window.addEventListener('resize', onResize)

		const onVisibility = () => {
			if (document.hidden) {
				running = false
				cancelAnimationFrame(raf)
			} else if (!reduceMotion) {
				running = true
				raf = requestAnimationFrame(frame)
			}
		}
		document.addEventListener('visibilitychange', onVisibility)

		return () => {
			window.removeEventListener('resize', onResize)
			document.removeEventListener('visibilitychange', onVisibility)
			cancelAnimationFrame(raf)
		}
	}, [])

	return <canvas ref={canvasRef} className='hero-canvas' aria-hidden='true' />
}

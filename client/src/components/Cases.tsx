import { useEffect, useRef } from 'react'
import { cases, mainCase } from '../data/content'

export default function Cases() {
	const barsRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const bars = barsRef.current
		if (
			!bars ||
			window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
			bars.getBoundingClientRect().top <= window.innerHeight
		)
			return
		bars.classList.add('pre')
		const io = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					bars.classList.remove('pre')
					io.disconnect()
				}
			},
			{ threshold: 0.05 }
		)
		io.observe(bars)
		return () => io.disconnect()
	}, [])

	return (
		<section className='block wrap' id='casos'>
			<div className='head-row'>
				<h2 className='h2'>
					Problemas que <mark>resolví</mark>
				</h2>
			</div>
			<article className='case-main'>
				<h3>{mainCase.title}</h3>
				<p>{mainCase.body}</p>
				<div
					className='bars'
					ref={barsRef}
					role='img'
					aria-label='Comparación a escala: antes 17 minutos, después 5 segundos.'
				>
					<div className='bar-row'>
						<span className='bar-label'>Antes: 17&nbsp;min</span>
						<div className='bar before' />
					</div>
					<div className='bar-row'>
						<span className='bar-label'>Después: 5&nbsp;s</span>
						<div className='bar after' />
					</div>
					<span className='scale-note'>
						Las dos barras están dibujadas a escala.
					</span>
				</div>
			</article>
			<div className='cases'>
				{cases.map(c => (
					<article key={c.title}>
						<h3>{c.title}</h3>
						<p>{c.body}</p>
						<small>{c.tags}</small>
					</article>
				))}
			</div>
		</section>
	)
}

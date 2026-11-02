import { useRef, type CSSProperties } from 'react'
import { stages } from '../data/content'
import { useStack } from '../hooks/useStack'

export default function Hero() {
	const hero = useRef<HTMLElement>(null)
	const host = useRef<HTMLDivElement>(null)
	const canvas = useRef<HTMLCanvasElement>(null)
	const rows = useRef<HTMLOListElement>(null)
	const note = useRef<HTMLParagraphElement>(null)
	const { live, paused, togglePause, focusStage } = useStack({
		canvas,
		host,
		hero,
		rows,
		note,
	})

	return (
		<section className='hero' ref={hero}>
			<div className='wrap hero-in'>
				<h1>
					<span>Pablo </span>
					<span>Ortega</span>
				</h1>
				<p className='role'>
					Full-stack developer y <mark>tech lead</mark>
				</p>
				<div className='hero-cols'>
					<div className='intro'>
						<p className='where'>Mendoza, Argentina. Remoto.</p>
						<p className='pitch'>
							Llevo productos de la idea a producción, con TypeScript y Python.
							También formé y lideré equipos de hasta 12 desarrolladores.
						</p>
						<div className='cta'>
							<a className='btn' href='#casos'>
								Ver mi trabajo
							</a>
							<a className='btn alt' href='#contacto'>
								Escribirme
							</a>
						</div>
					</div>
					<div className={live ? 'stack3d live' : 'stack3d'} ref={host}>
						<picture>
							<source
								media='(max-width: 1100px)'
								srcSet='/img/stack-numeros.webp'
							/>
							<img
								src='/img/stack-nombres.webp'
								width={1040}
								height={1040}
								alt=''
								fetchPriority='high'
							/>
						</picture>
						<canvas ref={canvas} aria-hidden='true' />
						<button
							className={paused ? 'pause off' : 'pause'}
							type='button'
							aria-label={
								paused ? 'Reanudar la animación' : 'Pausar la animación'
							}
							hidden={!live}
							onClick={togglePause}
						>
							<svg className='stop' viewBox='0 0 16 16' aria-hidden='true'>
								<rect x='3' y='2' width='4' height='12' />
								<rect x='9' y='2' width='4' height='12' />
							</svg>
							<svg className='on' viewBox='0 0 16 16' aria-hidden='true'>
								<path d='M4 2l10 6-10 6z' />
							</svg>
						</button>
					</div>
					<div className='cycle'>
						<p className='cut-title'>
							Del relevamiento al soporte, con hasta 9 sistemas productivos a
							cargo a la vez.
						</p>
						<ol className='rows' role='list' ref={rows}>
							{stages.map((stage, i) => (
								<li
									key={stage.name}
									className='stage'
									style={{ '--c': `var(--l${i + 1})` } as CSSProperties}
									onMouseEnter={() => focusStage(i)}
									onMouseLeave={() => focusStage(null)}
								>
									<i aria-hidden='true'>{i + 1}</i>
									<span className='txt'>
										<b>{stage.name}</b>
										<span className='what'>{stage.detail}</span>
									</span>
								</li>
							))}
						</ol>
						<p className='cut-note' ref={note}>
							Lo que se aprende en producción vuelve al inicio.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

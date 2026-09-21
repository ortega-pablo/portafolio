import Reveal from './Reveal'
import { pipelineSteps, solveCards } from '../data/content'

export default function HowISolve() {
	return (
		<section>
			<div className='section-inner'>
				<div className='section-head'>
					<div className='head-text'>
						<span className='eyebrow'>MÉTODO</span>
						<h2>Cómo resuelvo sistemas</h2>
					</div>
					<span className='section-mark'>(b)</span>
				</div>
				<Reveal>
					<div className='solve-grid'>
						<div className='pipeline ticks'>
							<div className='flow-label'>
								FLUJO DE UN RELEVAMIENTO DE PRECIOS
							</div>
							{pipelineSteps.map(s => (
								<div className='flow-step' key={s.num}>
									<span className='flow-num'>{s.num}</span>
									<div>
										<strong>{s.title}</strong>
										<span>{s.detail}</span>
									</div>
								</div>
							))}
							<div className='note'>
								Price Lenz — flujo real, declarado en mi CV.
							</div>
						</div>
						<div className='solve-cards'>
							{solveCards.map(c => (
								<div className='solve-card' key={c.title}>
									<span className='eyebrow'>{c.eyebrow}</span>
									<h4>{c.title}</h4>
									<p>{c.body}</p>
									<div className='tags'>{c.tags}</div>
								</div>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	)
}

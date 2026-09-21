import Reveal from './Reveal'
import { projects, systems } from '../data/content'

export default function Projects() {
	return (
		<section id='proyectos'>
			<div className='section-inner'>
				<div className='section-head'>
					<div className='head-text'>
						<span className='eyebrow'>TRABAJO</span>
						<h2>Proyectos destacados</h2>
						<p>
							Tres productos que llevo de punta a punta, más los sistemas que
							sostengo o entregué en Mecantronic.
						</p>
					</div>
					<span className='section-mark'>(d)</span>
				</div>

				<div className='project-grid'>
					{projects.map(p => (
						<Reveal key={p.name} className='pcard ticks'>
							<div className='pcard-top'>
								<h3>{p.name}</h3>
								<span className={`pill ${p.status}`}>{p.statusLabel}</span>
							</div>
							<p>{p.body}</p>
							<div className='chip-row'>
								{p.chips.map(c => (
									<span className='chip' key={c}>
										{c}
									</span>
								))}
							</div>
						</Reveal>
					))}
				</div>

				<div className='systems-strip'>
					{systems.map(s => (
						<Reveal key={s.name} className='scard'>
							<div className='sname'>
								{s.name} {s.tag && <span className='tag'>{s.tag}</span>}
							</div>
							<p>{s.body}</p>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}

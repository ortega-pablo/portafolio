import Reveal from './Reveal'
import { timeline } from '../data/content'

export default function Experience() {
	return (
		<section className='alt' id='experiencia'>
			<div className='section-inner'>
				<div className='section-head'>
					<div className='head-text'>
						<span className='eyebrow'>TRAYECTORIA</span>
						<h2>Experiencia</h2>
						<p>
							Tres frentes en paralelo: liderazgo técnico en Mecantronic, un
							emprendimiento propio, y proyectos freelance de punta a punta.
						</p>
					</div>
					<span className='section-mark'>(c)</span>
				</div>

				<div className='timeline'>
					{timeline.map((item, i) => (
						<Reveal key={item.company} className='tl-item'>
							<div className='tl-date'>{item.date}</div>
							<div className='tl-spine'>
								<div className='tl-dot' />
								{i < timeline.length - 1 && <div className='tl-line' />}
							</div>
							<div className='tl-body'>
								<h3>{item.company}</h3>
								<div className='tl-role'>{item.role}</div>
								<div className='tl-date-mobile'>{item.date.toLowerCase()}</div>
								<ul>
									{item.bullets.map(b => (
										<li key={b}>{b}</li>
									))}
								</ul>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}

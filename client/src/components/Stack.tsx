import Reveal from './Reveal'
import { stackGroups } from '../data/content'

export default function Stack() {
	return (
		<section className='alt' id='stack'>
			<div className='section-inner'>
				<div className='section-head'>
					<div className='head-text'>
						<span className='eyebrow'>HERRAMIENTAS</span>
						<h2>Stack técnico</h2>
						<p>
							Lo que uso a diario, curado — no un inventario de todo lo que
							alguna vez toqué.
						</p>
					</div>
					<span className='section-mark'>(e)</span>
				</div>

				<Reveal>
					<div className='legend'>
						<span>
							<span className='dot core' /> núcleo diario
						</span>
						<span>
							<span className='dot also' /> también trabajado
						</span>
					</div>
				</Reveal>

				<Reveal>
					{stackGroups.map(group => (
						<div className='stackgroup' key={group.title}>
							<h4>{group.title}</h4>
							<div className='chips'>
								{group.chips.map(c => (
									<span
										className={`chip2 ${c.core ? 'core' : ''}`}
										key={c.label}
									>
										{c.label}
									</span>
								))}
							</div>
						</div>
					))}
				</Reveal>
			</div>
		</section>
	)
}

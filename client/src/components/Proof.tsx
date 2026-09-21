import Reveal from './Reveal'
import { proofPoints } from '../data/content'

export default function Proof() {
	return (
		<section className='alt'>
			<div className='section-inner'>
				<div className='section-head'>
					<div className='head-text'>
						<span className='eyebrow'>PRUEBA</span>
						<h2>Evidencia, no adjetivos</h2>
					</div>
					<span className='section-mark'>(a)</span>
				</div>
				<Reveal>
					<div className='proof-grid'>
						{proofPoints.map(p => (
							<div className='proof' key={p.title}>
								<span className='eyebrow'>{p.eyebrow}</span>
								<h3>{p.title}</h3>
								<p>{p.body}</p>
							</div>
						))}
					</div>
				</Reveal>
			</div>
		</section>
	)
}

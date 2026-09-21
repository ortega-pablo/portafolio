import Reveal from './Reveal'
import { education } from '../data/content'

export default function Education() {
	return (
		<section id='formacion'>
			<div className='section-inner'>
				<div className='section-head'>
					<div className='head-text'>
						<span className='eyebrow'>FORMACIÓN</span>
						<h2>Educación</h2>
					</div>
				</div>
				<Reveal>
					<ul className='edu-list'>
						{education.map(e => (
							<li key={e.name}>
								<div>
									<div className='ename'>{e.name}</div>
									<div className='eschool'>{e.school}</div>
								</div>
								<div className='estatus'>{e.status}</div>
							</li>
						))}
					</ul>
				</Reveal>
			</div>
		</section>
	)
}

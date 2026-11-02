import type { CSSProperties } from 'react'
import { alsoWorked, stackNote, strata } from '../data/content'

export default function Stack() {
	return (
		<section className='block' id='stack'>
			<div className='wrap'>
				<div className='head-row'>
					<h2 className='h2'>Stack</h2>
				</div>
				<p className='note'>{stackNote}</p>
			</div>
			<div className='strata'>
				{strata.map((stratum, i) => (
					<div
						key={stratum.title}
						className='stratum'
						style={{ '--c': `var(--l${i + 1})` } as CSSProperties}
					>
						<div className='wrap'>
							<h3>{stratum.title}</h3>
							<p>{stratum.items}</p>
						</div>
					</div>
				))}
			</div>
			<div className='wrap'>
				<p className='also'>{alsoWorked}</p>
			</div>
		</section>
	)
}

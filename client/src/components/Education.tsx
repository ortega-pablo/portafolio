import { education, languages } from '../data/content'

export default function Education() {
	return (
		<section className='block wrap' id='formacion'>
			<div className='head-row'>
				<h2 className='h2'>Formación</h2>
			</div>
			<div className='study'>
				<ul>
					{education.map(item => (
						<li key={item.name}>
							<div>
								<b>{item.name}</b>
								<span>{item.school}</span>
							</div>
							<span className='when'>{item.date}</span>
						</li>
					))}
				</ul>
				<div className='langs'>
					<h3>Idiomas</h3>
					<p>{languages}</p>
				</div>
			</div>
		</section>
	)
}

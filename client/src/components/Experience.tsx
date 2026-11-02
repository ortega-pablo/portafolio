import { jobs } from '../data/content'

export default function Experience() {
	return (
		<section className='block wrap' id='experiencia'>
			<div className='head-row'>
				<h2 className='h2'>Experiencia</h2>
			</div>
			{jobs.map(job => (
				<article className='job' key={job.company}>
					<span className='when'>{job.date}</span>
					<div>
						<h3>{job.company}</h3>
						<p className='pos'>{job.role}</p>
						<ul>
							{job.bullets.map(bullet => (
								<li key={bullet}>{bullet}</li>
							))}
						</ul>
					</div>
				</article>
			))}
		</section>
	)
}

import Reveal from './Reveal'
import { links } from '../data/content'

export default function Contact() {
	return (
		<section className='alt' id='contacto'>
			<div className='section-inner'>
				<Reveal className='contact'>
					<span className='eyebrow'>HABLEMOS</span>
					<h2 style={{ marginTop: 14 }}>¿Un proyecto en mente?</h2>
					<p
						style={{
							maxWidth: '52ch',
							color: 'var(--ink-soft)',
							marginTop: 14,
							fontSize: '1.05rem',
						}}
					>
						Estoy abierto a proyectos freelance y conversaciones sobre liderazgo
						técnico, productos con IA, o equipos de desarrollo que necesitan
						orden.
					</p>
					<div className='contact-row'>
						<a className='btn btn-primary' href={`mailto:${links.email}`}>
							{links.email}
						</a>
						<a
							className='btn btn-ghost'
							href={links.linkedin}
							target='_blank'
							rel='noreferrer'
						>
							LinkedIn
						</a>
						<a
							className='btn btn-ghost'
							href={links.github}
							target='_blank'
							rel='noreferrer'
						>
							GitHub
						</a>
					</div>
				</Reveal>
			</div>
		</section>
	)
}

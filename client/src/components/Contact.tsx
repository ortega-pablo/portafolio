import type { CSSProperties } from 'react'
import { cvUrl, links } from '../data/content'

export default function Contact() {
	return (
		<section className='block wrap' id='contacto'>
			<div className='head-row'>
				<h2 className='h2'>Escribime</h2>
			</div>
			<div className='doors'>
				<article
					className='door'
					style={{ '--c': 'var(--l1)' } as CSSProperties}
				>
					<h3>Si estás contratando</h3>
					<p>Trabajo en remoto desde Mendoza, Argentina.</p>
					<div className='acts'>
						<a className='btn' href={cvUrl} target='_blank' rel='noreferrer'>
							Descargar CV
						</a>
						<a
							className='btn alt'
							href={links.linkedin}
							target='_blank'
							rel='noreferrer'
						>
							Ver LinkedIn
						</a>
						<a
							className='btn alt'
							href={links.github}
							target='_blank'
							rel='noreferrer'
						>
							Ver GitHub
						</a>
					</div>
					<a className='mail' href={`mailto:${links.email}`}>
						{links.email}
					</a>
				</article>
				<article
					className='door'
					style={{ '--c': 'var(--l4)' } as CSSProperties}
				>
					<h3>Si tenés un proyecto</h3>
					<p>Contame qué querés construir y en qué etapa está.</p>
					<div className='acts'>
						<a className='btn' href={`mailto:${links.email}`}>
							{links.email}
						</a>
					</div>
				</article>
			</div>
		</section>
	)
}

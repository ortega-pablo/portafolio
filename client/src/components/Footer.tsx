import { links } from '../data/content'

export default function Footer() {
	return (
		<footer>
			<div className='footer-inner'>
				<span>
					© {new Date().getFullYear()} Pablo Ortega — Mendoza, Argentina
				</span>
				<div className='footer-links'>
					<a href={`mailto:${links.email}`}>Email</a>
					<a href={links.linkedin} target='_blank' rel='noreferrer'>
						LinkedIn
					</a>
					<a href={links.github} target='_blank' rel='noreferrer'>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	)
}

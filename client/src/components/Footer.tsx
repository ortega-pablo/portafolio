import { cvUrl } from '../data/content'

export default function Footer() {
	return (
		<footer>
			<div className='wrap foot-in'>
				<span suppressHydrationWarning>
					© {new Date().getFullYear()} Pablo Ortega, Mendoza, Argentina
				</span>
				<a href={cvUrl} target='_blank' rel='noreferrer'>
					Descargar CV
				</a>
			</div>
		</footer>
	)
}

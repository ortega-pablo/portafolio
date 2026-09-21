import ThemeToggleButton from './ThemeToggleButton'
import { links } from '../data/content'

export default function Nav() {
	return (
		<div className='nav'>
			<div className='nav-inner'>
				<a href='#top' className='wordmark'>
					<span className='dot' />
					PABLO ORTEGA
				</a>
				<nav className='nav-links'>
					<a href='#proyectos'>Proyectos</a>
					<a href='#experiencia'>Experiencia</a>
					<a href='#stack'>Stack</a>
					<a href='#contacto'>Contacto</a>
				</nav>
				<div className='nav-right'>
					<ThemeToggleButton />
					<a className='btn btn-primary' href={`mailto:${links.email}`}>
						Contactarme
					</a>
				</div>
			</div>
		</div>
	)
}

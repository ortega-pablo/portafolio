import { cvUrl } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'

const sections = [
	{ href: '#casos', label: 'Casos' },
	{ href: '#proyectos', label: 'Proyectos' },
	{ href: '#experiencia', label: 'Experiencia' },
	{ href: '#stack', label: 'Stack' },
]

function SectionLinks({ extra = [] }: { extra?: typeof sections }) {
	const active = useActiveSection()
	return [...sections, ...extra].map(s => (
		<a
			key={s.href}
			href={s.href}
			aria-current={s.href === `#${active}` ? 'true' : undefined}
		>
			{s.label}
		</a>
	))
}

export default function Nav() {
	return (
		<header className='top'>
			<div className='wrap top-in'>
				<a className='mark' href='#contenido'>
					Pablo Ortega
				</a>
				<nav className='links' aria-label='Secciones'>
					<SectionLinks />
				</nav>
				<a className='btn alt' href='#contacto'>
					Escribirme
				</a>
				<a className='btn' href={cvUrl} target='_blank' rel='noreferrer'>
					Descargar CV
				</a>
			</div>
		</header>
	)
}

export function BottomNav() {
	return (
		<nav className='bottom-nav' aria-label='Secciones'>
			<SectionLinks extra={[{ href: '#contacto', label: 'Escribirme' }]} />
		</nav>
	)
}

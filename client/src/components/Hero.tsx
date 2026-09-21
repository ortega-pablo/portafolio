import HeroCanvas from './HeroCanvas'
import Counter from './Counter'
import { stats } from '../data/content'

const cvUrl = import.meta.env.VITE_CV_URL

export default function Hero() {
	return (
		<section className='hero'>
			<HeroCanvas />
			<div className='blueprint' style={{ opacity: 0.22 }} />
			<div className='hero-inner'>
				<span className='eyebrow'>
					MENDOZA, ARGENTINA — DISPONIBLE EN REMOTO
				</span>
				<h1>
					Pablo
					<br />
					Ortega
				</h1>
				<div className='role'>Full-stack Developer &amp; Technical Leader</div>
				<p className='pitch'>
					Lidero equipos y construyo productos de software de punta a punta — de
					un SaaS de price intelligence a aplicaciones que hablan con
					dispositivos físicos por Bluetooth y NFC. Todo del lado del código, no
					del hardware.
				</p>
				<div className='cta-row'>
					<a href='#proyectos' className='btn btn-primary'>
						Ver proyectos
					</a>
					<a href='#experiencia' className='btn btn-ghost'>
						Mi trayectoria
					</a>
					{cvUrl ? (
						<a
							href={cvUrl}
							className='btn btn-ghost'
							target='_blank'
							rel='noreferrer'
						>
							Descargar CV
						</a>
					) : (
						<a
							href='#'
							className='btn btn-disabled'
							title='Disponible cuando el CV quede publicado en un link externo'
							aria-disabled='true'
							onClick={e => e.preventDefault()}
						>
							Descargar CV
						</a>
					)}
				</div>

				<div className='stat-strip'>
					{stats.map(s => (
						<div className='stat' key={s.label}>
							<div className='num'>
								<Counter value={s.value} suffix={s.suffix} />
							</div>
							<div className='label'>{s.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

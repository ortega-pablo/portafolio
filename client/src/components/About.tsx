import Reveal from './Reveal'

export default function About() {
	return (
		<section id='sobre-mi'>
			<div className='section-inner'>
				<div className='about-grid'>
					<Reveal>
						<span className='eyebrow'>SOBRE MÍ</span>
						<h2 style={{ marginTop: 10, fontSize: 'clamp(1.7rem,3vw,2.2rem)' }}>
							De la mecatrónica al liderazgo técnico
						</h2>
						<p style={{ marginTop: 20 }}>
							Empecé estudiando Ingeniería en Mecatrónica y terminé liderando un
							área de IT. Hoy coordino un equipo de desarrollo, mantengo
							sistemas en producción y en paralelo construyo mis propios
							productos: un SaaS de price intelligence y un emprendimiento de
							impresión 3D que cofundé.
						</p>
						<p>
							Me interesa lo que pasa en el cruce: un agente de IA que lee
							documentos para automatizar compras, una app que controla un dron
							por Bluetooth, un sistema que pasaba horas sin responder y hoy se
							usa de forma fluida. Siempre del lado del código — ahí es donde
							más aprendo.
						</p>
					</Reveal>
					<Reveal className='nameplate ticks'>
						<dl>
							<div className='row'>
								<dt>Rol actual</dt>
								<dd>Full-stack Dev &amp; Tech Lead</dd>
							</div>
							<div className='row'>
								<dt>Ubicación</dt>
								<dd>Mendoza, Argentina</dd>
							</div>
							<div className='row'>
								<dt>Modalidad</dt>
								<dd>Remoto</dd>
							</div>
							<div className='row'>
								<dt>Formación</dt>
								<dd>Bootcamp Soy Henry · UNCuyo</dd>
							</div>
							<div className='row'>
								<dt>Foco técnico</dt>
								<dd>TypeScript · Python · AWS</dd>
							</div>
							<div className='row'>
								<dt>Diferencial</dt>
								<dd>Liderazgo técnico &amp; IA aplicada</dd>
							</div>
						</dl>
					</Reveal>
				</div>
			</div>
		</section>
	)
}

import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { otherSystems, projects, type Project } from '../data/content'

type Opened = {
	project: Project
	first: number
}

export default function Projects() {
	const dialog = useRef<HTMLDialogElement>(null)
	const [opened, setOpened] = useState<Opened | null>(null)

	useEffect(() => {
		const d = dialog.current
		if (!d || !opened) return
		if (!d.open) d.showModal()
		if (opened.first) {
			d.querySelectorAll('img')[opened.first].scrollIntoView({ block: 'start' })
		}
	}, [opened])

	// The link opens the image on its own if there is no JavaScript or the visitor asks for a new tab.
	function openShots(e: MouseEvent, project: Project, first: number) {
		if (e.metaKey || e.ctrlKey || e.shiftKey || !dialog.current?.showModal)
			return
		e.preventDefault()
		setOpened({ project, first })
	}

	return (
		<section className='block wrap' id='proyectos'>
			<div className='head-row'>
				<h2 className='h2'>Proyectos</h2>
			</div>
			<p className='note'>
				Sistemas que llevé de punta a punta. Las capturas salen de cada uno
				corriendo en local, con los nombres ocultos.
			</p>
			<div className='tiles'>
				{projects.map(project => (
					<article
						key={project.name}
						className={project.wide ? 'tile wide' : 'tile'}
					>
						<div className='shot'>
							{project.shots.map((shot, i) => (
								<a
									key={shot.src}
									className={i ? 'zoom over' : 'zoom'}
									href={shot.src}
									aria-label={`Ampliar: ${shot.alt}`}
									onClick={e => openShots(e, project, i)}
								>
									<img
										src={shot.src}
										width={1600}
										height={1000}
										alt={shot.alt}
										loading='lazy'
									/>
								</a>
							))}
						</div>
						<h3>{project.name}</h3>
						<span className='status'>{project.status}</span>
						<p>{project.body}</p>
						<p className='tech'>{project.tech}</p>
					</article>
				))}
			</div>

			<div className='index'>
				<div className='head-row'>
					<h3>También pasaron por mis manos</h3>
				</div>
				{otherSystems.map(system => (
					<details key={system.name}>
						<summary>
							<b>{system.name}</b>
							<span>{system.tag}</span>
						</summary>
						<p>{system.body}</p>
					</details>
				))}
			</div>

			<dialog
				className='lightbox'
				ref={dialog}
				aria-labelledby='lb-title'
				onClose={() => setOpened(null)}
				onClick={e => {
					if (e.target === e.currentTarget) e.currentTarget.close()
				}}
			>
				<div className='lb-head'>
					<p className='lb-title' id='lb-title'>
						{opened?.project.name}
					</p>
					<form method='dialog'>
						<button className='lb-close' aria-label='Cerrar la captura'>
							<span aria-hidden='true'>×</span>
						</button>
					</form>
				</div>
				<div className='lb-imgs'>
					{opened?.project.shots.map(shot => (
						<img
							key={shot.src}
							src={shot.src}
							width={1600}
							height={1000}
							alt={shot.alt}
						/>
					))}
				</div>
			</dialog>
		</section>
	)
}

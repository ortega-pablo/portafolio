/* import { MdOutlinePreview } from "react-icons/md";
import { SiGithub } from "react-icons/si"; */
import Modals from './modalTools/Modals'
import projects from './modalTools/projects'

function Portfolio() {
	return (
		<section
			name='portfolio'
			className='w-full min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-bgLight-2 via-bgLight-2 to-bgLight-1 dark:from-bgDark-1 dark:via-bgDark-1 dark:to-bgDark-2'
		>
			<div className='container w-full max-w-screen-lg px-10 mx-auto flex flex-col justify-center text-text-3 dark:text-text-3'>
				<div className='pb-8'>
					<h2 className='text-4xl text-text-5 font-bold inline border-b-4 border-primary-2 dark:text-text-1 dark:border-primary-1'>
						Portafolio
					</h2>
					<p className='py-6'>
						En esta sección puedes ver algunos de mis trabajos.
					</p>
				</div>

				<div className=' grid justify-items-center justyfy-center gap-12 px-6 '>
					{projects.map(project => (
						<Modals project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Portfolio

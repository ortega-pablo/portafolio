/* import { MdOutlinePreview } from "react-icons/md";
import { SiGithub } from "react-icons/si"; */
import Modals from './modalTools/Modals'
import projects from './modalTools/projects'

function Portfolio() {
	return (
		<section
			name='portfolio'
			className='w-full min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-black to-gray-800'
		>
			<div className='container w-full max-w-screen-lg px-10 mx-auto flex flex-col justify-center text-white'>
				<div className='pb-8'>
					<h2 className='text-4xl font-bold inline border-b-4 border-blue-500'>
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

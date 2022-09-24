/* import { MdOutlinePreview } from "react-icons/md";
import { SiGithub } from "react-icons/si"; */
import Modals from './Modals'
import projects from './projects'

function Portfolio() {
	return (
		<section
			name='portfolio'
			className='bg-gradient-to-b pt-20 from-black to-gray-800 w-full  text-white'
		>
			<div className='max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<h2 className='text-4xl font-bold inline border-b-4 border-blue-500'>
						Portafolio
					</h2>
					<p className='py-6'>
						En esta sección puedes ver algunos de mis trabajos.
					</p>
				</div>

				<div className=' grid justify-items-center justyfy-center gap-8 px-6 '>
					{projects.map(project => (
						<Modals project={project} />
					))}
				</div>
			</div>
		</section>
	)
}

export default Portfolio

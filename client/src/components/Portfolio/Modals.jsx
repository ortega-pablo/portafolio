import { useState } from 'react'
import { MdOutlinePreview } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'
import Modal from './Modal'

function Modals({ project }) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<section
			key={project.id}
			className=' flex flex-col items-center justify-center shadow-md bg-stone-900 shadow-stone-600 rounded-lg'
		>
			<button type='button' onClick={() => setIsOpen(true)}>
				<h3 className=' py-2 text-xl '>{project.name}</h3>

				<img
					src={project.images[0]}
					alt=''
					className='rounded-md duration-200 hover:scale-110 w-full'
				/>

				<div className=' py-2 px-2 text-center text-gray-500 '>
					{project.resume}
				</div>
			</button>
			{isOpen && <Modal setIsOpen={setIsOpen} project={project} />}
			<div className='flex items-center justify-center w-full h-10'>
				<a
					className=' flex flex-row items-center justify-center w-1/2 px-6 py-3 m-4 duration-200 text-gray-500 hover:scale-110 hover:text-white'
					href={project.page}
				>
					Demo <MdOutlinePreview className=' ml-4 ' />
				</a>
				<a
					className=' flex flex-row items-center justify-center w-1/2 px-6 py-3 m-4 duration-200 text-gray-500 hover:scale-110 hover:text-white '
					href={project.repository}
				>
					Código <SiGithub className=' ml-4 ' />
				</a>
			</div>
		</section>
	)
}

export default Modals

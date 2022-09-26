import { useState } from 'react'

import Modal from './Modal'
import TechIcons from '../../../Utils/TechIcons'

function Modals({ project }) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<section
			key={project.id}
			className=' shadow-md max-w-xs bg-stone-900 shadow-stone-700 rounded-md sm:max-w-xl md:max-w-2xl xl:max-w-4xl'
		>
			<button
				type='button'
				onClick={() => setIsOpen(true)}
				className=' grid  items-center content-center duration-200 hover:scale-105 sm:grid-cols-2 sm:grid-rows-7'
			>
				<div className='  py-2 sm:col-span-2 sm:row-span-1'>
					<h3 className=' text-xl '>{project.name}</h3>
				</div>

				<div className=' sm:row-span-6 '>
				<img
					src={project.images[0]}
					alt=''
					className='rounded-md w-full py-2'
				/>
				</div>

				<div className=' py-2 px-2 text-center text-gray-400 sm:col-span-1 sm:col-start-2 sm:row-span-3'>
					<p>{project.resume}</p>
				</div>

				<div className=' py-2 px-2 text-gray-400 sm:hidden '>
					<TechIcons technologies={project.technologies} size={24} />
				</div>

				<div className=' hidden py-2 px-2 text-gray-400 sm:inline sm:col-span-1 sm:col-start-2 sm:row-span-3'>
					<TechIcons technologies={project.technologies} size={30} />
				</div>

				
			</button>
			{isOpen && <Modal setIsOpen={setIsOpen} project={project} />}
		</section>
	)
}

export default Modals

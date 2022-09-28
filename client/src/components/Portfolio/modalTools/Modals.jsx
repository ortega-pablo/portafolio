import { useState } from 'react'

import Modal from './Modal'
import TechIcons from '../../../Utils/TechIcons'

function Modals({ project }) {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<section
			key={project.id}
			className=' shadow-md max-w-xs bg-bgDark-2 shadow-bgDark-1 rounded-md sm:max-w-xl md:max-w-2xl xl:max-w-4xl dark:bg-bgLight-2 dark:shadow-bgLight-1'
		>
			<button
				type='button'
				onClick={() => setIsOpen(true)}
				className=' grid  items-center content-center duration-200 hover:scale-105 sm:grid-cols-2 sm:grid-rows-7 text-text-2 dark:text-text-4'
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

				<div className=' py-2 px-2 text-center text-text-3 sm:col-span-1 sm:col-start-2 sm:row-span-3 dark:text-text-3'>
					<p>{project.resume}</p>
				</div>
				
				<div className=' flex justify-center flex-wrap max-w-full gap-8 py-2 px-2 text-text-3 sm:hidden dark:text-text-3'>
					<TechIcons technologies={project.technologies} size={24} />
				</div>

				<div className=' hidden py-2 px-2 text-text-3 sm:flex sm:justify-center sm:flex-wrap sm:max-w-full sm:gap-6 sm:col-span-1 sm:col-start-2 sm:row-span-3 dark:text-text-3'>
					<TechIcons technologies={project.technologies} size={30} />
				</div>

				
			</button>
			{isOpen && <Modal setIsOpen={setIsOpen} project={project} />}
		</section>
	)
}

export default Modals

import { MdOutlinePreview } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { RiCloseLine } from 'react-icons/ri'
import Carousel from '../../../Utils/Carousel'

function Modal({ setIsOpen, project }) {
	const handleClose = e => {
		if (e.target.id === 'container') {
			setIsOpen(false)
		}
	}

	return (
		<div
			id='container'
			onClick={e => handleClose(e)}
			className='fixed flex justify-center items-center inset-0 bg-black bg-opacity-70 backdrop-blur-sm  '
		>
			<div className='container flex flex-col mx-6 max-w-xl p-4 gap-4 bg-neutral-800 rounded-xl'>
				<div className='flex flex-row justify-between'>
					<h2 className='text-3xl'>{project.name}</h2>
					<button type='button' onClick={() => setIsOpen(false)}>
						<RiCloseLine />
					</button>
				</div>

				<div className='overflow-hidden'>
					<Carousel images={project.images} />
					{/* <img
						src={project.images[0]}
						alt=''
						className='rounded-md  w-full py-2'
					/> */}
				</div>

				<div>
					<p>{project.description}</p>
				</div>

				<div className='flex'>
					<h5 className='font-bold'>Frontend:&nbsp;</h5>
					<p>{project.front}</p>
				</div>

				<div className='flex'>
					<h5 className='font-bold'>Backend:&nbsp;</h5>
					<p>{project.back}</p>
				</div>

				<div className='flex'>
					<h5 className='font-bold'>DataBase:&nbsp;</h5>
					<p>{project.db}</p>
				</div>

				<div className='flex'>
					<h5 className='font-bold'>Otras:&nbsp;</h5>
					<p>{project.other}</p>
				</div>

				<div className='flex items-center justify-center w-full h-10 sm:col-span-1 sm:col-start-2 '>
					<a
						className=' flex flex-row items-center justify-center z-5 w-1/2 px-6 py-3 m-4 duration-200 text-gray-400 hover:scale-110 hover:text-white'
						href={project.page}
					>
						Demo <MdOutlinePreview className=' ml-4 ' />
					</a>
					<a
						className=' flex flex-row items-center justify-center z-5 w-1/2 px-6 py-3 m-4 duration-200 text-gray-400 hover:scale-110 hover:text-white '
						href={project.repository}
					>
						Código <SiGithub className=' ml-4 ' />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Modal

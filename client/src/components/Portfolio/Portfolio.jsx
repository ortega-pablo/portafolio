import { MdOutlinePreview } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import projects from "./projects"

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

				<div className=' grid justyfy-center gap-8 px-6 '>
					{projects.map(({ id, name, images, resume, page, repository }) => (
						<div
							key={id}
							className=' flex flex-col items-center justify-center shadow-md bg-stone-900 shadow-stone-600 rounded-lg'
						>
							<h3 className=" py-2 text-xl " >{name}</h3>

							<img
								src={images[0]}
								alt=''
								className='rounded-md duration-200 hover:scale-110 w-full'
							/>

                            <div className=" py-2 px-2 text-center text-gray-500 " >
                                {resume}
                            </div>

							<div className='flex items-center justify-center w-full h-10'>
								<a className=' flex flex-row items-center justify-center w-1/2 px-6 py-3 m-4 duration-200 text-gray-500 hover:scale-110 hover:text-white'
								href={page}>
									Demo <MdOutlinePreview className=" ml-4 " />
								</a>
								<a className=' flex flex-row items-center justify-center w-1/2 px-6 py-3 m-4 duration-200 text-gray-500 hover:scale-110 hover:text-white '
								href={repository}>
									Código <SiGithub className=" ml-4 " />
								</a>
							</div>

						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Portfolio

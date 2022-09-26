import technologiesArray from './technologiesArray'
import TechIcons from '../../Utils/TechIcons'

function Technologies() {
	return (
		<section
			name='technologies'
			className='w-full min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-black to-gray-800'
		>
			<div className='container w-full max-w-screen-lg px-10 mx-auto flex flex-col justify-center text-white'>
				<div className='pb-16'>
					<h2 className='text-4xl font-bold inline border-b-4 border-blue-500'>
						Tecnologías
					</h2>
				</div>

				<div className='flex justify-center content-center items-center text-center flex-wrap gap-12 text-white '>
					<TechIcons
						technologies={technologiesArray}
						size={70}
						withText='true'
					/>
				</div>
			</div>
		</section>
	)
}

export default Technologies

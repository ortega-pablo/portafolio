import technologiesArray from './technologiesArray'
import TechIcons from '../../Utils/TechIcons'

function Technologies() {
	return (
		<section
			name='technologies'
			className='w-full min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-bgLight-2 via-bgLight-2 to-bgLight-1 dark:from-bgDark-1 dark:via-bgDark-1 dark:to-bgDark-2'
		>
			<div className='container w-full max-w-screen-lg px-10 mx-auto flex flex-col justify-center text-text-5 dark:text-text-1'>
				<div className='pb-16'>
					<h2 className='text-4xl font-bold inline border-b-4 border-primary-2 dark:border-primary-1'>
						Tecnologías
					</h2>
				</div>

				<div className='flex justify-center content-center items-center text-center flex-wrap gap-12 text-primary-1 dark:text-primary-2'>
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

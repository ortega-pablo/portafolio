import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import HeroImage from '../assets/images/Imagen2.png'



function Home() {
	return (
		<section
			name='home'
			className='w-full h-screen flex items-center justify-center bg-gradient-to-b from-bgLight-2 via-bgLight-2 to-bgLight-1 dark:from-bgDark-1 dark:via-bgDark-1 dark:to-bgDark-2'
		>
			<div className=' container mx-auto w-full px-4 h-screen flex flex-col items-center justify-center  md:flex-row md-pt-24 '>
				<div className='sm:w-2/3  flex flex-col text-center items-center justify-center'>
					<h2 className='text-3xl pb-4 sm:text-5xl font-bold  text-text-5 2xl:text-6xl dark:text-text-1'>
						Hola! Soy{' '}
						<span className='text-5xl sm:text-7xl font-light font-cursive text-primary-2 2xl:text-10xl dark:text-primary-1'>
							{' '}
							Pablo Ortega
						</span>
					</h2>
					<p className='text-3xl pb-6 text-text-3 2xl:text-6xl dark:text-text-3'>
						Desarrollador web Full Stack
					</p>
					<div>
						<Link
							to='portfolio'
							smooth
							duration={500}
							className='group text-text-1 w-fit px-6 py-3 mb-10 flex items-center rounded-md bg-gradient-to-r from-primary-1 to-primary-2 cursor-pointer'
						>
							Portfolio
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-1' />
							</span>
						</Link>
					</div>
				</div>

				<div className='mx-auto w-2/3 sm:w-1/3 xl:max-w-sm '>
					<img src={HeroImage} alt='my profile' className='rounded-2xl' />
				</div>
			</div>
		</section>
	)
}

export default Home

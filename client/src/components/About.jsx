function About() {
	return (
		<section
			name='about'
			className='w-full h-screen flex items-center justify-center bg-gradient-to-b from-bgLight-2 via-bgLight-2 to-bgLight-1 dark:from-bgDark-1 dark:via-bgDark-1 dark:to-bgDark-2'
		>
			<div className='container w-full max-w-screen-lg px-10 mx-auto flex flex-col justify-center text-text-3 dark:text-text-3'>
				<div className='pb-8'>
					<h2 className='text-4xl text-text-5 font-bold inline border-b-4 border-primary-2 dark:text-text-1 dark:border-primary-1'>
						Sobre mí
					</h2>
				</div>
				<p className='text-xl mt-20'>
					Me considero una persona dinámica, proactiva, completamente apasionada
					por lo que hace y que le gusta trabajar en equipo.
				</p>

				<br />

				<p className='text-xl'>
					Soy autodidacta y muy curioso, lo que me lleva a investigar y aprender
					continuamente para poder entender el ¿Cómo? y el ¿Por qué? de las
					cosas.
				</p>
			</div>
		</section>
	)
}

export default About

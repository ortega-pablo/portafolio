function About() {
	return (
		<section
			name='about'
			className='w-full h-screen flex items-center justify-center bg-gradient-to-b from-black via-black to-gray-800'
		>
			<div className='container w-full max-w-screen-lg px-10 mx-auto flex flex-col justify-center text-white'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-blue-500'>
						Sobre mí
					</p>
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

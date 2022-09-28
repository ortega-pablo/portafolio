import { useRef } from 'react'
import emailjs from '@emailjs/browser';


function Contact() {
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()
		
		emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
		.then(response =>console.log(response))
		.catch(error => console.log(error))
	}

	return (
		<section
			name='contact'
			className='w-full min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-black via-black to-gray-800'
		>
			<div className='container w-full max-w-screen-lg px-10 mx-auto flex flex-col justify-center text-white'>
				<div className='pb-8'>
					<h2 className='text-4xl font-bold inline border-b-4 border-blue-500'>
						Contáctame
					</h2>
				</div>
				<div className='flex justify-center md:pt-10'>
				<div className=' bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 '>
					<form ref={form} onSubmit={sendEmail} className='flex flex-col space-y-4'>
						<h5>Nombre :</h5>
						<input type='text' name='user_name' placeholder='Introduce tu nombre.' className='ring-1 ring-blue-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300'/>
						<h5>Email :</h5>
						<input type='email' name='user_email' placeholder='Introduce tu email.' className='ring-1 ring-blue-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300' />
						<h5>Mensaje :</h5>
						<textarea name='message' placeholder='Escribe tu mensaje.' className='ring-1 ring-blue-300 w-full h-40 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-blue-300' />
						<button type='submit' className='bg-blue-500 text-white font-bold rounded-lg px-6 py-2 mt-2'>Enviar Mensaje</button>
					</form>
				</div>
				</div>
			</div>
		</section>
	)
}

export default Contact

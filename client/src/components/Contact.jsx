import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

function Contact() {
	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()
		Swal.fire({
			title: '¿Enviar mensaje?',
			icon: 'question',
			color: '#c5c3c6',
			background: '#001f54',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Enviar',
			cancelButtonText: 'Cancelar',
		}).then(result => {
			if (result.isConfirmed) {
				emailjs
					.sendForm(
						import.meta.env.VITE_SERVICE_ID,
						import.meta.env.VITE_TEMPLATE_ID,
						e.target,
						import.meta.env.VITE_PUBLIC_KEY
					)
					.then()
				Swal.fire({
					title: 'Mensaje enviado correctamente',
					color: '#c5c3c6',
					background: '#001f54',
					icon: 'success',
				})
				e.target.reset()
			}
		})
	}

	return (
		<section
			name='contact'
			className='w-full min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-bgLight-2 via-bgLight-2 to-bgLight-1 dark:from-bgDark-1 dark:via-bgDark-1 dark:to-bgDark-2'
		>
			<div className='container w-full max-w-screen-lg px-10 mx-auto flex flex-col justify-center text-text-3'>
				<div className='pb-8'>
					<h2 className='text-4xl font-bold inline border-b-4 border-primary-2 text-text-5 dark:border-primary-1 dark:text-text-1'>
						Contáctame
					</h2>
				</div>
				<div className='flex justify-center md:pt-10'>
					<div className=' bg-bgDark-2 rounded-xl shadow-lg p-8 text-text-2 md:w-80 dark:bg-bgLight-2 dark:text-text-4'>
						<form
							ref={form}
							onSubmit={sendEmail}
							className='flex flex-col space-y-4'
						>
							<h5>Nombre :</h5>
							<input
								type='text'
								name='user_name'
								placeholder='Introduce tu nombre.'
								required
								className='ring-1 ring-primary-1 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-primary-1 dark:ring-primary-2 dark:focus:ring-primary-2'
							/>
							<h5>Email :</h5>
							<input
								type='email'
								name='user_email'
								placeholder='Introduce tu email.'
								required
								className='ring-1 ring-primary-1 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-primary-1 dark:ring-primary-2 dark:focus:ring-primary-2'
							/>
							<h5>Mensaje :</h5>
							<textarea
								name='message'
								placeholder='Escribe tu mensaje.'
								required
								className='ring-1 ring-primary-1 w-full h-40 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-primary-1 dark:ring-primary-2 dark:focus:ring-primary-2'
							/>
							<button
								type='submit'
								className='text-text-1 px-6 py-3 mb-10 flex items-center rounded-md bg-gradient-to-r from-primary-1 to-primary-2 cursor-pointer'
							>
								Enviar Mensaje
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact

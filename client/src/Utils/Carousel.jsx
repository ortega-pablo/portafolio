import { useEffect, useRef } from 'react'
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md'

function Carousel({ images }) {
	const carousel = useRef(null)

	const next = () => {
		if (carousel.current.children.length > 0) {
			/* selecciono la priimer imagen */
			const firstElement = carousel.current.children[0]
			/* Establezco la transición */
			carousel.current.style.transition = `300ms ease-out all`
			/* Muevo todo el carusel el tamaño de una img */
			carousel.current.style.transform = `translateX(-${firstElement.offsetWidth}px)`

			const transition = () => {
				/* Reinicio la posisción del carusel */
				carousel.current.style.transition = 'none'
				carousel.current.style.transform = 'translateX(0)'
				/* Muevo la primer img al final del carusel */
				carousel.current.appendChild(firstElement)
				carousel.current.removeEventListener('transitionend', transition)
			}
			/* Ejecuto la función transition  para acomodar las posiciónes */
			carousel.current.addEventListener('transitionend', transition)
		}
	}

	const prev = () => {
		if (carousel.current.children.length > 0) {
			/* selecciono la ultima imagen */
			const lastElement =
				carousel.current.children[carousel.current.children.length - 1]
			/* Coloco la última imagen como la primera */
			carousel.current.insertBefore(lastElement, carousel.current.firstChild)

			carousel.current.style.transition = 'none'

			carousel.current.style.transform = `translateX(-${lastElement.offsetWidth}px)`

			setTimeout(() => {
				carousel.current.style.transition = `300ms ease-out all`
				carousel.current.style.transform = `translateX(0)`
			}, 30)
		}
	}

	useEffect(() => {
		let interval = setInterval(() => {
			next()
		}, 2000)

		carousel.current.addEventListener('mouseenter', () => {
			clearInterval(interval)
		})
		carousel.current.addEventListener('mouseleave', () => {
            interval = setInterval(() => {
                next()
            }, 2000)
        })
	}, [])

	return (
		<div className='relative'>
			<div ref={carousel} className='flex flex-nowrap z-40'>
				{images.map(image => (
					<div className='overflow-hidden min-w-full'>
						<img src={image} alt='' className='w-full align-top' />
					</div>
				))}
			</div>
			<div className='absolute top-0 w-full h-full z-50 pointer-events-none text-text-5'>
				<button
					type='button'
					onClick={() => prev()}
					className='cursor-pointer outline-none absolute left-0 h-full pointer-events-auto'
				>
					<MdOutlineKeyboardArrowLeft size={32} />
				</button>
				<button
					type='button'
					onClick={() => next()}
					className='cursor-pointer outline-none absolute right-0 h-full pointer-events-auto'
				>
					<MdOutlineKeyboardArrowRight size={32} />
				</button>
			</div>
		</div>
	)
}

export default Carousel

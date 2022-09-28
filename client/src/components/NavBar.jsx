import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

function NavBar() {
	const [dropMenu, setDropMenu] = useState(false)

	const buttonsMenu = [
		{
			id: 1,
			link: 'home',
			view: 'Inicio',
		},
		{
			id: 2,
			link: 'about',
			view: 'Acerca de mí',
		},
		{
			id: 4,
			link: 'technologies',
			view: 'Tecnologías',
		},
		{
			id: 3,
			link: 'portfolio',
			view: 'Portafolio',
		},
		{
			id: 5,
			link: 'contact',
			view: 'Contacto',
		},
	]

	return (
		<header className='flex justify-between items-center w-full h-20 px-4 bg-bgLight-2 text-primary-2 fixed shadow-md shadow-text-2 dark:bg-bgDark-1 dark:text-primary-1 dark:shadow-text-5'>
			<div>
				<h1 className='text-5xl font-cursive ml-2'>Pablo Ortega</h1>
			</div>

			<nav className='hidden md:flex'>
				<ul className='flex'>
					{buttonsMenu.map(({ id, link, view }) => (
						<li
							key={id}
							className='px-4 cursor-pointer font-medium text-text-5 dark:text-text-1 hover:scale-110 duration-200 hover:text-text-3 dark:hover:text-text-3'
						>
							<Link to={link} smooth duration={500}>
								{view}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div
				onClick={() => setDropMenu(!dropMenu)}
				aria-hidden='true'
				className='cursor-pointer pr-4 md:hidden z-10 text-text-3 hover:text-text-5 dark:text-text-2 dark:hover:text-text-3'
			>
				{dropMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{dropMenu && (
				<nav className='flex'>
					<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-bgLight-2 to-bgLight-1 text-text-3 dark:from-bgDark-1 dark:to-bgDark-2 dark:text-text-2'>
						{buttonsMenu.map(({ id, view, link }) => (
							<li
								key={id}
								className='px-4 cursor-pointer capitalize py-6 text-4xl text-text-3 hover:text-text-5 dark:text-text-2 dark:hover:text-text-3'
							>
								<Link
									onClick={() => setDropMenu(!dropMenu)}
									to={link}
									smooth
									duration={500}
								>
									{view}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	)
}

export default NavBar

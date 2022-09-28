import { useEffect, useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'


function ThemeToggle() {
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
		}
		else {
			setTheme('light')
		}
	}, []);

	useEffect(() => {
		if ( theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme( theme === 'dark' ? 'light' : 'dark')
	}
	

	return (
		<div className='fixed top-0 left-1/2 w-full z-50 bg-transparent  '>
			<span onClick={() => handleThemeSwitch()}>{theme === 'light' ? (<MdDarkMode />) : (<MdLightMode />)}</span>
		</div>
	)
}

export default ThemeToggle

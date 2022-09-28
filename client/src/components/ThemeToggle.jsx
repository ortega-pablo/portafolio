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
		<div className='fixed top-24 right-2 z-50 bg-transparent text-primary-2 dark:text-primary-1'>
			<span onClick={() => handleThemeSwitch()}>{theme === 'light' ? (<MdDarkMode size={24}/>) : (<MdLightMode size={24}/>)}</span>
		</div>
	)
}

export default ThemeToggle

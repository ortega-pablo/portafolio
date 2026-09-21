import { useTheme } from '../hooks/useTheme'

export default function ThemeToggleButton() {
	const { isDark, toggle } = useTheme()

	return (
		<button
			className='icon-btn'
			onClick={toggle}
			aria-label='Cambiar tema'
			title='Cambiar tema'
		>
			<svg
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				{isDark ? (
					<>
						<circle cx='12' cy='12' r='4' />
						<path d='M12 3v2M12 19v2M5 5l1.4 1.4M17.6 17.6L19 19M3 12h2M19 12h2M5 19l1.4-1.4M17.6 6.4L19 5' />
					</>
				) : (
					<path d='M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z' />
				)}
			</svg>
		</button>
	)
}

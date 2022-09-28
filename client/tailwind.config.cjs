/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			gridTemplateRows: {
				// Simple 8 row grid
				'8': 'repeat(8, minmax(0, 0.6fr))',

				// Complex site-specific row configuration
				'layout': '200px minmax(900px, 1fr) 100px',
			},
			colors: {
				'bgDark': {
					1: '#001233',
					2: '#001f54',
				},
				'bgLight': {
					1: '#f4f3ee',
					2: '#fff0eb',
				},
				'primary': {
					1: '#0466c8',
					2: '#0353a4',
				},
				'text': {
					1: '#dcdcdd',
					2: '#c5c3c6',
					3: '#8b8c89',
					4: '#4c5c68',
					5: '#46494c',
				},
			},
		},
		fontFamily: {
			cursive: ['Cookie'],
		},
	},
	plugins: [],
}

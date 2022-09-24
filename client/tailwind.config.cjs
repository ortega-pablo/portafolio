/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				// Simple 8 row grid
				'8': 'repeat(8, minmax(0, 0.6fr))',

				// Complex site-specific row configuration
				'layout': '200px minmax(900px, 1fr) 100px',
			  }
		},
		fontFamily: {
			cursive: ['Cookie'],
		},
	},
	plugins: [],
}

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [react(), tailwindcss()],
	server: {
		host: true, // needed for the Docker container port mapping to work
		watch: {
			usePolling: true,
		},
		strictPort: true,
		port: 5173,
	},
})

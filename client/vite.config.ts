import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	server: {
		host: true, // needed for the Docker container port mapping to work
		watch: {
			usePolling: true,
		},
		strictPort: true,
		port: 5173,
	},
})

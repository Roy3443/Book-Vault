import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Exposes the frontend to the Docker network
    port: 5173,      // Ensure this matches the port in docker-compose.yml
  },
  plugins: [react()],
})

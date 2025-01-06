import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: parseInt("3000"), 
  },
  // base: './', // Use relative paths for assets
  build: {
    outDir: 'dist', // This matches the Amplify setting
  },
})

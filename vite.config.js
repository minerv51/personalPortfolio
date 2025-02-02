import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',

  build: {
    minify: false, //Prevent minification for debugging
  },

  server: {
    allowedHosts: ['d546-99-247-216-134.ngrok-free.app'],
  },
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/personalPortfolio/',

  build: {
    minify: false, //Prevent minification for debugging
  },
})

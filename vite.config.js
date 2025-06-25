import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/club/', // 👈 EXACTLY this (your GitHub repo name with slashes)
  plugins: [react()],
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3002,
  },
  plugins: [react(),
    federation({
      name: 'setting',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    }),
  ],
})

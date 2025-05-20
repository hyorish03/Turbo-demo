import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'web',
      remotes: {
        monitoring: 'http://localhost:3001/remoteEntry.js',
        setting: 'http://localhost:3002/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
  server: {
    port: 3000,
  },
})

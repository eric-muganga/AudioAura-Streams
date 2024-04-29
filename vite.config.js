import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  base: '/',
  server: {
    historyApiFallback: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // This will group all libraries from node_modules into a vendor chunk
          }
          // Additional conditions to split other chunks
          if (id.includes('/your-path-to/large-module/')) {
            return 'large-module'; // Customize this path to match any large modules you want to split
          }
        }
      }
    },
    chunkSizeWarningLimit: 1010 // Adjust as needed
  },
})

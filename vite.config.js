import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Consider more granular chunking here
          }
          // Additional conditions to split other chunks
          if (id.includes('/your-path-to/large-module/')) {
            return 'large-module';
          }
        }
      }
    },
    chunkSizeWarningLimit: 600 // Adjust as needed
  },
})

import { defineConfig } from 'vite';

export default defineConfig({
  root: './',  // Specify the root folder for the project
  build: {
    outDir: 'dist',  // Folder to output the final build
  },
  server: {
    port: 3000,  // Port for the development server
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif']
});
import path from 'path'
import { defineConfig } from 'vite'

export default {
    resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        }
    }
}
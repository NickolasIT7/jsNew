import { resolve } from 'path'

export default {
  base: '/jsNew/',
  build: {
    rollupOptions: {
      input: {
        // @ts-ignore
        main: resolve(__dirname, 'index.html'),
        // @ts-ignore
        snake: resolve(__dirname, 'snake.html'),
        // @ts-ignore
        store: resolve(__dirname, 'store.html'),
        // @ts-ignore
        korzina: resolve(__dirname, 'basket.html'),
        // @ts-ignore
        card: resolve(__dirname, 'card.html'),
        // @ts-ignore
        card: resolve(__dirname, 'omdb.html'),
      }
    }
  }
}
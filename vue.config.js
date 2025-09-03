const { defineConfig } = require('@vue/cli-service')
const autoprefixer = require('autoprefixer')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      autoprefixer
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      }
    }
  },
})

// 配置css进行转换的文件
module.exports = {
  plugins: {
    "postcss-px-to-viewport": {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      minPixelVaule: 1,
      mediaQuery: false,
      exclude: /TabBar/
    }
  }
}
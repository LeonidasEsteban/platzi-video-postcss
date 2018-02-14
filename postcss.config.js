module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   grid: true
    // }),
    require('postcss-import')({
      plugins: [
        require('stylelint'),
      ]
    }),
    require('postcss-font-magician')({
      variants: {
        'Lato': {
          '300': [],
          '400': [],
        }
      }
    }),
    require('postcss-cssnext')({
      features: {
        autoprefixer: {
          grid: true,
          flexbox: false,
        },
        customProperties: false,
        calc: false,
      }
    }),
    require('css-mqpacker')
  ]
}

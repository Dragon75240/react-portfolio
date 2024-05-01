module.exports = {
 plugins: [
    require('autoprefixer')({}),
    require('cssnano')({
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
      }],
    }),
    require('postcss-font-magician')({
      hosted: [
        {
          family: 'Lato',
          url: 'https://fonts.example.com/css?family=Lato',
        },
      ],
    }),
    require('postcss-hexrgba')({
      isRgba: true,
    }),
 ],
};

module.exports = {
  plugins: [
    require("autoprefixer")({}),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
    require("postcss-hexrgba")({
      isRgba: true,
    }),
    require("tailwindcss")({})
  ],
};

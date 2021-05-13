module.exports = {
  pwa: {
    manifestOptions: {
      background_color: "seashell",
    },
    name: "Movies Home",
    themeColor: "LightSalmon",

    workboxOptions: {
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5,
          },
          urlPattern: /^http:\/\/www\.omdbapi\.com\/\?apikey=8e38a46a&t=.*$/,
        },
      ],
    },
  },
};

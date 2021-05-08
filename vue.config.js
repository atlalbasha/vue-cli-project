module.exports = {
  pwa: {
    manifestOptions: {
      background_color: "seashell",
    },
    name: "Movies Home",
    themeColor: "b4654a",

    workboxOptions: {
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5,
          },
          urlPattern: " http://www.omdbapi.com/?i=tt3896198&apikey=8e38a46a",
        },
      ],
    },
  },
};

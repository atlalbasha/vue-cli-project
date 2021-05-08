<template>
  <div>
    <h1>
      <b-icon
        icon="hexagon"
        animation="spin"
        style="width: 45; height: 45;"
      ></b-icon>
      Contact Page
    </h1>

    <div v-if="isOnline">
      <b-alert show variant="warning">
        'You are offline! The website will not work'</b-alert
      >
      <b-icon
        icon="emoji-frown-fill"
        font-scale="7"
        class="rounded-circle bg-danger p-2"
        variant="light"
      ></b-icon>
    </div>
    <p v-if="isOnline">This part will be visible only if user is online</p>
    <p v-if="isOffline">This part will be visible only if user is offline</p>

    <!-- <dl v-if="movies">
      <li v-for="item in movies.data.movies" :key="item.id">
        <dt>{{ item.title }}</dt>
        <img :src="item.medium_cover_image" alt="" srcset="" />
        <br />
      </li>
    </dl> -->

    <!--  <dl v-if="movies">
      <hr />
      <img :src="movies.Poster || 'favicon.ico'" />
      <i class="far fa-hexagon"></i>
      <hr />
      <h3>{{ movies.Title }}</h3>

      <span v-for="movie in movies.Ratings" :key="movie.Source">
        <p>Ratings Source: {{ movie.Source }} {{ movie.Value }}</p>
      </span>
      <p>Released: {{ movies.Released }}</p>
      <p>Runtime: {{ movies.Runtime }}</p>
      <p>Genre: {{ movies.Genre }}</p>
      <p>Actors: {{ movies.Actors }}</p>
      <p>Plot: {{ movies.Plot }}</p>
      <p>Language: {{ movies.Language }}</p>
      <p>Awards: {{ movies.Awards }}</p>
    </dl>

    <p v-else>Laddar...</p> -->
  </div>
</template>

<script>
export default {
  created() {
    this.fetchMovies();
  },
  data() {
    return {
      movies: null,

      newText: this.text,
    };
  },

  methods: {
    fetchMovies(t) {
      fetch(
        "http://www.omdbapi.com/?t=" +
          encodeURIComponent(t) +
          "&apikey=8e38a46a"
      )
        .then((response) => response.json())
        .then((result) => {
          this.movies = result;
        });
    },
  },
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

/* :src="item.poster ? item.poster : '/no-poster.png'" :src="item.poster ||
'no-poster.png'" */

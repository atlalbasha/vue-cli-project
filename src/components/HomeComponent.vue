<template>
  <div class="container-fluid">
    <h1>
      <b-icon icon="hexagon" style="width: 45; height: 45;"></b-icon> Movies
      Home
    </h1>

    <br />
    <b-form inline class="d-flex justify-content-center">
      <b-form-input
        v-model="newText"
        class="mb-2 mr-sm-2 mb-sm-0 "
        placeholder="Search for Movies info"
      ></b-form-input>

      <b-button type="submit" @click="fetchMovies(newText)" variant="primary"
        >Search</b-button
      >
    </b-form>
    <br />
    <!--   <p>computed function: "{{ initials }}"</p>
    <p>watch function: "{{ newText }}"</p> -->

    <div v-if="movies">
      <div v-if="movies.Response === 'True'">
        <br />
        <img :src="movies.Poster" />
        <i class="far fa-hexagon"></i>
        <br />

        <h3>{{ movies.Title }}</h3>
        <p>{{ movies.Plot }}</p>

        <b-button :disabled="isActive" variant="danger" @click="add()"
          >Favorit <b-icon :icon="icon"></b-icon
        ></b-button>

        <span v-for="movie in movies.Ratings" :key="movie.Source">
          <p>Ratings Source: {{ movie.Source }} {{ movie.Value }}</p>
        </span>

        <br />
        <b-form-rating
          variant="danger"
          id="rating-inline"
          inline
          :value="movies.imdbRating"
          stars="10"
          readonly
        ></b-form-rating>
        <p class="mt-2">IMDB Rating: {{ movies.imdbRating }}</p>

        <p>Released: {{ movies.Released }}</p>
        <p>Runtime: {{ movies.Runtime }}</p>
        <p>Genre: {{ movies.Genre }}</p>
        <p>Actors: {{ movies.Actors }}</p>

        <p>Language: {{ movies.Language }}</p>
        <p>Awards: {{ movies.Awards }}</p>

        <!-- Rating -->
        <div>
          <label for="rating-inline"
            >Rate This Film: {{ $store.state.rateMovie }}</label
          >
          <br />
          <b-form-rating
            variant="danger"
            id="rating-inline"
            inline
            v-model="$store.state.rateMovie"
            stars="10"
          ></b-form-rating>
          <p class="mt-2">Your Rating</p>
        </div>
        <!--  -->
      </div>
      <!-- <div v-else>{{ movies.Error }}</div> -->
      <span v-else>Sorry...</span>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.fetchMovies(this.$route.params.movie);
    },
  },
  computed: {
    rateMovie: {
      get() {
        return this.$store.state.rateMovie;
      },
      set(rateMovie) {
        this.$store.commit("addRatings", rateMovie);
      },
    },
    myVaf: {
      get() {
        return this.$store.state.myVaf.length;
      },
    },
  },
  created() {
    this.fetchMovies(this.$route.params.movie);
  },
  data() {
    return {
      icon: "heart",
      movies: null,
      isActive: null,
      newText: this.text,
      movie: this.$route.params.movie,
    };
  },

  methods: {
    add() {
      this.isActive = true;
      this.icon = "heart-fill";
      console.log("added");
      this.$store.commit("addVaf", this.movies);
    },
    fetchMovies(movie) {
      this.isActive = false;
      this.icon = "heart";
      this.$store.state.rateMovie = 0;
      const axios = require("axios");
      if (movie) {
        axios
          .get(
            "https://www.omdbapi.com/?apikey=8e38a46a&t=" +
              encodeURIComponent(movie)
          )
          .then((response) => {
            this.movies = response.data;

            this.$emit("event", this.movies);

            if (this.$route.path !== "/home/" + movie) {
              this.$router.push({ path: "/home/" + movie }).catch((error) => {
                console.log(error);
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },

  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss"></style>

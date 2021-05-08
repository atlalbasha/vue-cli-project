<template>
  <div class="container-fluid">
    <h1>
      <b-icon icon="hexagon" style="width: 45; height: 45;"></b-icon> Movies
      Home
    </h1>

    <hr />
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
    <hr />
    <!--   <p>computed function: "{{ initials }}"</p>
    <p>watch function: "{{ newText }}"</p> -->

    <div v-if="movies">
      <div v-if="movies.Response === 'True'">
        <hr />
        <img :src="movies.Poster || 'favicon.ico'" />
        <i class="far fa-hexagon"></i>
        <hr />
        <h3>{{ movies.Title }}</h3>

        <span v-for="movie in movies.Ratings" :key="movie.Source">
          <p>Ratings Source: {{ movie.Source }} {{ movie.Value }}</p>
        </span>

        <br />
        <b-form-rating
          variant="danger"
          id="rating-inline"
          inline
          :value="movies.imdbRating / 2"
          readonly
        ></b-form-rating>
        <p class="mt-2">IMDB Rating: {{ movies.imdbRating }}</p>

        <p>Released: {{ movies.Released }}</p>
        <p>Runtime: {{ movies.Runtime }}</p>
        <p>Genre: {{ movies.Genre }}</p>
        <p>Actors: {{ movies.Actors }}</p>
        <p>Plot: {{ movies.Plot }}</p>
        <p>Language: {{ movies.Language }}</p>
        <p>Awards: {{ movies.Awards }}</p>

        <!-- Rating -->
        <div>
          <label for="rating-inline">Rate This Film: {{ ratingValue }}</label>
          <br />
          <b-form-rating
            variant="danger"
            id="rating-inline"
            inline
            v-model="ratingValue"
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
    ratingValue() {
      this.$store.commit("addRatings", this.ratingValue);
      return this.$store.state.rateMovie;
    },
    newText() {
      // console.log(` ${this.newText} `);
    },
  },
  computed: {
    initials() {
      return this.$store.state.rateMovie;
      /* this.newText
        .split(" ") // ['Atlal', 'Basha']
        .map((name) => name.charAt(0)) // ['A', 'B']
        .join("."); // 'A.B' */
    },
  },
  created() {
    this.fetchMovies();
  },
  data() {
    return {
      movies: null,
      ratingValue: null,
      newText: this.text,
    };
  },
  methods: {
    fetchMovies(t) {
      //console.log(this.$store.state.a);

      if (t) {
        fetch(
          "http://www.omdbapi.com/?apikey=8e38a46a&t=" + encodeURIComponent(t)
        )
          .then((response) => response.json())
          .then((result) => {
            this.movies = result;
            this.$store.commit("addRatings", this.movies);
            this.$emit("event", this.movies);
          });
      }
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

<style lang="scss"></style>

<!-- <p>computed function: "{{ initials }}"</p>
    <p>watch function: "{{ newText }}"</p> -->

<!-- <dl v-if="movies">
      <li v-for="item in movies.data.movies" :key="item.id">
        <dt>{{ item.title }}</dt>
        <img :src="item.medium_cover_image" alt="" srcset="" />
        <br />
      </li>
    </dl> -->

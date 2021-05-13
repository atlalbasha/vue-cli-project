<template>
  <div>
    <h1>
      <b-icon
        icon="hexagon"
        rotate="90"
        style="width: 45; height: 45;"
      ></b-icon>
      Watch Me
    </h1>
    <br />
    <br />
    <div>{{ myMovie.length }} Movies / Watch List</div>
    <div v-if="myMovie.length > 0">
      <div v-for="movie in myMovie" :key="movie.imdbID">
        <hr />
        <img :src="movie.Poster" />

        <br />
        <h3>{{ movie.Title }}</h3>
        <b-button variant="danger" @click="deleteMovie(movie.imdbID)"
          >Delete</b-button
        >
      </div>
    </div>
    <span v-else><p>No Movies Added</p></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myMovie: this.$store.state.myVaf,
    };
  },
  methods: {
    deleteMovie(imdbID) {
      this.$store.commit("deleteMovie", imdbID);
      //console.log("deleted" + imdbID);
    },
  },
};
</script>

<style>
.mb-3 {
  text-align: left;
}
</style>

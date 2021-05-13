import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rateMovie: null,
    myVaf: [],
  },
  mutations: {
    addRatings(state, rating) {
      this.rateMovie = rating;
      console.log(this.rateMovie);
    },
    addVaf(state, added) {
      state.myVaf.push(added);
    },
    deleteMovie(state, imdbID) {
      console.log("id" + imdbID);

      for (let i = 0; i < state.myVaf.length; i++) {
        if (state.myVaf[i].imdbID === imdbID) {
          state.myVaf.splice(i, 1);
          console.log("ready to delet");

          break;
        }
      }
    },
  },
  actions: {},
});

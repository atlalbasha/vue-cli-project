import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    rateMovie: null,
  },
  mutations: {
    addRatings(state, rating) {
      this.rateMovie = rating;
      console.log(this.rateMovie);
    },
  },
  actions: {},
});

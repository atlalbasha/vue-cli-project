<template>
  <!--  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->

  <div>
    <HomeComponent @event="showError" text=""></HomeComponent>

    <h3>{{ Error }}</h3>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    HomeComponent,
  },
  created() {},
  data() {
    return {
      Error: null,
    };
  },
  methods: {
    showError(error) {
      console.log(error);
      this.Error = error.Error;
    },
  },
};
</script>

<template>
  <div>
    <HomeComponent></HomeComponent>
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
  created() {
    // this.$root.$refs.HomeComponent.getApi();
  },
  methods: {},
};
</script>

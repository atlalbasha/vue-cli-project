<template>
  <div class="about">
    <AboutComponent></AboutComponent>
  </div>
</template>

<script>
import AboutComponent from "../components/AboutComponent";

export default {
  name: "About",
  components: {
    AboutComponent,
  },
};
</script>

/* scss */
<style lang="scss">
$border-color: lightsalmon;

/* #app {
  border: solid 5px $border-color;
} */
</style>

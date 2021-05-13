<template>
  <div>
    <ContactComponent></ContactComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactComponent from "@/components/ContactComponent";

export default {
  name: "Contact",
  components: {
    ContactComponent,
  },
};
</script>

/* scss */
<style lang="scss" scoped>
$heading-color: hotpink;
$body-text-color: navy;
$material-design-stack: Roboto, Noto, sans-serif;

h1 {
  color: $heading-color;
  font-family: $material-design-stack;
}

p {
  color: $body-text-color;
  font-family: $material-design-stack;
}

$border-color: lightsalmon;

/* #app {
  border: solid 5px $border-color;
} */
</style>

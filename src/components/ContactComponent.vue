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
    <hr />
    <br />
    <br />

    <div v-if="isOffline">
      <b-icon
        icon="emoji-frown-fill"
        font-scale="7"
        class="rounded-circle bg-danger p-2"
        variant="light"
      ></b-icon>

      <br />
      You are offline! The website will not work
    </div>
    <div v-if="isOnline">
      <b-icon
        icon="emoji-smile"
        font-scale="7"
        class="rounded-circle bg-success p-2"
        variant="light"
      ></b-icon>

      <br />
      You are online
    </div>
    <br />
    <p>Contact me for more support: atlal.basha@iths.se</p>
  </div>
</template>

/* :src="item.poster ? item.poster : '/no-poster.png'" :src="item.poster ||
'no-poster.png'" */ /* scss */ /* scss */
<style lang="scss" scoped>
$heading-color: lightsalmon;

h1 {
  color: $heading-color;
}

/* #app {
  border: solid 5px $border-color;
} */
</style>

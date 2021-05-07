<template>
  <div id="app">
    <div id="nav">
      <b-icon icon="hexagon"></b-icon> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: seashell;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: seashell;
}

#nav a.router-link-exact-active {
  color: salmon;
}
</style>

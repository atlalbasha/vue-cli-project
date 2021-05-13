<template>
  <div id="app">
    <div id="nav">
      <b-icon icon="hexagon"></b-icon> |
      <router-link to="/home/">Home</router-link> |
      <router-link to="/about">Watch Me</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
    <br />

    <footer>
      <hr />
      <h6>Coded by Atlal Basha</h6>
      <p>atlal.basha@iths.se</p>
    </footer>
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
  color: #fa8072;
}

hr {
  width: 20%;
  height: 2px;
  border-width: 0;
  color: #fa8072;
  background-color: #fa8072;
}
</style>

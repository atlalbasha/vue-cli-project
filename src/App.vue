<template>
  <div id="app">
    <div id="nav">
      <b-icon icon="hexagon"></b-icon> |
      <router-link to="/home/:movie">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
    <br />

    <footer>
      <hr
        style="width:30%; height:2px;border-width:0;color:#fa8072;background-color:#fa8072"
      />
      <h6>Coded by Atlal Basha</h6>
      <a href="atlal.basha@iths.se">atlal.basha@iths.se</a>
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
</style>

<template>
  <div id="app1" class="app1-single-app">
    <div id="nav1">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
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
  color: #2c3e50;
}

#nav1 {
  padding: 30px;
}

#nav1 a {
  font-weight: bold;
  color: #2c3e50;
}

#nav1 a.router-link-exact-active {
  color: #42b983;
}
</style>

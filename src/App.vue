<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: '', params: {} }">Home</router-link>
      <router-link :to="{ name: 'Printers', params: {} }">Printers</router-link>
      <router-link :to="{ name: 'Uploads', params: {} }">My uploads</router-link>
      <router-link :to="{ name: 'Report', params: {} }">Report</router-link>
      <router-link :to="{ name: 'Admin', params: {} }">Admin</router-link>
    </nav>
    <br/>
    <img src="./assets/logo.png" width="200">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

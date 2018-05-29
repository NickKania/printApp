<template>
  <div>
    <div>
  <nav src="./assets/css/materialize.css" class="nav-wrapper blue darken-2">
    <router-link :to="{ name: 'Home', params: {} }" class="brand-logo hide-on-large-only">Onshape Print</router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-moblie" class="left hide-on-med-and-down sidenav-trigger">
        <li><router-link :to="{ name: 'Home', params: {} }">Home</router-link></li>
        <li><router-link :to="{ name: 'Machines', params: {} }">Machines</router-link></li>
        <li><router-link :to="{ name: 'Uploads', params: {} }">My uploads</router-link></li>
        </ul>
        <ul class="right hide-on-med-and-down">
        <li><router-link :to="{ name: 'Report', params: {} }">Report</router-link></li>
        <li><router-link :to="{ name: 'Admin', params: {} }">Admin</router-link></li>
      </ul>
  </nav>
  </div>
    <router-view/>
    <div class="footer grey lighten-1">
      <br/>
      <br/>
    </div>
  </div>
</template>

<script>

import './assets/css/materialize.css'
import './assets/js/materialize.js'
// import './assets/css/materialize.min.css'






export default {
  name: 'App'
}



document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var options = document.querySelectorAll('option');
  var instances = M.Sidenav.init(elems, options);
});


</script>

<style>
#nav-mobile {
  font-family: 'Flama-Medium', Fallback, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
font-family: 'Flama-Medium', Fallback, sans-serif;
font-size-adjust: 1;
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: lightgrey;
    color: white;
    text-align: center;
}

</style>

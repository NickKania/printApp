<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <PrintQueue />
  <Module2 />

  </div>
</template>

<script>
import Admin from "./Admin"
import PrintQueue from "./PrintQueue"
import Module2 from "./Module2"

export default {
  name: 'HelloWorld',
  components: {
    PrintQueue,
    Module2
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div class="center-align">
    <img src="../assets/logo.png" class="center" width="300"/>
		<div class="row">
  <PrinterStatus class="col s6"/>
  <PrinterQueue :printer="selectedPrinter" class="col s6"/>
</div>

  </div>
</template>

<script>
import PrinterQueue from './PrinterQueue';
import PrinterStatus from './PrinterStatus';
import { mapGetters } from 'vuex';

export default {
	components: {
    PrinterQueue,
    PrinterStatus
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['selectedPrinter'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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

div {
  font-family: 'Flama-Medium', Fallback, sans-serif;
  font-size-adjust: 1;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 50px;
  padding-left: 20px;
}
</style>

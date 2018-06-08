<template lang="html" >
<div>
	  <h1>Admin</h1>

<div>
  <div class="row">
    <PrinterStatus class="col s6"/>
    <PrinterQueue :printer="selectedPrinter" class="col s6"/>
  </div>

</div>

  </div>
</template>

<script>
import PrinterQueue from "./PrinterQueue"
import PrinterStatus from "./PrinterStatus"
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

<style>
</style>

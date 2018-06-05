<template>
  <div>
    <h1>Status</h1>
    <table class="highlight responsive-table container" id="printerOverview">
      <thead>
        <tr>
          <th data-field="id">Printer</th>
          <th data-field="text">Status</th>
          <th data-field="text">Current Job</th>
          <th data-field="button"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="printer in printerList" @click="selectPrinter(printer.id)" :key="printer.id">
          <td>{{printer.displayName}}</td>
          <td v-if="printer.isOnline == true"> <span class="badge green white-text">Online</span></td>
          <td v-else><span class="badge red white-text">Offline</span></td>
          <td v-if="printer.currentJob !== null">{{printer.currentJob}}</td>
          <!-- <div v-if="pageId.id != admin"> -->
            <td v-if="printer.isOnline == true"><a href="/" class="waves-effect waves-light btn blue darken-2">Start print</a></td>
            <td v-else><a href="/" class="btn disabled">Start print</a></td>
            <!-- </div> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import PrinterQueue from './PrinterQueue.vue';

export default {
  // pageId : document.getElementById("TEMPLATE").id[0],
  components: {
    PrinterQueue
  },
  computed: {
    ...mapGetters(['printerList'])
  },
  methods: {
    selectPrinter(id) {
      this.$store.commit('SELECT_PRINTER', id);
    }
  }
};
</script>

<style>
td.adjusted {
  padding-right: 50px;
}
</style>

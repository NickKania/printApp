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
        <td>
          <div v-if="pathIsAdmin != true">
            <div v-if="printer.isOnline == true">
              <a href="/" class="waves-effect waves-light btn blue darken-2">Add print</a>
            </div>
            <div v-else>
              <a href="/" class="btn disabled">Add print</a>
            </div>
          </div>
          <div v-else>
            <div v-if="printer.isOnline == true">
              <button v-on:click="bringOnline(printer)" class="waves-effect waves-light btn red">Bring Offline</button>
            </div>
            <div v-else>
              <button v-on:click="bringOffline(printer)" class="waves-effect waves-light btn green">Bring Online</button>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex';
import PrinterQueue from './PrinterQueue.vue';
export default {
  components: {
    PrinterQueue
  },
  computed: {
    ...mapGetters(['printerList']),
    pathIsAdmin() {
      return this.$route.meta.isAdmin;
    }
  },
  methods: {
    selectPrinter(id) {
      this.$store.commit('SELECT_PRINTER', id);
    },
    bringOnline(printer) {
      printer.isOnline = true;
      console.log(printer.isOnline);
    },
    bringOffline(printer) {
      printer.isOnline = false;
    }
  }
};
</script>

<style>
td.adjusted {
  padding-right: 50px;
}
</style>

<template>
<div>
  <h1>Status</h1>
  <table class="highlight responsive-table container" id="printerOverview">
    <thead>
      <tr>
        <th data-field="id">Printer</th>
        <th data-field="text">Status</th>
        <th data-field="text">Current Print</th>
        <th data-field="button"></th>
        <th data-field="button"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="printer in printerList" v-on:click="selectPrinter(printer.id)" :key="printer.id">
        <td>{{printer.displayName}}</td>
        <td v-if="printer.isOnline == true"> <span class="badge green white-text">Online</span></td>
        <td v-else><span class="badge red white-text">Offline</span></td>
        <td v-if="printer.currentJob !== null">{{printer.currentJob}}</td>
        <td>
          <div v-if="pathIsAdmin != true">
            <div v-if="printer.isOnline">
              <a href="/" class="waves-effect waves-light btn blue darken-2">Add print</a>
            </div>
            <div v-else>
              <a href="/" class="btn disabled">Add print</a>
            </div>
          </div>
          <div v-else>
            <a href="#" class="dropdown-trigger btn" data-target="adminDropdown">Options</a>
            <ul id="adminDropdown" class="dropdown-content">
            <div v-if="!printer.isOnline">
                <li><a href="#!" v-on:click="bringOnline(printer)">Bring Online</a></li>
            </div>
            <div v-else>
                <li><a href="#!" v-on:click="bringOffline(printer)">Bring Offline</a></li>
                <li><a href="#!" v-on:click="cancelCurrentPrint(printer)">Cancel Print</a></li>

            </div>
          </ul>
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
    },
    bringOffline(printer) {
      printer.isOnline = false;
    },
    cancelCurrentPrint(printer) {

    }
  }
};

</script>

<style>
</style>

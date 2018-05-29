<template lang="html">
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
      <div class="collapsible">
        <div class="collapsible-header" v-for="printer in printerList" :key="printer.id">
        <tr>
          <td class="adjusted">{{printer.displayName}}</td>
          <td class="adjusted" v-if="printer.isOnline == true"> <span class="badge green white-text">Online</span></td>
          <td class="adjusted" v-else><span class="badge red white-text">Offline</span></td>
          <td class="adjusted" v-if="printer.currentJob !== null">{{printer.currentJob}}</td>
          <td class="adjusted" v-if="printer.isOnline == true"><a href="/" class="waves-effect waves-light btn blue darken-2">Start print</a></td>
          <td class="adjusted" v-else><a href="/" class="btn disabled">Start print</a></td>
        </tr>
        <div class="collapsible-body">
         <!-- import printerQueue here -->
        </div>
      </div>
    </div>



    </tbody>
  </table>
  </div>
</template>

<script>
import Printer from './Printer.js'

export default {
  data() {
    return {
      makerBot: new Printer('makerBot', "Makerbot"),
      formLabs: new Printer('formLabs', "Formlabs")
    }
  },
  computed: {
    printerList() {
      return [this.makerBot, this.formLabs]
    }
  }
}
</script>

<style>
td.adjusted {
  padding-right: 50px
}
</style>

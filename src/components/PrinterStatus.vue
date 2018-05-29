<template lang="html">
  <div>
  <h1>Status</h1>
  <table class="highlight responsive-table container" id="printerOverview">
    <thead>
      <tr>
        <th data-field="id">Printer</th>
        <th data-field="text">Status</th>
        <th data-field="button"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="printer in printerList" :key="printer.id">
      <td>{{printer.displayName}}</td>
      <td v-if="printer.isOnline == true"> <span class="badge green white-text">Online</span></td>
      <td v-else><span class="badge red white-text">Offline</span></td>
      <td><a href="/" class="waves-effect waves-light btn blue darken-2">Start print</a></td>
      </tr>
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
</style>

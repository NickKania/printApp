<template lang="html">
  <div>
  <h1>Status</h1>
  <table class="highlight responsive-table container">
    <thead>
      <tr>
        <th data-field="id">Printer</th>
        <th data-field="text">Status</th>
        <th data-field="button"></th>
      </tr>
    </thead>
    <tbody>
      <!-- <tr>
        <td>MakerBot <span class="badge green white-text">Online</span></td>
        <td><a href="/" class="waves-effect waves-light btn blue darken-2">Start print</a></td>
      </tr> -->
      <tr v-for="printer in printerList" :key="printer.name">
      <td>{{printer.name}}</td>
      <!--<td v-if="printer.isOnline == true"> <span class="badge green white-text">Online</span></td>-->
      <!--<td v-else><span class="badge red white-text">Offline</span></td>-->
      <td><a href="/" class="waves-effect waves-light btn blue darken-2">Start print</a></td>
</tr>
    </tbody>
  </table>
  </div>
</template>

<script>

export default {
    components: {
        printers
    }
}
</script>

<style>
</style>

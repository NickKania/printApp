<template lang="html">
  <div>
  <h1>Queue</h1>
  <table class="highlight responsive-table container">
    <thead>
      <tr>
        <th data-field="id">Printer</th>
        <th data-field="name">Print name</th>
        <th data-field="time">Status</th>
      </tr>
    </thead>

    <tbody>
      <div v-for="job in printer.printQueue" :key="job.priority">
        <tr>
          <td>{{printer.displayName}}</td>
          <td>{{job.name}}</td>
          <td>{{job.creator}}</td>
        </tr>

      </div>
    </tbody>
  </table>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>

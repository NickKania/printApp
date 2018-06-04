<template>
  <div>
    <h1>Queue</h1>
    <table v-if="printer && printer.printQueue.length" class="highlight responsive-table container">
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
    <div v-else class="card-panel">
      <span v-if="printer">{{printer.displayName}} queue is empty, start a new job!</span>
      <span v-else>Select a printer</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    printer: Object
  }
};
</script>

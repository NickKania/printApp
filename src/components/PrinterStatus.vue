<template lang="html">
  <div>
  <h1>Status</h1>
  <table class="highlight responsive-table container">
    <thead>
      <tr>
        <th data-field="id">Printer</th>
        <th data-field="text">Status</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>MakerBot <span class="badge green white-text">Online</span></td>
        <td><a href="/" class="waves-effect waves-light btn blue darken-2">Start print</a></td>
      </tr>
      <tr>
        <td>Form 2 <span class="badge green white-text">Online</span></td>
        <td><a href="/" class="waves-effect waves-light btn blue darken-2">Start print</a></td>
      </tr>
      <tr>
        <td>ZeePro Zim <span class="badge red white-text">Offline</span></td>
        <td><a href="/" class="waves-effect waves-light btn blue darken-2 disabled">Start print</a></td>
      </tr>
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

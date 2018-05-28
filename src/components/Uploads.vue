<template lang="html">
  <div>
  <h1>Uploads</h1>
  {{user}}
  <div class="container">
  <input type="text" name="username" value="">
  <button type="button" name="button" class="waves-effect waves-light btn blue darken-2">Go</button>
</div>

</div>
</template>

<script>
export default {
  props: [
    'user'
  ]
}
</script>

<style>
</style>

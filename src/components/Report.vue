<template lang="html">
  <div>

  <div class="row container">
    <h1>Report an issue</h1>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="name" type="text" class="validate">
          <label for="name">Name</label>
        </div>
        <div class="input-field col s6">
          <select>
            <option value="" disabled selected required>Select a machine</option>
            <option value="1">MakerBot</option>
            <option value="2">ZeePro</option>
            <option value="3">Form 2</option>
            <option value="3">Carvey</option>
          </select>
          <label>Materialize Select</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea2" class="materialize-textarea" data-length="120"></textarea>
          <label for="textarea2">Describe the problem</label>
        </div>
      </div>
    </form>
    <button class="btn waves-effect waves-light blue darken-2" type="submit">Submit
  <i class="material-icons right">send</i>
</button>
  </div>

  </div>
</template>

<script>

export default {

}
document.addEventListener('DOMContentLoaded', function() {
   var elems = document.querySelectorAll('select');
   var options = document.querySelectorAll('option');
   var instances = M.FormSelect.init(elems, options);})

</script>

<style>
/* div.container {
    width: 70%;
    min-width: 350px;
} */


</style>

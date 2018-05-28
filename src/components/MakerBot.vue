<template lang="html">
  <div class="row container">
    <div class="col s4 m6">
  <h4 class="center">Makerbot Replicator 2</h4>
  <img src="../assets/replicator2.jpg" width="300"/>
</div>
<div>
  <table class="col s12 m6">
  <thead>
    <tr>
      <th data-field="id">How to</th>
      <th data-field="name"></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Level build plate</td>
            <td><a class="waves-effect waves-light btn blue darken-2" href="https://youtu.be/IqgoWCr02Mk" target="_blank">Video</a></td>
      <!-- <td><a class="waves-effect waves-light btn blue darken-2 modal-trigger" data-target="modal1">Video</a></td> -->
    </tr>
    <tr>
      <td>Replace filament</td>
      <td><a class="waves-effect waves-light btn blue darken-2" href="https://support.makerbot.com/learn/makerbot-replicator/smart-extruderplus-smart-extruder/changing-filament_13487" target="_blank">Support</a></td>
    </tr>
  </tbody>
</table>
</div>

<!-- <div id="modal1" class="modal">
  <div class="modal-content">
    <div class="modal-header">
      <i href="/machines" class="modal-close material-icons right">close</i>
    </div>
    <p></p>
    <youtube :video-id="IqgoWCr02Mk" @ready="ready"></youtube>
  </div>
</div> -->

</div>
</template>

<script>
export default {

}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var options = document.querySelectorAll('option');
  var instances = M.Modal.init(elems, options);
});


</script>

<style>

.modal-content iframe{
    margin: 0 auto;
    display: block;
}

</style>

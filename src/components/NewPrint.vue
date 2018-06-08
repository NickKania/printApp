<template lang="html">
  <div>
    <div class="row container">
      <h1>Create a print job</h1>
      <form class="col s12">
        <div class="row">
          <input type="text" id="printName">
          <label for="printName">Print Name</label>
        </div>
        <div class="input-field col s6">
          <select>
            <!-- <option disabled selected required>Select a machine</option>
            <option v-for="(printer,index) in printerList" value="{{index}}"> {{printer.displayName}}</option> -->
          </select>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  mapGetters
} from 'vuex';
export default {
}
</script>

<style lang="css">
</style>

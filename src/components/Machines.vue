<template>
  <div class="center-align">
    <h1 class="hide-on-med-and-down">{{ msg }}</h1>
    <div class="row">


</div>

<div>

  <div>
    <MakerBot/>
  </div>

  <div>
    <PrinterStatus/>
  </div>

</div>

  </div>
</template>

<script>
import MakerBot from "./MakerBot"
import PrinterQueue from "./PrinterQueue"
import PrinterStatus from "./PrinterStatus"

export default {
  components: {
    MakerBot,
    PrinterQueue,
    PrinterStatus
  },
}
</script>

<style>


.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 200px
}

</style>

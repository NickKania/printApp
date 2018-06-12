<template lang="html">
  <div>
    <h1 class="heading">Welcome of Onshape Print</h1>
    <div class="signInForm">
    <form>
      <div class="row">
        <div class="input-field col s8">
          <input id="email" type="text" class="validate">
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s8">
          <input type="text" id="pswd" class="validate">
          <label for="pswd">Password</label>
        </div>
        <div class="row col s8">
          <button class="btn waves-effect waves-light" type="submit" name="action">Sent IT
            <i class="material-icons right">send</i>
          </button>
          <a v-on:click=""class="waves-effect waves-teal btn-flat register">Register</a>
        </div>

      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {}
</script>

<style lang="css">
.signInForm {
  position: absolute;
  width: 50%;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -150px
}
.register {
  position: absolute;
  right: 35%;

}
.heading {
  text-align: center;
}
</style>

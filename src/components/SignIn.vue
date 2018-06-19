<style lang="css">

.signInForm {
    position: absolute;
    width: 30%;
    top: 45%;
    left: 45%;
    margin: -100px 0 0 -150px
}
.register {
    position: absolute;
    right: 0%;
}

.heading {
    text-align: center;
}

</style>

<template lang="html">

<div>
    <h1 class="heading">Welcome of Onshape Print</h1>
    <form class="signInForm">
        <div class="form-row">
            <div class="input-field col s8">
                <input id="email" type="email" class="validate" v-model="usrEmail">
                <label for="email">Email</label>
            </div>
        </div>
        <div class="form-row">
            <div class="input-field col s8">
                <input type="password" id="pswd" class="validate" v-model="userPassword">
                <label for="pswd">Password</label>
            </div>
        </div>
        <div v-if="toRegisterUser == true">
            <div class="form-row">
              <div class="input-field col s8">
                <input type="password" id="confrimPSWD" class="validate" v-model="usrConfirmPassword">
                <label for="confrimPSWD">Confirm Password</label>
              </div>
            </div>
        </div>
        <div class="form-row">
            <div class="row col s8">
                <button class="btn waves-effect waves-light " type="submit" name="action">{{buttonText}}
                    <i class="material-icons right">send</i>
                </button>
                <a v-on:click="toRegisterUser = !toRegisterUser, registerCheck(userPassword,usrConfirmPassword)"
                class="waves-effect waves-teal btn-flat register">Register</a>
            </div>
        </div>
    </form>
</div>

</template>

<script>

export default {
    data: function() {
      return {
        toRegisterUser: false,
        usrEmail: '',
        userPassword: '',
        usrConfirmPassword: ''
      }
    },
    methods: {
      registerCheck(pass1, pass2) {
        if (pass1 != pass2) {
          M.toast({html: "Passwords do not match", classes: 'rounded'});
        } else {
          registerUser(usrEmail, userPassword);
        }
      }
    },
    computed: {
      buttonText: function() {
      if (toRegisterUser) {
        buttonText = "Sign in"
      } else {
        buttonText = "Register User"
      }
      return buttonText;
    }
  }
}

</script>

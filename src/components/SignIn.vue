<style lang="css">

  .signInForm {
    position: absolute;
    width: 30%;
    top: 50%;
    left: 45%;
    margin: -100px 0 0 -150px
  }

  .heading {
    text-align: center;
    font-size: 50px;
  }

</style>

<template lang="html">

  <div>
    <h1 class="heading">Welcome of Onshape Print</h1>
    <form class="signInForm">
      <a v-if="!toRegisterUser">
        <input type="email" name='userName' v-model="input.username" placeholder="Username"/>
        <input type="password" name='userPass' v-model="input.password" placeholder="Password"/>
        <button type="button" class="waves-effect waves-light btn" v-on:click="login()">sign in</button>
        <button type="button" class="waves-effect waves-light btn" v-on:click="toRegisterUser = true"
                style="float: right">Create Account
        </button>
      </a>
      <a v-else>
        <input type="email" name='userName' v-model="input.username" placeholder="Username"/>
        <input type="password" name='userPass' v-model="input.password" placeholder="Password"/>
        <input type="password" name='confirmPassword' v-model="input.confirmPassword" placeholder="Confirm Password"/>
        <button type="button" class="waves-effect waves-light btn" v-on:click="registerCheck()">Register</button>
      </a>
    </form>
  </div>

</template>

<script>

  import Accounts from "../classes/accounts";

  export default {
    data: function () {
      return {
        toRegisterUser: false,
        input: {
          username: '',
          password: '',
          confirmPassword: ''
        }
      }
    },
    methods: {
      login() {
        if (this.username.length > 0 && this.input.password != " ") {

        } else {
          M.toast({html: 'A username and password is required'})
        }
      },
      registerCheck() {
        if (this.input.username !== "" && this.input.password !== "") {
          if (this.input.password === this.input.confirmPassword) {
            Accounts.registerUser(this.input.username, this.input.password)
          } else {
            M.toast({html: "Passwords do not match"});
          }
        } else {
          M.toast({html: "Fields cannot be empty"});
        }
      }
    },
    computed: {}
  }

</script>

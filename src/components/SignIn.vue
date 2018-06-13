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
                <input id="email" type="email" class="validate">
                <label for="email">Email</label>
            </div>
        </div>
        <div class="form-row">
            <div class="input-field col s8">
                <input type="password" id="pswd" class="validate">
                <label for="pswd">Password</label>
            </div>
        </div>
        <div v-if="toRegisterUser == true">
            <div class="form-row">
              <div class="input-field col s8">
                <input type="password" id="confrimPSWD" class="validate">
                <label for="confrimPSWD">Confirm Password</label>
              </div>
            </div>
        </div>
        <div class="form-row">
            <div class="row col s8">
                <button class="btn waves-effect waves-light " type="submit" name="action">Sent IT!
                    <i class="material-icons right">send</i>
                </button>
                <a @click="registerUser()" class="waves-effect waves-teal btn-flat register">Register</a>
            </div>
        </div>
    </form>
</div>

</template>

<script>

export default {
    data: function() {
        return {
            toRegisterUser: false
        }
    },
    methods: {
        signIn() {
                return console.log('Sign in');
            },
            registerUser() {
              toRegisterUser: true
              
            }
    }
}

</script>

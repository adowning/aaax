<template>
<div>
  <div v-if="!clicked" class="pa-5">
     <v-layout>
    <v-flex xs10 sm4 offset-sm4>
      <v-card>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">AAA</h3>
            <div class="mx-auto">You will nee your phone to log in.</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="blue" @click="gotoLogin()">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</div>

 <router-view v-if="clicked"></router-view>
  </div>
</template>

<script>
import { AmplifyStore } from './components/amplify'

export default {
  data() {
    return {
      clicked: false,
      email: '',
      pass: '',
      devMode: process.env.NODE_ENV
    }
  },
  computed: {
    user() {
      return AmplifyStore.state.user
    },
    error() {
      return this.$store.getters.error
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  watch: {
    // user(value) {
    //   if (value !== null && value !== undefined) {
    //     console.log(value)
    //     // this.$router.push('/hello')
    //     this.$router.push('/profile')
    //   }
    // }
  },
  methods: {
    gotoLogin() {
      this.clicked = true
      this.$router.push('/auth/signIn')
    }
    // onSignin(email, pass) {
    //   console.log(email, pass)
    //   window.localStorage.clear()
    //   window.sessionStorage.clear()
    //   this.$store
    //     .dispatch('signUserIn', {
    //       email: email,
    //       password: pass
    //     })
    //     .then(() => {
    //       console.log(this.$store.getters.user)
    //     })
    // },
    // onDismissed() {
    //   this.$store.dispatch('clearError')
    // }
    // onSignUp(email, pass, username) {
    //   window.localStorage.clear()
    //   window.sessionStorage.clear()
    //   this.$store
    //     .dispatch('signUserUp', {
    //       email: email,
    //       pass: pass,
    //       username: username
    //     })
    //     .then(() => {
    //       console.log('signed up!')
    //     })
    // }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: 'Roboto', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: '';
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
<div>
  Sorry but there is nothing here.
    <button @click="gologin">Go to Login</button>
</div>
</template>

<script>
// import Vue from 'vue'

export default {
  methods: {
    gologin() {
      // window.localStorage.clear()
      // window.sessionStorage.clear()
      window.location = 'http://localhost:8081/'
      // this.$router.push('/')
    }
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
</style>

<template>
  <div class="login-page">
    <nav-bar></nav-bar>
    <login-form ></login-form>
    <v-footer :is-bottom="true"></v-footer>
  </div>
</template>

<script>
import LoginForm from "./components/loginform/index.vue";
import VFooter from "./components/footer/index.vue";
import NavBar from './components/navbar/index.vue'
export default {
  name: "App",
  components: {
    LoginForm, VFooter, NavBar
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
  @import "./assets/styles/index.scss";
  body{
    background-color:white;
    margin: 0;
    width: 100%;
    min-height: 100%;
    padding: 0;
  }
</style>

<template>
  <div>
    <nav class="body__nav nav">
      <div class="nav__logo-holder logo-holder">
        <img src="/icons/logo.png" v-on:click="navigateToHome" class="nav__logo logo" alt="logo">
        <h2 class="nav__site-name">{{siteName}}</h2>
      </div>
      <div class="navbar__profile-holder">
       <div v-if="authorizated" class="navbar__profile">{{username}} </div>
       <div class="navbar__authorization" @click="changeProfile">{{authorizationInfo}}</div>
       </div>
    </nav>
  </div>
</template>
<script>
export default { 
  data() {
    return {
      siteName: "Тестируй задачи",
      username: "",
      authorizated: false,
      authorizationInfo: "Выйти из аккаунта..."
    }
  },
  methods: {
    navigateToHome(){
      this.$router.replace('/');
    },
    changeProfile(){
      if(this.authorizated){
        localStorage.clear();
      }
        this.$router.replace('/login');
    }
  },
  mounted() {
    if(!localStorage.getItem('username')){ 
      this.authorizationInfo = "Войдите в аккаунт"
      this.authorizated = false
    } else{
      this.authorizated = true
      this.authorizationInfo = "Выйти из аккаунта..."
      this.username = localStorage.getItem('username')
    }
    
  },
};
</script>
<style lang="scss" scoped>
@import "styles.scss";
</style>

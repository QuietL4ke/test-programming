<template>
<div class="form-holder">
    <form class="form" @submit.prevent="onSubmit">
      <label class="form__text" for="userName">Имя пользователя</label>
      <input class="form__input" id="userName" v-model="userName" type="text">
      <label class="form__text" for="password">Пароль</label>
      <input class="form__input" id="password"  v-model="password" type="password" >
      <input class="form__button button" type="submit" value="Войти">
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userName: '',
      password: ''
    };
  },
  methods: {
      onSubmit(){
        if(this.userName==''){
          alert('Введите имя пользователя'); 
          return;
        }else if(this.password==''){
          alert('Введите пароль');
          return;
        }
        //запрос на сервер
        if(this.userName =='Pupok' && this.password === '123') this.$router.replace('/index');
    },
      reset(){
        this.password = '';
        this.userName = '';
      }
  },

};
</script>
<style lang="scss" scoped>
    @import "styles.scss";
</style>

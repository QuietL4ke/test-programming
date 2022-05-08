<template>
<div class="form-holder">
    <form class="form" @submit.prevent="onSubmit" method="post">
      <label class="form__text" for="userName">Имя пользователя</label>
      <input class="form__input" id="userName" v-model="userName" type="text">
      <label class="form__text" for="password">Пароль</label>
      <input class="form__input" id="password"  v-model="password" type="password" >
      <input class="form__button button" type="submit" value="Войти">
    </form>
  </div>
</template>
<script>
import axios from 'axios'
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
        axios.post('http://localhost:5000/',{
          login: this.userName,
          password: this.password
        }).then(response => {
              localStorage.setItem('token', response.data.token);
              localStorage.setItem('id', response.data.id);
              localStorage.setItem('username', response.data.username)
              this.$router.replace('/');
          }, (response) => {
            alert("Wrong username or password!")
            this.password = "";
            return;
        })
        
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

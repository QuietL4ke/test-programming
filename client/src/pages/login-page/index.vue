<template>
  <div class="login-page">
    <default-layout :isBottom="true">
      <login-form/>
    </default-layout>
  </div>
</template>
<script>
import LoginForm from "@/components/loginform/index.vue";
import defLay from '@/layouts/defaultLayout.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue';
export default {
  components: {
    LoginForm, DefaultLayout
  },
  methods: {
   
    DefaultLayout 
  }
};
</script>
<style lang="scss" scope>
</style>

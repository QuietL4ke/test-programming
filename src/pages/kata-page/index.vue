<template>
  <div class="">
      <default-layout :isBottom="true" class="62813">
           <h1>Информация о задаче номер {{id}}</h1>
      </default-layout>
  </div>
</template>
<script>
import DefaultLayout from '../../layouts/defaultLayout.vue';
export default {
  data() {
    return {
        id: undefined
    };
  },
    components: {
        DefaultLayout
    },
  created() {
      this.id = this.$route.params.id;
      //get info from server by id
  },
};
</script>
<style lang="scss" scope></style>

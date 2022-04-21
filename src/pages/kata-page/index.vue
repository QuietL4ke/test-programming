<template>
  <div class="">
    <default-layout :isBottom="false">
      <div class="w-100 d-flex flex-column align-items-center">
        <h2 class="w-50 text-center">{{ name }}</h2>
        <h4 class="mx-5 mt-2 description">{{ text }}</h4>
      </div>
      <div class="mt-2 mx-4 examples">
        <h3 class="data-example mx-4">Входные данные</h3>
        <h5 class="description">{{ inputExample }}</h5>
        <h3 class="data-example mx-4">Выходные данные</h3>
        <h5 class="description">{{ outputExample }}</h5>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <div class="w-75">
         <code-area :isCode="true"/>
        </div>
      </div>
    </default-layout>
  </div>
</template>



<script>
import CodeArea from '@/components/codearea/index.vue';
import DefaultLayout from "@/layouts/defaultLayout.vue";


export default {
  data() {
    return {
      id: undefined,
      name: "Название задачи",
      text: "Объяснение: что нужно сделать в задаче",
      inputExample: "Пример входных данных",
      outputExample: "Пример выходных данных",
      code: "function(){\n}"
    };
  },
  components: {
    DefaultLayout, CodeArea
  },
  created() {
    this.id = this.$route.params.id;
    //get info from server by id
  },
};
</script>
<style lang="scss" scope>
@import "styles.scss";
</style>

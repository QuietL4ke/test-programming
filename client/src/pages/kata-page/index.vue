<template>
  <div>
    <default-layout :isBottom="false">
      <div class="w-100 d-flex flex-column align-items-center">
        <h2 class="w-50 text-center">{{ name }}</h2>
        <h4 class="mx-5 mt-2 description">{{ description }}</h4>
      </div>
      <div class="mt-2 mx-4 examples">
        <h3 class="data-example mx-4">Входные данные</h3>
        <h5 class="description">{{ inputData }}</h5>
        <h3 class="data-example mx-4">Выходные данные</h3>
        <h5 class="description">{{ outputData }}</h5>
      </div>
      <div class="d-flex flex-column align-items-center">
        <div class="d-flex justify-content-center w-100 mt-3">
          <div class="w-75">
            <code-area ref="codearea" :isCode="true" v-model="code" />
          </div>
        </div>
        <button class="button  mt-4" @click="testKata" >Тестировать</button>
      </div>
    </default-layout>
  </div>
</template>

<script>
import CodeArea from "@/components/codearea/index.vue";
import DefaultLayout from "@/layouts/defaultLayout.vue";
import axios from "axios";

export default {
  data() {
    return {
      id: undefined,
      name: "Название задачи",
      description: "Объяснение: что нужно сделать в задаче",
      inputData: "Пример входных данных",
      outputData: "Пример выходных данных",
      code: "function testKata(){\n}",
    };
  },
  components: {
    DefaultLayout,
    CodeArea,
  },
  mounted() {
    this.id = this.$route.params.id;
    let token = localStorage.getItem('token')
    let header = null;
    if( token ) header = {headers:{authorization: `Bearer ${token}`}}
    axios.get("http://localhost:5000/katas/" + this.id, header).then((response) => {
      this.name = response.data.name;
      this.description = response.data.description;
      this.inputData = response.data.inputData;
      this.outputData = response.data.outputData;
    }, () =>{
      this.$router.replace('/login')
    });
  },
  methods: {
    testKata(){
      console.log(this.$refs.codearea.code)
    }
  },
};
</script>
<style lang="scss" scope>
@import "styles.scss";
</style>

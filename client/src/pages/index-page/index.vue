<template>
  <div>
    <default-layout :isBottom="false">
      <div class="kata-section">
        <katas :katas="kataList" class="kata-list"/>
      </div>
    </default-layout>
  </div>
</template>
<script>
import defaultLayout from "@/layouts/defaultLayout.vue";
import Katas from "@/components/katas/index.vue";
import axios from 'axios';
export default {
  components: { defaultLayout, Katas },
  data() {
    return {
      kataList: [],
    };
  },
  mounted() {
    let token = localStorage.getItem('token')
    let header = null;
    if( token ) header = {headers:{authorization: `Bearer ${token}`}}
    axios
      .get('http://localhost:5000/katas', header)
      .then(response =>{
        this.kataList = [];
        let datalist = response.data;
        console.log(datalist)
        datalist.forEach(element => {
          this.kataList.push(
            {
              id: element.id,
              name: element.name,
              description: element.description,
              inputData: element.inputData,
              outputData: element.outputData,
              rating: element.rating,
              lang: "JS"
            }
          )
        });
      }, () =>{
      this.$router.replace('/login')
    })
  }
};
</script>
<style lang="scss" scope>
@import "styles.scss";
</style>

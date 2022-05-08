<template>
  <div class="container-fluid">
    <div class="kata row justify-content-between p-2 kata-border align-items-center"
    @click="choseKata">
      <div class="kata__text col-6">
        <h3 class="w-50 kata__text-lang">{{ kata.lang }}</h3>
        <h3 class="kata__name w-50 kata__text-name">{{ kata.name }}</h3>
      </div>
      <div class="col-2 align-items-center d-flex justify-content-end">
        <div class="kata__rating w-50" title="Rating">{{ kata.rating }}</div>
        <img alt="star" class="star" src="icons/star.svg"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    kata: {
      type: Object,
      required: true,
      default: {},
    },
  },

  data() {
    return {};
  },
  methods: {
    choseKata(){
      //code
      this.$router.push({name: 'Kata' , params:{id:this.kata.id}});
    }
  },
  computed: {},
};
</script>
<style lang="scss" scope>
@import "styles.scss";
</style>

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

export default {
  components: { defaultLayout, Katas },
  data() {
    return {
      kataList: [
        { id: 1, name: "Task1", rating: 8, lang: "C++" },
        { id: 2, name: "Task2", rating: 10, lang: "JavaScript" },
        { id: 3, name: "Task3", rating: 5, lang: "C++" },
        { id: 4, name: "Task4", rating: 1, lang: "Java" },
        { id: 5, name: "Task5", rating: 4, lang: "R" },
        { id: 6, name: "Task6", rating: 6, lang: "C++" },
        { id: 7, name: "Task7", rating: 10, lang: "C" },
      ],
    };
  },
};
</script>
<style lang="scss" scope>
@import "styles.scss";
</style>

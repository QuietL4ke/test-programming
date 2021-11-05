<template>
  <div>
    <nav class="body__nav nav">
      <div class="nav__logo-holder logo-holder">
        <img src="/icons/logo.png" class="nav__logo logo" alt="logo">
        <h2 class="nav__site-name">{{siteName}}</h2>
      </div>
    </nav>
  </div>
</template>
<script>
export default { 
  data() {
    return {
      siteName: "Название сайта"
    }
  },
};
</script>
<style lang="scss" scoped>
@import "styles.scss";
</style>

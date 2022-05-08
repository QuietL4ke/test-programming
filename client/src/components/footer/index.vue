<template>
    <footer class="footer" :class="{footer__bottom:isBottom}">
        <span class="footer__text">Alexander Rusalski</span>
    </footer>
</template>
<script>
// import logo from '/icons/logo.png';
export default {
    props:{
        isBottom:{
            type:Boolean,
            default: false
        }
    },
}
</script>
<style lang="scss" scope>
    @import "styles.scss";
</style>
<template>
    <div>
        <navbar/>
        <slot/>
        <v-footer :isBottom="isBottom"/>
    </div>
</template>
<script>
import Navbar from '@/components/navbar/index.vue';
import VFooter from '@/components/footer/index.vue';

export default {

    props:{
        isBottom:{
            type: Boolean,
            default: false
        }
    },
    
    components:{
        Navbar, VFooter
    }
}
</script>
<style lang="scss" scope>
    
</style>
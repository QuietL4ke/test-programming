<template>
    <div class="katas">
        <div class="w-100" v-for="item in katas" :key="item.id">
            <kata :kata="item"></kata>
        </div>
    </div>
</template>
<script>
import Kata from '@/components/kata/index.vue'
import axios from 'axios'
export default {
    props :{
        katas:{
            type: Array,
            default: []
        }
    },
    components :{
        Kata
    },
}
</script>
<style lang="scss" scope>
    @import "styles.scss";
</style>
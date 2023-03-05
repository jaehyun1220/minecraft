<template>
    <div class="sub_title">
        <router-link to="">{{ name }}</router-link>
    </div>
    <sub_nav />
    <div class="sub_content"></div>
    <div class="modal" v-if="modal"> hello </div>
</template>
<script>
import sub_nav from "../components/sub_nav.vue";
    export default {
        name : 'gold-moon',
        components : {
            sub_nav,
        },
        data() {
            return {
                modal : false,
                name : 'gold-moon'
            }
        },
        methods: { 
            
        },
        mounted() {
            this.emitter.on("live_popup",()=>{
                this.modal = !this.modal
            })
        },
    }
</script>

<style scoped>

</style>
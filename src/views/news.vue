<template>
    <div class="sub_title">
        <router-link to="">{{ name }}</router-link>
    </div>
    <div class="sub_content"></div>
    <div class="modal" v-if="modal"> hello </div>
</template>
<script>
    export default {
        name : 'news',
        components : {
        },
        data() {
            return {
                modal : false,
                name : 'news'
            }
        },
        methods: { 
            
        },
    }
</script>

<style scoped>

</style>
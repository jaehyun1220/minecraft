<template>
    <div class="sub_title">
        <router-link to="">{{ name }}</router-link>
    </div>
    <div class="sub_content"></div>
    <div class="modal" v-if="modal"> hello </div>
</template>
<script>
    export default {
        name : 'enchant',
        components : {
            title_comp,
        },
        data() {
            return {
                modal : false,
                name : 'enchant'
            }
        },
        methods: { 
            
        },
    }
</script>

<style scoped>

</style>
<template>
    <div class="sub_nav">
        <span class="live">on-air</span>
        <p @click="landmark">landmark</p>
    </div>
</template>
<script>
import 'boxicons'
    export default {
        name : 'sub_nav',
        components : {
        },
        data() {
            return {
                isActive : false
            }
        },
        methods: {
            landmark() {
                this.isActive = !this.isActive
                console.log(this.isActive)
                this.emitter.emit('modal')
            }
        }
    }
</script>

<style scoped>
    .sub_nav {margin: .75rem 0; background-color: #121212; padding: 0.5rem .75rem; display: flex; align-items: center;}
    .sub_nav p {color: #fff; text-transform: uppercase; font-family: 'Bebas Neue'; font-size: 1.2rem; line-height: 1; margin-left: .53rem; cursor: pointer;}
    .live {padding: 0.35rem .5rem; display: inline-block; text-transform: uppercase; font-family: 'Bebas Neue', cursive; line-height: 1; border: 1px solid #9d3e3d; color: #fff; background-color: #9d3e3d;}

    .sub_content {background-color: #fff; padding: 1.25rem;}
</style>
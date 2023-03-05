<template>
    <header_comp/>
    <div class="container">
      <nav_comp/>
      <div class="sub_container">
        <router-view/>
      </div>
    </div>
    <footer_comp/>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import header_comp from "./components/header.vue";
import nav_comp from "./components/nav.vue";
import footer_comp from "./components/footer.vue";


export default {
  name : 'App',
  components: {
    header_comp,
    nav_comp,
    footer_comp
  },
  data(){
    return {
    }
  },
}
</script>

<style>
  
</style>
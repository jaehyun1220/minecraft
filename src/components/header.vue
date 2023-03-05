<template>
  <header>
    <div class="header">
      <router-link to="/">
        <img src="../assets/img/logo.webp" alt="">
      </router-link>
    </div>
    
  </header>
</template>

<script>
export default {
    name : 'header_comp'
}
</script>
<style scoped>
  .header { background-color: #111; padding: .8rem;}
    img {height: 40px;}
</style>
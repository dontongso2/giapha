<template>
  <div class="layout-default theme-light">
    <navbar/>
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  
}
</script>
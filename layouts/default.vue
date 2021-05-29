<template>
  <div class="layout-default theme-light">
    <navbar/>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
  components: { Navbar , Footer},
  
}
</script>
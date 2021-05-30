<template>
  <div class="layout-default theme-light">
    <Navbar/>
    <Nuxt />
    <Footer />

    <transition name="home"></transition>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
export default {
  components: { Navbar , Footer},
  
}
</script>
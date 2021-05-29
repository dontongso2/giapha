<template>
  <div class="page page-home">
    <Banner title="MAKE YOUR DREAMS" subTitle="GIAPHA AUTO" dataSrc="/images/banner.webp"/>

    <Brands />

  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import Brands from '~/components/carousel/Brands.vue'

export default {
  components: {
    Banner,Brands
  }
}
</script>
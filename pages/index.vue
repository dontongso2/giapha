<template>
  <div class="page page-home">
    <Banner
      title="MAKE YOUR DREAMS"
      subTitle="GIAPHA AUTO"
      dataSrc="/images/banner.webp"
    />

    <Brands />

    <div class="w-100 py-5 bg-white">
      <div
        v-for="(blog, index) in blogs.slice(0, 2)"
        :key="'blog' + index"
        class="py-4"
      >
        <Blog :data="blog" />
      </div>
      <div class="w-100 py-5 text-center">
        <nuxt-link to="/blog" class="btn-square"> VIEW ALL </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "~/components/Banner.vue";
import Brands from "~/components/carousel/Brands.vue";
import Blog from "~/components/Blog.vue";

export default {
  transition: "home",
  components: {
    Banner,
    Brands,
    Blog,
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
};
</script>
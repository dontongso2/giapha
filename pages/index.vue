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
    Blog
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },

  mounted() {
    this.abc();
  },

  methods: {
    // Function to detect if the app is running in a WebView
    isWebView() {
      // Use your preferred method for WebView detection here
      // For example, you can check the user agent string
      return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        navigator.userAgent
      );
    },
    abc() {
      if (!process.client) return;
      const openInDefaultBrowser = (url) => {
        // Check if the app is running in a WebView
        if (this.isWebView()) {
          // If in a WebView, open the link in the default browser
          var a = document.createElement("a");
          a.href = url;
          a.setAttribute("target", "_blank");
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }

      // Example usage
      openInDefaultBrowser(window.location.href);
    }
  }
};
</script>

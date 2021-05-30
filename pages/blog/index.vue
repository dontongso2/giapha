<template>
    <div class="blog page bg-white">
        <div v-for="(blog, index) in blogs" :key="'blog' + index" class="py-4">
            <Blog :data="blog" />
        </div>
    </div>
</template>

<script>
import Blog from '~/components/Blog.vue';

export default {
   transition: 'home',
    components: {
        Blog
    },
    computed:{
        blogs() {
            return this.$store.state.blogs;
        }
    }
}
</script>
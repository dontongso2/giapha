<template>
    <div v-if="blog" class="page blog-detail bg-white">
        <div class="row">
            <div class="col-12 col-md-10 mx-auto">
                <h2>NEWS</h2>
                <h1>{{blog.title}}</h1>
                <img :src="blog.mainImg" alt="">

            </div>
        </div>

        <div class="col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2 row no-gutters mx-auto">
            <div class="col-12 my-4">
                <h4>{{blog.date}}</h4>
            </div>
        </div>
        <div class="blog-contents">
            <div v-for="(item, index) in blog.contents" :key="'blog-content' + index" class="blog-content-item col-12 col-md-10 offset-md-1 col-xl-8 offset-xl-2 row no-gutters mx-auto my-4">
                <div class="col-12 col-md-6">
                    <div class="d-flex align-items-center">
                        <p>{{item.content}}</p>
                    </div>
                </div>
                <div class="col-12 col-md-6 bg-image" :style="{backgroundImage: 'url(' + item.subImg +')'}">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   transition: 'home',
    data() {
        return {
            blog: null,
        }
    },
    computed: {
        blogs() {
            return this.$store.state.blogs;
        }
    },
    mounted() {
        let route = Number(this.$route.params.id);

        //get blog data
        if(route && this.blogs.length > 0)
            for (let i = 0; i < this.blogs.length; i++) {
                if(this.blogs[i].id === route) {
                    this.blog = this.blogs[i];
                    break;
                }
            }
    }
}
</script>
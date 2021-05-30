<template>
    <div v-if="data" class="blog-component col-12 col-md-10 col-xl-8 offset-md-1 offset-xl-2">
        <div class="row">
            <div class="col-12 col-md-6">
                <div class="image-load" :style="{backgroundImage: 'url(' + data.mainImg + ')'}" />
            </div>
            <div class="col-12 col-md-6">
                <div class="blog-info">
                    <span>{{data.date}}</span>
                    
                    <h3><nuxt-link :to="`/blog/${data.id}`">{{data.title}}</nuxt-link></h3>
                    
                    <nuxt-link class="btn-square" :to="`/blog/${data.id}`">READ MORE</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>
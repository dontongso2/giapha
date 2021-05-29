<template>
    <div class="intro-brand">
        <div class="intro-brand-container">
            <div class="row full-height">

                <div class="col-md-6">
                    <div class="images-container">
                        <div v-for="(item,index) in images" :key="'images' + index" class="img-item">
                        <img :src="item" alt="">
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="content-container">
                        <h2>{{title}}</h2>
                        <div v-html="history" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        images: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: () => ''
        },
        history: {
            type: String,
            default: () => ''
        },
    }
}
</script>
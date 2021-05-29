<template>
    <div v-if="data && data.name" class="car-container">
            <div class="car-row">
                <div class="item">
                    <img v-if="data.images.length > 0" :src="data.images[0]" alt="">
                </div>
                <div class="item">
                    <div class="content">
                        <h3>{{data.name}}</h3>
                        <p>{{data.desc}} </p>
                    </div>
                </div>
            </div>

            <div class="car-row">
                <div class="item">
                    <img v-if="data.images.length > 1" :src="data.images[1]" alt="">
                </div>
                <div class="item">
                    <div class="content">
                        <b-table stacked :items="[data.informations]"></b-table>
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
        },
    },
    data() {
        return {
            
        }
    }
}
</script>
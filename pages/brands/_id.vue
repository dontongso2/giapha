<template>
    <div v-if="data" class="page brands-detail">
        <Banner
        :title="brand && brand.name ? brand.name : ''"
        :isVideo="true"
        :videoSrc="brand && brand.video ? brand.video : ''"
        subTitle="GIAPHA AUTO"/>

        <IntroBrand
        :images="brand && brand.images ? brand.images : []"
        :title="brand && brand.name ? brand.name : ''"
        :history="brand && brand.history ? brand.history : ''"
        />

        <div v-for="(item,index) in data.models" :key="'car' + index" >
            <Car :data="item" />
        </div>
    </div>
</template>

<script>
import IntroBrand from '~/components/IntroBrand.vue';
import Car from '~/components/Car.vue';

export default {
   transition: 'home',
    components: {
        IntroBrand, Car
    },
    data() {
        return {
            brand: null,
            data: null,
        }
    },
     computed: {
        brands() {
            return this.$store.state.brands;
        },
        cars() {
            return this.$store.state.cars;
        }
    },
    mounted() {
        let route = this.$route.params.id;
        // get brand data
        if(this.brands.length > 0)
            for (let i = 0; i < this.brands.length; i++) {
                if(this.brands[i].link === route) {
                    this.brand = this.brands[i];
                    break;
                }
            }

        //get car data
        if(this.cars.length > 0)
            for (let i = 0; i < this.cars.length; i++) {
                if(this.cars[i].name === this.brand.name) {
                    this.data = this.cars[i];
                    break;
                }
            }

    },
   
}
</script>
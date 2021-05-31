<template>
    <div class="page dealership bg-white">
        <Banner title="DEALER LOCATOR" subTitle="GIAPHA AUTO" dataSrc="/images/cars/bugatti-divo-1.jpg" />

        <div class="my-5 dealership-container col-12 col-md-10 col-xl-8 mx-auto">
            <h3 class="mt-4">VIET NAM</h3>
            <h5>311 Nguyen Van Troi, 1 ward, Tan Binh district, HO CHI MINH city.</h5>
            <h3 class="mt-4">FRANCE</h3>
            <h5>18 Route d'Orléans, 18230 Saint-Doulchard, France</h5>
            <h3 class="mt-4">POLAND</h3>
            <h5>Szosa Chełmińska 24, 87-100 Toruń</h5>
            <h3 class="mt-4">UNITED STATES</h3>
            <h5>2548 W Desert Inn Rd Suite 100, Las Vegas, NV 89109</h5>
        </div>

    </div>
</template>
<script>
import Banner from '~/components/Banner.vue';
export default {
   transition: 'home',
   components: {
       Banner
   }
}
</script>
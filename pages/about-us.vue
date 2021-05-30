<template>
    <div class="page about-us bg-white">
        <h1>GIAPHA AUTO</h1>
        <div class="w-100 d-flex">
            <div class="content">
                <h2>COMPANY PROFILE</h2>
                <p>GIAPHA AUTO S.p.A.</p>
                <p>Founded in 1963, GIAPHA AUTO is headquartered in Sant’Agata Bolognese, in Northern Italy.</p>
                <p>The Car Urus, its third model line and the first Super SUV, was launched in 2017, creating a new niche in the luxury segment with benchmark power, performance and driving dynamics, unparalleled design, luxury and daily usability.</p>
                <p>The V10 Huracán family, successor to the iconic Gallardo, debuted in 2014 with the 2017 Huracán Performante (Spyder version in 2018), proving its capabilities with several lap records. In 2019 the new Huracán EVO (Coupe and Spyder) were introduced, featuring the V10 engine from the Performante and incorporating next-generation vehicle dynamic control and aerodynamics. In 2020 the new Huracán EVO RWD launches with a performance providing unfiltered feedback and an emotive and engaging driving experience controlled by the pilot. In May 2020 the new Huracán EVO RWD Spyder was revealed virtually, using for the first time Augmented Reality (AR) on Car’s official website <b style="white-space: nowrap">giapha-woad.vercel.app</b></p>
                <p>The Aventador S Coupé and Roadster launched in 2017 represent a new benchmark in the world of V12 luxury super sports cars. The Aventador SVJ, presented in August 2018, claimed its position as the Nürburgring-Nordschleife production car record holder, completing the 20.6 km lap in just 6:44.97 minutes. In 2019 the SVJ Roadster was introduced to the markets. </p>
                <p>With 165 dealerships throughout the world, the company has seen global sales growth for the last nine consecutive years, with 8,205 cars delivered in 2019.</p>
                <p>Over half a century GIAPHA AUTO created a continuous series of dream cars, including the 350 GT, Miura, Espada, Countach, Diablo, Murciélago, as well as limited editions such as the Reventón, Sesto Elemento, Veneno and the Centenario. With the Car Sián FKP 37 unveiled in 2019, a few-off build of only 63 units, the company delivers unique new hybrid technologies, featuring the world-first application of a supercapacitor for hybridization, new materials technology, and unsurpassed Car performance.</p>
                <p><b>Company data</b></p>
                <p>GIAPHA AUTO S.p.A., with legal seat in S.<br/>
                Agata Bolognese (BO) 40019 Via Modena 12 Italy<br/>
                Business Register of Bologna  no. 259882<br/>
                Share capital duly paid up Euros 130.000.000<br/>
                P Iva 00591801204  Fiscal code 03049840378<br/>
                A sole shareholder company part of Audi Group <br/>
                Registered email address: giapha@gmail.com</p>

                <span>*This contents were copy from internet.</span>
            </div>
            <div class="bg-image"></div>
        </div>
    </div>
</template>
<script>
export default {
   transition: 'home',
}
</script>
<style scoped>
.content {
    width: 65%;
    padding-left: 15%;
}
h1 {
    text-align: center;
    margin-bottom: 4rem;
    margin-top: 4rem;
}
h2 {
    margin-bottom: 2rem;
    font-weight: normal;
    font-size: 1.5rem;
}
p{ 
    margin-bottom: 1rem;
    font-size: 1.2rem;
}
.bg-image {
    min-height: 100%;
    width: 35%;
    background-image: url('/images/company.webp');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}
@media screen and (max-width: 550px) {
    .content {
        width: 100%;
        padding-left: 7%;
        padding-right: 7%;
    }
    .bg-image {
        display: none;
    }
}
</style>
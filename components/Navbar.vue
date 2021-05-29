<template>
    <div class="navbar-container">
        <div class="navbar-menu">
            <nuxt-link to="/" class="logo">
                <img src="/images/logo.svg" alt="">
            </nuxt-link>
            <ul class="menu">
                <li><nuxt-link to="/brands">brands</nuxt-link></li>
                <li><nuxt-link to="dealership">dealerships</nuxt-link></li>
                <li><nuxt-link to="motosport">motosport</nuxt-link></li>
                <li><nuxt-link to="pre-owned">pre-owned</nuxt-link></li>
                <li class="ml-auto"><nuxt-link to="about-us">about us</nuxt-link></li>
                <li v-if="!profile || !profile.name"><nuxt-link to="/login">Login</nuxt-link></li>
            </ul>
            <ul class="ml-3 li-name">
                <li v-if="profile && profile.name">{{profile.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.activeLink();
    },
    computed: {
        profile() {
            return this.$store.state.profile;
        }
    },
    methods: {
        activeLink() {
            let els = $('ul.menu').find('li');
            els.click(function () {
                let _this = $(this);
                els.removeClass('active');
                _this.addClass('active');
            })
        }
    }
}
</script>
<template>
    <div class="navbar-container">
        <div class="navbar-menu">
            <nuxt-link to="/" class="logo menu-link">
                <img src="/images/logo.svg" alt="">
            </nuxt-link>
            <ul class="menu">
                <li class="menu-link"><nuxt-link :class="isbrands ? 'nuxt-link-active' : ''" :to="{path: '/',hash:'#brands'}">brands</nuxt-link><span class="border-bot"></span></li>
                <li class="menu-link"><nuxt-link to="/dealership">dealerships</nuxt-link><span class="border-bot"></span></li>
                <li class="menu-link ml-auto"><nuxt-link to="/blog">blog</nuxt-link><span class="border-bot"></span></li>
                <li class="menu-link"><nuxt-link to="/about-us">about us</nuxt-link><span class="border-bot"></span></li>
                <li v-if="!profile || !profile.name"><nuxt-link to="/login">Login</nuxt-link><span class="border-bot"></span></li>
            </ul>
            <ul class="ml-3 li-name">
                <li v-if="profile && profile.name">{{profile.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isbrands: false,
        }
    },
    computed: {
        profile() {
            return this.$store.state.profile;
        },
        thisRoute() {
            return this.$route.path;
        }
    },
    watch: {
        thisRoute(newVal) {
            if(newVal.includes('brands'))
                this.isbrands = true;
            else
                this.isbrands = false
        }
    },
}
</script>
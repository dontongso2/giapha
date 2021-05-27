<template>
    <div class="navbar-container">
        <div class="navbar-menu">
            <nuxt-link to="/" class="logo">
                <img src="/images/logo.svg" alt="">
            </nuxt-link>
            <ul class="menu">
                <li><nuxt-link to="/models">models</nuxt-link></li>
                <li><nuxt-link to="/ownership">ownership</nuxt-link></li>
                <li><nuxt-link to="motosport">motosport</nuxt-link></li>
                <li><nuxt-link to="pre-owned">pre-owned</nuxt-link></li>
                <li class="ml-auto"><nuxt-link to="dealership">dealerships</nuxt-link></li>
                <li><nuxt-link to="museum">museum</nuxt-link></li>
                <li><nuxt-link to="store">store</nuxt-link></li>
            </ul>
            <div class="sub-menu">
                <i class="fa fa-search"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
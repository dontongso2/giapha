<template>
    <footer class="footer">
        <div class="d-flex flex-wrap">
            <div class="footer-left">
                <ul class="d-flex">
                    <li>
                        <nuxt-link to="/about-us">about us</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/blog">blog</nuxt-link>
                    </li>
                </ul>
                <p>Copyright © 2021 GiapHa Auto S.p.A. a sole shareholder company part of Audi Group.<br>
                All rights reserved. VAT no. IT 325432465342</p>
            </div>
            <div class="footer-right d-flex">
                <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
                <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
            </div>
        </div>
    </footer>
</template>
<style scoped>
.footer {
    background: black;
    color: white;
    padding: 2rem 4rem;
}
ul {
    margin-bottom: 3rem;
}
li {
    margin-right: 1rem;
}
li a {
    color: white;
    text-transform: uppercase;
}
p {
    pointer-events: none;
    user-select: none;
}

</style>
<template>
    <footer class="footer">
        <div class="d-flex flex-wrap justify-content-between">
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
                <span>*This website was create without business purpose <br/> If any owner of content/background used in this website is unhappy,please contact us via mail giapha@gmail.com</span>
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
span {
    font-size: 10px;
    margin-top: auto;
}

</style>
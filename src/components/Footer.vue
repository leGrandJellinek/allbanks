<template lang="pug">
footer.footer
    .footer__top
        .footer__top-container
            .footer__top-info 
                a.footer__top-tel(href="tel:77075789999") +7 707 578 99 99
                .footer__top-icons
                    a.footer__top-icon
                        img(src="@/assets/images/icons/facebook.svg")
                    a.footer__top-icon
                        img(src="@/assets/images/icons/twitter.svg")
            ul.footer__top-menu
                li(v-for="link in getMenuList" :key="link.id")
                    a.footer__top-link(href="#!") {{link.title}}
    .footer__bottom
        .footer__bottom-container 
            .footer__bottom-block
                a.footer__bottom-logo
                    img(src="@/assets/images/logo.png")
                p.footer__bottom-text © 2010-2022 AllBanks.kz
            p.footer__bottom-text При использовании материалов гиперссылка на AllBanks.kz обязательна


</template>

<script>

import {mapGetters} from "vuex"

export default {
    computed: {
        ...mapGetters(["getMenuList"]),
    
    }
}


</script>
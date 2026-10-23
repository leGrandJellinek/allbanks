<template lang="pug">
footer.footer
  .footer__top
    .footer__top-container
      .footer__top-info
        a.footer__top-tel(href="tel:77075789999") +7 707 578 99 99
        .footer__top-icons
          a.footer__top-icon(href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook")
            img(src="@/assets/images/icons/facebook.svg" alt="Facebook")
          a.footer__top-icon(href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter")
            img(src="@/assets/images/icons/twitter.svg" alt="Twitter")
      ul.footer__top-menu
        li(v-for="link in banksStore.menuList" :key="link.id")
          router-link.footer__top-link(:to="link.path") {{ link.title }}
  .footer__bottom
    .footer__bottom-container
      .footer__bottom-block
        router-link.footer__bottom-logo(to="/")
          img(src="@/assets/images/logo.png" alt="AllBanks")
        p.footer__bottom-text © 2010-2022 AllBanks.kz
      p.footer__bottom-text При использовании материалов гиперссылка на AllBanks.kz обязательна
</template>

<script setup lang="ts">
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()
</script>

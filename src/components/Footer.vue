<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__top-container">
        <div class="footer__top-info">
          <a class="footer__top-tel" href="tel:77075789999">+7 707 578 99 99</a>
          <div class="footer__top-icons">
            <a class="footer__top-icon" href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
              <img src="@/assets/images/icons/facebook.svg" alt="Facebook" />
            </a>
            <a class="footer__top-icon" href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
              <img src="@/assets/images/icons/twitter.svg" alt="Twitter" />
            </a>
          </div>
        </div>
        <ul class="footer__top-menu">
          <li v-for="link in banksStore.menuList" :key="link.id">
            <router-link class="footer__top-link" :to="link.path">{{ link.title }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-container">
        <div class="footer__bottom-block">
          <router-link class="footer__bottom-logo" to="/">
            <img src="@/assets/images/logo.png" alt="AllBanks" />
          </router-link>
          <p class="footer__bottom-text">© 2010-2022 AllBanks.kz</p>
        </div>
        <p class="footer__bottom-text">При использовании материалов гиперссылка на AllBanks.kz обязательна</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()
</script>

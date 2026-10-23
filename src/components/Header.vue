<template>
  <header class="header">
    <div class="header__container">
      <Navbar />
      <div class="header__content">
        <div class="header__content-block">
          <h1 class="header__content-title">
            Самые актуальные курсы валют
          </h1>
          <div class="header__content-time">
            24/7
          </div>
        </div>
        <div class="header__content-block-shadow"></div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <header class="header">
    <Navbar />
    <div class="header__container">
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

        <!-- Carousel navigation arrows matching Figma -->
        <button class="header__slider-btn prev" aria-label="Предыдущий слайд">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L4 7L9 11" stroke="#FF8A16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="header__slider-btn next" aria-label="Следующий слайд">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M5 3L10 7L5 11" stroke="#FF8A16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>

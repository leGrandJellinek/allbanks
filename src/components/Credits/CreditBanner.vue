<template>
  <router-link to="/credits" class="credit-banner">
    <span class="credit-banner__text">Получить кредит</span>
    <img
      :src="getMainImage('credit_card.png')"
      alt="Кредитная карта"
      class="credit-banner__img"
      loading="lazy"
    />
  </router-link>
</template>

<script setup lang="ts">
import { getMainImage } from '@/utils/assets'
</script>

<style lang="scss" scoped>
.credit-banner {
  background: #fef2e3;
  border-radius: 10px;
  width: 420px;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 24px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  flex-shrink: 0;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 138, 22, 0.12);
  }

  @media (max-width: 991px) {
    width: 100%;
    height: 85px;
    padding: 0 16px 0 20px;
  }

  &__text {
    font-size: 20px;
    font-weight: 700;
    color: #ff8a16;
    text-decoration: underline;
    z-index: 2;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  &__img {
    height: 94px;
    width: auto;
    object-fit: contain;
    position: absolute;
    right: 10px;
    bottom: -6px;
    z-index: 1;
    pointer-events: none;

    @media (max-width: 767px) {
      height: 92px;
      right: 0px;
      bottom: -6px;
    }
  }
}
</style>

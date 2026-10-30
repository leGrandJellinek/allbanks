<template>
  <div class="bank-card">
    <div class="bank-card__header">
      <div class="bank-card__logo-wrap">
        <img
          :src="getMainImage(item.icon)"
          :alt="item.name"
          class="bank-card__logo"
          loading="lazy"
        />
      </div>
      <div class="bank-card__header-info">
        <h3 class="bank-card__name">{{ item.name }}</h3>
        <span class="bank-card__license">{{ item.license }}</span>
      </div>
    </div>

    <div class="bank-card__divider"></div>

    <div class="bank-card__body">
      <ul class="bank-card__list">
        <li class="bank-card__item address">
          <span class="bank-card__dot"></span>
          <span class="bank-card__text">{{ item.location }}</span>
        </li>
        <li class="bank-card__item phone">
          <span class="bank-card__dot"></span>
          <a :href="`tel:${item.phoneNumber}`" class="bank-card__link">{{ item.phoneNumber }}</a>
        </li>
        <li class="bank-card__item website">
          <span class="bank-card__dot"></span>
          <a
            :href="`https://${item.website}`"
            target="_blank"
            rel="noopener"
            class="bank-card__link"
            >{{ item.website }}</a
          >
        </li>
      </ul>

      <div class="bank-card__footer">
        <router-link :to="`/banks/${item.id}`" class="bank-card__more-btn">
          Узнать больше
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BankItem } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

defineProps<{
  item: BankItem
}>()
</script>

<style lang="scss" scoped>
.bank-card {
  background: rgba(235, 235, 235, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 14px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 227px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    min-height: 48px;
  }

  &__logo-wrap {
    display: flex;
    align-items: center;
    max-width: 140px;
    height: 44px;
  }

  &__logo {
    max-height: 42px;
    max-width: 135px;
    width: auto;
    object-fit: contain;
  }

  &__header-info {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &__name {
    font-size: 16px;
    font-weight: 700;
    color: #000000;
    margin: 0 0 4px 0;
    line-height: 1.2;
  }

  &__license {
    font-size: 11px;
    color: #828282;
    line-height: 1.2;
  }

  &__divider {
    height: 1px;
    background: #e0e0e0;
    margin: 16px 0;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 11.5px;
    line-height: 1.4;
    color: #4f4f4f;
  }

  &__dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #828282;
    flex-shrink: 0;
    margin-top: 6px;
  }

  &__text {
    flex: 1;
  }

  &__link {
    color: #4f4f4f;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #ff8a16;
    }
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  &__more-btn {
    font-size: 13.5px;
    font-weight: 500;
    color: #ff8a16;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      text-decoration: underline;
      color: #e67508;
    }
  }
}
</style>

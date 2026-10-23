<template>
  <div class="currency-row">
    <div class="currency-row__info">
      <div class="currency-row__badge" :style="{ backgroundColor: item.color }">
        <span class="currency-row__symbol">{{ item.symbol }}</span>
      </div>
      <div class="currency-row__names">
        <span class="currency-row__code">{{ item.currencySymbol }}</span>
        <span class="currency-row__name">{{ item.currencyName }}</span>
      </div>
    </div>
    <div class="currency-row__price buy">
      {{ item.buyPrice }}
    </div>
    <div class="currency-row__price sell">
      {{ item.sellPrice }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CurrencyItem } from '@/stores/banks'

defineProps<{
  item: CurrencyItem
}>()
</script>

<style lang="scss" scoped>
.currency-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &__info {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1.5;

    @media (max-width: 576px) {
      gap: 8px;
    }
  }

  &__badge {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
    flex-shrink: 0;

    @media (max-width: 576px) {
      width: 28px;
      height: 28px;
      font-size: 14px;
    }
  }

  &__names {
    display: flex;
    flex-direction: column;
  }

  &__code {
    font-size: 15px;
    font-weight: 700;
    color: #000000;

    @media (max-width: 576px) {
      font-size: 13px;
    }
  }

  &__name {
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);

    @media (max-width: 576px) {
      font-size: 11px;
    }
  }

  &__price {
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    text-align: right;
    color: #000000;

    @media (max-width: 576px) {
      font-size: 13px;
    }
  }
}
</style>

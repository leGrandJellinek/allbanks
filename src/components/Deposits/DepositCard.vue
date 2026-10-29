<template>
  <router-link :to="`/deposits/${deposit.id}`" class="deposit-card">
    <div class="deposit-card__header">
      <h3 class="deposit-card__bank">{{ deposit.bank }}</h3>
      <p class="deposit-card__subtitle">{{ deposit.subtitle }}</p>
    </div>

    <div class="deposit-card__divider"></div>

    <div class="deposit-card__specs">
      <div class="deposit-card__col">
        <div class="deposit-card__item">
          <span class="deposit-card__bullet">•</span>
          <span>Ставка: <strong class="deposit-card__value">{{ deposit.rate }}</strong></span>
        </div>
        <div class="deposit-card__item">
          <span class="deposit-card__bullet">•</span>
          <span>Валюта: <strong class="deposit-card__value">{{ deposit.currency }}</strong></span>
        </div>
      </div>

      <div class="deposit-card__col">
        <div class="deposit-card__item">
          <span class="deposit-card__bullet">•</span>
          <span>Мин. сумма: <strong class="deposit-card__value">{{ deposit.minSum }}</strong></span>
        </div>
        <div class="deposit-card__item">
          <span class="deposit-card__bullet">•</span>
          <span>Срок вклада: <strong class="deposit-card__value">{{ deposit.term }}</strong></span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
export interface DepositItem {
  id: number
  bank: string
  subtitle: string
  rate: string
  currency: string
  minSum: string
  term: string
}

defineProps<{
  deposit: DepositItem
}>()
</script>

<style lang="scss" scoped>
.deposit-card {
  background: #fafafa;
  border-radius: 12px;
  padding: 24px 25px;
  min-height: 182px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 16px 18px;
    min-height: 141px;
  }

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__bank {
    font-size: 18px;
    font-weight: 700;
    color: #ff8a16;
    text-decoration: underline;
    margin: 0 0 6px 0;
    line-height: 1.2;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  &__subtitle {
    font-size: 12px;
    font-weight: 400;
    color: #000000;
    margin: 0;
    line-height: 1.35;
    min-height: 28px;

    @media (max-width: 767px) {
      font-size: 10px;
      min-height: 20px;
    }
  }

  &__divider {
    height: 1px;
    background: #ececec;
    margin: 14px 0 16px 0;

    @media (max-width: 767px) {
      margin: 10px 0 12px 0;
    }
  }

  &__specs {
    display: grid;
    grid-template-columns: 115px 1fr;
    gap: 8px 12px;

    @media (max-width: 767px) {
      grid-template-columns: 100px 1fr;
      gap: 6px 10px;
    }
  }

  &__col {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 767px) {
      gap: 6px;
    }
  }

  &__item {
    display: flex;
    align-items: baseline;
    gap: 6px;
    font-size: 14px;
    color: #000000;
    line-height: 1.3;
    white-space: nowrap;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__bullet {
    font-size: 11px;
    color: #000000;
    flex-shrink: 0;
  }

  &__value {
    font-weight: 700;
    color: #000000;
  }
}
</style>

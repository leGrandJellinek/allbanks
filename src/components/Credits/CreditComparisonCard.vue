<template>
  <router-link :to="`/credits/${loan.id}`" class="credit-comp-card">
    <div class="credit-comp-card__header">
      <h3 class="credit-comp-card__bank">{{ loan.bank }}</h3>
      <p class="credit-comp-card__subtitle">{{ loan.subtitle }}</p>
    </div>

    <div class="credit-comp-card__divider"></div>

    <div class="credit-comp-card__specs">
      <div class="credit-comp-card__col">
        <div class="credit-comp-card__item">
          <span class="credit-comp-card__bullet">•</span>
          <span
            >Мин ставка: <strong class="credit-comp-card__value">{{ loan.minRate }}</strong></span
          >
        </div>
        <div class="credit-comp-card__item">
          <span class="credit-comp-card__bullet">•</span>
          <span
            >Валюта: <strong class="credit-comp-card__value">{{ loan.currency }}</strong></span
          >
        </div>
        <div class="credit-comp-card__item">
          <span class="credit-comp-card__bullet">•</span>
          <span
            >Макс. сумма: <strong class="credit-comp-card__value">{{ loan.maxSum }}</strong></span
          >
        </div>
      </div>

      <div class="credit-comp-card__col">
        <div class="credit-comp-card__item">
          <span class="credit-comp-card__bullet">•</span>
          <span
            >Макс. срок: <strong class="credit-comp-card__value">{{ loan.maxTerm }}</strong></span
          >
        </div>
        <div class="credit-comp-card__item">
          <span class="credit-comp-card__bullet">•</span>
          <span
            >Залог: <strong class="credit-comp-card__value">{{ loan.collateral }}</strong></span
          >
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
export interface ComparisonLoanItem {
  id: number
  bank: string
  subtitle: string
  minRate: string
  currency: string
  maxSum: string
  maxTerm: string
  collateral: string
}

defineProps<{
  loan: ComparisonLoanItem
}>()
</script>

<style lang="scss" scoped>
.credit-comp-card {
  background: #fafafa;
  border-radius: 12px;
  padding: 24px 28px;
  min-height: 205px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 18px 20px;
    min-height: 160px;
  }

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__bank {
    font-size: 18px;
    font-weight: 700;
    color: #ff8a16;
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
    min-height: 32px;

    @media (max-width: 767px) {
      font-size: 10px;
      min-height: 24px;
    }
  }

  &__divider {
    height: 1px;
    background: #ececec;
    margin: 14px 0 16px 0;

    @media (max-width: 767px) {
      margin: 12px 0 14px 0;
    }
  }

  &__specs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px 16px;

    @media (max-width: 767px) {
      gap: 6px 12px;
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
    font-size: 13.5px;
    color: #000000;
    line-height: 1.3;

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

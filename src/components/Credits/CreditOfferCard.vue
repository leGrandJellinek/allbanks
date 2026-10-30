<template>
  <div class="credit-offer-card">
    <!-- Header: Logo & Action Link/Button -->
    <div class="credit-offer-card__header">
      <div class="credit-offer-card__logo-wrap">
        <img 
          :src="getMainImage(offer.logoImg)" 
          :alt="offer.name" 
          class="credit-offer-card__logo-img"
          :class="`credit-offer-card__logo-img--${offer.bankSlug}`"
          loading="lazy"
        />
      </div>

      <!-- Desktop Action Link -->
      <router-link to="/credits/apply" class="credit-offer-card__link desktop-only">
        Получить кредит
      </router-link>

      <!-- Mobile Action Button -->
      <router-link to="/credits/apply" class="credit-offer-card__btn mobile-only">
        Получить кредит
      </router-link>
    </div>

    <!-- Divider -->
    <div class="credit-offer-card__divider"></div>

    <!-- 2-Column Specifications -->
    <div class="credit-offer-card__specs">
      <div class="credit-offer-card__col">
        <div class="credit-offer-card__item">
          <span class="credit-offer-card__bullet">•</span>
          <span>Возраст от <strong class="credit-offer-card__value">{{ offer.age }}</strong></span>
        </div>
        <div class="credit-offer-card__item">
          <span class="credit-offer-card__bullet">•</span>
          <span>Сумма до <strong class="credit-offer-card__value">{{ offer.sum }}</strong></span>
        </div>
        <div class="credit-offer-card__item">
          <span class="credit-offer-card__bullet">•</span>
          <span>Время ответа <strong class="credit-offer-card__value">{{ offer.responseTime }}</strong></span>
        </div>
      </div>

      <div class="credit-offer-card__col">
        <div class="credit-offer-card__item">
          <span class="credit-offer-card__bullet">•</span>
          <span>Ставка от <strong class="credit-offer-card__value">{{ offer.rate }}</strong></span>
        </div>
        <div class="credit-offer-card__item">
          <span class="credit-offer-card__bullet">•</span>
          <span>Срок до <strong class="credit-offer-card__value">{{ offer.term }}</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getMainImage } from '@/utils/assets'

export interface CreditOfferItem {
  id: number
  name: string
  bankSlug: string
  logoImg: string
  age: string
  sum: string
  responseTime: string
  rate: string
  term: string
}

defineProps<{
  offer: CreditOfferItem
}>()
</script>

<style lang="scss" scoped>
.credit-offer-card {
  background: #fafafa;
  border-radius: 12px;
  padding: 24px 28px;
  min-height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 18px 20px;
    min-height: 168px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
  }

  &__logo-wrap {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__logo-img {
    max-height: 38px;
    width: auto;
    object-fit: contain;

    &--sber {
      max-height: 28px;
    }
    &--homecredit {
      max-height: 38px;
    }
    &--alfabank {
      max-height: 36px;
    }
    &--kviku {
      max-height: 36px;
    }

    @media (max-width: 767px) {
      max-height: 30px;

      &--sber {
        max-height: 24px;
      }
      &--homecredit {
        max-height: 32px;
      }
      &--alfabank {
        max-height: 30px;
      }
      &--kviku {
        max-height: 30px;
      }
    }
  }

  &__link {
    font-size: 14px;
    font-weight: 500;
    color: #ff8a16;
    text-decoration: underline;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  &__btn {
    background: #ff8a16;
    color: #ffffff;
    border-radius: 4px;
    padding: 7px 14px;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
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

.desktop-only {
  @media (max-width: 991px) {
    display: none !important;
  }
}

.mobile-only {
  @media (min-width: 992px) {
    display: none !important;
  }
}
</style>

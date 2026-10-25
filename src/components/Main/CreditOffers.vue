<template>
  <section class="main__credits">
    <div class="container main__credits-container">
      <div class="main__credits-header">
        <h2 class="main__credits-title">Лучшие кредитные предложения</h2>
        <router-link to="/credits" class="main__credits-more">
          Все кредиты ›
        </router-link>
      </div>

      <div class="main__credits-grid">
        <div 
          v-for="offer in banksStore.creditOffers" 
          :key="offer.id" 
          class="credit-card"
          :style="{ backgroundColor: offer.bgcolor || '#ffffff' }"
        >
          <div class="credit-card__header">
            <span 
              class="credit-card__logo" 
              :style="{ color: offer.logoColor || '#FF8A16' }"
            >
              {{ offer.logoText || offer.name }}
            </span>
          </div>

          <div class="credit-card__body">
            <div class="credit-card__row">
              <span class="label">Возраст:</span>
              <strong class="value">{{ offer.age }}</strong>
            </div>
            <div class="credit-card__row">
              <span class="label">Сумма:</span>
              <strong class="value">{{ offer.sum }}</strong>
            </div>
            <div class="credit-card__row">
              <span class="label">Срок:</span>
              <strong class="value">{{ offer.term }}</strong>
            </div>
            <div class="credit-card__row">
              <span class="label">Ставка:</span>
              <strong class="value">{{ offer.rate }}</strong>
            </div>
            <div class="credit-card__row">
              <span class="label">Время ответа:</span>
              <strong class="value">{{ offer.responseTime }}</strong>
            </div>
          </div>

          <div class="credit-card__footer">
            <router-link to="/credits/apply" class="credit-card__btn">
              Получить кредит
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()
</script>

<style lang="scss" scoped>
.main__credits {
  margin-top: 40px;
  margin-bottom: 70px;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  &-title {
    font-size: 28px;
    font-weight: 700;
    color: #000000;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  &-more {
    font-size: 15px;
    color: #ff8a16;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  &-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 991px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    @media (max-width: 576px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
  }
}

.credit-card {
  background: #fdfdfd;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }

  &__header {
    margin-bottom: 16px;
    min-height: 36px;
    display: flex;
    align-items: center;
  }

  &__logo {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }

  &__body {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }

  &__row {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    border-bottom: 1px dashed #f0f0f0;
    padding-bottom: 4px;

    .label {
      color: rgba(0, 0, 0, 0.55);
    }

    .value {
      color: #1e1e1e;
      font-weight: 600;
    }
  }

  &__footer {
    width: 100%;
  }

  &__btn {
    display: block;
    width: 100%;
    background: #ff8a16;
    color: #ffffff;
    text-align: center;
    padding: 11px 0;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    border: 1px solid #ff8a16;
    transition: all 0.2s ease;

    &:hover {
      background: #fef2e3;
      color: #ff8a16;
    }
  }
}
</style>

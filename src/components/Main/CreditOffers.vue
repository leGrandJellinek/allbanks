<template>
  <section class="main__credits">
    <div class="container main__credits-container">
      <div class="main__credits-header">
        <h2 class="main__credits-title">Лучшие кредитные предложения</h2>
        <router-link to="/credits" class="main__credits-more">
          Все кредиты ›
        </router-link>
      </div>

      <!-- Desktop View: 3 cards matching Figma Desktop Frame 1 (Sber, Kaspi, RBK) -->
      <div class="main__credits-grid desktop-grid">
        <div 
          v-for="offer in desktopOffers" 
          :key="offer.id" 
          class="credit-card desktop-card"
          :style="{ backgroundColor: offer.bgcolor || '#ffffff' }"
        >
          <div class="credit-card__header">
            <img 
              v-if="offer.logoImg" 
              :src="getMainImage(offer.logoImg)" 
              :alt="offer.name" 
              class="credit-card__brand-logo" 
              loading="lazy"
            />
            <span 
              v-else 
              class="credit-card__logo" 
              :style="{ color: offer.logoColor || '#FF8A16' }"
            >
              {{ offer.logoText || offer.name }}
            </span>
          </div>

          <div class="credit-card__body-desktop">
            <div class="credit-card__specs-col">
              <div class="spec-row">
                <span class="label">Сумма:</span>
                <strong class="value">{{ offer.sum }}</strong>
              </div>
              <div class="spec-row">
                <span class="label">Срок:</span>
                <strong class="value">{{ offer.term }}</strong>
              </div>
            </div>
            <div class="credit-card__specs-col">
              <div class="spec-row">
                <span class="label">Ставка:</span>
                <strong class="value">{{ offer.rate }}</strong>
              </div>
              <div class="spec-row">
                <span class="label">Время ответа:</span>
                <strong class="value">{{ offer.responseTime }}</strong>
              </div>
            </div>
          </div>

          <div class="credit-card__footer">
            <router-link to="/credits/apply" class="credit-card__btn">
              Получить кредит
            </router-link>
          </div>
        </div>
      </div>

      <!-- Mobile View: 4 cards matching Figma Mobile Frame 230:622 -->
      <div class="main__credits-grid mobile-grid">
        <div 
          v-for="offer in banksStore.creditOffers" 
          :key="offer.id" 
          class="credit-card"
          :style="{ backgroundColor: offer.bgcolor || '#ffffff' }"
        >
          <div class="credit-card__header">
            <div v-if="offer.name === 'Сбербанк'" class="credit-card__sber-logo">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" stroke="#21A038" stroke-width="2"/>
                <path d="M7 12.5L10.5 16L17 8.5" stroke="#21A038" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="credit-card__logo" style="color: #21A038;">СБЕР БАНК</span>
            </div>
            <span 
              v-else
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
import { computed } from 'vue'
import { useBanksStore } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

const banksStore = useBanksStore()

// Desktop Frame 1 in Figma has 3 cards: Sberbank, Kaspi, RBK
const desktopOffers = computed(() => banksStore.creditOffers.slice(0, 3))
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

    @media (max-width: 576px) {
      display: none;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &-grid {
    &.desktop-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;

      @media (max-width: 991px) {
        display: none;
      }
    }

    &.mobile-grid {
      display: none;

      @media (max-width: 991px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
      }

      @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
      }
    }
  }
}

.credit-card {
  background: #fdfdfd;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 24px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  }

  &__header {
    margin-bottom: 18px;
    min-height: 42px;
    display: flex;
    align-items: center;
  }

  &__brand-logo {
    max-height: 40px;
    max-width: 170px;
    object-fit: contain;
  }

  &__sber-logo {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__logo {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: -0.5px;
    text-transform: uppercase;
  }

  // Desktop 2-column specs
  &__body-desktop {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 22px;

    .credit-card__specs-col {
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 1;

      .spec-row {
        display: flex;
        gap: 6px;
        align-items: baseline;
        font-size: 14px;
        color: #1e1e1e;

        .label {
          color: rgba(0, 0, 0, 0.55);
          font-weight: 400;
        }

        .value {
          font-weight: 600;
          color: #000000;
        }
      }
    }
  }

  // Mobile column specs
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
    border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
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
    display: inline-block;
    background: #ff8a16;
    color: #ffffff;
    text-align: center;
    padding: 11px 24px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    border: 1px solid #ff8a16;
    transition: all 0.2s ease;

    &:hover {
      background: #fef2e3;
      color: #ff8a16;
    }

    @media (max-width: 991px) {
      display: block;
      width: 100%;
    }
  }
}
</style>

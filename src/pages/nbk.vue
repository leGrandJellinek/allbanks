<template>
  <div class="nbk-page-wrapper">
    <Navbar />
    <main class="main nbk-page">
      <div class="container nbk-page__container">
        <!-- Main page title (1:1 from Figma Desktop Frame 48 & Mobile Frame 263:671) -->
        <h1 class="nbk-page__title">
          Курсы валют Национального<br class="nbk-page__br-mobile" /> Банка Казахстана на 16.02.2022
        </h1>

        <!-- Table Container (741px on Desktop, 100% on Mobile per Figma) -->
        <div class="nbk-page__table">
          <!-- Table Header -->
          <div class="nbk-page__table-header">
            <span class="nbk-page__col nbk-page__col--name">Название валюты</span>
            <span class="nbk-page__col nbk-page__col--code">Код валюты</span>
            <span class="nbk-page__col nbk-page__col--rate">Курс</span>
            <span class="nbk-page__col nbk-page__col--movement">Движение</span>
          </div>

          <!-- Table Rows -->
          <div 
            v-for="item in nbkList" 
            :key="item.code" 
            class="nbk-page__table-row"
          >
            <div class="nbk-page__col nbk-page__col--name">
              <span class="nbk-page__currency-name">{{ item.name }}</span>
            </div>
            <div class="nbk-page__col nbk-page__col--code">
              <span class="nbk-page__currency-code">{{ item.code }}</span>
            </div>
            <div class="nbk-page__col nbk-page__col--rate">
              <span class="nbk-page__currency-rate">{{ item.rate }}</span>
            </div>
            <div class="nbk-page__col nbk-page__col--movement">
              <div 
                class="nbk-page__pill" 
                :class="item.trend === 'up' ? 'nbk-page__pill--up' : 'nbk-page__pill--down'"
              >
                <svg 
                  class="nbk-page__pill-arrow" 
                  :class="{ 'nbk-page__pill-arrow--down': item.trend === 'down' }"
                  viewBox="0 0 10 13" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 0L10 6.5H6.5V13H3.5V6.5H0L5 0Z" />
                </svg>
                <span class="nbk-page__pill-val">{{ item.diff }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'

interface NbkCurrency {
  name: string
  code: string
  rate: string
  diff: string
  trend: 'up' | 'down'
}

const nbkList = ref<NbkCurrency[]>([
  { name: 'АВСТРАЛИЙСКИЙ ДОЛЛАР', code: 'AUD', rate: '310.45', diff: '0.25', trend: 'up' },
  { name: 'АЗЕРБАЙДЖАНСКИЙ МАНАТ', code: 'AZN', rate: '254.30', diff: '0.25', trend: 'up' },
  { name: 'АРМЯНСКИЙ ДРАМ', code: 'AMD', rate: '0.90', diff: '0.25', trend: 'down' },
  { name: 'БРАЗИЛЬСКИЙ РЕАЛ', code: 'BRL', rate: '83.20', diff: '0.25', trend: 'up' },
  { name: 'АНГЛИЙСКИЙ ФУНТ СТЕРЛИНГОВ', code: 'GBP', rate: '585.10', diff: '0.25', trend: 'up' },
  { name: 'БЕЛОРУССКИЙ РУБЛЬ', code: 'BYN', rate: '169.50', diff: '0.25', trend: 'down' },
  { name: 'ВЕНГЕРСКИЙ ФОРИНТ', code: 'HUF', rate: '1.38', diff: '0.25', trend: 'down' },
  { name: 'ГРУЗИНСКИЙ ЛАРИ', code: 'GEL', rate: '141.50', diff: '0.25', trend: 'up' },
  { name: 'ГОНКОНГСКИЙ ДОЛЛАР', code: 'HKD', rate: '55.40', diff: '0.25', trend: 'up' },
  { name: 'ДОЛЛАР США', code: 'USD', rate: '431.20', diff: '0.25', trend: 'up' },
  { name: 'ЕВРО', code: 'EUR', rate: '488.50', diff: '0.53', trend: 'down' },
  { name: 'РОССИЙСКИЙ РУБЛЬ', code: 'RUB', rate: '5.62', diff: '0.03', trend: 'up' },
  { name: 'КИТАЙСКИЙ ЮАНЬ', code: 'CNY', rate: '67.80', diff: '0.12', trend: 'up' }
])
</script>

<style lang="scss" scoped>
.nbk-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.nbk-page {
  &__container {
    padding-top: 53px;

    @media (max-width: 767px) {
      padding-top: 26px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &__title {
    font-family: 'GP', sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 35px;
    color: #000000;
    margin-bottom: 60px;
    letter-spacing: 0;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 23px;
      font-weight: 500;
      margin-bottom: 20px;
    }
  }

  &__br-mobile {
    display: none;

    @media (max-width: 767px) {
      display: block;
    }
  }

  &__table {
    width: 100%;
    max-width: 741px;

    @media (max-width: 767px) {
      max-width: 100%;
    }
  }

  &__table-header {
    display: flex;
    align-items: center;
    padding-bottom: 22px;

    @media (max-width: 767px) {
      padding-bottom: 14px;
    }

    .nbk-page__col {
      font-family: 'GP', sans-serif;
      font-size: 16px;
      font-weight: 400;
      color: #000000;
      line-height: 1;

      @media (max-width: 767px) {
        font-size: 10px;
      }
    }
  }

  &__table-row {
    display: flex;
    align-items: center;
    height: 61px;
    border-bottom: 1px solid rgba(184, 184, 184, 0.5);

    @media (max-width: 767px) {
      height: auto;
      min-height: 44px;
      padding: 10px 0;
    }
  }

  &__col {
    &--name {
      flex: 0 0 365px;
      max-width: 365px;
      text-align: left;

      @media (max-width: 767px) {
        flex: 0 0 125px;
        max-width: 125px;
        padding-right: 6px;
      }
    }

    &--code {
      flex: 0 0 150px;
      text-align: center;

      @media (max-width: 767px) {
        flex: 0 0 55px;
        max-width: 55px;
      }
    }

    &--rate {
      flex: 0 0 120px;
      text-align: center;

      @media (max-width: 767px) {
        flex: 0 0 75px;
        max-width: 75px;
      }
    }

    &--movement {
      flex: 0 0 106px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 767px) {
        flex: 0 0 80px;
        max-width: 80px;
        justify-content: flex-end;
      }
    }
  }

  &__currency-name {
    font-family: 'GP', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 20px;
    color: #000000;
    text-transform: uppercase;

    @media (max-width: 767px) {
      font-size: 10px;
      line-height: 12px;
      font-weight: 500;
    }
  }

  &__currency-code {
    font-family: 'GP', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    line-height: 1;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__currency-rate {
    font-family: 'GP', sans-serif;
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    line-height: 1;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__pill {
    width: 65px;
    height: 28px;
    border-radius: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &--up {
      background-color: rgba(96, 178, 88, 0.1);
      color: #60B258;
    }

    &--down {
      background-color: rgba(222, 19, 6, 0.1);
      color: #DE1306;
    }

    &-arrow {
      width: 10px;
      height: 13px;
      flex-shrink: 0;

      &--down {
        transform: rotate(180deg);
      }
    }

    &-val {
      font-family: 'GP', sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 1;
      color: inherit;
    }

    @media (max-width: 767px) {
      width: 49px;
      height: 23px;
      gap: 4px;

      &-arrow {
        width: 7px;
        height: 9px;
      }

      &-val {
        font-size: 12px;
      }
    }
  }
}
</style>

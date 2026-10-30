<template>
  <div class="exchanger-rate-cards">
    <!-- Card 1: Лучшие курсы валют на сейчас -->
    <section class="exchanger-rate-cards__card exchanger-rate-cards__card--best">
      <div class="exchanger-rate-cards__header">
        <h2 class="exchanger-rate-cards__title">Лучшие курсы валют на сейчас</h2>

        <div class="exchanger-rate-cards__controls">
          <!-- City Selector -->
          <div class="exchanger-rate-cards__city-picker">
            <button
              type="button"
              class="exchanger-rate-cards__city-btn"
              @click.stop="isCityDropdownOpen = !isCityDropdownOpen"
            >
              <span>{{ banksStore.selectedCity }}</span>
              <svg
                class="exchanger-rate-cards__chevron"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#FF8A16"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <!-- Dropdown -->
            <ul v-if="isCityDropdownOpen" class="exchanger-rate-cards__city-menu">
              <li
                v-for="city in banksStore.cities"
                :key="city"
                class="exchanger-rate-cards__city-item"
                :class="{
                  'exchanger-rate-cards__city-item--active': city === banksStore.selectedCity
                }"
                @click="selectCity(city)"
              >
                {{ city }}
              </li>
            </ul>
          </div>

          <!-- Type Tabs: Обменники / Банки -->
          <div class="exchanger-rate-cards__tabs">
            <button
              type="button"
              class="exchanger-rate-cards__tab exchanger-rate-cards__tab--active"
            >
              Обменники
            </button>
            <router-link to="/rates" class="exchanger-rate-cards__tab"> Банки </router-link>
          </div>
        </div>
      </div>

      <!-- Mobile Subheaders (Валюта, Покупка, Продажа) -->
      <div class="exchanger-rate-cards__mobile-head">
        <span class="exchanger-rate-cards__mobile-th exchanger-rate-cards__mobile-th--currency"
          >Валюта</span
        >
        <span class="exchanger-rate-cards__mobile-th">Покупка</span>
        <span class="exchanger-rate-cards__mobile-th">Продажа</span>
      </div>

      <!-- Currencies List (USD, EUR, RUR) -->
      <div class="exchanger-rate-cards__currencies">
        <div
          v-for="curr in currencyList"
          :key="curr.symbol"
          class="exchanger-rate-cards__currency-item"
        >
          <div class="exchanger-rate-cards__currency-main">
            <div class="exchanger-rate-cards__badge" :style="{ backgroundColor: curr.color }">
              <span class="exchanger-rate-cards__badge-symbol">{{ curr.iconText }}</span>
            </div>
            <div class="exchanger-rate-cards__currency-info">
              <span class="exchanger-rate-cards__currency-code">{{ curr.code }}</span>
              <span class="exchanger-rate-cards__currency-name">{{ curr.name }}</span>
            </div>
          </div>

          <div class="exchanger-rate-cards__divider"></div>

          <div class="exchanger-rate-cards__rates">
            <div class="exchanger-rate-cards__rate-cell">
              <span class="exchanger-rate-cards__rate-label">Покупка</span>
              <span class="exchanger-rate-cards__rate-value">{{ curr.buy }}</span>
            </div>
            <div class="exchanger-rate-cards__rate-cell">
              <span class="exchanger-rate-cards__rate-label">Продажа</span>
              <span class="exchanger-rate-cards__rate-value">{{ curr.sell }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom link: Конвертер валют -->
      <div class="exchanger-rate-cards__footer">
        <router-link to="/rates" class="exchanger-rate-cards__converter-link">
          Конвертер валют по лучшим курсам
        </router-link>
      </div>
    </section>

    <!-- Card 2: Средний курс тенге -->
    <section class="exchanger-rate-cards__card exchanger-rate-cards__card--average">
      <div class="exchanger-rate-cards__header">
        <h2 class="exchanger-rate-cards__title">Средний курс тенге</h2>

        <div class="exchanger-rate-cards__controls">
          <!-- City Selector -->
          <div class="exchanger-rate-cards__city-picker">
            <button
              type="button"
              class="exchanger-rate-cards__city-btn"
              @click.stop="isCityDropdownOpen2 = !isCityDropdownOpen2"
            >
              <span>{{ banksStore.selectedCity }}</span>
              <svg
                class="exchanger-rate-cards__chevron"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#FF8A16"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <!-- Dropdown -->
            <ul v-if="isCityDropdownOpen2" class="exchanger-rate-cards__city-menu">
              <li
                v-for="city in banksStore.cities"
                :key="city"
                class="exchanger-rate-cards__city-item"
                :class="{
                  'exchanger-rate-cards__city-item--active': city === banksStore.selectedCity
                }"
                @click="selectCity(city)"
              >
                {{ city }}
              </li>
            </ul>
          </div>

          <!-- Type Tabs: Обменники / Банки -->
          <div class="exchanger-rate-cards__tabs">
            <button
              type="button"
              class="exchanger-rate-cards__tab exchanger-rate-cards__tab--active"
            >
              Обменники
            </button>
            <router-link to="/rates" class="exchanger-rate-cards__tab"> Банки </router-link>
          </div>
        </div>
      </div>

      <!-- Mobile Subheaders (Валюта, Покупка, Продажа) -->
      <div class="exchanger-rate-cards__mobile-head">
        <span class="exchanger-rate-cards__mobile-th exchanger-rate-cards__mobile-th--currency"
          >Валюта</span
        >
        <span class="exchanger-rate-cards__mobile-th">Покупка</span>
        <span class="exchanger-rate-cards__mobile-th">Продажа</span>
      </div>

      <!-- Currencies List (USD, EUR, RUR) -->
      <div class="exchanger-rate-cards__currencies">
        <div
          v-for="curr in currencyList"
          :key="`avg-${curr.symbol}`"
          class="exchanger-rate-cards__currency-item"
        >
          <div class="exchanger-rate-cards__currency-main">
            <div class="exchanger-rate-cards__badge" :style="{ backgroundColor: curr.color }">
              <span class="exchanger-rate-cards__badge-symbol">{{ curr.iconText }}</span>
            </div>
            <div class="exchanger-rate-cards__currency-info">
              <span class="exchanger-rate-cards__currency-code">{{ curr.code }}</span>
              <span class="exchanger-rate-cards__currency-name">{{ curr.name }}</span>
            </div>
          </div>

          <div class="exchanger-rate-cards__divider"></div>

          <div class="exchanger-rate-cards__rates">
            <div class="exchanger-rate-cards__rate-cell">
              <span class="exchanger-rate-cards__rate-label">Покупка</span>
              <span class="exchanger-rate-cards__rate-value">{{ curr.buy }}</span>
            </div>
            <div class="exchanger-rate-cards__rate-cell">
              <span class="exchanger-rate-cards__rate-label">Продажа</span>
              <span class="exchanger-rate-cards__rate-value">{{ curr.sell }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()

const isCityDropdownOpen = ref(false)
const isCityDropdownOpen2 = ref(false)

function selectCity(city: string) {
  banksStore.setCity(city)
  isCityDropdownOpen.value = false
  isCityDropdownOpen2.value = false
}

const currencyList = [
  {
    code: 'USD',
    name: 'Доллар',
    symbol: 'USD',
    iconText: '$',
    color: '#FF8A16',
    buy: '430.50',
    sell: '437.50'
  },
  {
    code: 'EUR',
    name: 'Евро',
    symbol: 'EUR',
    iconText: '€',
    color: '#DC2B7C',
    buy: '430.50',
    sell: '437.50'
  },
  {
    code: 'RUR',
    name: 'Рубль',
    symbol: 'RUR',
    iconText: '₽',
    color: '#E41F18',
    buy: '430.50',
    sell: '437.50'
  }
]
</script>

<style lang="scss" scoped>
.exchanger-rate-cards {
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__card {
    background: #f9f9f9;
    border-radius: 14px;
    padding: 24px 36px 28px;
    box-sizing: border-box;

    &--best {
      padding-bottom: 22px;
    }

    &--average {
      padding-bottom: 28px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  &__title {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 1;
    color: #000000;
    margin: 0;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__city-picker {
    position: relative;
  }

  &__city-btn {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    background: #fef2e3;
    border: none;
    border-radius: 4px;
    height: 38px;
    padding: 0 16px;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    cursor: pointer;
    min-width: 186px;
    box-sizing: border-box;
    transition: background-color 0.2s;

    &:hover {
      background: #fde6cc;
    }
  }

  &__chevron {
    transition: transform 0.2s;
  }

  &__city-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    list-style: none;
    padding: 6px 0;
    margin: 0;
    z-index: 50;
  }

  &__city-item {
    padding: 8px 16px;
    font-family: 'Gotham Pro', sans-serif;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
    transition: background-color 0.15s;

    &:hover,
    &--active {
      background: #fef2e3;
      color: #ff8a16;
      font-weight: 500;
    }
  }

  &__tabs {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__tab {
    background: none;
    border: none;
    padding: 0 0 2px 0;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 1;
    color: #b8b8b8;
    cursor: pointer;
    text-decoration: none;
    transition: color 0.2s;

    &--active {
      color: #ff8a16;
      border-bottom: 2px solid #ff8a16;
    }

    &:hover:not(&--active) {
      color: #707070;
    }
  }

  &__mobile-head {
    display: none;
  }

  &__currencies {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
  }

  &__currency-item {
    display: flex;
    align-items: center;
    gap: 18px;
    flex: 1;
  }

  &__currency-main {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  &__badge {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__badge-symbol {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 26px;
    line-height: 1;
    color: #ffffff;
  }

  &__currency-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__currency-code {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.1;
    color: #000000;
  }

  &__currency-name {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.1;
    color: rgba(0, 0, 0, 0.6);
  }

  &__divider {
    width: 1px;
    height: 32px;
    background: #b8b8b8;
    opacity: 0.6;
    margin: 0 4px;
    flex-shrink: 0;
  }

  &__rates {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  &__rate-cell {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  &__rate-label {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 1;
    color: rgba(0, 0, 0, 0.6);
  }

  &__rate-value {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
    color: #000000;
    letter-spacing: -0.2px;
  }

  &__footer {
    margin-top: 24px;
    padding-top: 4px;
  }

  &__converter-link {
    display: inline-block;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    color: #ff8a16;
    text-decoration: underline;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  /* Responsive Mobile Styles matching Frame 292:1399 */
  @media (max-width: 991px) {
    gap: 24px;

    &__card {
      background: transparent;
      padding: 0;
      border-radius: 0;
    }

    &__header {
      margin-bottom: 12px;
    }

    &__title {
      font-size: 18px;
      line-height: 1;
    }

    &__controls {
      display: none;
    }

    &__mobile-head {
      display: flex;
      align-items: center;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      margin-bottom: 12px;
    }

    &__mobile-th {
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 400;
      font-size: 13px;
      line-height: 1;
      color: rgba(0, 0, 0, 0.5);
      text-align: right;
      width: 60px;

      &--currency {
        flex: 1;
        text-align: left;
      }
    }

    &__currencies {
      flex-direction: column;
      gap: 10px;
    }

    &__currency-item {
      width: 100%;
      padding-bottom: 10px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
    }

    &__currency-main {
      flex: 1;
      gap: 12px;
    }

    &__badge {
      width: 39px;
      height: 39px;
    }

    &__badge-symbol {
      font-size: 20px;
    }

    &__currency-code {
      font-size: 15px;
    }

    &__currency-name {
      font-size: 10px;
    }

    &__divider {
      display: none;
    }

    &__rates {
      gap: 12px;
    }

    &__rate-cell {
      width: 60px;
      text-align: right;
      align-items: flex-end;
    }

    &__rate-label {
      display: none;
    }

    &__rate-value {
      font-size: 14px;
    }

    &__footer {
      margin-top: 14px;
    }

    &__converter-link {
      font-size: 14px;
    }
  }
}
</style>

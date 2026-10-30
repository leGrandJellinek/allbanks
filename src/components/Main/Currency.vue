<template>
  <section class="main__currency">
    <div class="container main__currency-container">
      <div class="main__currency-header">
        <h2 class="main__currency-title">Лучшие курсы валют</h2>

        <!-- City Selector Dropdown (Shown in center on desktop / below header on mobile when exchangers active) -->
        <div class="main__currency-controls">
          <div
            ref="citySelectRef"
            class="city-select"
            :class="{ 'mobile-hidden': banksStore.activeCurrencyTab === 'banks' }"
          >
            <button
              class="city-select__button"
              :class="{ open: banksStore.isCityDropdownOpen }"
              @click="banksStore.toggleCityDropdown"
            >
              <span>{{ banksStore.selectedCity }}</span>
              <svg
                class="city-select__arrow"
                :class="{ rotated: banksStore.isCityDropdownOpen }"
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
                />
              </svg>
            </button>

            <ul v-if="banksStore.isCityDropdownOpen" class="city-select__menu">
              <li
                v-for="city in banksStore.cities"
                :key="city"
                class="city-select__item"
                :class="{ selected: banksStore.selectedCity === city }"
                @click="banksStore.setCity(city)"
              >
                {{ city }}
              </li>
            </ul>
          </div>

          <!-- Tabs: Обменники / Банки -->
          <div class="main__currency-tabs">
            <button
              class="main__currency-tab"
              :class="{ active: banksStore.activeCurrencyTab === 'exchangers' }"
              @click="banksStore.setCurrencyTab('exchangers')"
            >
              Обменники
            </button>
            <button
              class="main__currency-tab"
              :class="{ active: banksStore.activeCurrencyTab === 'banks' }"
              @click="banksStore.setCurrencyTab('banks')"
            >
              Банки
            </button>
          </div>
        </div>
      </div>

      <!-- Desktop Currency Pills (1:1 from Figma Desktop Frame 1: Group 229) -->
      <div class="main__currency-desktop-grid">
        <div v-for="currency in banksStore.currencyList" :key="currency.id" class="currency-pill">
          <div class="currency-pill__badge" :style="{ backgroundColor: currency.color }">
            <span>{{ currency.symbol }}</span>
          </div>

          <div class="currency-pill__info">
            <span class="currency-pill__code">{{ currency.currencySymbol }}</span>
            <span class="currency-pill__name">{{ currency.currencyName }}</span>
          </div>

          <div class="currency-pill__divider"></div>

          <div class="currency-pill__rate">
            <span class="rate-label">Покупка</span>
            <span class="rate-val">{{ currency.buyPrice }}</span>
          </div>

          <div class="currency-pill__rate">
            <span class="rate-label">Продажа</span>
            <span class="rate-val">{{ currency.sellPrice }}</span>
          </div>
        </div>
      </div>

      <!-- Mobile Currency Table Card (1:1 from Figma Mobile Frame 230:622) -->
      <div class="main__currency-card mobile-only">
        <div class="main__currency-table-head">
          <span class="head-col currency">Валюта</span>
          <span class="head-col price">Покупка</span>
          <span class="head-col price">Продажа</span>
        </div>

        <div class="main__currency-list">
          <CurrencyItem
            v-for="currency in banksStore.currencyList"
            :key="currency.id"
            :item="currency"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useBanksStore } from '@/stores/banks'
import CurrencyItem from '@/components/Main/CurrencyItem.vue'

const banksStore = useBanksStore()
const citySelectRef = ref<HTMLElement | null>(null)

function onDocumentClick(e: MouseEvent) {
  if (citySelectRef.value && !citySelectRef.value.contains(e.target as Node)) {
    banksStore.isCityDropdownOpen = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
})
</script>

<style lang="scss" scoped>
.main__currency {
  margin-top: 50px;
  margin-bottom: 60px;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 20px;
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

  &-controls {
    display: flex;
    align-items: center;
    gap: 32px;

    @media (max-width: 768px) {
      width: 100%;
      justify-content: space-between;
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 16px;
    }
  }

  &-tabs {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  &-tab {
    background: none;
    border: none;
    font-size: 22px;
    font-weight: 500;
    color: rgba(184, 184, 184, 0.6);
    padding: 0 0 2px 0;
    cursor: pointer;
    position: relative;
    border-bottom: 1px solid rgba(184, 184, 184, 0.6);
    transition: all 0.2s ease;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    &.active {
      color: #ff8a16;
      border-bottom: 1px solid #ff8a16;
    }
  }

  // Desktop Currency Pills Grid (1:1 from Figma Desktop Frame 1: Group 229)
  &-desktop-grid {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    margin-top: 24px;
    padding: 10px 0;

    @media (max-width: 991px) {
      display: none;
    }
  }

  .currency-pill {
    display: flex;
    align-items: center;
    gap: 14px;
    flex: 1;

    &__badge {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 24px;
      font-weight: 700;
      flex-shrink: 0;
    }

    &__info {
      display: flex;
      flex-direction: column;
      min-width: 50px;
    }

    &__code {
      font-size: 18px;
      font-weight: 700;
      color: #000000;
      line-height: 1.1;
    }

    &__name {
      font-size: 11px;
      color: rgba(0, 0, 0, 0.55);
      margin-top: 2px;
    }

    &__divider {
      width: 1px;
      height: 32px;
      background: #e0e0e0;
      margin: 0 4px;
    }

    &__rate {
      display: flex;
      flex-direction: column;
      min-width: 65px;

      .rate-label {
        font-size: 11px;
        color: rgba(0, 0, 0, 0.5);
      }

      .rate-val {
        font-size: 18px;
        font-weight: 700;
        color: #000000;
        font-variant-numeric: tabular-nums;
        line-height: 1.2;
      }
    }
  }

  // Mobile Table Card
  &-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px 24px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    border: 1px solid #f2f2f2;

    @media (max-width: 576px) {
      padding: 16px 14px;
    }

    &.mobile-only {
      display: none;

      @media (max-width: 991px) {
        display: block;
      }
    }
  }

  &-table-head {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid #eeeeee;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.4);
    font-weight: 500;

    .currency {
      flex: 1.5;
    }

    .price {
      flex: 1;
      text-align: right;
    }
  }
}

.city-select {
  position: relative;
  display: inline-block;
  min-width: 170px;

  &.mobile-hidden {
    @media (max-width: 768px) {
      display: none;
    }
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 9px 16px;
    background: #fef2e3;
    border: 1px solid #ff8a16;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    color: #ff8a16;
    cursor: pointer;
    transition: all 0.2s ease;

    &.open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &__arrow {
    transition: transform 0.2s ease;

    &.rotated {
      transform: rotate(180deg);
    }
  }

  &__menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #ffffff;
    border: 1px solid #ff8a16;
    border-top: none;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow: 0 4px 12px rgba(255, 138, 22, 0.15);
    z-index: 50;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  &__item {
    padding: 10px 16px;
    font-size: 14px;
    color: #1e1e1e;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background: #fef2e3;
      color: #ff8a16;
    }

    &.selected {
      font-weight: 600;
      background: #fef2e3;
      color: #ff8a16;
    }
  }
}
</style>

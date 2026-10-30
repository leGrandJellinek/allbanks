<template>
  <div class="exchangers-page">
    <main class="exchangers-page__main">
      <div class="container exchangers-page__container">
        <!-- Main Title (Figma Frame 47 393:1830 & Mobile Frame 292:1407) -->
        <h1 class="exchangers-page__title">
          Курс доллара, евро, рубля и юаня в обменниках<br />{{ banksStore.selectedCity }} на
          сегодня
        </h1>

        <!-- Mobile City Selector (Under title in Frame 292:1399 Group 108) -->
        <div ref="mobileCityRef" class="exchangers-page__mobile-city-picker">
          <button
            type="button"
            class="exchangers-page__city-btn"
            @click.stop="isMobileCityOpen = !isMobileCityOpen"
          >
            <span>{{ banksStore.selectedCity }}</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
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
          <ul v-if="isMobileCityOpen" class="exchangers-page__city-menu">
            <li
              v-for="city in banksStore.cities"
              :key="city"
              class="exchangers-page__city-item"
              :class="{ 'exchangers-page__city-item--active': city === banksStore.selectedCity }"
              @click="selectMobileCity(city)"
            >
              {{ city }}
            </li>
          </ul>
        </div>

        <!-- Top Widgets: "Лучшие курсы валют на сейчас" & "Средний курс тенге" -->
        <ExchangerRateCards />

        <!-- Filter Bar -->
        <ExchangerFilter @filter="handleFilter" @show-map="handleShowMap" @reset="handleReset" />

        <!-- Exchangers Rates Table (Desktop 9-col / Mobile with tabs) -->
        <ExchangerTable />

        <!-- Source disclaimer, Free add link & SEO Text -->
        <ExchangerSeo />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useBanksStore } from '@/stores/banks'
import ExchangerRateCards from '@/components/Exchangers/ExchangerRateCards.vue'
import ExchangerFilter from '@/components/Exchangers/ExchangerFilter.vue'
import ExchangerTable from '@/components/Exchangers/ExchangerTable.vue'
import ExchangerSeo from '@/components/Exchangers/ExchangerSeo.vue'

const banksStore = useBanksStore()
const isMobileCityOpen = ref(false)
const mobileCityRef = ref<HTMLElement | null>(null)

function onDocumentClick(e: MouseEvent) {
  if (mobileCityRef.value && !mobileCityRef.value.contains(e.target as Node)) {
    isMobileCityOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
})

function selectMobileCity(city: string) {
  banksStore.setCity(city)
  isMobileCityOpen.value = false
}

function handleFilter(filterData: Record<string, string>) {
  console.log('Filter applied:', filterData)
}

function handleShowMap() {
  console.log('Show on map triggered')
}

function handleReset() {
  console.log('Filter reset')
}
</script>

<style lang="scss" scoped>
.exchangers-page {
  background-color: #ffffff;
  min-height: 100vh;

  &__main {
    padding-bottom: 20px;
  }

  &__container {
    max-width: 1230px;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
  }

  &__title {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 38px;
    color: #000000;
    margin: 36px 0 40px 0;
    letter-spacing: -0.2px;
  }

  &__mobile-city-picker {
    display: none;
    position: relative;
    margin-bottom: 24px;
  }

  &__city-btn {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    background: #fef2e3;
    border: none;
    border-radius: 4px;
    height: 32px;
    width: 186px;
    padding: 0 14px;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    cursor: pointer;
    box-sizing: border-box;
  }

  &__city-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    width: 186px;
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
    padding: 8px 14px;
    font-family: 'Gotham Pro', sans-serif;
    font-size: 13px;
    color: #333333;
    cursor: pointer;

    &:hover,
    &--active {
      background: #fef2e3;
      color: #ff8a16;
      font-weight: 500;
    }
  }

  /* Responsive Mobile Styles matching Frame 292:1399 */
  @media (max-width: 991px) {
    &__container {
      padding: 0 20px;
    }

    &__title {
      font-size: 18px;
      line-height: 23px;
      margin: 20px 0 18px 0;
    }

    &__mobile-city-picker {
      display: block;
    }
  }
}
</style>

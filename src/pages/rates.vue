<template>
  <div class="rates-wrapper">
    <main class="main rates-page">
      <div class="container rates-container">
        <!-- Main page title (1:1 from Figma Desktop Frame 46 & Mobile Frame 261:410) -->
        <h1 class="rates-page__title">Курсы валют в банках Казахстана на 16.02.2022</h1>

        <!-- Description with "Читать далее" -->
        <div class="rates-page__desc-block">
          <p class="rates-page__desc">
            На этой странице Вы можете сравнить курсы валют в банках Алматы, Астаны, Шымкента и
            других городах Казахстана. В таблице представлены основные валюты, которые могут Вас
            заинтересовать: доллары ...
          </p>
          <a href="#" class="rates-page__more-link" @click.prevent>Читать далее</a>
        </div>

        <!-- Section title & Mobile tabs -->
        <div class="rates-page__heading-row">
          <h2 class="rates-page__subtitle">Лучшие курсы валют</h2>

          <!-- Mobile Currency Selector Tabs -->
          <RatesMobileTabs v-model="selectedCurrency" />
        </div>

        <!-- Desktop Comprehensive Table -->
        <RatesDesktopTable :banks="desktopBanks" />

        <!-- Mobile Table -->
        <RatesMobileTable :banks="currentMobileBanks" />

        <!-- Pagination (1:1 with Figma Frame 46: 393:1790-393:1800 & Frame 261:410) -->
        <div class="rates-pagination">
          <div class="pagination-pages">
            <button class="page-num active">1</button>
            <button class="page-num">2</button>
            <button class="page-num">3</button>
            <span class="page-ellipsis">...</span>
            <button class="page-num wide">30</button>
          </div>
          <span class="pagination-count">Кредитов 1—17 из 68</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'
import RatesDesktopTable, {
  type DesktopBankRate
} from '@/components/Rates/RatesDesktopTable.vue'
import RatesMobileTabs, { type RateCurrency } from '@/components/Rates/RatesMobileTabs.vue'
import RatesMobileTable, {
  type MobileBankRate
} from '@/components/Rates/RatesMobileTable.vue'

useHead({
  title: 'Курсы валют в банках Казахстана на сегодня - AllBanks.kz',
  meta: [
    {
      name: 'description',
      content:
        'Сравнение актуальных курсов покупки и продажи доллара, евро и рубля во всех банках Казахстана: Алматы, Астана, Шымкент.'
    },
    {
      property: 'og:title',
      content: 'Курсы валют в банках Казахстана на сегодня - AllBanks.kz'
    },
    {
      property: 'og:description',
      content:
        'Сравните курсы доллара, евро и рубля в банках Казахстана. Лучшие предложения обмена.'
    },
    { property: 'og:type', content: 'website' }
  ]
})

// Currency tab on mobile: USD | EUR | RUR
const selectedCurrency = ref<RateCurrency>('USD')

// Desktop banks data (exact 8 banks from Figma Desktop Frame 46: 387:3471)
const desktopBanks = ref<DesktopBankRate[]>([
  {
    id: 1,
    name: 'Bank RBK',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rubBuy: '430.50',
    rubSell: '435.50',
    time: '01.04.22 16:00',
    bestUsdBuy: false,
    bestUsdSell: false,
    bestEurBuy: false,
    bestEurSell: false,
    bestRubBuy: false,
    bestRubSell: false
  },
  {
    id: 2,
    name: 'Halyk Bank',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rubBuy: '430.50',
    rubSell: '435.50',
    time: '01.04.22 16:00',
    bestUsdBuy: false,
    bestUsdSell: false,
    bestEurBuy: false,
    bestEurSell: false,
    bestRubBuy: false,
    bestRubSell: false
  },
  {
    id: 3,
    name: 'Банк Китая',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rubBuy: '430.50',
    rubSell: '435.50',
    time: '01.04.22 16:00',
    bestUsdBuy: true, // Highlighted in Figma Frame 48 (393:1634)
    bestUsdSell: false,
    bestEurBuy: true, // Highlighted in Figma Frame 50 (393:1743)
    bestEurSell: false,
    bestRubBuy: true, // Highlighted in Figma Frame 52 (393:1775)
    bestRubSell: false
  },
  {
    id: 4,
    name: 'Евразийский банк',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rubBuy: '430.50',
    rubSell: '435.50',
    time: '01.04.22 16:00',
    bestUsdBuy: false,
    bestUsdSell: false,
    bestEurBuy: false,
    bestEurSell: false,
    bestRubBuy: false,
    bestRubSell: false
  },
  {
    id: 5,
    name: 'Заман-Банк',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rubBuy: '430.50',
    rubSell: '435.50',
    time: '01.04.22 16:00',
    bestUsdBuy: false,
    bestUsdSell: false,
    bestEurBuy: false,
    bestEurSell: false,
    bestRubBuy: false,
    bestRubSell: false
  },
  {
    id: 6,
    name: 'Нурбанк',
    usdBuy: '430.50',
    usdSell: '430.50',
    eurBuy: '430.50',
    eurSell: '430.50',
    rubBuy: '430.50',
    rubSell: '430.50',
    time: '01.04.22 16:00',
    bestUsdBuy: false,
    bestUsdSell: true, // Highlighted in Figma Frame 49 (393:1635)
    bestEurBuy: false,
    bestEurSell: true, // Highlighted in Figma Frame 51 (393:1745)
    bestRubBuy: false,
    bestRubSell: true // Highlighted in Figma Frame 53 (393:1777)
  },
  {
    id: 7,
    name: 'Сбербанк России',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rubBuy: '430.50',
    rubSell: '435.50',
    time: '01.04.22 16:00',
    bestUsdBuy: false,
    bestUsdSell: false,
    bestEurBuy: false,
    bestEurSell: false,
    bestRubBuy: false,
    bestRubSell: false
  },
  {
    id: 8,
    name: 'Шинхан Банк Казахстана',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rubBuy: '430.50',
    rubSell: '435.50',
    time: '01.04.22 16:00',
    bestUsdBuy: false,
    bestUsdSell: false,
    bestEurBuy: false,
    bestEurSell: false,
    bestRubBuy: false,
    bestRubSell: false
  }
])

// Mobile banks data (exact 8 banks from Figma Mobile Frame 261:410: "Курс в банках")
const mobileBanksUsd: MobileBankRate[] = [
  { id: 1, name: 'Bank RBK', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: false },
  { id: 2, name: 'Halyk Bank', buy: '430.50', sell: '437.50', isBestBuy: true, isBestSell: false }, // Rectangle 129
  { id: 3, name: 'Банк Китая', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: false },
  {
    id: 4,
    name: 'Евразийский банк',
    buy: '430.50',
    sell: '437.50',
    isBestBuy: false,
    isBestSell: false
  },
  { id: 5, name: 'Заман-Банк', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: true }, // Rectangle 130
  { id: 6, name: 'Нурбанк', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: false },
  {
    id: 7,
    name: 'Сбербанк России',
    buy: '430.50',
    sell: '437.50',
    isBestBuy: false,
    isBestSell: false
  },
  {
    id: 8,
    name: 'Шинхан Банк Казахстана',
    buy: '430.50',
    sell: '437.50',
    isBestBuy: false,
    isBestSell: false
  }
]

const currentMobileBanks = computed<MobileBankRate[]>(() => {
  return mobileBanksUsd
})
</script>

<style lang="scss" scoped>
.rates-page {
  padding-top: 20px;
  padding-bottom: 90px;
  font-family: 'Gotham Pro', sans-serif;
  overflow-x: hidden;

  @media (max-width: 991px) {
    padding-top: 10px;
    padding-bottom: 60px;
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    color: #000000;
    line-height: 1.2;
    margin-bottom: 18px;

    @media (max-width: 991px) {
      font-size: 20px;
      line-height: 1.25;
      margin-bottom: 14px;
      word-wrap: break-word;
    }
  }

  &__desc-block {
    margin-bottom: 36px;
    max-width: 873px;

    @media (max-width: 991px) {
      margin-bottom: 24px;
    }
  }

  &__desc {
    font-size: 14px;
    line-height: 1.5;
    color: #000000;
    margin: 0;

    @media (max-width: 991px) {
      font-size: 12px;
      line-height: 1.5;
    }
  }

  &__more-link {
    display: inline-block;
    color: #ff8a16;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    margin-top: 10px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 991px) {
      font-size: 12px;
      margin-top: 8px;
    }
  }

  &__heading-row {
    margin-bottom: 24px;

    @media (max-width: 991px) {
      margin-bottom: 16px;
    }
  }

  &__subtitle {
    font-size: 22px;
    font-weight: 700;
    color: #000000;
    line-height: 1.2;
    margin-bottom: 20px;

    @media (max-width: 991px) {
      font-size: 18px;
      margin-bottom: 16px;
    }
  }
}

.rates-container {
  width: 100%;
  max-width: 1230px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding-left: 20px !important;
    padding-right: 20px !important;
  }
}

/* Pagination (1:1 with Figma Frame 46: 393:1790-393:1800 & Frame 261:410) */
.rates-pagination {
  display: flex;
  align-items: center;
  margin-top: 36px;
  gap: 28px;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    margin-top: 24px;
  }

  .pagination-pages {
    display: flex;
    align-items: center;
    gap: 10px;

    .page-num {
      width: 31px;
      height: 30px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 2px;
      font-size: 13px;
      font-weight: 500;
      color: #b8b8b8;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      &.active {
        border-color: #ff8a16;
        color: #ff8a16;
      }

      &.wide {
        width: 43px;
      }

      &:hover:not(.active) {
        border-color: #c0c0c0;
        color: #555555;
      }
    }

    .page-ellipsis {
      font-size: 14px;
      color: #b8b8b8;
      padding: 0 2px;
    }
  }

  .pagination-count {
    font-size: 12px;
    color: #b8b8b8;
    line-height: 1;
  }
}
</style>

<template>
  <section class="exchanger-table">
    <!-- Desktop Title -->
    <h2 class="exchanger-table__title exchanger-table__title--desktop">Средний курс тенге</h2>

    <!-- Mobile Title -->
    <h2 class="exchanger-table__title exchanger-table__title--mobile">
      Курсы валют в обменных пунктах<br />{{ banksStore.selectedCity }} на сегодня
    </h2>

    <!-- Mobile Currency Switcher Tabs -->
    <div class="exchanger-table__mobile-tabs">
      <button
        v-for="curr in mobileTabs"
        :key="curr.code"
        type="button"
        class="exchanger-table__tab-btn"
        :class="{ 'exchanger-table__tab-btn--active': activeMobileTab === curr.code }"
        @click="activeMobileTab = curr.code"
      >
        <span
          class="exchanger-table__tab-circle"
          :class="`exchanger-table__tab-circle--${curr.code.toLowerCase()}`"
        >
          {{ curr.symbol }}
        </span>
        <span class="exchanger-table__tab-text">{{ curr.code }}</span>
      </button>
    </div>

    <!-- Desktop Table View -->
    <div class="exchanger-table__desktop-wrap">
      <table class="exchanger-table__grid">
        <thead>
          <tr class="exchanger-table__head-row">
            <th class="exchanger-table__th exchanger-table__th--name">Обменный пункт</th>
            <!-- USD -->
            <th class="exchanger-table__th exchanger-table__th--rate">
              <div class="exchanger-table__th-badge exchanger-table__th-badge--usd">
                <span class="exchanger-table__badge-icon">$</span>
                <div class="exchanger-table__badge-text">
                  <span class="exchanger-table__badge-type">Покупка</span>
                  <span class="exchanger-table__badge-sub">USD Доллар</span>
                </div>
              </div>
            </th>
            <th class="exchanger-table__th exchanger-table__th--rate">
              <div class="exchanger-table__th-badge exchanger-table__th-badge--usd">
                <span class="exchanger-table__badge-icon">$</span>
                <div class="exchanger-table__badge-text">
                  <span class="exchanger-table__badge-type">Продажа</span>
                  <span class="exchanger-table__badge-sub">USD Доллар</span>
                </div>
              </div>
            </th>
            <!-- EUR -->
            <th class="exchanger-table__th exchanger-table__th--rate">
              <div class="exchanger-table__th-badge exchanger-table__th-badge--eur">
                <span class="exchanger-table__badge-icon">€</span>
                <div class="exchanger-table__badge-text">
                  <span class="exchanger-table__badge-type">Покупка</span>
                  <span class="exchanger-table__badge-sub">EUR Евро</span>
                </div>
              </div>
            </th>
            <th class="exchanger-table__th exchanger-table__th--rate">
              <div class="exchanger-table__th-badge exchanger-table__th-badge--eur">
                <span class="exchanger-table__badge-icon">€</span>
                <div class="exchanger-table__badge-text">
                  <span class="exchanger-table__badge-type">Продажа</span>
                  <span class="exchanger-table__badge-sub">EUR Евро</span>
                </div>
              </div>
            </th>
            <!-- RUR -->
            <th class="exchanger-table__th exchanger-table__th--rate">
              <div class="exchanger-table__th-badge exchanger-table__th-badge--rur">
                <span class="exchanger-table__badge-icon">₽</span>
                <div class="exchanger-table__badge-text">
                  <span class="exchanger-table__badge-type">Покупка</span>
                  <span class="exchanger-table__badge-sub">RUR Рубль</span>
                </div>
              </div>
            </th>
            <th class="exchanger-table__th exchanger-table__th--rate">
              <div class="exchanger-table__th-badge exchanger-table__th-badge--rur">
                <span class="exchanger-table__badge-icon">₽</span>
                <div class="exchanger-table__badge-text">
                  <span class="exchanger-table__badge-type">Продажа</span>
                  <span class="exchanger-table__badge-sub">RUR Рубль</span>
                </div>
              </div>
            </th>
            <!-- CNY -->
            <th class="exchanger-table__th exchanger-table__th--rate">
              <div class="exchanger-table__th-badge exchanger-table__th-badge--cny">
                <span class="exchanger-table__badge-icon">¥</span>
                <div class="exchanger-table__badge-text">
                  <span class="exchanger-table__badge-type">Покупка</span>
                  <span class="exchanger-table__badge-sub">CNY Юань</span>
                </div>
              </div>
            </th>
            <th class="exchanger-table__th exchanger-table__th--rate">
              <div class="exchanger-table__th-badge exchanger-table__th-badge--cny">
                <span class="exchanger-table__badge-icon">¥</span>
                <div class="exchanger-table__badge-text">
                  <span class="exchanger-table__badge-type">Продажа</span>
                  <span class="exchanger-table__badge-sub">CNY Юань</span>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Exchanger Data Rows -->
          <tr v-for="item in exchangersList" :key="item.id" class="exchanger-table__row">
            <td class="exchanger-table__td exchanger-table__td--name">
              <div class="exchanger-table__item-info">
                <strong class="exchanger-table__item-title">{{ item.name }}</strong>
                <span class="exchanger-table__item-address">{{ item.address }}</span>
                <span class="exchanger-table__item-updated">{{ item.updated }}</span>
              </div>
            </td>
            <!-- USD -->
            <td class="exchanger-table__td exchanger-table__td--rate">{{ item.usdBuy }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ item.usdSell }}</td>
            <!-- EUR -->
            <td class="exchanger-table__td exchanger-table__td--rate">{{ item.eurBuy }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ item.eurSell }}</td>
            <!-- RUR -->
            <td class="exchanger-table__td exchanger-table__td--rate">{{ item.rurBuy }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ item.rurSell }}</td>
            <!-- CNY -->
            <td class="exchanger-table__td exchanger-table__td--rate">{{ item.cnyBuy }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ item.cnySell }}</td>
          </tr>

          <!-- Summary Row 1: Средний курс валют в обменниках -->
          <tr class="exchanger-table__row exchanger-table__row--summary-avg">
            <td class="exchanger-table__td exchanger-table__td--name">
              <strong class="exchanger-table__summary-title">
                Средний курс валют в обменниках
              </strong>
            </td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ avgRates.usdBuy }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ avgRates.usdSell }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ avgRates.eurBuy }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ avgRates.eurSell }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ avgRates.rurBuy }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ avgRates.rurSell }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ avgRates.cnyBuy }}</td>
            <td class="exchanger-table__td exchanger-table__td--rate">{{ avgRates.cnySell }}</td>
          </tr>

          <!-- Summary Row 2: Лучшие курсы валют на сегодня -->
          <tr class="exchanger-table__row exchanger-table__row--summary-best">
            <td class="exchanger-table__td exchanger-table__td--name">
              <strong class="exchanger-table__summary-title">
                Лучшие курсы валют на сегодня
              </strong>
            </td>
            <td class="exchanger-table__td exchanger-table__td--rate">
              <span class="exchanger-table__pill-badge">{{ bestRates.usdBuy }}</span>
            </td>
            <td class="exchanger-table__td exchanger-table__td--rate">
              <span class="exchanger-table__pill-badge">{{ bestRates.usdSell }}</span>
            </td>
            <td class="exchanger-table__td exchanger-table__td--rate">
              <span class="exchanger-table__pill-badge">{{ bestRates.eurBuy }}</span>
            </td>
            <td class="exchanger-table__td exchanger-table__td--rate">
              <span class="exchanger-table__pill-badge">{{ bestRates.eurSell }}</span>
            </td>
            <td class="exchanger-table__td exchanger-table__td--rate">
              <span class="exchanger-table__pill-badge">{{ bestRates.rurBuy }}</span>
            </td>
            <td class="exchanger-table__td exchanger-table__td--rate">
              <span class="exchanger-table__pill-badge">{{ bestRates.rurSell }}</span>
            </td>
            <td class="exchanger-table__td exchanger-table__td--rate">
              <span class="exchanger-table__pill-badge">{{ bestRates.cnyBuy }}</span>
            </td>
            <td class="exchanger-table__td exchanger-table__td--rate">
              <span class="exchanger-table__pill-badge">{{ bestRates.cnySell }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Mobile Table View -->
    <div class="exchanger-table__mobile-wrap">
      <div class="exchanger-table__mobile-head">
        <span class="exchanger-table__m-th exchanger-table__m-th--name">Обменный пункт</span>
        <span class="exchanger-table__m-th exchanger-table__m-th--rate">Покупка</span>
        <span class="exchanger-table__m-th exchanger-table__m-th--rate">Продажа</span>
      </div>

      <!-- Exchangers List -->
      <div v-for="item in exchangersList" :key="`m-${item.id}`" class="exchanger-table__mobile-row">
        <div class="exchanger-table__m-info">
          <strong class="exchanger-table__m-name">{{ item.name }}</strong>
          <span class="exchanger-table__m-addr">{{ item.address }}</span>
          <span class="exchanger-table__m-time">{{ item.updated }}</span>
        </div>
        <div class="exchanger-table__m-rate">
          <span :class="{ 'exchanger-table__pill-badge': isBestRate(item, 'buy') }">
            {{ getRate(item, 'buy') }}
          </span>
        </div>
        <div class="exchanger-table__m-rate">
          <span :class="{ 'exchanger-table__pill-badge': isBestRate(item, 'sell') }">
            {{ getRate(item, 'sell') }}
          </span>
        </div>
      </div>

      <!-- Mobile Summary Row 1: Средний курс валют в обменниках -->
      <div class="exchanger-table__mobile-row exchanger-table__mobile-row--summary-avg">
        <div class="exchanger-table__m-info">
          <strong class="exchanger-table__m-summary-title">
            Средний курс валют в обменниках
          </strong>
        </div>
        <div class="exchanger-table__m-rate">
          {{ getSummaryRate(avgRates, 'buy') }}
        </div>
        <div class="exchanger-table__m-rate">
          {{ getSummaryRate(avgRates, 'sell') }}
        </div>
      </div>

      <!-- Mobile Summary Row 2: Лучшие курсы валют на сегодня -->
      <div class="exchanger-table__mobile-row exchanger-table__mobile-row--summary-best">
        <div class="exchanger-table__m-info">
          <strong class="exchanger-table__m-summary-title"> Лучшие курсы валют на сегодня </strong>
        </div>
        <div class="exchanger-table__m-rate">
          <span class="exchanger-table__pill-badge">
            {{ getSummaryRate(bestRates, 'buy') }}
          </span>
        </div>
        <div class="exchanger-table__m-rate">
          <span class="exchanger-table__pill-badge">
            {{ getSummaryRate(bestRates, 'sell') }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()

const activeMobileTab = ref<'USD' | 'EUR' | 'RUB' | 'CNY'>('USD')

const mobileTabs = [
  { code: 'USD' as const, symbol: '$' },
  { code: 'EUR' as const, symbol: '€' },
  { code: 'RUB' as const, symbol: '₽' },
  { code: 'CNY' as const, symbol: '¥' }
]

export interface ExchangerRow {
  id: number
  name: string
  address: string
  updated: string
  usdBuy: string
  usdSell: string
  eurBuy: string
  eurSell: string
  rurBuy: string
  rurSell: string
  cnyBuy: string
  cnySell: string
}

const exchangersList: ExchangerRow[] = [
  {
    id: 1,
    name: 'ТОО "Som Exchange"',
    address: 'Алмалинский, Ауезова, 32 выше Толе би',
    updated: 'Обн.в 15:12',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rurBuy: '430.50',
    rurSell: '435.50',
    cnyBuy: '430.50',
    cnySell: '435.50'
  },
  {
    id: 2,
    name: 'MIRVAN LTD',
    address: 'Жетысуский, Айнабулак 1, Д.9',
    updated: 'Обн.в 15:12',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rurBuy: '430.50',
    rurSell: '435.50',
    cnyBuy: '430.50',
    cnySell: '435.50'
  },
  {
    id: 3,
    name: 'БАНКа Exchange',
    address: 'Жетысуский, Айнабулак 1, Д.9',
    updated: 'Обн.в 15:12',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rurBuy: '430.50',
    rurSell: '435.50',
    cnyBuy: '430.50',
    cnySell: '435.50'
  },
  {
    id: 4,
    name: 'Som Exchange 2',
    address: 'Жетысуский, Айнабулак 1, Д.9',
    updated: 'Обн.в 15:12',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rurBuy: '430.50',
    rurSell: '435.50',
    cnyBuy: '430.50',
    cnySell: '435.50'
  },
  {
    id: 5,
    name: 'Som Exchange 1',
    address: 'Ауезова 32 уг Толе би',
    updated: 'Обн.в 15:12',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '430.50',
    eurSell: '435.50',
    rurBuy: '430.50',
    rurSell: '435.50',
    cnyBuy: '430.50',
    cnySell: '435.50'
  }
]

const avgRates = {
  usdBuy: '430.50',
  usdSell: '435.50',
  eurBuy: '430.50',
  eurSell: '435.50',
  rurBuy: '430.50',
  rurSell: '435.50',
  cnyBuy: '430.50',
  cnySell: '435.50'
}

const bestRates = {
  usdBuy: '430.50',
  usdSell: '430.50',
  eurBuy: '430.50',
  eurSell: '430.50',
  rurBuy: '430.50',
  rurSell: '430.50',
  cnyBuy: '430.50',
  cnySell: '430.50'
}

function getRate(item: ExchangerRow, type: 'buy' | 'sell'): string {
  if (activeMobileTab.value === 'USD') return type === 'buy' ? item.usdBuy : item.usdSell
  if (activeMobileTab.value === 'EUR') return type === 'buy' ? item.eurBuy : item.eurSell
  if (activeMobileTab.value === 'RUB') return type === 'buy' ? item.rurBuy : item.rurSell
  return type === 'buy' ? item.cnyBuy : item.cnySell
}

function isBestRate(item: ExchangerRow, type: 'buy' | 'sell'): boolean {
  // In the mobile figma frame 292:1399, MIRVAN LTD buy rate has a highlight pill
  return item.id === 2 && type === 'buy'
}

function getSummaryRate(obj: typeof avgRates, type: 'buy' | 'sell'): string {
  if (activeMobileTab.value === 'USD') return type === 'buy' ? obj.usdBuy : obj.usdSell
  if (activeMobileTab.value === 'EUR') return type === 'buy' ? obj.eurBuy : obj.eurSell
  if (activeMobileTab.value === 'RUB') return type === 'buy' ? obj.rurBuy : obj.rurSell
  return type === 'buy' ? obj.cnyBuy : obj.cnySell
}
</script>

<style lang="scss" scoped>
.exchanger-table {
  margin-top: 40px;
  margin-bottom: 24px;

  &__title {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 1;
    color: #000000;
    margin: 0 0 32px 0;

    &--mobile {
      display: none;
    }
  }

  &__mobile-tabs {
    display: none;
  }

  &__desktop-wrap {
    width: 100%;
    overflow-x: auto;
  }

  &__grid {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  &__head-row {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  &__th {
    padding: 0 6px 16px;
    text-align: center;
    vertical-align: bottom;
    box-sizing: border-box;

    &--name {
      text-align: left;
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 500;
      font-size: 16px;
      line-height: 1;
      color: #000000;
      width: 240px;
      padding-left: 0;
    }

    &--rate {
      width: 110px;
    }
  }

  &__th-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-align: left;
  }

  &__badge-icon {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    flex-shrink: 0;
  }

  &__th-badge--usd .exchanger-table__badge-icon {
    background-color: #ff8a16;
  }

  &__th-badge--eur .exchanger-table__badge-icon {
    background-color: #dc2b7c;
  }

  &__th-badge--rur .exchanger-table__badge-icon {
    background-color: #e41f18;
  }

  &__th-badge--cny .exchanger-table__badge-icon {
    background-color: #de251d;
  }

  &__badge-text {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  &__badge-type {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 15px;
    line-height: 1.1;
    color: #000000;
  }

  &__badge-sub {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 8px;
    line-height: 1.1;
    color: rgba(0, 0, 0, 0.6);
    white-space: nowrap;
  }

  &__row {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: background-color 0.15s;

    &:hover:not(&--summary-avg):not(&--summary-best) {
      background-color: #fafafa;
    }

    &--summary-avg {
      background-color: rgba(254, 242, 227, 0.5);
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);

      .exchanger-table__td {
        padding-top: 18px;
        padding-bottom: 18px;
      }
    }

    &--summary-best {
      background-color: rgba(254, 242, 227, 0.5);
      border-bottom: none;

      .exchanger-table__td {
        padding-top: 18px;
        padding-bottom: 18px;
      }
    }
  }

  &__td {
    padding: 18px 6px;
    vertical-align: middle;
    text-align: center;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
    color: #000000;

    &--name {
      text-align: left;
      padding-left: 0;
    }
  }

  &__item-info {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  &__item-title {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.2;
    color: #000000;
  }

  &__item-address {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 11px;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.6);
  }

  &__item-updated {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 10px;
    line-height: 1.2;
    color: rgba(0, 0, 0, 0.4);
  }

  &__summary-title {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.3;
    color: #000000;
    display: inline-block;
    max-width: 170px;
  }

  &__pill-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 138, 22, 0.15);
    border-radius: 3px;
    width: 84px;
    height: 27px;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
    color: #000000;
    box-sizing: border-box;
  }

  &__mobile-wrap {
    display: none;
  }

  /* Responsive Mobile Styles matching Frame 292:1399 */
  @media (max-width: 991px) {
    margin-top: 24px;
    margin-bottom: 20px;

    &__title--desktop {
      display: none;
    }

    &__title--mobile {
      display: block;
      font-size: 18px;
      line-height: 1.25;
      margin-bottom: 16px;
    }

    &__mobile-tabs {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      margin-bottom: 14px;
      gap: 0;
    }

    &__tab-btn {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      background: none;
      border: none;
      padding: 6px 0 8px;
      cursor: pointer;
      position: relative;
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 500;
      font-size: 14px;
      color: #a0a0a0;

      &--active {
        color: #ff8a16;

        &::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #ff8a16;
        }
      }
    }

    &__tab-circle {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: #d9d9d9;
      color: #ffffff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 500;
    }

    &__tab-btn--active .exchanger-table__tab-circle--usd {
      background-color: #ff8a16;
    }

    &__tab-btn--active .exchanger-table__tab-circle--eur {
      background-color: #dc2b7c;
    }

    &__tab-btn--active .exchanger-table__tab-circle--rub {
      background-color: #e41f18;
    }

    &__tab-btn--active .exchanger-table__tab-circle--cny {
      background-color: #de251d;
    }

    &__desktop-wrap {
      display: none;
    }

    &__mobile-wrap {
      display: block;
      width: 100%;
    }

    &__mobile-head {
      display: flex;
      align-items: center;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    &__m-th {
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 400;
      font-size: 12.5px;
      color: rgba(0, 0, 0, 0.5);

      &--name {
        flex: 1;
        text-align: left;
      }

      &--rate {
        width: 65px;
        text-align: right;
        flex-shrink: 0;
      }
    }

    &__mobile-row {
      display: flex;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);

      &--summary-avg {
        background: rgba(254, 242, 227, 0.5);
        margin: 0 -20px;
        padding: 12px 20px;
      }

      &--summary-best {
        background: rgba(254, 242, 227, 0.5);
        margin: 0 -20px;
        padding: 12px 20px;
        border-bottom: none;
      }
    }

    &__m-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding-right: 6px;
    }

    &__m-name {
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 700;
      font-size: 13px;
      line-height: 1.2;
      color: #000000;
    }

    &__m-addr {
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 400;
      font-size: 10.5px;
      line-height: 1.2;
      color: rgba(0, 0, 0, 0.6);
    }

    &__m-time {
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 400;
      font-size: 10px;
      line-height: 1.2;
      color: rgba(0, 0, 0, 0.4);
    }

    &__m-rate {
      width: 65px;
      text-align: right;
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: #000000;
      flex-shrink: 0;
    }

    &__m-summary-title {
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 700;
      font-size: 12.5px;
      line-height: 1.2;
      color: #000000;
      max-width: 140px;
    }

    &__pill-badge {
      width: 62px;
      height: 22px;
      font-size: 12.5px;
      border-radius: 3px;
    }
  }
}
</style>

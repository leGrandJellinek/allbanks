<template>
  <div class="rates-wrapper">
    <main class="main rates-page">
      <div class="container rates-container">
        <!-- Main page title (1:1 from Figma Desktop Frame 46 & Mobile Frame 261:410) -->
        <h1 class="rates-page__title">
          Курсы валют в банках Казахстана на 16.02.2022
        </h1>

        <!-- Description with "Читать далее" -->
        <div class="rates-page__desc-block">
          <p class="rates-page__desc">
            На этой странице Вы можете сравнить курсы валют в банках Алматы, Астаны, Шымкента и других городах Казахстана. В таблице представлены основные валюты, которые могут Вас заинтересовать: доллары ...
          </p>
          <a href="#" class="rates-page__more-link" @click.prevent>Читать далее</a>
        </div>

        <!-- Section title & Mobile tabs -->
        <div class="rates-page__heading-row">
          <h2 class="rates-page__subtitle">Лучшие курсы валют</h2>

          <!-- Mobile Currency Selector Tabs (1:1 from Figma Mobile Frame 261:410) -->
          <div class="rates-mobile-tabs mobile-only">
            <button 
              class="mobile-tab-btn" 
              :class="{ active: selectedCurrency === 'USD' }"
              @click="selectedCurrency = 'USD'"
            >
              <div class="tab-icon usd">$</div>
              <span class="tab-label">USD</span>
              <div class="tab-underline"></div>
            </button>

            <button 
              class="mobile-tab-btn" 
              :class="{ active: selectedCurrency === 'EUR' }"
              @click="selectedCurrency = 'EUR'"
            >
              <div class="tab-icon eur">€</div>
              <span class="tab-label">EUR</span>
              <div class="tab-underline"></div>
            </button>

            <button 
              class="mobile-tab-btn" 
              :class="{ active: selectedCurrency === 'RUR' }"
              @click="selectedCurrency = 'RUR'"
            >
              <div class="tab-icon rur">₽</div>
              <span class="tab-label">RUR</span>
              <div class="tab-underline"></div>
            </button>
          </div>
        </div>

        <!-- Desktop Comprehensive Table (1:1 with Figma Frame 46: 387:3471) -->
        <div class="desktop-table-container desktop-only">
          <table class="desktop-table">
            <thead>
              <tr class="thead-row">
                <th class="th-bank">Банк</th>

                <!-- USD Buy / Sell (Highlighted with Rectangle 2 rounded background) -->
                <th class="th-curr th-usd th-usd-left">
                  <div class="curr-header-cell">
                    <div class="curr-badge usd">$</div>
                    <div class="curr-titles">
                      <span class="action-text">Покупка</span>
                      <span class="sub-text">USD Доллар</span>
                    </div>
                  </div>
                </th>
                <th class="th-curr th-usd th-usd-right">
                  <div class="curr-header-cell">
                    <div class="curr-badge usd">$</div>
                    <div class="curr-titles">
                      <span class="action-text">Продажа</span>
                      <span class="sub-text">USD Доллар</span>
                    </div>
                  </div>
                </th>

                <!-- EUR Buy / Sell -->
                <th class="th-curr th-eur">
                  <div class="curr-header-cell">
                    <div class="curr-badge eur">€</div>
                    <div class="curr-titles">
                      <span class="action-text">Покупка</span>
                      <span class="sub-text">EUR Евро</span>
                    </div>
                  </div>
                </th>
                <th class="th-curr th-eur">
                  <div class="curr-header-cell">
                    <div class="curr-badge eur">€</div>
                    <div class="curr-titles">
                      <span class="action-text">Продажа</span>
                      <span class="sub-text">EUR Евро</span>
                    </div>
                  </div>
                </th>

                <!-- RUB Buy / Sell -->
                <th class="th-curr th-rub">
                  <div class="curr-header-cell">
                    <div class="curr-badge rub">₽</div>
                    <div class="curr-titles">
                      <span class="action-text">Покупка</span>
                      <span class="sub-text">RUB Рубль</span>
                    </div>
                  </div>
                </th>
                <th class="th-curr th-rub">
                  <div class="curr-header-cell">
                    <div class="curr-badge rub">₽</div>
                    <div class="curr-titles">
                      <span class="action-text">Продажа</span>
                      <span class="sub-text">RUB Рубль</span>
                    </div>
                  </div>
                </th>

                <th class="th-time">Время</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(row, idx) in desktopBanks" 
                :key="row.id" 
                class="desktop-row"
                :class="{ 'is-last': idx === desktopBanks.length - 1 }"
              >
                <!-- Bank Title -->
                <td class="td-bank">
                  <span class="bank-name">{{ row.name }}</span>
                </td>

                <!-- USD Buy / Sell -->
                <td class="td-rate td-usd td-usd-left" :class="{ 'is-last-row': idx === desktopBanks.length - 1 }">
                  <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestUsdBuy }">
                    {{ row.usdBuy }}
                  </div>
                </td>
                <td class="td-rate td-usd td-usd-right" :class="{ 'is-last-row': idx === desktopBanks.length - 1 }">
                  <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestUsdSell }">
                    {{ row.usdSell }}
                  </div>
                </td>

                <!-- EUR Buy / Sell -->
                <td class="td-rate">
                  <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestEurBuy }">
                    {{ row.eurBuy }}
                  </div>
                </td>
                <td class="td-rate">
                  <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestEurSell }">
                    {{ row.eurSell }}
                  </div>
                </td>

                <!-- RUB Buy / Sell -->
                <td class="td-rate">
                  <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestRubBuy }">
                    {{ row.rubBuy }}
                  </div>
                </td>
                <td class="td-rate">
                  <div class="rate-val-box" :class="{ 'best-rate-pill': row.bestRubSell }">
                    {{ row.rubSell }}
                  </div>
                </td>

                <!-- Time -->
                <td class="td-time">
                  {{ row.time }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile Table (1:1 with Figma Mobile Frame 261:410) -->
        <div class="mobile-table-wrapper mobile-only">
          <div class="mobile-table-header">
            <span class="m-col m-col-bank">Банк</span>
            <span class="m-col m-col-buy">Покупка</span>
            <span class="m-col m-col-sell">Продажа</span>
          </div>

          <div class="mobile-table-body">
            <div 
              v-for="row in currentMobileBanks" 
              :key="row.id" 
              class="mobile-table-row"
            >
              <div class="m-col m-col-bank">
                <span class="m-bank-name">{{ row.name }}</span>
              </div>
              <div class="m-col m-col-buy">
                <span class="m-rate-val" :class="{ 'best-pill': row.isBestBuy }">
                  {{ row.buy }}
                </span>
              </div>
              <div class="m-col m-col-sell">
                <span class="m-rate-val" :class="{ 'best-pill': row.isBestSell }">
                  {{ row.sell }}
                </span>
              </div>
            </div>
          </div>
        </div>

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

// Currency tab on mobile: USD | EUR | RUR
const selectedCurrency = ref<'USD' | 'EUR' | 'RUR'>('USD')

// Desktop banks data (exact 8 banks from Figma Desktop Frame 46: 387:3471)
const desktopBanks = ref([
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
    bestRubSell: false,
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
    bestRubSell: false,
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
    bestUsdBuy: true,  // Highlighted in Figma Frame 48 (393:1634)
    bestUsdSell: false,
    bestEurBuy: true,  // Highlighted in Figma Frame 50 (393:1743)
    bestEurSell: false,
    bestRubBuy: true,  // Highlighted in Figma Frame 52 (393:1775)
    bestRubSell: false,
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
    bestRubSell: false,
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
    bestRubSell: false,
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
    bestUsdSell: true,  // Highlighted in Figma Frame 49 (393:1635)
    bestEurBuy: false,
    bestEurSell: true,  // Highlighted in Figma Frame 51 (393:1745)
    bestRubBuy: false,
    bestRubSell: true,  // Highlighted in Figma Frame 53 (393:1777)
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
    bestRubSell: false,
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
    bestRubSell: false,
  }
])

// Mobile banks data (exact 8 banks from Figma Mobile Frame 261:410: "Курс в банках")
const mobileBanksUsd = [
  { id: 1, name: 'Bank RBK', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: false },
  { id: 2, name: 'Halyk Bank', buy: '430.50', sell: '437.50', isBestBuy: true, isBestSell: false }, // Rectangle 129
  { id: 3, name: 'Банк Китая', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: false },
  { id: 4, name: 'Евразийский банк', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: false },
  { id: 5, name: 'Заман-Банк', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: true }, // Rectangle 130
  { id: 6, name: 'Нурбанк', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: false },
  { id: 7, name: 'Сбербанк России', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: false },
  { id: 8, name: 'Шинхан Банк Казахстана', buy: '430.50', sell: '437.50', isBestBuy: false, isBestSell: false },
]

const currentMobileBanks = computed(() => {
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

/* Mobile Currency Selector Tabs (1:1 with Figma Mobile Frame 261:410) */
.rates-mobile-tabs {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #b8b8b8;

  .mobile-tab-btn {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding-bottom: 10px;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    margin-bottom: -1px;

    .tab-icon {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #b8b8b8;
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      flex-shrink: 0;
    }

    .tab-label {
      font-size: 14px;
      font-weight: 500;
      color: #b8b8b8;
      line-height: 1;
    }

    .tab-underline {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #b8b8b8;
    }

    &.active {
      .tab-icon {
        background: #ff8a16;
      }

      .tab-label {
        color: #ff8a16;
        font-weight: 700;
      }

      .tab-underline {
        background: #ff8a16;
        height: 2px;
      }
    }
  }
}

/* Desktop Comprehensive Table (1:1 with Figma Desktop Frame 46: 387:3471) */
.desktop-table-container {
  width: 100%;
  margin-top: 10px;
}

.desktop-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    tr.thead-row {
      th {
        padding: 8px 10px 14px 10px;
        vertical-align: middle;

        &.th-bank {
          text-align: left;
          font-size: 14px;
          font-weight: 500;
          color: #000000;
          width: 170px;
          padding-left: 2px;
        }

        &.th-curr {
          text-align: center;
          width: 135px;
        }

        &.th-time {
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          color: #000000;
          width: 140px;
        }

        /* USD Column Highlight Top (Figma Rectangle 2: x=2290, w=270, cornerRadius=18) */
        &.th-usd {
          background: rgba(235, 235, 235, 0.40);

          &.th-usd-left {
            border-top-left-radius: 18px;
            padding-left: 18px;
          }

          &.th-usd-right {
            border-top-right-radius: 18px;
            padding-right: 18px;
          }
        }
      }
    }
  }

  .curr-header-cell {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-align: left;

    .curr-badge {
      width: 26px;
      height: 26px;
      border-radius: 50%;
      color: #ffffff;
      font-size: 14px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      line-height: 1;

      &.usd { background: #ff8a16; }
      &.eur { background: #d92365; }
      &.rub { background: #e41f18; }
    }

    .curr-titles {
      display: flex;
      flex-direction: column;
      line-height: 1.15;

      .action-text {
        font-size: 14px;
        font-weight: 700;
        color: #000000;
      }

      .sub-text {
        font-size: 10px;
        color: #000000;
        margin-top: 1px;
      }
    }
  }

  tbody {
    tr.desktop-row {
      td {
        padding: 13px 10px;
        vertical-align: middle;
        border-bottom: 1px solid #ebebeb;

        &.td-bank {
          padding-left: 2px;
          .bank-name {
            font-size: 15px;
            font-weight: 700;
            color: #000000;
            line-height: 1.25;
            display: block;
            max-width: 140px;
          }
        }

        &.td-rate {
          text-align: center;
          font-size: 18px;
          font-weight: 400;
          color: #000000;
        }

        &.td-time {
          text-align: center;
          font-size: 14px;
          color: #000000;
        }

        /* USD Column Highlight Body (Figma Rectangle 2) */
        &.td-usd {
          background: rgba(235, 235, 235, 0.40);

          &.td-usd-left {
            padding-left: 18px;
          }

          &.td-usd-right {
            padding-right: 18px;
          }

          &.is-last-row {
            &.td-usd-left {
              border-bottom-left-radius: 18px;
            }
            &.td-usd-right {
              border-bottom-right-radius: 18px;
            }
          }
        }
      }
    }
  }

  .rate-val-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 64px;
    height: 27px;
    font-size: 18px;
    font-weight: 400;
    color: #000000;

    &.best-rate-pill {
      width: 84px;
      background: #fef2e3;
      border-radius: 3px;
    }
  }
}

/* Mobile Table Styles (1:1 with Figma Mobile Frame 261:410) */
.mobile-table-wrapper {
  width: 100%;
  margin-top: 14px;
}

.mobile-table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ebebeb;

  .m-col {
    font-size: 13px;
    font-weight: 500;
    color: #000000;

    &-bank {
      width: 44%;
      text-align: left;
    }

    &-buy {
      width: 28%;
      text-align: center;
    }

    &-sell {
      width: 28%;
      text-align: right;
    }
  }
}

.mobile-table-body {
  .mobile-table-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #ebebeb;

    .m-col {
      &-bank {
        width: 44%;
        text-align: left;

        .m-bank-name {
          font-size: 13px;
          font-weight: 700;
          color: #000000;
          line-height: 1.25;
          display: block;
        }
      }

      &-buy {
        width: 28%;
        text-align: center;
      }

      &-sell {
        width: 28%;
        text-align: right;
      }
    }

    .m-rate-val {
      font-size: 15px;
      font-weight: 500;
      color: #000000;
      display: inline-block;

      &.best-pill {
        background: #fef2e3;
        border-radius: 3px;
        padding: 3px 8px;
      }
    }
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

/* Visibility helpers */
.desktop-only {
  display: block;
  @media (max-width: 991px) {
    display: none !important;
  }
}

.mobile-only {
  display: none;
  @media (max-width: 991px) {
    display: flex;
  }
}

.mobile-table-wrapper.mobile-only {
  @media (max-width: 991px) {
    display: block;
  }
}
</style>

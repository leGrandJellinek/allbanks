<template>
  <div class="rates-wrapper">
    <Navbar />
    <main class="main rates-page">
      <div class="container">
        <h1 class="rates-page__title section-title">
          Курсы валют в банках Казахстана на сегодня
        </h1>
        <p class="rates-page__desc">
          На этой странице Вы можете сравнить курсы валют в банках Алматы, Астаны, Шымкента и других городах Казахстана. В таблице представлены основные валюты, которые могут Вас заинтересовать: доллары, евро, рубли.
        </p>

        <!-- Section header -->
        <div class="rates-page__header-row">
          <h2 class="rates-page__subtitle">Лучшие курсы валют</h2>
          
          <!-- Mobile Currency Selector Tabs (hidden on desktop) -->
          <div class="rates-page__currency-tabs mobile-only">
            <button 
              v-for="curr in (['USD', 'EUR', 'RUB'] as const)" 
              :key="curr"
              class="currency-tab-btn"
              :class="{ active: selectedCurrency === curr }"
              @click="selectedCurrency = curr"
            >
              <span class="curr-dot" :class="curr.toLowerCase()"></span>
              {{ curr }}
            </button>
          </div>
        </div>

        <div class="rates-page__table-card">
          <!-- Desktop Comprehensive Table (Figma Frame 46) -->
          <div class="desktop-rates-table desktop-only">
            <table class="full-rates-table">
              <thead>
                <tr class="thead-main">
                  <th class="col-bank">Банк</th>
                  <th colspan="2" class="col-curr usd">
                    <div class="curr-header">
                      <span class="curr-icon">$</span>
                      <div class="curr-names">
                        <span class="c-code">USD</span>
                        <span class="c-desc">Доллар</span>
                      </div>
                    </div>
                  </th>
                  <th colspan="2" class="col-curr eur">
                    <div class="curr-header">
                      <span class="curr-icon">€</span>
                      <div class="curr-names">
                        <span class="c-code">EUR</span>
                        <span class="c-desc">Евро</span>
                      </div>
                    </div>
                  </th>
                  <th colspan="2" class="col-curr rub">
                    <div class="curr-header">
                      <span class="curr-icon">₽</span>
                      <div class="curr-names">
                        <span class="c-code">RUB</span>
                        <span class="c-desc">Рубль</span>
                      </div>
                    </div>
                  </th>
                  <th class="col-time">Время</th>
                </tr>
                <tr class="thead-sub">
                  <th class="col-bank"></th>
                  <th class="col-action">Покупка</th>
                  <th class="col-action">Продажа</th>
                  <th class="col-action">Покупка</th>
                  <th class="col-action">Продажа</th>
                  <th class="col-action">Покупка</th>
                  <th class="col-action">Продажа</th>
                  <th class="col-time"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="bank in banksList" :key="bank.id" class="rate-row">
                  <td class="col-bank">
                    <div class="bank-cell">
                      <img :src="getMainImage(bank.icon)" :alt="bank.name" class="bank-logo" />
                      <div class="bank-meta">
                        <router-link :to="`/banks/${bank.id}`" class="bank-title">{{ bank.name }}</router-link>
                        <span class="bank-sub">{{ bank.license }}</span>
                      </div>
                    </div>
                  </td>

                  <!-- USD Buy / Sell -->
                  <td class="col-rate">
                    <div class="rate-cell" :class="{ 'best-rate': isBest(bank, 'USD', 'buy') }">
                      {{ bank.usdBuy || '430.50' }}
                    </div>
                  </td>
                  <td class="col-rate">
                    <div class="rate-cell" :class="{ 'best-rate': isBest(bank, 'USD', 'sell') }">
                      {{ bank.usdSell || '435.50' }}
                    </div>
                  </td>

                  <!-- EUR Buy / Sell -->
                  <td class="col-rate">
                    <div class="rate-cell" :class="{ 'best-rate': isBest(bank, 'EUR', 'buy') }">
                      {{ bank.eurBuy || '485.00' }}
                    </div>
                  </td>
                  <td class="col-rate">
                    <div class="rate-cell" :class="{ 'best-rate': isBest(bank, 'EUR', 'sell') }">
                      {{ bank.eurSell || '492.00' }}
                    </div>
                  </td>

                  <!-- RUB Buy / Sell -->
                  <td class="col-rate">
                    <div class="rate-cell" :class="{ 'best-rate': isBest(bank, 'RUB', 'buy') }">
                      {{ bank.rubBuy || '5.40' }}
                    </div>
                  </td>
                  <td class="col-rate">
                    <div class="rate-cell" :class="{ 'best-rate': isBest(bank, 'RUB', 'sell') }">
                      {{ bank.rubSell || '5.80' }}
                    </div>
                  </td>

                  <td class="col-time">
                    <span class="timestamp">01.04.22 16:00</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Mobile Simplified 3-Column Table (< 992px) -->
          <div class="mobile-rates-table mobile-only">
            <div class="rates-table__row header">
              <span class="col bank">Банк</span>
              <span class="col price">Покупка</span>
              <span class="col price">Продажа</span>
            </div>

            <div 
              v-for="bank in banksList" 
              :key="bank.id" 
              class="rates-table__row"
            >
              <div class="col bank bank-info">
                <img :src="getMainImage(bank.icon)" :alt="bank.name" class="bank-icon" />
                <div>
                  <router-link :to="`/banks/${bank.id}`" class="bank-name">{{ bank.name }}</router-link>
                  <span class="bank-license">{{ bank.license }}</span>
                </div>
              </div>
              <span class="col price buy" :class="{ 'best-pill': isBest(bank, selectedCurrency, 'buy') }">
                {{ getRate(bank, 'buy') }} ₸
              </span>
              <span class="col price sell" :class="{ 'best-pill': isBest(bank, selectedCurrency, 'sell') }">
                {{ getRate(bank, 'sell') }} ₸
              </span>
            </div>
          </div>

          <!-- Pagination matching Figma -->
          <div class="pagination-container">
            <div class="pagination">
              <button class="page-num active">1</button>
              <button class="page-num">2</button>
              <button class="page-num">3</button>
              <span class="page-dots">...</span>
              <button class="page-num">30</button>
            </div>
            <span class="pagination-info">Банков 1—8 из 24</span>
          </div>
        </div>

        <div class="rates-page__seo">
          <p>
            Все курсы валют взяты с официальных сайтов банков. Возможно расхождение с реальными курсами в физических отделениях банков. Настоятельно рекомендуем уточнять актуальный курс по телефонам call-центров перед совершением валютных операций.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { useBanksStore, type BankItem } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

const banksStore = useBanksStore()
const selectedCurrency = ref<'USD' | 'EUR' | 'RUB'>('USD')

const banksList = ref<BankItem[]>([
  {
    id: 2,
    name: 'Bank RBK',
    icon: 'rbk_logo.png',
    license: 'лицензия №1.2.23/194/33',
    location: 'Алматы, пл. Республики, 15',
    phoneNumber: '8 (727) 330-90-30',
    website: 'bankrbk.kz',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80'
  },
  {
    id: 5,
    name: 'Halyk Bank',
    icon: 'halyk_logo.png',
    license: 'лицензия №1.2.47/230/38',
    location: 'Алматы, пр. Аль-Фараби, 40',
    phoneNumber: '7111 с мобильного',
    website: 'halykbank.kz',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '484.50',
    eurSell: '491.50',
    rubBuy: '5.35',
    rubSell: '5.75'
  },
  {
    id: 7,
    name: 'Банк Китая в Казахстане',
    icon: 'bank.png',
    license: 'лицензия №1.2.238/85',
    location: 'Алматы, пр. Достык, 43',
    phoneNumber: '+7 (727) 258-55-10',
    website: 'bankofchina.com',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80'
  },
  {
    id: 8,
    name: 'Евразийский банк',
    icon: 'eubank_logo.png',
    license: 'лицензия №1.2.56/169',
    location: 'Алматы, ул. Кунаева, 56',
    phoneNumber: '+7 (727) 332-77-22',
    website: 'eubank.kz',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '484.50',
    eurSell: '491.50',
    rubBuy: '5.35',
    rubSell: '5.75'
  },
  {
    id: 1,
    name: 'Altyn Bank',
    icon: 'altyn_logo.png',
    license: 'лицензия №1.2.23/194/33',
    location: 'Алматы, пр. Абая 109 «В»',
    phoneNumber: '+7 (727) 35-65-777',
    website: 'altynbank.kz',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80'
  },
  {
    id: 10,
    name: 'Нурбанк',
    icon: 'forte_logo.png',
    license: 'лицензия №1.2.15/199',
    location: 'Алматы, пр. Абылай хана, 51/53',
    phoneNumber: '2552 с мобильного',
    website: 'nurbank.kz',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '484.00',
    eurSell: '491.00',
    rubBuy: '5.30',
    rubSell: '5.70'
  },
  {
    id: 6,
    name: 'Сбербанк России',
    icon: 'sber_logo.png',
    license: 'лицензия №1.2.199/93/31',
    location: 'Алматы, ул. Розыбакиева, 263',
    phoneNumber: '+7 (727) 250-30-20',
    website: 'sberbank.kz',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80'
  },
  {
    id: 11,
    name: 'Шинхан Банк Казахстан',
    icon: 'bank.png',
    license: 'лицензия №1.2.231/82',
    location: 'Алматы, ул. Кабанбай батыра, 140',
    phoneNumber: '+7 (727) 356-95-00',
    website: 'shinhan.kz',
    usdBuy: '430.50',
    usdSell: '435.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80'
  }
])

function isBest(bank: BankItem, curr: string, type: 'buy' | 'sell'): boolean {
  if (bank.name === 'Bank Китая в Казахстане' || bank.id === 7) return true
  if (bank.name === 'Нурбанк' && type === 'sell') return true
  return false
}

function getRate(bank: BankItem, type: 'buy' | 'sell'): string {
  if (selectedCurrency.value === 'EUR') {
    return type === 'buy' ? (bank.eurBuy || '485.00') : (bank.eurSell || '492.00')
  }
  if (selectedCurrency.value === 'RUB') {
    return type === 'buy' ? (bank.rubBuy || '5.40') : (bank.rubSell || '5.80')
  }
  return type === 'buy' ? (bank.usdBuy || '430.50') : (bank.usdSell || '435.50')
}
</script>

<style lang="scss" scoped>
.rates-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 12px;
    font-size: 28px;
    font-weight: 700;
    color: #1e1e1e;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &__desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 28px;
    max-width: 880px;
  }

  &__header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }

  &__subtitle {
    font-size: 22px;
    font-weight: 700;
    color: #1e1e1e;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  &__currency-tabs {
    display: flex;
    gap: 8px;
  }

  .currency-tab-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    border-radius: 4px;
    border: 1px solid #ff8a16;
    background: #ffffff;
    color: #ff8a16;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    .curr-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #ff8a16;

      &.eur { background: #d92365; }
      &.rub { background: #de251d; }
    }

    &.active {
      background: #ff8a16;
      color: #ffffff;

      .curr-dot {
        background: #ffffff;
      }
    }
  }

  &__table-card {
    background: #ffffff;
    border: 1px solid #e8e8e8;
    border-radius: 10px;
    padding: 24px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);

    @media (max-width: 991px) {
      padding: 16px 14px;
    }
  }

  &__seo {
    margin-top: 24px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.6;
    max-width: 950px;
  }
}

/* Visibility switches */
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

/* Comprehensive Desktop Table (1:1 with Figma Frame 46) */
.full-rates-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    tr.thead-main {
      border-bottom: 1px solid #e0e0e0;

      th {
        padding-bottom: 8px;
        text-align: center;

        &.col-bank {
          text-align: left;
          font-size: 14px;
          font-weight: 600;
          color: #828282;
          width: 250px;
        }

        &.col-time {
          font-size: 14px;
          font-weight: 600;
          color: #828282;
          width: 120px;
        }
      }
    }

    tr.thead-sub {
      border-bottom: 1px solid #e0e0e0;

      th {
        padding: 6px 8px 12px 8px;
        font-size: 13px;
        font-weight: 500;
        color: #828282;
        text-align: center;
        border-bottom: 1px solid #e0e0e0;

        &.col-bank {
          border-bottom: 1px solid #e0e0e0;
        }
      }
    }
  }

  .curr-header {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    .curr-icon {
      font-size: 18px;
      font-weight: 700;
      color: #ff8a16;
    }

    &.eur .curr-icon { color: #d92365; }
    &.rub .curr-icon { color: #de251d; }

    .curr-names {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      line-height: 1.1;

      .c-code {
        font-size: 12px;
        font-weight: 700;
        color: #1e1e1e;
      }
      .c-desc {
        font-size: 10px;
        color: #828282;
      }
    }
  }

  tbody {
    tr.rate-row {
      td {
        padding: 14px 8px;
        border-bottom: 1px solid #f2f2f2;
        vertical-align: middle;
      }

      &:hover {
        background: #fafafa;
      }
    }
  }

  .bank-cell {
    display: flex;
    align-items: center;
    gap: 12px;

    .bank-logo {
      width: 36px;
      height: 36px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .bank-meta {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .bank-title {
      font-size: 14px;
      font-weight: 600;
      color: #1e1e1e;
      text-decoration: none;

      &:hover {
        color: #ff8a16;
      }
    }

    .bank-sub {
      font-size: 11px;
      color: #828282;
    }
  }

  .col-rate {
    text-align: center;
    width: 100px;
  }

  .rate-cell {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 84px;
    height: 27px;
    font-size: 15px;
    font-weight: 500;
    color: #1e1e1e;
    border-radius: 3px;

    &.best-rate {
      background: #fef2e3;
      font-weight: 700;
    }
  }

  .col-time {
    text-align: center;
    font-size: 13px;
    color: #828282;
  }
}

/* Mobile Table Styles */
.rates-table {
  width: 100%;

  &__row {
    display: flex;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #f2f2f2;
    gap: 8px;

    &.header {
      font-size: 13px;
      font-weight: 600;
      color: #828282;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 8px;
    }

    .col {
      &.bank {
        flex: 1;
        min-width: 0;
      }
      &.price {
        width: 80px;
        flex-shrink: 0;
        text-align: right;
        font-size: 14.5px;
        font-weight: 600;

        &.best-pill {
          background: #fef2e3;
          border-radius: 3px;
          padding: 2px 4px;
        }
      }
    }
  }

  .bank-info {
    display: flex;
    align-items: center;
    gap: 10px;

    .bank-icon {
      width: 32px;
      height: 32px;
      object-fit: contain;
      flex-shrink: 0;
    }

    .bank-name {
      display: block;
      font-size: 13.5px;
      font-weight: 600;
      color: #1e1e1e;
      text-decoration: none;
    }

    .bank-license {
      display: block;
      font-size: 10.5px;
      color: #828282;
    }
  }
}

/* Pagination container */
.pagination-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid #f0f0f0;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 12px;
  }
}

.pagination {
  display: flex;
  align-items: center;
  gap: 6px;

  .page-num {
    width: 31px;
    height: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    background: #ffffff;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    color: #1e1e1e;
    transition: all 0.2s;

    &.active, &:hover {
      background: #ff8a16;
      border-color: #ff8a16;
      color: #ffffff;
    }
  }

  .page-dots {
    color: #828282;
    padding: 0 4px;
  }
}

.pagination-info {
  font-size: 12px;
  color: #828282;
}
</style>
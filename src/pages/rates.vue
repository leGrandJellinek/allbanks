<template>
  <div>
    <Navbar />
    <main class="main rates-page">
      <div class="container">
        <h1 class="rates-page__title section-title">
          Курсы валют в банках Казахстана на сегодня
        </h1>
        <p class="rates-page__desc">
          На этой странице Вы можете сравнить курсы валют в банках Алматы, Астаны, Шымкента и других городов Казахстана. В таблице представлены основные валюты, которые могут Вас заинтересовать: доллары, евро, рубли.
        </p>

        <!-- Currency Selector Tabs -->
        <div class="rates-page__currency-tabs">
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

        <div class="rates-page__table-card">
          <div class="rates-table">
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
              <span class="col price buy">{{ getRate(bank, 'buy') }} ₸</span>
              <span class="col price sell">{{ getRate(bank, 'sell') }} ₸</span>
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button class="page-num active">1</button>
            <button class="page-num">2</button>
            <button class="page-num">3</button>
            <span class="page-dots">...</span>
            <button class="page-num">30</button>
          </div>
        </div>

        <div class="rates-page__seo">
          <p>
            Все курсы валют взяты с официальных сайтов банков. Возможно расхождение с реальными курсами в физических отделениях банков. Настоятельно рекомендуем уточнять актуальный курс по телефонам call-центров перед совершением валютных операций.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { useBanksStore, type BankItem } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

const banksStore = useBanksStore()
const selectedCurrency = ref<'USD' | 'EUR' | 'RUB'>('USD')

const banksList = ref<BankItem[]>([
  ...banksStore.banks,
  {
    id: 7,
    name: 'Банк Китая в Казахстане',
    icon: 'bank.png',
    license: 'лицензия №1.2.238/85',
    location: 'Алматы, пр. Достык, 43',
    phoneNumber: '+7 (727) 258-55-10',
    website: 'bankofchina.com',
    usdBuy: '430.50',
    usdSell: '437.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80'
  },
  {
    id: 8,
    name: 'Евразийский банк',
    icon: 'rbk_bank.png',
    license: 'лицензия №1.2.56/169',
    location: 'Алматы, ул. Кунаева, 56',
    phoneNumber: '+7 (727) 332-77-22',
    website: 'eubank.kz',
    usdBuy: '430.50',
    usdSell: '437.50',
    eurBuy: '484.50',
    eurSell: '491.50',
    rubBuy: '5.35',
    rubSell: '5.75'
  },
  {
    id: 9,
    name: 'Заман-Банк',
    icon: 'altyn_bank.png',
    license: 'лицензия №1.2.115/233',
    location: 'Алматы, ул. Макатаева, 127',
    phoneNumber: '+7 (727) 250-88-88',
    website: 'zamanbank.kz',
    usdBuy: '430.50',
    usdSell: '437.50',
    eurBuy: '485.00',
    eurSell: '492.00',
    rubBuy: '5.40',
    rubSell: '5.80'
  },
  {
    id: 10,
    name: 'Нурбанк',
    icon: 'forte_bank.png',
    license: 'лицензия №1.2.15/199',
    location: 'Алматы, пр. Абылай хана, 51/53',
    phoneNumber: '2552 с мобильного',
    website: 'nurbank.kz',
    usdBuy: '430.50',
    usdSell: '437.50',
    eurBuy: '484.00',
    eurSell: '491.00',
    rubBuy: '5.30',
    rubSell: '5.70'
  }
])

function getRate(bank: BankItem, type: 'buy' | 'sell'): string {
  if (selectedCurrency.value === 'EUR') {
    return type === 'buy' ? (bank.eurBuy || '485.00') : (bank.eurSell || '492.00')
  }
  if (selectedCurrency.value === 'RUB') {
    return type === 'buy' ? (bank.rubBuy || '5.40') : (bank.rubSell || '5.80')
  }
  return type === 'buy' ? (bank.usdBuy || '430.50') : (bank.usdSell || '437.50')
}
</script>

<style lang="scss" scoped>
.rates-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 8px;
  }

  &__desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 24px;
    max-width: 820px;
  }

  &__currency-tabs {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }

  .currency-tab-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 9px 22px;
    border-radius: 6px;
    border: 1px solid #ff8a16;
    background: #ffffff;
    color: #ff8a16;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    .curr-dot {
      width: 8px;
      height: 8px;
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
    border: 1px solid #eeeeee;
    border-radius: 12px;
    padding: 20px 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

    @media (max-width: 576px) {
      padding: 16px 12px;
    }
  }

  &__seo {
    margin-top: 24px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.6;
    max-width: 900px;
  }
}

.rates-table {
  width: 100%;

  &__row {
    display: flex;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #f2f2f2;
    gap: 8px;

    &:last-child {
      border-bottom: none;
    }

    &.header {
      font-size: 13px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.4);
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 10px;

      .col.price {
        font-size: 13px;
        color: rgba(0, 0, 0, 0.4);
        font-weight: 600;
      }
    }

    .col {
      &.bank {
        flex: 1;
        min-width: 0;
      }
      &.price {
        width: 78px;
        flex-shrink: 0;
        text-align: right;
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;

        @media (max-width: 576px) {
          width: 72px;
          font-size: 13.5px;
        }
      }
    }
  }

  .bank-info {
    display: flex;
    align-items: center;
    gap: 12px;

    @media (max-width: 576px) {
      gap: 8px;
    }

    .bank-icon {
      width: 36px;
      height: 36px;
      object-fit: contain;
      flex-shrink: 0;

      @media (max-width: 576px) {
        width: 28px;
        height: 28px;
      }
    }

    .bank-name {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: #1e1e1e;
      text-decoration: none;
      line-height: 1.25;

      &:hover {
        color: #ff8a16;
      }
    }

    .bank-license {
      display: block;
      font-size: 11px;
      color: rgba(0, 0, 0, 0.4);
      margin-top: 2px;
      line-height: 1.2;
    }
  }
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;

  .page-num {
    width: 36px;
    height: 36px;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    background: #ffffff;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #333333;
    transition: all 0.2s;

    &.active, &:hover {
      background: #ff8a16;
      border-color: #ff8a16;
      color: #ffffff;
    }
  }

  .page-dots {
    color: #999999;
    padding: 0 4px;
  }
}
</style>

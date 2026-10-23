<template>
  <div>
    <Navbar />
    <main class="main rates-page">
      <div class="container">
        <h1 class="rates-page__title section-title">
          Курсы валют в банках Казахстана
        </h1>
        <p class="rates-page__date">Данные обновлены сегодня, 24/7</p>

        <!-- Currency Selector Tabs -->
        <div class="rates-page__currency-tabs">
          <button 
            v-for="curr in ['USD', 'EUR', 'RUB']" 
            :key="curr"
            class="currency-tab-btn"
            :class="{ active: selectedCurrency === curr }"
            @click="selectedCurrency = curr"
          >
            {{ curr }}
          </button>
        </div>

        <!-- Rates Table -->
        <div class="rates-page__table-card">
          <div class="rates-table">
            <div class="rates-table__row header">
              <span class="col bank">Банк</span>
              <span class="col price">Покупка</span>
              <span class="col price">Продажа</span>
            </div>

            <div 
              v-for="bank in banksStore.banks" 
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
              <span class="col price buy">{{ bank.usdBuy }} ₸</span>
              <span class="col price sell">{{ bank.usdSell }} ₸</span>
            </div>
          </div>
        </div>

        <p class="rates-page__disclaimer">
          Все курсы валют взяты с официальных сайтов банков. Возможно расхождение с реальными курсами в физических отделениях.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { useBanksStore } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

const banksStore = useBanksStore()
const selectedCurrency = ref('USD')
</script>

<style lang="scss" scoped>
.rates-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 8px;
  }

  &__date {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 24px;
  }

  &__currency-tabs {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
  }

  .currency-tab-btn {
    padding: 8px 20px;
    border-radius: 6px;
    border: 1px solid #ff8a16;
    background: #ffffff;
    color: #ff8a16;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background: #ff8a16;
      color: #ffffff;
    }
  }

  &__table-card {
    background: #ffffff;
    border: 1px solid #eeeeee;
    border-radius: 12px;
    padding: 16px 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
  }

  &__disclaimer {
    margin-top: 20px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.5);
    line-height: 1.5;
  }
}

.rates-table {
  width: 100%;

  &__row {
    display: flex;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #f2f2f2;

    &:last-child {
      border-bottom: none;
    }

    &.header {
      font-size: 13px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.4);
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 12px;
    }

    .col {
      &.bank {
        flex: 2;
      }
      &.price {
        flex: 1;
        text-align: right;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }

  .bank-info {
    display: flex;
    align-items: center;
    gap: 14px;

    .bank-icon {
      width: 40px;
      height: 40px;
      object-fit: contain;
    }

    .bank-name {
      display: block;
      font-size: 15px;
      font-weight: 600;
      color: #1e1e1e;
      text-decoration: none;

      &:hover {
        color: #ff8a16;
      }
    }

    .bank-license {
      display: block;
      font-size: 11px;
      color: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>

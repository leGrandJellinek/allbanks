<template>
  <div>
    <Navbar />
    <main class="main nbk-page">
      <div class="container">
        <h1 class="nbk-page__title section-title">
          Курсы валют Национального Банка Казахстана
        </h1>
        <p class="nbk-page__subtitle">Официальные расчетные курсы НБ РК</p>

        <div class="nbk-card">
          <div class="nbk-table">
            <div class="nbk-table__row header">
              <span class="col name">Название валюты</span>
              <span class="col code">Код</span>
              <span class="col rate">Курс</span>
              <span class="col change">Динамика</span>
            </div>

            <div 
              v-for="item in nbkList" 
              :key="item.code" 
              class="nbk-table__row"
            >
              <span class="col name">{{ item.name }}</span>
              <span class="col code">{{ item.code }}</span>
              <span class="col rate">{{ item.rate }} ₸</span>
              <span class="col change" :class="item.trend">
                {{ item.diff }}
              </span>
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

const nbkList = ref([
  { name: 'Доллар США', code: 'USD', rate: '431.20', diff: '+0.25', trend: 'up' },
  { name: 'Евро', code: 'EUR', rate: '488.50', diff: '-0.53', trend: 'down' },
  { name: 'Российский рубль', code: 'RUB', rate: '5.62', diff: '+0.03', trend: 'up' },
  { name: 'Австралийский доллар', code: 'AUD', rate: '310.45', diff: '+0.25', trend: 'up' },
  { name: 'Азербайджанский манат', code: 'AZN', rate: '254.30', diff: '-0.40', trend: 'down' },
  { name: 'Бразильский реал', code: 'BRL', rate: '83.20', diff: '+0.15', trend: 'up' },
  { name: 'Английский фунт стерлингов', code: 'GBP', rate: '585.10', diff: '-1.20', trend: 'down' },
  { name: 'Китайский юань', code: 'CNY', rate: '67.80', diff: '+0.12', trend: 'up' },
  { name: 'Грузинский лари', code: 'GEL', rate: '141.50', diff: '+0.34', trend: 'up' },
])
</script>

<style lang="scss" scoped>
.nbk-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 8px;
  }

  &__subtitle {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 24px;
  }
}

.nbk-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
}

.nbk-table {
  width: 100%;

  &__row {
    display: flex;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #f2f2f2;
    font-size: 14px;

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
      &.name {
        flex: 2;
        font-weight: 500;
        color: #1e1e1e;
      }
      &.code {
        flex: 1;
        color: #888888;
        font-weight: 600;
      }
      &.rate {
        flex: 1;
        text-align: right;
        font-weight: 700;
        color: #000000;
      }
      &.change {
        flex: 1;
        text-align: right;
        font-weight: 600;

        &.up {
          color: #5fb451;
        }
        &.down {
          color: #de251d;
        }
      }
    }
  }
}
</style>

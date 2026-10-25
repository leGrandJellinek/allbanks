<template>
  <div>
    <Navbar />
    <main class="main nbk-page">
      <div class="container">
        <h1 class="nbk-page__title section-title">
          Курсы валют Национального Банка Казахстана на 16.02.2022
        </h1>
        <p class="nbk-page__subtitle">
          Официальные расчетные курсы иностранных валют к казахстанскому тенге, установленные Национальным Банком Республики Казахстан.
        </p>

        <div class="nbk-card">
          <div class="nbk-table">
            <div class="nbk-table__row header">
              <span class="col name">Название валюты</span>
              <span class="col code">Код валюты</span>
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
                <span class="arrow">{{ item.trend === 'up' ? '↑' : '↓' }}</span>
                {{ item.diff }}
              </span>
            </div>
          </div>
        </div>

        <div class="nbk-page__disclaimer">
          <p>
            Официальные курсы Национального Банка РК вступают в силу со следующего рабочего дня после дня их установления и действуют до установления следующих официальных курсов.
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'

const nbkList = ref([
  { name: 'АВСТРАЛИЙСКИЙ ДОЛЛАР', code: 'AUD', rate: '310.45', diff: '0.25', trend: 'up' },
  { name: 'АЗЕРБАЙДЖАНСКИЙ МАНАТ', code: 'AZN', rate: '254.30', diff: '0.53', trend: 'up' },
  { name: 'АРМЯНСКИЙ ДРАМ', code: 'AMD', rate: '0.90', diff: '0.05', trend: 'up' },
  { name: 'БРАЗИЛЬСКИЙ РЕАЛ', code: 'BRL', rate: '83.20', diff: '2.43', trend: 'down' },
  { name: 'АНГЛИЙСКИЙ ФУНТ СТЕРЛИНГОВ', code: 'GBP', rate: '585.10', diff: '2.43', trend: 'down' },
  { name: 'БЕЛОРУССКИЙ РУБЛЬ', code: 'BYN', rate: '169.50', diff: '2.43', trend: 'down' },
  { name: 'ВЕНГЕРСКИЙ ФОРИНТ', code: 'HUF', rate: '1.38', diff: '2.43', trend: 'up' },
  { name: 'ГРУЗИНСКИЙ ЛАРИ', code: 'GEL', rate: '141.50', diff: '2.43', trend: 'up' },
  { name: 'ДОЛЛАР США', code: 'USD', rate: '431.20', diff: '0.25', trend: 'up' },
  { name: 'ЕВРО', code: 'EUR', rate: '488.50', diff: '0.53', trend: 'down' },
  { name: 'РОССИЙСКИЙ РУБЛЬ', code: 'RUB', rate: '5.62', diff: '0.03', trend: 'up' },
  { name: 'КИТАЙСКИЙ ЮАНЬ', code: 'CNY', rate: '67.80', diff: '0.12', trend: 'up' }
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
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 24px;
    max-width: 840px;
  }

  &__disclaimer {
    margin-top: 24px;
    font-size: 13px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.5);
  }
}

.nbk-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 20px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

  @media (max-width: 576px) {
    padding: 16px 12px;
  }
}

.nbk-table {
  width: 100%;

  &__row {
    display: flex;
    align-items: center;
    padding: 13px 0;
    border-bottom: 1px solid #f2f2f2;
    font-size: 14px;
    gap: 6px;

    &:last-child {
      border-bottom: none;
    }

    &.header {
      font-size: 13px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.4);
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 10px;

      .col.rate {
        font-weight: 600;
        font-size: 13px;
        padding-right: 14px;
      }

      .col.change {
        font-weight: 600;
        font-size: 13px;
      }
    }

    .col {
      &.name {
        flex: 1;
        min-width: 0;
        font-weight: 500;
        color: #1e1e1e;
        line-height: 1.25;

        @media (max-width: 768px) {
          font-size: 13px;
        }
      }
      &.code {
        width: 44px;
        flex-shrink: 0;
        text-align: center;
        color: #888888;
        font-weight: 700;
        font-size: 13px;
      }
      &.rate {
        width: 82px;
        flex-shrink: 0;
        text-align: right;
        font-weight: 700;
        color: #000000;
        white-space: nowrap;

        @media (max-width: 576px) {
          font-size: 13px;
          width: 76px;
        }
      }
      &.change {
        width: 65px;
        flex-shrink: 0;
        text-align: right;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3px;
        white-space: nowrap;

        @media (max-width: 576px) {
          font-size: 13px;
          width: 58px;
        }

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

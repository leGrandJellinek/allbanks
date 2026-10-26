<template>
  <div class="nbk-page-wrapper">
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
              <span class="col name">Название валюта</span>
              <span class="col code">Код валюты</span>
              <span class="col rate">Курс</span>
              <span class="col movement">Движение</span>
            </div>

            <div 
              v-for="item in nbkList" 
              :key="item.code" 
              class="nbk-table__row"
            >
              <div class="col name">
                <span class="curr-icon">$</span>
                <span class="curr-title">{{ item.name }}</span>
              </div>
              <span class="col code">{{ item.code }}</span>
              <span class="col rate">{{ item.rate }} ₸</span>
              <div class="col movement">
                <div class="movement-pill" :class="item.trend">
                  <span class="arrow">{{ item.trend === 'up' ? '▲' : '▼' }}</span>
                  <span class="diff">{{ item.diff }}</span>
                </div>
              </div>
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
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

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
.nbk-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.nbk-page {
  &__title {
    font-size: 28px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 10px;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &__subtitle {
    font-size: 14px;
    line-height: 1.6;
    color: #828282;
    margin-bottom: 24px;
    max-width: 840px;
  }

  &__disclaimer {
    margin-top: 24px;
    font-size: 13px;
    line-height: 1.6;
    color: #828282;
  }
}

.nbk-card {
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);

  @media (max-width: 576px) {
    padding: 16px 14px;
  }
}

.nbk-table {
  width: 100%;

  &__row {
    display: flex;
    align-items: center;
    padding: 14px 0;
    border-bottom: 1px solid #f2f2f2;
    gap: 12px;

    &:last-child {
      border-bottom: none;
    }

    &.header {
      font-size: 13.5px;
      font-weight: 600;
      color: #828282;
      border-bottom: 1px solid #e0e0e0;
      padding-bottom: 12px;

      .col.rate {
        font-weight: 600;
        font-size: 13.5px;
        color: #828282;
        padding-right: 12px;
      }

      .col.movement {
        font-weight: 600;
        font-size: 13.5px;
        color: #828282;
        justify-content: center;
      }
    }

    .col {
      &.name {
        flex: 1;
        min-width: 0;
        display: flex;
        align-items: center;
        gap: 10px;

        .curr-icon {
          color: #ff8a16;
          font-weight: 700;
          font-size: 16px;
        }

        .curr-title {
          font-weight: 500;
          color: #1e1e1e;
          font-size: 14px;
          letter-spacing: 0.3px;

          @media (max-width: 768px) {
            font-size: 13px;
          }
        }
      }

      &.code {
        width: 70px;
        flex-shrink: 0;
        text-align: center;
        color: #828282;
        font-weight: 500;
        font-size: 14px;
      }

      &.rate {
        width: 90px;
        flex-shrink: 0;
        text-align: right;
        font-weight: 600;
        font-size: 15px;
        color: #1e1e1e;
        white-space: nowrap;
        padding-right: 12px;

        @media (max-width: 576px) {
          font-size: 13.5px;
          width: 76px;
          padding-right: 4px;
        }
      }

      &.movement {
        width: 75px;
        flex-shrink: 0;
        display: flex;
        justify-content: center;

        .movement-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
          width: 65px;
          height: 28px;
          border-radius: 3px;
          font-size: 13px;
          font-weight: 600;

          &.up {
            background: rgba(96, 178, 88, 0.12);
            color: #5fb451;

            .arrow {
              font-size: 9px;
            }
          }

          &.down {
            background: rgba(222, 37, 29, 0.12);
            color: #de251d;

            .arrow {
              font-size: 9px;
            }
          }
        }
      }
    }
  }
}
</style>
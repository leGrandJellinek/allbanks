<template>
  <div>
    <Navbar />
    <main class="main exchangers-page">
      <div class="container">
        <h1 class="exchangers-page__title section-title">
          Курс валют в обменниках {{ banksStore.selectedCity }}
        </h1>
        <p class="exchangers-page__subtitle">Самые актуальные котировки обменных пунктов</p>

        <!-- Average Rates Card -->
        <div class="avg-rates-card">
          <h2 class="avg-rates-card__title">Средний курс тенге в обменниках</h2>
          <div class="avg-rates-grid">
            <div class="avg-item" v-for="c in banksStore.currencyList" :key="c.id">
              <span class="avg-item__symbol" :style="{ backgroundColor: c.color }">{{ c.symbol }}</span>
              <div class="avg-item__details">
                <strong>{{ c.currencySymbol }} {{ c.currencyName }}</strong>
                <span>Покупка: {{ c.buyPrice }} ₸ / Продажа: {{ c.sellPrice }} ₸</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Exchangers List -->
        <div class="exchangers-section">
          <h2 class="exchangers-section__title">Список обменных пунктов</h2>
          <div class="exchangers-grid">
            <div 
              class="exchanger-card" 
              v-for="item in banksStore.exchangers" 
              :key="item.id"
            >
              <div class="exchanger-card__head">
                <h3 class="exchanger-card__name">{{ item.name }}</h3>
                <span class="exchanger-card__addr">📍 {{ item.address }}</span>
              </div>
              <div class="exchanger-card__rates">
                <div class="rate-col">
                  <span class="curr-name">$ USD</span>
                  <span class="rate-val">{{ item.usdBuy }} / {{ item.usdSell }}</span>
                </div>
                <div class="rate-col">
                  <span class="curr-name">€ EUR</span>
                  <span class="rate-val">{{ item.eurBuy }} / {{ item.eurSell }}</span>
                </div>
                <div class="rate-col">
                  <span class="curr-name">₽ RUB</span>
                  <span class="rate-val">{{ item.rubBuy }} / {{ item.rubSell }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()
</script>

<style lang="scss" scoped>
.exchangers-page {
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

.avg-rates-card {
  background: #fef2e3;
  border: 1px solid #ff8a16;
  border-radius: 12px;
  padding: 20px 24px;
  margin-bottom: 32px;

  &__title {
    font-size: 18px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 16px;
  }
}

.avg-rates-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.avg-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  padding: 12px 16px;
  border-radius: 8px;

  &__symbol {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 15px;
  }

  &__details {
    display: flex;
    flex-direction: column;
    font-size: 13px;

    strong {
      color: #000000;
      margin-bottom: 2px;
    }

    span {
      color: #666666;
    }
  }
}

.exchangers-section {
  &__title {
    font-size: 22px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 20px;
  }
}

.exchangers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.exchanger-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

  &__head {
    margin-bottom: 16px;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 12px;
  }

  &__name {
    font-size: 17px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 4px;
  }

  &__addr {
    font-size: 13px;
    color: #777777;
  }

  &__rates {
    display: flex;
    justify-content: space-between;

    .rate-col {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .curr-name {
        font-size: 12px;
        font-weight: 600;
        color: #ff8a16;
      }

      .rate-val {
        font-size: 14px;
        font-weight: 600;
        color: #1e1e1e;
      }
    }
  }
}
</style>

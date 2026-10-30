<template>
  <div class="cash-page-wrapper">
    <main class="main cash-page">
      <div class="container">
        <router-link to="/credits" class="cash-page__back">‹ Назад к кредитам</router-link>
        <h1 class="cash-page__title section-title">Кредиты наличными</h1>
        <p class="cash-page__desc">
          В нашем каталоге мы собрали достоверную информацию о кредитах наличными, которые
          предоставляют банки Казахстана.
        </p>

        <!-- Horizontal Filter Bar (Figma Frame 51) -->
        <div class="credit-filter-bar">
          <div class="filter-item">
            <label>Валюта</label>
            <div class="select-wrap">
              <select v-model="filterCurrency">
                <option value="KZT">KZT (Тенге)</option>
                <option value="USD">USD (Доллар)</option>
              </select>
            </div>
          </div>
          <div class="filter-item">
            <label>Город</label>
            <div class="select-wrap">
              <select v-model="banksStore.selectedCity">
                <option v-for="c in banksStore.cities" :key="c" :value="c">{{ c }}</option>
              </select>
            </div>
          </div>
          <button class="filter-submit-btn" @click="applyFilter">Найти кредит</button>
        </div>

        <div class="cash-grid">
          <div v-for="item in cashLoans" :key="item.id" class="cash-card">
            <div class="cash-card__head">
              <h3 class="bank-name">{{ item.bank }}</h3>
              <p class="program-title">{{ item.program }}</p>
            </div>
            <div class="cash-card__divider"></div>
            <ul class="cash-card__list">
              <li>
                <span class="dot"></span
                ><span
                  >Мин. ставка: <strong>{{ item.rate }}</strong></span
                >
              </li>
              <li>
                <span class="dot"></span
                ><span
                  >Срок: <strong>{{ item.term }}</strong></span
                >
              </li>
              <li>
                <span class="dot"></span
                ><span
                  >Валюта: <strong>{{ item.currency }}</strong></span
                >
              </li>
              <li>
                <span class="dot"></span
                ><span
                  >Макс. сумма: <strong>{{ item.maxSum }}</strong></span
                >
              </li>
            </ul>
            <div class="cash-card__action">
              <router-link to="/credits/apply" class="btn">Получить кредит</router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useBanksStore } from '@/stores/banks'
import { useToastStore } from '@/stores/toast'

const banksStore = useBanksStore()
const toast = useToastStore()
const filterCurrency = ref('KZT')

function applyFilter() {
  toast.info(`Поиск кредитов наличными в г. ${banksStore.selectedCity}`)
}

const cashLoans = ref([
  {
    id: 1,
    bank: 'Bank RBK',
    program: '«Нужный кредит» без залога и без комиссий',
    rate: 'от 5% до 42%',
    term: 'до 60 мес.',
    currency: 'KZT',
    maxSum: '7 млн ₸'
  },
  {
    id: 2,
    bank: 'Банк ЦентрКредит',
    program: '“Кредит наличными на любые цели”',
    rate: 'от 7%',
    term: 'до 120 мес.',
    currency: 'KZT',
    maxSum: 'неогр.'
  },
  {
    id: 3,
    bank: 'Halyk Bank',
    program: 'Кредит без залога за 5 минут',
    rate: 'от 8%',
    term: 'до 60 мес.',
    currency: 'KZT',
    maxSum: '8 млн ₸'
  }
])
</script>

<style lang="scss" scoped>
.cash-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.cash-page {
  &__back {
    display: inline-block;
    color: #ff8a16;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 16px;
    font-weight: 500;
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    color: #1e1e1e;
    margin-bottom: 10px;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  &__desc {
    font-size: 14px;
    color: #828282;
    margin-bottom: 24px;
    max-width: 850px;
  }
}

.credit-filter-bar {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
      font-size: 12px;
      font-weight: 600;
      color: #828282;
    }

    .select-wrap select {
      width: 100%;
      padding: 9px 12px;
      border: 1px solid #e0e0e0;
      border-radius: 4px;
      font-size: 13.5px;
      background: #ffffff;
      outline: none;
    }
  }

  .filter-submit-btn {
    background: #ff8a16;
    color: #ffffff;
    border: none;
    padding: 10px 22px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    height: 38px;
  }
}

.cash-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}

.cash-card {
  background: rgba(235, 235, 235, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;

  &__head {
    .bank-name {
      font-size: 16px;
      font-weight: 700;
      color: #1e1e1e;
      margin: 0 0 6px 0;
    }

    .program-title {
      font-size: 12.5px;
      color: #666666;
      margin: 0;
      line-height: 1.35;
      min-height: 34px;
    }
  }

  &__divider {
    height: 1px;
    background: #e0e0e0;
    margin: 14px 0;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;
    display: flex;
    flex-direction: column;
    gap: 7px;

    li {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 11.5px;
      color: #4f4f4f;

      .dot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #828282;
        flex-shrink: 0;
      }

      strong {
        color: #1e1e1e;
      }
    }
  }

  &__action {
    display: flex;
    justify-content: flex-end;

    .btn {
      font-size: 13.5px;
      font-weight: 600;
      color: #ff8a16;
      text-decoration: underline;

      &:hover {
        color: #e67508;
      }
    }
  }
}
</style>

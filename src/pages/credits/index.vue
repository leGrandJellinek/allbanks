<template>
  <div>
    <Navbar />
    <main class="main credits-page">
      <div class="container">
        <h1 class="credits-page__title section-title">Кредит в Казахстане</h1>
        <p class="credits-page__desc">
          В каталоге AllBanks собраны достоверные предложения о потребительских кредитах, которые предоставляют банки Казахстана. На странице представлены 86 лучших кредитов на любые цели.
        </p>

        <!-- Calculator / Filter Card -->
        <div class="credit-filter-card">
          <div class="filter-grid">
            <div class="filter-field">
              <label>Валюта</label>
              <select v-model="filterCurrency">
                <option value="KZT">KZT (Тенге)</option>
                <option value="USD">USD (Доллар)</option>
              </select>
            </div>
            <div class="filter-field">
              <label>Сумма кредита (₸)</label>
              <input v-model="filterSum" type="number" placeholder="500 000" />
            </div>
            <div class="filter-field">
              <label>Без залога</label>
              <select v-model="filterWithoutCollateral">
                <option value="yes">Да</option>
                <option value="no">Нет</option>
              </select>
            </div>
            <div class="filter-field">
              <label>Город</label>
              <select v-model="banksStore.selectedCity">
                <option v-for="c in banksStore.cities" :key="c" :value="c">{{ c }}</option>
              </select>
            </div>
          </div>
          <button class="filter-submit-btn" @click="applyFilter">Найти кредит</button>
        </div>

        <!-- Best Offers -->
        <h2 class="credits-page__section-subtitle">Лучшие кредитные предложения</h2>
        <div class="offers-grid">
          <div 
            v-for="offer in banksStore.creditOffers" 
            :key="offer.id" 
            class="offer-item"
          >
            <h3 class="offer-name" :style="{ color: offer.logoColor }">
              {{ offer.logoText || offer.name }}
            </h3>
            <div class="offer-specs">
              <div><span>Возраст:</span> <strong>{{ offer.age }}</strong></div>
              <div><span>Сумма:</span> <strong>{{ offer.sum }}</strong></div>
              <div><span>Срок:</span> <strong>{{ offer.term }}</strong></div>
              <div><span>Ставка:</span> <strong>{{ offer.rate }}</strong></div>
              <div><span>Ответ:</span> <strong>{{ offer.responseTime }}</strong></div>
            </div>
            <router-link to="/credits/apply" class="offer-btn">Получить кредит</router-link>
          </div>
        </div>

        <!-- Comparative Table of Consumer Loans -->
        <h2 class="credits-page__section-subtitle">Сравнительная таблица потребительских кредитов</h2>
        <div class="loans-table-card">
          <div 
            v-for="loan in consumerLoans" 
            :key="loan.id" 
            class="loan-row"
          >
            <div class="loan-row__header">
              <h4 class="bank-title">{{ loan.bank }}</h4>
              <span class="loan-name">{{ loan.title }}</span>
            </div>
            <div class="loan-row__params">
              <div><span>Мин. ставка:</span> <strong>{{ loan.minRate }}</strong></div>
              <div><span>Срок:</span> <strong>{{ loan.term }}</strong></div>
              <div><span>Валюта:</span> <strong>{{ loan.currency }}</strong></div>
              <div><span>Залог:</span> <strong>{{ loan.collateral }}</strong></div>
              <div><span>Макс. сумма:</span> <strong>{{ loan.maxSum }}</strong></div>
            </div>
            <router-link to="/credits/apply" class="loan-row__btn">Оформить</router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { useBanksStore } from '@/stores/banks'

const banksStore = useBanksStore()

const filterCurrency = ref('KZT')
const filterSum = ref(500000)
const filterWithoutCollateral = ref('yes')

function applyFilter() {
  alert(`Поиск кредитов на сумму ${filterSum.value} ₸ в г. ${banksStore.selectedCity}`)
}

const consumerLoans = ref([
  {
    id: 1,
    bank: 'Bank RBK',
    title: '«Нужный кредит» под залог (без комиссии и без подтверждения дохода)',
    minRate: 'от 3%',
    term: 'до 60 мес.',
    currency: 'KZT',
    collateral: 'нет',
    maxSum: 'неогр.'
  },
  {
    id: 2,
    bank: 'Банк ЦентрКредит',
    title: '«Кредит наличными»',
    minRate: 'от 5% до 42%',
    term: 'до 60 мес.',
    currency: 'KZT',
    collateral: 'нет',
    maxSum: '7 млн'
  },
  {
    id: 3,
    bank: 'Halyk Bank',
    title: 'Беззалоговый кредит онлайн',
    minRate: 'от 7%',
    term: 'до 60 мес.',
    currency: 'KZT',
    collateral: 'нет',
    maxSum: '10 млн'
  },
  {
    id: 4,
    bank: 'ForteBank',
    title: 'Экспресс-кредит за 5 минут',
    minRate: 'от 8%',
    term: 'до 60 мес.',
    currency: 'KZT',
    collateral: 'нет',
    maxSum: '8 млн'
  }
])
</script>

<style lang="scss" scoped>
.credits-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 8px;
  }

  &__desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.6);
    margin-bottom: 28px;
    max-width: 800px;
  }

  &__section-subtitle {
    font-size: 22px;
    font-weight: 700;
    color: #1e1e1e;
    margin-top: 40px;
    margin-bottom: 20px;
  }
}

.credit-filter-card {
  background: #fef2e3;
  border: 1px solid #ff8a16;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;

  @media (max-width: 576px) {
    padding: 16px;
  }

  .filter-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }
  }

  .filter-field {
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;

    label {
      font-size: 13px;
      font-weight: 600;
      color: #333333;
    }

    input, select {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      padding: 10px 12px;
      border: 1px solid #ff8a16;
      border-radius: 6px;
      background: #ffffff;
      font-size: 14px;
      font-family: inherit;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 138, 22, 0.2);
      }
    }
  }

  .filter-submit-btn {
    width: 100%;
    background: #ff8a16;
    color: #ffffff;
    border: none;
    padding: 14px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #e67508;
    }
  }
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
}

.offer-item {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .offer-name {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 14px;
  }

  .offer-specs {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    margin-bottom: 16px;

    div {
      display: flex;
      justify-content: space-between;

      span {
        color: #777777;
      }

      strong {
        color: #1e1e1e;
      }
    }
  }

  .offer-btn {
    display: block;
    background: #ff8a16;
    color: #ffffff;
    text-align: center;
    padding: 10px 0;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
  }
}

.loans-table-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.loan-row {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  &__header {
    .bank-title {
      font-size: 17px;
      font-weight: 700;
      color: #ff8a16;
      margin-bottom: 4px;
    }

    .loan-name {
      font-size: 13px;
      color: #555555;
    }
  }

  &__params {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 12px;
    font-size: 13px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 2px;

      span {
        color: #888888;
      }

      strong {
        color: #1e1e1e;
      }
    }
  }

  &__btn {
    align-self: flex-start;
    padding: 8px 24px;
    background: #ff8a16;
    color: #ffffff;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>

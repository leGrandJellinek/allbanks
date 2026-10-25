<template>
  <div>
    <Navbar />
    <main class="main deposits-page">
      <div class="container">
        <h1 class="deposits-page__title section-title">Вклады для физических лиц</h1>
        <p class="deposits-page__desc">
          Подберите самый выгодный банковский депозит в тенге или инвалюте с максимальной ставкой вознаграждения.
        </p>

        <!-- Deposits Filter -->
        <div class="deposit-filter-card">
          <div class="filter-grid">
            <div class="filter-field">
              <label>Валюта</label>
              <select v-model="depositCurrency">
                <option value="KZT">KZT (Тенге)</option>
                <option value="USD">USD (Доллар)</option>
              </select>
            </div>
            <div class="filter-field">
              <label>Сумма вклада (₸)</label>
              <input v-model="depositSum" type="number" placeholder="100000" />
            </div>
            <div class="filter-field">
              <label>Срок (мес.)</label>
              <select v-model="depositTerm">
                <option value="6">6 месяцев</option>
                <option value="12">12 месяцев</option>
                <option value="24">24 месяца</option>
              </select>
            </div>
            <div class="filter-field">
              <label>Пополнение</label>
              <select v-model="allowRefill">
                <option value="yes">С пополнением</option>
                <option value="no">Без пополнения</option>
              </select>
            </div>
          </div>
          <button class="filter-submit-btn" @click="searchDeposits">Найти депозит</button>
        </div>

        <!-- Deposits Grid -->
        <div class="deposits-grid">
          <div v-for="d in depositList" :key="d.id" class="deposit-card">
            <div class="deposit-card__head">
              <h3 class="bank-name">{{ d.bank }}</h3>
              <span class="deposit-title">{{ d.title }}</span>
            </div>
            <div class="deposit-card__rate">
              <span class="rate-val">{{ d.rate }}</span>
              <span class="rate-label">годовая ставка</span>
            </div>
            <div class="deposit-card__params">
              <div><span>Мин. сумма:</span> <strong>{{ d.minSum }}</strong></div>
              <div><span>Срок вклада:</span> <strong>{{ d.term }}</strong></div>
              <div><span>Валюта:</span> <strong>{{ d.currency }}</strong></div>
              <div><span>Выплата:</span> <strong>{{ d.payout }}</strong></div>
            </div>
            <router-link :to="`/deposits/${d.id}`" class="deposit-btn">
              Узнать больше
            </router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'

const depositCurrency = ref('KZT')
const depositSum = ref(100000)
const depositTerm = ref('12')
const allowRefill = ref('yes')

function searchDeposits() {
  alert(`Поиск депозитов на сумму ${depositSum.value} ${depositCurrency.value}`)
}

const depositList = ref([
  {
    id: 1,
    bank: 'Altyn Bank',
    title: 'Вклад «Управляй Онлайн»',
    rate: '14.5%',
    minSum: 'от 10 000 ₸',
    term: '12 месяцев',
    currency: 'KZT',
    payout: 'Ежемесячно'
  },
  {
    id: 2,
    bank: 'Bank RBK',
    title: 'Вклад «Safe Deposit»',
    rate: '13.8%',
    minSum: 'от 15 000 ₸',
    term: '24 месяца',
    currency: 'KZT',
    payout: 'В конце срока'
  },
  {
    id: 3,
    bank: 'Halyk Bank',
    title: 'Вклад «Максимальный»',
    rate: '14.2%',
    minSum: 'от 50 000 ₸',
    term: '12 месяцев',
    currency: 'KZT',
    payout: 'Ежемесячно'
  },
  {
    id: 4,
    bank: 'ForteBank',
    title: 'Депозит «Forte Флекс»',
    rate: '13.5%',
    minSum: 'от 20 000 ₸',
    term: '6 месяцев',
    currency: 'KZT',
    payout: 'Капитализация'
  }
])
</script>

<style lang="scss" scoped>
.deposits-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 8px;
  }

  &__desc {
    font-size: 14px;
    color: #666666;
    margin-bottom: 24px;
  }
}

.deposit-filter-card {
  background: #e2edfe;
  border: 1px solid #7ea8f8;
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
    margin-bottom: 16px;

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
      color: #1e3a8a;
    }

    input, select {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      padding: 10px 12px;
      border: 1px solid #7ea8f8;
      border-radius: 6px;
      background: #ffffff;
      font-size: 14px;
      font-family: inherit;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
      }
    }
  }

  .filter-submit-btn {
    width: 100%;
    background: #ff8a16;
    color: #ffffff;
    border: none;
    padding: 13px;
    font-size: 16px;
    font-weight: 700;
    border-radius: 6px;
    cursor: pointer;
  }
}

.deposits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.deposit-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__head {
    margin-bottom: 14px;

    .bank-name {
      font-size: 18px;
      font-weight: 700;
      color: #ff8a16;
      margin-bottom: 4px;
    }

    .deposit-title {
      font-size: 14px;
      color: #555555;
    }
  }

  &__rate {
    background: #fdf6ec;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 16px;
    display: flex;
    align-items: baseline;
    gap: 8px;

    .rate-val {
      font-size: 26px;
      font-weight: 800;
      color: #ff8a16;
    }

    .rate-label {
      font-size: 12px;
      color: #666666;
    }
  }

  &__params {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 13px;
    margin-bottom: 20px;

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

  .deposit-btn {
    display: block;
    background: #ff8a16;
    color: #ffffff;
    text-align: center;
    padding: 11px 0;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>

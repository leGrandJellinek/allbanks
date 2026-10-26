<template>
  <div class="deposits-page-wrapper">
    <Navbar />
    <main class="main deposits-page">
      <div class="container">
        <h1 class="deposits-page__title section-title">Вклады для физических лиц</h1>
        <p class="deposits-page__desc">
          Подберите самый выгодный банковский депозит в тенге или инвалюте с максимальной ставкой вознаграждения в банках Казахстана.
        </p>

        <!-- Filter bar (Figma Frame 53) -->
        <div class="deposit-filter-bar">
          <div class="filter-item">
            <label>Валюта</label>
            <div class="select-wrap">
              <select v-model="depositCurrency">
                <option value="KZT">KZT (Тенге)</option>
                <option value="USD">USD (Доллар)</option>
                <option value="EUR">EUR (Евро)</option>
              </select>
            </div>
          </div>
          <div class="filter-item">
            <label>Сумма вклада</label>
            <div class="select-wrap">
              <input v-model="depositSum" type="text" placeholder="100 000 ₸" />
            </div>
          </div>
          <div class="filter-item">
            <label>Срок вклада</label>
            <div class="select-wrap">
              <select v-model="depositTerm">
                <option value="6">6 месяцев</option>
                <option value="12">12 месяцев</option>
                <option value="24">2 года</option>
                <option value="36">3 года</option>
              </select>
            </div>
          </div>
          <button class="filter-submit-btn" @click="searchDeposits">
            Найти вклад
          </button>
        </div>

        <!-- 3-Column Deposits Grid (Figma Frame 53) -->
        <div class="deposits-grid">
          <div v-for="d in depositList" :key="d.id" class="deposit-card">
            <div class="deposit-card__head">
              <h3 class="bank-name">{{ d.bank }}</h3>
              <p class="deposit-title">{{ d.title }}</p>
            </div>
            <div class="deposit-card__divider"></div>
            <ul class="deposit-card__list">
              <li>
                <span class="dot"></span>
                <span>Ставка: <strong>{{ d.rate }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Валюта: <strong>{{ d.currency }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Мин. сумма: <strong>{{ d.minSum }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Срок вклада: <strong>{{ d.term }}</strong></span>
              </li>
            </ul>
            <div class="deposit-card__footer">
              <router-link :to="`/deposits/${d.id}`" class="deposit-btn">
                Узнать больше
              </router-link>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div class="pagination-container">
          <div class="pagination">
            <button class="page-num active">1</button>
            <button class="page-num">2</button>
            <button class="page-num">3</button>
            <span class="page-dots">...</span>
            <button class="page-num">30</button>
          </div>
          <span class="pagination-info">Вкладов 1—6 из 32</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'

const depositCurrency = ref('KZT')
const depositSum = ref('100 000')
const depositTerm = ref('24')

function searchDeposits() {
  alert(`Поиск депозитов на сумму ${depositSum.value} ₸`)
}

const depositList = ref([
  {
    id: 1,
    bank: 'Altyn Bank',
    title: '«Резерв»',
    rate: '11.2%',
    minSum: 'от 10 000 ₸',
    term: '2 года',
    currency: 'KZT'
  },
  {
    id: 2,
    bank: 'Altyn Bank',
    title: '«Заем под залог денег на сберегательном счете (без комиссий)»',
    rate: '11.2%',
    minSum: 'от 10 000 ₸',
    term: '2 года',
    currency: 'KZT'
  },
  {
    id: 3,
    bank: 'Bank RBK',
    program: 'Вклад «Safe Deposit»',
    title: '«Safe Deposit» с капитализацией',
    rate: '14.0%',
    minSum: 'от 15 000 ₸',
    term: '1 год',
    currency: 'KZT'
  },
  {
    id: 4,
    bank: 'Halyk Bank',
    title: '«Максимальный доход»',
    rate: '14.2%',
    minSum: 'от 50 000 ₸',
    term: '12 месяцев',
    currency: 'KZT'
  },
  {
    id: 5,
    bank: 'ForteBank',
    title: 'Депозит «Forte Флекс»',
    rate: '13.5%',
    minSum: 'от 20 000 ₸',
    term: '6 месяцев',
    currency: 'KZT'
  },
  {
    id: 6,
    bank: 'Jýsan Bank',
    title: '«Jýsan Выгодный»',
    rate: '13.8%',
    minSum: 'от 10 000 ₸',
    term: '2 года',
    currency: 'KZT'
  }
])
</script>

<style lang="scss" scoped>
.deposits-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.deposits-page {
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
    line-height: 1.6;
    color: #828282;
    margin-bottom: 24px;
    max-width: 900px;
  }
}

/* Horizontal Filter Bar */
.deposit-filter-bar {
  display: flex;
  align-items: flex-end;
  gap: 12px;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 14px;
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

    .select-wrap {
      select, input {
        width: 100%;
        padding: 9px 12px;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        font-size: 13.5px;
        background: #ffffff;
        outline: none;

        &:focus {
          border-color: #ff8a16;
        }
      }
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
    transition: background 0.2s;

    &:hover {
      background: #e67508;
    }
  }
}

/* 3-column Grid (Frame 53) */
.deposits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}

.deposit-card {
  background: rgba(235, 235, 235, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;

  &__head {
    .bank-name {
      font-size: 16px;
      font-weight: 700;
      color: #1e1e1e;
      margin: 0 0 6px 0;
    }

    .deposit-title {
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

  &__footer {
    display: flex;
    justify-content: flex-end;
  }

  .deposit-btn {
    font-size: 13.5px;
    font-weight: 600;
    color: #ff8a16;
    text-decoration: underline;

    &:hover {
      color: #e67508;
    }
  }
}

/* Pagination */
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
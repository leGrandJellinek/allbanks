<template>
  <div class="credits-page-wrapper">
    <Navbar />
    <main class="main credits-page">
      <div class="container">
        <h1 class="credits-page__title section-title">Кредит в Казахстане</h1>
        <p class="credits-page__desc">
          В каталоге AllBanks собрана достоверная информация о потребительских кредитах, которые предоставляют 24 банка в Казахстане. На странице 86 лучших предложений и условий по оформлению.
        </p>

        <!-- Horizontal Filter Bar (Figma Frame 49 Group 254) -->
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
            <label>Сумма</label>
            <div class="select-wrap">
              <input v-model="filterSum" type="text" placeholder="500 000 ₸" />
            </div>
          </div>
          <div class="filter-item">
            <label>Без залога</label>
            <div class="select-wrap">
              <select v-model="filterWithoutCollateral">
                <option value="yes">Да</option>
                <option value="no">Нет</option>
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
          <button class="filter-submit-btn" @click="applyFilter">
            Найти кредит
          </button>
        </div>

        <!-- Top 3 Best Offers (Figma Frame 49 & Frame 1) -->
        <h2 class="credits-page__section-subtitle">Лучшие кредитные предложения</h2>
        <div class="best-offers-row">
          <div 
            v-for="offer in banksStore.creditOffers.slice(0, 3)" 
            :key="offer.id" 
            class="best-offer-card"
            :style="{ backgroundColor: offer.bgcolor || '#EAF8E6' }"
          >
            <div class="best-offer-card__logo-wrap">
              <img 
                v-if="offer.logoImg" 
                :src="getMainImage(offer.logoImg)" 
                :alt="offer.name" 
                class="best-offer-card__logo-img" 
              />
              <span v-else class="best-offer-card__logo-text" :style="{ color: offer.logoColor }">
                {{ offer.logoText || offer.name }}
              </span>
            </div>

            <div class="best-offer-card__specs-grid">
              <div class="spec-col">
                <span class="spec-line">Сумма: <strong>{{ offer.sum }}</strong></span>
                <span class="spec-line">Срок: <strong>{{ offer.term }}</strong></span>
              </div>
              <div class="spec-col">
                <span class="spec-line">Ставка: <strong>{{ offer.rate }}</strong></span>
                <span class="spec-line">Время ответа: <strong>{{ offer.responseTime }}</strong></span>
              </div>
            </div>

            <router-link to="/credits/apply" class="best-offer-card__btn">
              Получить кредит
            </router-link>
          </div>
        </div>

        <!-- Comparative Catalog (Figma Frame 49 3-column cards) -->
        <h2 class="credits-page__section-subtitle">
          Сравнительная таблица потребительских кредитов во все банки в Казахстане
        </h2>
        <div class="catalog-grid">
          <div 
            v-for="loan in consumerLoans" 
            :key="loan.id" 
            class="catalog-card"
          >
            <div class="catalog-card__head">
              <h4 class="catalog-card__bank">{{ loan.bank }}</h4>
              <p class="catalog-card__title">{{ loan.title }}</p>
            </div>
            <div class="catalog-card__divider"></div>
            <ul class="catalog-card__list">
              <li>
                <span class="dot"></span>
                <span>Мин. ставка: <strong>{{ loan.minRate }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Срок: <strong>{{ loan.term }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Валюта: <strong>{{ loan.currency }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Залог: <strong>{{ loan.collateral }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Макс. сумма: <strong>{{ loan.maxSum }}</strong></span>
              </li>
            </ul>
            <div class="catalog-card__action">
              <router-link :to="`/credits/${loan.id}`" class="catalog-card__btn">
                Получить кредит
              </router-link>
            </div>
          </div>
        </div>

        <!-- Pagination (Figma 1, 2, 3... 30) -->
        <div class="pagination-container">
          <div class="pagination">
            <button class="page-num active">1</button>
            <button class="page-num">2</button>
            <button class="page-num">3</button>
            <span class="page-dots">...</span>
            <button class="page-num">30</button>
          </div>
          <span class="pagination-info">Кредитов 1—6 из 68</span>
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
import { useBanksStore } from '@/stores/banks'
import { getMainImage } from '@/utils/assets'

const banksStore = useBanksStore()

const filterCurrency = ref('KZT')
const filterSum = ref('500 000')
const filterWithoutCollateral = ref('yes')

function applyFilter() {
  alert(`Поиск кредитов на сумму ${filterSum.value} ₸ в г. ${banksStore.selectedCity}`)
}

const consumerLoans = ref([
  {
    id: 1,
    bank: 'Bank RBK',
    title: '«Нужный кредит» под залог (без комиссии и с подтверждением дохода)',
    minRate: 'от 3%',
    term: 'до 120 мес.',
    currency: 'KZT',
    collateral: 'нет',
    maxSum: 'неогр.'
  },
  {
    id: 2,
    bank: 'Банк ЦентрКредит',
    title: '“Кредит наличными”',
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
  },
  {
    id: 5,
    bank: 'Altyn Bank',
    title: 'Заем под залог денег на сберегательном счете (без комиссий)',
    minRate: 'от 3%',
    term: 'до 60 мес.',
    currency: 'KZT',
    collateral: 'нет',
    maxSum: 'неогр.'
  },
  {
    id: 6,
    bank: 'Сбербанк России',
    title: 'Потребительский кредит без обеспечения',
    minRate: 'от 8%',
    term: 'до 60 мес.',
    currency: 'KZT',
    collateral: 'нет',
    maxSum: '8 млн'
  }
])
</script>

<style lang="scss" scoped>
.credits-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.credits-page {
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

  &__section-subtitle {
    font-size: 22px;
    font-weight: 700;
    color: #1e1e1e;
    margin-top: 40px;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
}

/* Horizontal Filter Bar (Figma Frame 49 Group 254) */
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

/* Best Offers (3 in row) */
.best-offers-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}

.best-offer-card {
  border-radius: 10px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;

  &__logo-wrap {
    height: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  &__logo-img {
    max-height: 38px;
    max-width: 150px;
    object-fit: contain;
  }

  &__logo-text {
    font-size: 18px;
    font-weight: 800;
  }

  &__specs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 18px;

    .spec-col {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .spec-line {
      font-size: 12.5px;
      color: #4f4f4f;

      strong {
        color: #1e1e1e;
      }
    }
  }

  &__btn {
    align-self: flex-start;
    font-size: 13.5px;
    font-weight: 600;
    color: #ff8a16;
    text-decoration: underline;

    &:hover {
      color: #e67508;
    }
  }
}

/* Comparative Catalog Grid (3-column) */
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}

.catalog-card {
  background: rgba(235, 235, 235, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;

  &__bank {
    font-size: 15px;
    font-weight: 700;
    color: #1e1e1e;
    margin: 0 0 6px 0;
  }

  &__title {
    font-size: 12.5px;
    color: #666666;
    margin: 0;
    line-height: 1.35;
    min-height: 34px;
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
  }

  &__btn {
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
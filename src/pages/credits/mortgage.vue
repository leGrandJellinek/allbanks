<template>
  <div class="mortgage-page-wrapper">
    <Navbar />
    <main class="main mortgage-page">
      <div class="container">
        <router-link to="/credits" class="mortgage-page__back">‹ Назад к кредитам</router-link>
        <h1 class="mortgage-page__title section-title">
          Кредиты под залог недвижимости
        </h1>
        <p class="mortgage-page__desc">
          В нашем каталоге собрана достоверная информация о кредитах под залог недвижимости в Казахстане от ведущих банков.
        </p>

        <div class="mortgage-grid">
          <div v-for="item in mortgageList" :key="item.id" class="mortgage-card">
            <div class="mortgage-card__head">
              <h3 class="bank-name">{{ item.bank }}</h3>
              <p class="program-title">{{ item.program }}</p>
            </div>
            <div class="mortgage-card__divider"></div>
            <ul class="mortgage-card__list">
              <li><span class="dot"></span><span>Мин. ставка: <strong>{{ item.rate }}</strong></span></li>
              <li><span class="dot"></span><span>Срок: <strong>{{ item.term }}</strong></span></li>
              <li><span class="dot"></span><span>Валюта: <strong>{{ item.currency }}</strong></span></li>
              <li><span class="dot"></span><span>Макс. сумма: <strong>{{ item.maxSum }}</strong></span></li>
            </ul>
            <div class="mortgage-card__action">
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
import Navbar from '@/components/Navbar.vue'

const mortgageList = ref([
  {
    id: 1,
    bank: 'Bank RBK',
    program: 'Кредит под залог жилой или коммерческой недвижимости',
    rate: 'от 18%',
    term: 'до 120 мес.',
    currency: 'KZT',
    maxSum: 'до 100 млн ₸'
  },
  {
    id: 2,
    bank: 'Halyk Bank',
    program: 'Ипотечный кредит «Стандартный»',
    rate: 'от 17.5%',
    term: 'до 240 мес.',
    currency: 'KZT',
    maxSum: 'до 80 млн ₸'
  },
  {
    id: 3,
    bank: 'Altyn Bank',
    program: 'Залоговое кредитование физических лиц',
    rate: 'от 19%',
    term: 'до 180 мес.',
    currency: 'KZT',
    maxSum: 'до 75 млн ₸'
  }
])
</script>

<style lang="scss" scoped>
.mortgage-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.mortgage-page {
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
    margin-bottom: 28px;
    max-width: 850px;
  }
}

.mortgage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}

.mortgage-card {
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
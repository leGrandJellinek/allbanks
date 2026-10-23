<template>
  <div>
    <Navbar />
    <main class="main mortgage-page">
      <div class="container">
        <h1 class="mortgage-page__title section-title">
          Кредиты под залог недвижимости
        </h1>
        <p class="mortgage-page__desc">
          В нашем каталоге собраны предложения кредитов под залог недвижимости в Казахстане от ведущих банков.
        </p>

        <div class="mortgage-grid">
          <div v-for="item in mortgageList" :key="item.id" class="mortgage-card">
            <h3 class="bank-name">{{ item.bank }}</h3>
            <p class="program-title">{{ item.program }}</p>
            <div class="specs">
              <div><span>Мин. ставка:</span> <strong>{{ item.rate }}</strong></div>
              <div><span>Срок:</span> <strong>{{ item.term }}</strong></div>
              <div><span>Валюта:</span> <strong>{{ item.currency }}</strong></div>
              <div><span>Макс. сумма:</span> <strong>{{ item.maxSum }}</strong></div>
            </div>
            <router-link to="/credits/apply" class="btn">Получить кредит</router-link>
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
.mortgage-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 8px;
  }

  &__desc {
    font-size: 14px;
    color: #666666;
    margin-bottom: 28px;
  }
}

.mortgage-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}

.mortgage-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .bank-name {
    font-size: 18px;
    font-weight: 700;
    color: #ff8a16;
    margin-bottom: 6px;
  }

  .program-title {
    font-size: 13px;
    color: #444444;
    margin-bottom: 16px;
    line-height: 1.4;
  }

  .specs {
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

  .btn {
    display: block;
    text-align: center;
    background: #ff8a16;
    color: #ffffff;
    padding: 11px 0;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
  }
}
</style>

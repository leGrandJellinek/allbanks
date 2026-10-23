<template>
  <div>
    <Navbar />
    <main class="main microloans-page">
      <div class="container">
        <h1 class="microloans-page__title section-title">Займ онлайн в Казахстане</h1>
        <p class="microloans-page__desc">
          В каталоге AllBanks можно подобрать срочный онлайн займ для физических лиц от надежных микрофинансовых организаций Казахстана. Заявки принимаются круглосуточно без залога и поручителей.
        </p>

        <div class="microloans-banner">
          <span class="badge">Совет:</span>
          <span>Для гарантированного получения денег отправьте не менее 3 заявок в разные компании!</span>
        </div>

        <div class="microloans-grid">
          <div v-for="m in mfoList" :key="m.id" class="mfo-card">
            <div class="mfo-card__header">
              <h3 class="mfo-name" :style="{ color: m.color }">{{ m.name }}</h3>
            </div>
            <div class="mfo-card__specs">
              <div><span>Возраст:</span> <strong>{{ m.age }}</strong></div>
              <div><span>Сумма:</span> <strong>{{ m.sum }}</strong></div>
              <div><span>Срок:</span> <strong>{{ m.term }}</strong></div>
              <div><span>Ставка:</span> <strong>{{ m.rate }}</strong></div>
              <div><span>Время ответа:</span> <strong>{{ m.time }}</strong></div>
            </div>
            <router-link to="/credits/apply" class="mfo-btn">Получить деньги</router-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'

const mfoList = ref([
  {
    id: 1,
    name: 'MoneyMan',
    color: '#5FB451',
    age: 'от 21 года',
    sum: 'до 130 000 ₸',
    term: 'до 30 дней',
    rate: 'от 0.01% в день',
    time: '15 минут'
  },
  {
    id: 2,
    name: 'РОБОТ ЗАЙМЕР',
    color: '#FF8A16',
    age: 'от 18 лет',
    sum: 'до 145 000 ₸',
    term: 'до 30 дней',
    rate: 'от 0.01% в день',
    time: '10 минут'
  },
  {
    id: 3,
    name: 'TurboMoney',
    color: '#DE251D',
    age: 'от 21 года',
    sum: 'до 145 000 ₸',
    term: 'до 30 дней',
    rate: 'от 1.00% в день',
    time: '15 минут'
  },
  {
    id: 4,
    name: 'Credit365',
    color: '#0094FF',
    age: 'от 18 лет',
    sum: 'до 150 000 ₸',
    term: 'до 30 дней',
    rate: 'от 0.01% в день',
    time: '5 минут'
  }
])
</script>

<style lang="scss" scoped>
.microloans-page {
  padding-bottom: 70px;

  &__title {
    margin-bottom: 8px;
  }

  &__desc {
    font-size: 14px;
    color: #666666;
    margin-bottom: 20px;
    line-height: 1.5;
  }
}

.microloans-banner {
  background: #f1fed5;
  border: 1px solid #7bc63e;
  border-radius: 8px;
  padding: 14px 18px;
  margin-bottom: 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #2e5a14;

  .badge {
    background: #5fb451;
    color: #ffffff;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 12px;
  }
}

.microloans-grid {
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

.mfo-card {
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__header {
    margin-bottom: 14px;
  }

  .mfo-name {
    font-size: 17px;
    font-weight: 800;
  }

  &__specs {
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

  .mfo-btn {
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
</style>

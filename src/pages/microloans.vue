<template>
  <div class="microloans-page-wrapper">
    <Navbar />
    <main class="main microloans-page">
      <div class="container">
        <div class="microloans-page__head-row">
          <h1 class="microloans-page__title section-title">Займ онлайн в Казахстане</h1>
          <router-link to="/credits/apply" class="apply-action-btn">
            Подать заявку на кредит
          </router-link>
        </div>

        <p class="microloans-page__desc">
          В каталоге allbanks.kz можно подобрать срочный онлайн займ для физических лиц в микрофинансовых организациях Казахстана. Без справок о доходах (минимальная процентная ставка от 0.01 % в день). Для оформления необходимо заполнить онлайн заявку. Для гарантированного получения денег отправьте не менее 3 заявок.
        </p>
        <button class="read-more-link" @click="showMore = !showMore">
          {{ showMore ? 'Свернуть' : 'Читать далее' }}
        </button>

        <!-- 3-Column Microloan Cards Grid (Figma Frame 52) -->
        <div class="microloans-grid">
          <div v-for="m in mfoList" :key="m.id" class="mfo-card">
            <div class="mfo-card__head">
              <span class="mfo-card__badge">{{ m.badge }}</span>
              <h3 class="mfo-card__name" :style="{ color: m.color }">{{ m.name }}</h3>
            </div>
            <div class="mfo-card__divider"></div>
            <ul class="mfo-card__list">
              <li>
                <span class="dot"></span>
                <span>Возраст: <strong>{{ m.age }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Сумма: <strong>{{ m.sum }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Срок: <strong>{{ m.term }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Ставка: <strong>{{ m.rate }}</strong></span>
              </li>
              <li>
                <span class="dot"></span>
                <span>Время ответа: <strong>{{ m.time }}</strong></span>
              </li>
            </ul>
            <div class="mfo-card__footer">
              <router-link to="/credits/apply" class="mfo-card__btn">
                Получить кредит
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
          <span class="pagination-info">Займов 1—6 из 38</span>
        </div>

        <!-- Bottom SEO & Info Section (Frame 52) -->
        <div class="microloans-page__seo">
          <p>
            Жизненные ситуации бывают сложными, но не бывают безвыходными. Если срочно потребовались деньги на личные нужды, а занять до зарплаты не у кого, надо обратиться за онлайн-микрозаймом. Процесс подачи заявки быстрый, простой и понятный, получение денег не занимает много времени, а гибкие процентные ставки и условия кредитования делают услугу доступной практически всем гражданам независимо от уровня дохода, возраста и социального статуса как такового. Оформите микрокредит прямо сейчас, это выгодно!
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

const showMore = ref(false)

const mfoList = ref([
  {
    id: 1,
    name: 'MoneyMan',
    badge: 'МФО №1',
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
    badge: 'Быстрое решение',
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
    badge: 'Одобрение 98%',
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
    badge: 'Первый под 0%',
    color: '#0094FF',
    age: 'от 18 лет',
    sum: 'до 150 000 ₸',
    term: 'до 30 дней',
    rate: 'от 0.01% в день',
    time: '5 минут'
  },
  {
    id: 5,
    name: 'KMF',
    badge: 'Надежный выбор',
    color: '#00A896',
    age: 'от 21 года',
    sum: 'до 200 000 ₸',
    term: 'до 60 дней',
    rate: 'от 0.1% в день',
    time: '20 минут'
  },
  {
    id: 6,
    name: 'QuickMoney',
    badge: 'Без залога',
    color: '#8A2BE2',
    age: 'от 20 лет',
    sum: 'до 130 000 ₸',
    term: 'до 30 дней',
    rate: 'от 0.99% в день',
    time: '12 минут'
  }
])
</script>

<style lang="scss" scoped>
.microloans-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.microloans-page {
  &__head-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }

  &__title {
    font-size: 28px;
    font-weight: 700;
    color: #1e1e1e;
    margin: 0;

    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  .apply-action-btn {
    display: inline-block;
    background: #ff8a16;
    color: #ffffff;
    padding: 8px 18px;
    border-radius: 4px;
    text-decoration: none;
    font-size: 13.5px;
    font-weight: 600;
    transition: background 0.2s;

    &:hover {
      background: #e67508;
    }
  }

  &__desc {
    font-size: 14px;
    line-height: 1.6;
    color: #828282;
    margin-bottom: 8px;
    max-width: 950px;
  }

  .read-more-link {
    background: none;
    border: none;
    padding: 0;
    color: #ff8a16;
    font-size: 13.5px;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 28px;
    display: inline-block;
  }

  &__seo {
    margin-top: 36px;
    font-size: 13px;
    line-height: 1.65;
    color: #828282;
    max-width: 1000px;
  }
}

/* 3-column Grid (Frame 52) */
.microloans-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
  margin-bottom: 30px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
}

.mfo-card {
  background: rgba(235, 235, 235, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  &__badge {
    font-size: 11px;
    color: #828282;
  }

  &__name {
    font-size: 17px;
    font-weight: 800;
    margin: 0;
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
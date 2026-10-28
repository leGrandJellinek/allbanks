<template>
  <div class="microloans-page-wrapper">
    <Navbar />
    <main class="main microloans-page">
      <div class="container microloans-page__container">
        <!-- Title: 1:1 from Figma Frame 52 & 320:1895 -->
        <h1 class="microloans-page__title">Займ онлайн в Казахстане</h1>

        <!-- Description: 1:1 from Figma -->
        <p class="microloans-page__desc">
          В каталоге allbanks.kz можно подобрать срочный онлайн займ для физических лиц в микрофинансовых организациях Казахстана. Без справок о доходах (минимальная процентная ставка от 0.01 % в день). Для оформления необходимо заполнить онлайн заявку. Для гарантированного получения денег отправьте не менее 3 заявок.
        </p>

        <!-- Inline Link to apply for credit: 1:1 from Figma -->
        <router-link to="/credits/apply" class="microloans-page__apply-link">
          Подать заявку на кредит
        </router-link>

        <!-- 3-Column Microloan Cards Grid (Figma Frame 52: 377px x 192px, gap 30px) -->
        <div class="microloans-page__grid">
          <MicroloanCard
            v-for="item in microloans"
            :key="item.id"
            :item="item"
          />
        </div>

        <!-- Pagination: 1:1 from Figma [1] [2] [3] (31px x 30px, border-radius 5px) -->
        <div class="microloans-page__pagination">
          <button
            v-for="page in [1, 2, 3]"
            :key="page"
            type="button"
            class="microloans-page__page-btn"
            :class="{ 'microloans-page__page-btn--active': activePage === page }"
            @click="activePage = page"
          >
            {{ page }}
          </button>
        </div>

        <!-- Bottom SEO Block: 1:1 from Figma -->
        <div class="microloans-page__seo">
          <p class="microloans-page__seo-text">
            Жизненные ситуации бывают сложными, но не бывают безвыходными. Если срочно потребовались деньги на личные нужды, а занять до зарплаты не у кого, надо обратиться за онлайн-микрозаймом. Процесс подачи заявки быстрый, простой и понятный, получение денег не занимает много времени, а гибкие процентные ставки и условия кредитования делают услугу доступной практически всем гражданам независимо от уровня дохода, возраста и социального статуса как такового. Оформите микрокредит прямо сейчас, это выгодно!
          </p>
          <div v-if="showMore" class="microloans-page__seo-more">
            <p class="microloans-page__seo-text">
              Онлайн займы в Казахстане выдаются круглосуточно без праздников и выходных. Достаточно иметь удостоверение личности гражданина РК, активный номер мобильного телефона и банковскую карту любого казахстанского банка. Большинство МФО предоставляют первый микрокредит под 0.01% в день на срок до 30 дней, что позволяет быстро решить финансовые вопросы без лишних переплат.
            </p>
          </div>
          <button
            type="button"
            class="microloans-page__read-more"
            @click="showMore = !showMore"
          >
            {{ showMore ? 'Свернуть' : 'Читать далее' }}
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import MicroloanCard, { type MicroloanItem } from '@/components/Microloans/MicroloanCard.vue'

import creditplusLogo from '@/assets/images/microloans/creditplus.png'
import moneymanLogo from '@/assets/images/microloans/moneyman.png'
import turbomoneyLogo from '@/assets/images/microloans/turbomoney.png'
import zaimerLogo from '@/assets/images/microloans/zaimer.png'
import credit365Logo from '@/assets/images/microloans/credit365.png'

const activePage = ref(1)
const showMore = ref(false)

const microloans = ref<MicroloanItem[]>([
  {
    id: 1,
    name: 'CreditPlus',
    logo: creditplusLogo,
    age: '21',
    sum: '130 000 ₸',
    termDays: '30',
    rate: '1.00%',
    termMonths: '60'
  },
  {
    id: 2,
    name: 'MoneyMan',
    logo: moneymanLogo,
    age: '21',
    sum: '130 000 ₸',
    termDays: '30',
    rate: '1.00%',
    termMonths: '60'
  },
  {
    id: 3,
    name: 'TurboMoney',
    logo: turbomoneyLogo,
    age: '21',
    sum: '130 000 ₸',
    termDays: '30',
    rate: '1.00%',
    termMonths: '60'
  },
  {
    id: 4,
    name: 'Займер',
    logo: zaimerLogo,
    age: '21',
    sum: '130 000 ₸',
    termDays: '30',
    rate: '1.00%',
    termMonths: '60'
  },
  {
    id: 5,
    name: 'Credit365',
    logo: credit365Logo,
    age: '21',
    sum: '130 000 ₸',
    termDays: '30',
    rate: '1.00%',
    termMonths: '60'
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
  }
}

.microloans-page {
  &__container {
    box-sizing: border-box;
  }

  &__title {
    font-family: 'GP', sans-serif;
    font-size: 36px;
    font-weight: 500;
    line-height: 38px;
    color: #000000;
    margin: 48px 0 20px 0;
  }

  &__desc {
    font-family: 'GP', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #000000;
    max-width: 1152px;
    margin: 0 0 15px 0;
  }

  &__apply-link {
    display: inline-block;
    font-family: 'GP', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #ff8a16;
    text-decoration: underline;
    margin-bottom: 40px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 377px);
    gap: 30px;
    margin-bottom: 28px;
  }

  &__pagination {
    display: flex;
    gap: 10px;
    margin-bottom: 40px;
  }

  &__page-btn {
    width: 31px;
    height: 30px;
    border-radius: 5px;
    font-family: 'GP', sans-serif;
    font-size: 17px;
    font-weight: 500;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    cursor: pointer;
    border: 1px solid rgba(184, 184, 184, 0.5);
    color: rgba(184, 184, 184, 0.5);
    transition: all 0.2s;

    &--active,
    &:hover {
      border-color: #ff8a16;
      color: #ff8a16;
    }
  }

  &__seo {
    max-width: 1142px;
    margin-bottom: 80px;
  }

  &__seo-text {
    font-family: 'GP', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #000000;
    margin: 0 0 15px 0;
  }

  &__seo-more {
    margin-bottom: 15px;
  }

  &__read-more {
    font-family: 'GP', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #ff8a16;
    text-decoration: underline;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }
  }

  @media (max-width: 1220px) {
    &__grid {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
    }
  }

  @media (max-width: 767px) {
    &__container {
      padding: 0 20px;
    }

    &__title {
      font-size: 20px;
      line-height: 24px;
      margin: 24px 0 12px 0;
    }

    &__desc {
      font-size: 12px;
      line-height: 16px;
      margin: 0 0 12px 0;
    }

    &__apply-link {
      font-size: 14px;
      margin-bottom: 24px;
    }

    &__grid {
      grid-template-columns: 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }

    &__pagination {
      margin-bottom: 24px;
    }

    &__seo {
      margin-bottom: 40px;
    }

    &__seo-text {
      font-size: 12px;
      line-height: 16px;
      margin: 0 0 12px 0;
    }

    &__read-more {
      font-size: 14px;
    }
  }
}
</style>

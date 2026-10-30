<template>
  <div class="credits-page">
    <main class="credits-page__main">
      <div class="container credits-page__container">
        <!-- Main Title & Description -->
        <h1 class="credits-page__title">Кредит в Казахстане</h1>
        <div class="credits-page__desc-block">
          <p class="credits-page__desc">
            В каталоге allbanks.kz собрана достоверная информация о потребительских кредитах, которые предоставляют 24 банка в Казахстане. На странице 86 лучших предложений и условий по оформлению...
          </p>
          <a href="#" class="credits-page__more-link" @click.prevent>Читать далее</a>
        </div>

        <!-- Banner + Filter Bar (Desktop: flex row, Mobile: stack) -->
        <div class="credits-page__top-bar">
          <CreditBanner />
          <CreditFilters @search="handleSearch" />
        </div>

        <!-- Section 1: Лучшие кредитные предложения -->
        <section class="credits-page__section">
          <h2 class="credits-page__subtitle">Лучшие кредитные предложения</h2>
          <div class="credits-page__offers-grid">
            <CreditOfferCard 
              v-for="offer in displayedBestOffers" 
              :key="offer.id" 
              :offer="offer" 
            />
          </div>
        </section>

        <!-- Section 2: Сравнительная таблица потребительских кредитов -->
        <section class="credits-page__section">
          <h2 class="credits-page__subtitle credits-page__subtitle--comparison">
            Сравнительная таблица потребительских кредитов во все банки в Казахстане
          </h2>
          <div class="credits-page__comparison-grid">
            <CreditComparisonCard 
              v-for="loan in comparisonLoans" 
              :key="loan.id" 
              :loan="loan" 
            />
          </div>
        </section>

        <!-- Pagination -->
        <CreditPagination 
          :current-page="1" 
          :total-pages="30" 
          counter-text="Кредитов 1—17 из 68" 
          @change="handlePageChange"
        />

        <!-- SEO Section -->
        <CreditSeo />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useToastStore } from '@/stores/toast'
import CreditBanner from '@/components/Credits/CreditBanner.vue'
import CreditFilters from '@/components/Credits/CreditFilters.vue'
import CreditOfferCard, { type CreditOfferItem } from '@/components/Credits/CreditOfferCard.vue'
import CreditComparisonCard, { type ComparisonLoanItem } from '@/components/Credits/CreditComparisonCard.vue'
import CreditPagination from '@/components/Credits/CreditPagination.vue'
import CreditSeo from '@/components/Credits/CreditSeo.vue'

// Track window width for 5 cards on Desktop vs 4 cards on Mobile (Figma Frame 49 vs Frame 284:660)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

function handleResize() {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const toast = useToastStore()

// Handlers
function handleSearch(filters: { currency: string, amount: string, collateral: string, city: string }) {
  toast.info(`Поиск кредитов: ${filters.city}, ${filters.amount} ${filters.currency}`)
}

function handlePageChange(page: number) {
  console.log('Page changed to:', page)
}

// Best Offers Data (Figma Desktop Frame 49 has 5 cards, Mobile Frame 284:660 has 4)
const bestOffers: CreditOfferItem[] = [
  {
    id: 1,
    name: 'Сбербанк',
    bankSlug: 'sber',
    logoImg: 'credit_logo_sber.png',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  },
  {
    id: 2,
    name: 'Home Credit Bank',
    bankSlug: 'homecredit',
    logoImg: 'credit_logo_homecredit.png',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  },
  {
    id: 3,
    name: 'Alfa-Bank',
    bankSlug: 'alfabank',
    logoImg: 'credit_logo_alfabank.png',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  },
  {
    id: 4,
    name: 'Kviku',
    bankSlug: 'kviku',
    logoImg: 'credit_logo_kviku.png',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  },
  {
    id: 5,
    name: 'Home Credit Bank',
    bankSlug: 'homecredit',
    logoImg: 'credit_logo_homecredit.png',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  }
]

const displayedBestOffers = computed(() => {
  return windowWidth.value <= 991 ? bestOffers.slice(0, 4) : bestOffers
})

// Comparison Table Data (Figma Desktop Frame 49 & Mobile Frame 284:660)
const comparisonLoans: ComparisonLoanItem[] = [
  {
    id: 1,
    bank: 'Банк RBK',
    subtitle: '"Заем под залог денег на сберегательном счете (без комиссий)"',
    minRate: 'от 3%',
    currency: 'KZT',
    maxSum: 'неогр',
    maxTerm: 'мес.',
    collateral: 'нет'
  },
  {
    id: 2,
    bank: 'Банк ЦентрКредит',
    subtitle: '“Кредит наличными”',
    minRate: 'от 3%',
    currency: 'KZT',
    maxSum: 'неогр',
    maxTerm: 'мес.',
    collateral: 'нет'
  },
  {
    id: 3,
    bank: 'Банк RBK',
    subtitle: '«Нужный кредит - под залог (без комиссии и с подтверждением дохода)»',
    minRate: 'от 3%',
    currency: 'KZT',
    maxSum: 'неогр',
    maxTerm: 'мес.',
    collateral: 'нет'
  },
  {
    id: 4,
    bank: 'Банк RBK',
    subtitle: '"Заем под залог денег на сберегательном счете (без комиссий)"',
    minRate: 'от 3%',
    currency: 'KZT',
    maxSum: 'неогр',
    maxTerm: 'мес.',
    collateral: 'нет'
  },
  {
    id: 5,
    bank: 'Банк ЦентрКредит',
    subtitle: '“Кредит наличными”',
    minRate: 'от 3%',
    currency: 'KZT',
    maxSum: 'неогр',
    maxTerm: 'мес.',
    collateral: 'нет'
  },
  {
    id: 6,
    bank: 'Банк RBK',
    subtitle: '«Нужный кредит - под залог (без комиссии и с подтверждением дохода)»',
    minRate: 'от 3%',
    currency: 'KZT',
    maxSum: 'неогр',
    maxTerm: 'мес.',
    collateral: 'нет'
  }
]
</script>

<style lang="scss" scoped>
.credits-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  &__main {
    flex: 1;
    padding-bottom: 70px;
  }

  &__container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;

    @media (max-width: 1240px) {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  &__title {
    font-size: 36px;
    font-weight: 500;
    color: #000000;
    line-height: 38px;
    margin: 28px 0 16px 0;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
      margin: 18px 0 10px 0;
    }
  }

  &__desc-block {
    margin-bottom: 30px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }

  &__desc {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #000000;
    margin: 0;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 16px;
    }
  }

  &__more-link {
    display: inline-block;
    color: #ff8a16;
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
    margin-top: 10px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 767px) {
      font-size: 14px;
      margin-top: 8px;
    }
  }

  &__top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 40px;

    @media (max-width: 991px) {
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
      margin-bottom: 30px;
    }
  }

  &__section {
    margin-bottom: 20px;
  }

  &__subtitle {
    font-size: 36px;
    font-weight: 400;
    color: #000000;
    line-height: 38px;
    margin: 40px 0 24px 0;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 22px;
      font-weight: 400;
      margin: 28px 0 16px 0;
    }

    &--comparison {
      font-weight: 500;
      margin-top: 50px;
      line-height: 40px;

      @media (max-width: 767px) {
        font-size: 18px;
        line-height: 22px;
        margin-top: 32px;
      }
    }
  }

  &__offers-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 20px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }
  }

  &__comparison-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 30px;

    @media (max-width: 991px) {
      grid-template-columns: 1fr;
      gap: 16px;
      margin-bottom: 24px;
    }
  }
}
</style>

<template>
  <div class="credits-page-wrapper">
    <Navbar />
    <main class="main credits-page">
      <div class="container credits-container">
        <!-- Main Title & Description -->
        <h1 class="credits-page__title">Кредит в Казахстане</h1>
        <div class="credits-page__desc-block">
          <p class="credits-page__desc">
            В каталоге allbanks.kz собрана достоверная информация о потребительских кредитах, которые предоставляют 24 банка в Казахстане. На странице 86 лучших предложений и условий по оформлению...
          </p>
          <a href="#" class="credits-page__more-link" @click.prevent>Читать далее</a>
        </div>

        <!-- Banner + Filters Row (Desktop: flex row; Mobile: stacked) -->
        <div class="credits-top-bar">
          <!-- Banner (Figma Frame 59 & Mobile Frame 56) -->
          <router-link to="/credits" class="credits-banner">
            <span class="credits-banner__text">Получить кредит</span>
            <img 
              :src="getMainImage('credit_card.png')" 
              alt="Кредитная карта" 
              class="credits-banner__img"
            />
          </router-link>

          <!-- Desktop Filter Controls (Figma Group 254) -->
          <div class="credits-filter-bar desktop-only">
            <!-- Currency Filter Dropdown -->
            <div class="filter-dropdown" :class="{ open: activeDropdown === 'currency' }">
              <button class="filter-pill" @click="toggleDropdown('currency')">
                <span class="pill-text">{{ selectedCurrencyLabel }}</span>
                <svg class="chevron-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="activeDropdown === 'currency'" class="dropdown-menu">
                <div 
                  v-for="curr in currencyOptions" 
                  :key="curr.value" 
                  class="dropdown-item"
                  :class="{ active: selectedCurrency === curr.value }"
                  @click="selectCurrency(curr.value)"
                >
                  {{ curr.label }}
                </div>
              </div>
            </div>

            <!-- Amount Filter Dropdown -->
            <div class="filter-dropdown" :class="{ open: activeDropdown === 'amount' }">
              <button class="filter-pill" @click="toggleDropdown('amount')">
                <span class="pill-text">{{ selectedAmountLabel }}</span>
                <svg class="chevron-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="activeDropdown === 'amount'" class="dropdown-menu">
                <div 
                  v-for="amt in amountOptions" 
                  :key="amt.value" 
                  class="dropdown-item"
                  :class="{ active: selectedAmount === amt.value }"
                  @click="selectAmount(amt.value)"
                >
                  {{ amt.label }}
                </div>
              </div>
            </div>

            <!-- Collateral Filter Dropdown -->
            <div class="filter-dropdown" :class="{ open: activeDropdown === 'collateral' }">
              <button class="filter-pill" @click="toggleDropdown('collateral')">
                <span class="pill-text">{{ selectedCollateralLabel }}</span>
                <svg class="chevron-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="activeDropdown === 'collateral'" class="dropdown-menu">
                <div 
                  v-for="col in collateralOptions" 
                  :key="col.value" 
                  class="dropdown-item"
                  :class="{ active: selectedCollateral === col.value }"
                  @click="selectCollateral(col.value)"
                >
                  {{ col.label }}
                </div>
              </div>
            </div>

            <!-- City Filter Dropdown -->
            <div class="filter-dropdown" :class="{ open: activeDropdown === 'city' }">
              <button class="filter-pill" @click="toggleDropdown('city')">
                <span class="pill-text">{{ selectedCityLabel }}</span>
                <svg class="chevron-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div v-if="activeDropdown === 'city'" class="dropdown-menu">
                <div 
                  v-for="city in cityOptions" 
                  :key="city" 
                  class="dropdown-item"
                  :class="{ active: selectedCity === city }"
                  @click="selectCity(city)"
                >
                  {{ city }}
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <button class="filter-submit-btn" @click="handleFindCredit">
              Найти кредит
            </button>
          </div>

          <!-- Mobile Filter Controls (Figma Mobile Frame 284:660) -->
          <div class="credits-mobile-filter mobile-only">
            <div class="mobile-filter-row">
              <button class="filter-pill" @click="toggleDropdown('currency')">
                <span class="pill-text">{{ selectedCurrencyLabel }}</span>
                <svg class="chevron-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="filter-pill" @click="toggleDropdown('amount')">
                <span class="pill-text">{{ selectedAmountLabel }}</span>
                <svg class="chevron-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <div class="mobile-filter-row">
              <button class="filter-pill" @click="toggleDropdown('collateral')">
                <span class="pill-text">{{ selectedCollateralLabel }}</span>
                <svg class="chevron-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="filter-pill" @click="toggleDropdown('city')">
                <span class="pill-text">{{ selectedCityLabel }}</span>
                <svg class="chevron-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
            <button class="filter-submit-btn-mobile" @click="handleFindCredit">
              Найти кредит
            </button>
          </div>
        </div>

        <!-- Section 1: Лучшие кредитные предложения -->
        <h2 class="credits-section__title">Лучшие кредитные предложения</h2>

        <!-- Best Offers Grid -->
        <div class="best-offers-grid">
          <div 
            v-for="(offer, idx) in currentBestOffers" 
            :key="offer.id" 
            class="best-offer-card"
          >
            <!-- Card Header: Logo & Action -->
            <div class="best-offer-card__header">
              <div class="best-offer-card__logo-wrap">
                <img 
                  :src="getMainImage(offer.logoImg)" 
                  :alt="offer.name" 
                  class="best-offer-card__logo-img"
                  :class="offer.logoClass"
                />
              </div>

              <!-- Desktop Link (Orange Underline) -->
              <router-link to="/credits/apply" class="best-offer-card__link desktop-only">
                Получить кредит
              </router-link>

              <!-- Mobile Button (Solid Orange Pill) -->
              <router-link to="/credits/apply" class="best-offer-card__btn-mobile mobile-only">
                Получить кредит
              </router-link>
            </div>

            <!-- Divider Line -->
            <div class="card-divider"></div>

            <!-- 2-Column Specs with Bullets -->
            <div class="card-specs-grid">
              <div class="specs-col">
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Возраст от <strong>{{ offer.age }}</strong></span>
                </div>
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Сумма до <strong>{{ offer.sum }}</strong></span>
                </div>
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Время ответа <strong>{{ offer.responseTime }}</strong></span>
                </div>
              </div>
              <div class="specs-col">
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Ставка от <strong>{{ offer.rate }}</strong></span>
                </div>
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Срок до <strong>{{ offer.term }}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 2: Сравнительная таблица потребительских кредитов -->
        <h2 class="credits-section__title comp-table-title">
          Сравнительная таблица потребительских кредитов во все банки в Казахстане
        </h2>

        <!-- Comparison Cards Grid -->
        <div class="comparison-grid">
          <div 
            v-for="item in comparisonLoans" 
            :key="item.id" 
            class="comparison-card"
          >
            <div class="comparison-card__header">
              <h3 class="comparison-card__bank">{{ item.bank }}</h3>
              <p class="comparison-card__subtitle">{{ item.subtitle }}</p>
            </div>

            <div class="card-divider"></div>

            <div class="card-specs-grid">
              <div class="specs-col">
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Мин ставка: <strong>{{ item.minRate }}</strong></span>
                </div>
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Валюта: <strong>{{ item.currency }}</strong></span>
                </div>
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Макс. сумма: <strong>{{ item.maxSum }}</strong></span>
                </div>
              </div>
              <div class="specs-col">
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Макс. срок: <strong>{{ item.maxTerm }}</strong></span>
                </div>
                <div class="spec-line">
                  <span class="bullet">•</span>
                  <span>Залог: <strong>{{ item.collateral }}</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pagination (1, 2, 3 ... 30) -->
        <div class="credits-pagination-wrap">
          <div class="pagination-buttons">
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span class="page-dots">...</span>
            <button class="page-btn page-btn-wide">30</button>
          </div>
          <span class="pagination-counter">Кредитов 1—17 из 68</span>
        </div>

        <!-- Bottom SEO Section -->
        <div class="credits-seo-section">
          <p class="seo-paragraph">
            Повседневные потребности, непредвиденные расходы не всегда позволяют быстро собрать нужную сумму, чтобы купить недвижимость, необходимые прямо сейчас товары или оплатить услуги.
          </p>
          <p class="seo-paragraph">
            Универсальный способ решить любые финансовые проблемы – взять кредит в банке.
          </p>
          <p class="seo-paragraph">
            Разнообразие предложений и программ дает возможность практически каждому жителю страны получить нужную сумму кредита на любые цели.
          </p>
          <a href="#" class="seo-more-link" @click.prevent>Читать далее</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Navbar from '@/components/Navbar.vue'
import { getMainImage } from '@/utils/assets'

// Dropdowns State
const activeDropdown = ref<string | null>(null)

function toggleDropdown(name: string) {
  if (activeDropdown.value === name) {
    activeDropdown.value = null
  } else {
    activeDropdown.value = name
  }
}

function closeDropdowns(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (!target.closest('.filter-dropdown') && !target.closest('.filter-pill')) {
    activeDropdown.value = null
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  window.removeEventListener('click', closeDropdowns)
})

// Filter values
const selectedCurrency = ref('all')
const currencyOptions = [
  { value: 'all', label: 'Валюта' },
  { value: 'KZT', label: 'KZT (Тенге)' },
  { value: 'USD', label: 'USD (Доллар)' },
  { value: 'EUR', label: 'EUR (Евро)' }
]
const selectedCurrencyLabel = computed(() => {
  const found = currencyOptions.find(o => o.value === selectedCurrency.value)
  return found ? found.label : 'Валюта'
})
function selectCurrency(val: string) {
  selectedCurrency.value = val
  activeDropdown.value = null
}

const selectedAmount = ref('all')
const amountOptions = [
  { value: 'all', label: 'Сумма' },
  { value: '500k', label: 'до 500 000 ₸' },
  { value: '1m', label: 'до 1 млн ₸' },
  { value: '3m', label: 'до 3 млн ₸' },
  { value: '8m', label: 'до 8 млн ₸' }
]
const selectedAmountLabel = computed(() => {
  const found = amountOptions.find(o => o.value === selectedAmount.value)
  return found ? found.label : 'Сумма'
})
function selectAmount(val: string) {
  selectedAmount.value = val
  activeDropdown.value = null
}

const selectedCollateral = ref('all')
const collateralOptions = [
  { value: 'all', label: 'Без залога' },
  { value: 'none', label: 'Без обеспечения' },
  { value: 'collateral', label: 'Под залог' }
]
const selectedCollateralLabel = computed(() => {
  const found = collateralOptions.find(o => o.value === selectedCollateral.value)
  return found ? found.label : 'Без залога'
})
function selectCollateral(val: string) {
  selectedCollateral.value = val
  activeDropdown.value = null
}

const selectedCity = ref('all')
const cityOptions = ['Город', 'Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе']
const selectedCityLabel = computed(() => {
  return selectedCity.value === 'all' ? 'Город' : selectedCity.value
})
function selectCity(city: string) {
  selectedCity.value = city === 'Город' ? 'all' : city
  activeDropdown.value = null
}

function handleFindCredit() {
  alert('Поиск кредитов по выбранным параметрам')
}

// Window width for desktop vs mobile offer cards (Figma Desktop has 5 cards, Mobile has 4 cards)
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

// Section 1 Offers (Figma Frame 49 & Mobile Frame 284:660)
const allBestOffers = [
  {
    id: 1,
    name: 'Сбербанк',
    logoImg: 'credit_logo_sber.png',
    logoClass: 'logo-sber',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  },
  {
    id: 2,
    name: 'Home Credit Bank',
    logoImg: 'credit_logo_homecredit.png',
    logoClass: 'logo-homecredit',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  },
  {
    id: 3,
    name: 'Alfa-Bank',
    logoImg: 'credit_logo_alfabank.png',
    logoClass: 'logo-alfabank',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  },
  {
    id: 4,
    name: 'Kviku',
    logoImg: 'credit_logo_kviku.png',
    logoClass: 'logo-kviku',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  },
  {
    id: 5,
    name: 'Home Credit Bank',
    logoImg: 'credit_logo_homecredit.png',
    logoClass: 'logo-homecredit',
    age: '21 года',
    sum: '8 млн ₸',
    responseTime: '30 мин.',
    rate: '8.00%',
    term: '60 мес.'
  }
]

const currentBestOffers = computed(() => {
  if (windowWidth.value <= 991) {
    return allBestOffers.slice(0, 4) // Mobile Frame 284:660 shows 4 cards
  }
  return allBestOffers // Desktop Frame 49 shows 5 cards
})

// Section 2 Comparative Loans (1:1 with Figma 407:2285 & Mobile Frame 284:660)
const comparisonLoans = [
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
.credits-page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  .main {
    flex: 1;
    padding-bottom: 70px;
  }
}

.credits-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1240px) {
    padding-left: 20px;
    padding-right: 20px;
  }
}

/* Page Title & Description */
.credits-page {
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
}

/* Banner + Filter Controls Bar */
.credits-top-bar {
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

/* Banner (Figma Frame 59: 420x73, Mobile Frame 56: 335x85) */
.credits-banner {
  background: #fef2e3;
  border-radius: 10px;
  width: 420px;
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px 0 24px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  flex-shrink: 0;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 138, 22, 0.12);
  }

  @media (max-width: 991px) {
    width: 100%;
    height: 85px;
    padding: 0 16px 0 20px;
  }

  &__text {
    font-size: 20px;
    font-weight: 700;
    color: #ff8a16;
    text-decoration: underline;
    z-index: 2;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  &__img {
    height: 94px;
    width: auto;
    object-fit: contain;
    position: absolute;
    right: 10px;
    bottom: -6px;
    z-index: 1;
    pointer-events: none;

    @media (max-width: 767px) {
      height: 92px;
      right: 0px;
      bottom: -6px;
    }
  }
}

/* Desktop Filter Bar (Group 254) */
.credits-filter-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  .filter-dropdown {
    position: relative;
  }

  .filter-pill {
    background: #fef1e2;
    border: none;
    border-radius: 4px;
    height: 37px;
    padding: 0 14px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #fde8ce;
    }

    .pill-text {
      white-space: nowrap;
    }

    .chevron-icon {
      flex-shrink: 0;
      transition: transform 0.2s;
    }
  }

  .filter-dropdown.open .chevron-icon {
    transform: rotate(180deg);
  }

  .dropdown-menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    min-width: 140px;
    z-index: 100;
    overflow: hidden;

    .dropdown-item {
      padding: 9px 14px;
      font-size: 14px;
      color: #333333;
      cursor: pointer;
      transition: background 0.15s;

      &:hover, &.active {
        background: #fef2e3;
        color: #ff8a16;
        font-weight: 500;
      }
    }
  }

  .filter-submit-btn {
    background: #ff8a16;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    height: 37px;
    width: 145px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
      background: #e67508;
    }
  }
}

/* Mobile Filter Controls */
.credits-mobile-filter {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  .mobile-filter-row {
    display: flex;
    gap: 10px;

    .filter-pill {
      flex: 1;
      height: 37px;
      background: #fef1e2;
      border: none;
      border-radius: 4px;
      padding: 0 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 400;
      color: #000000;
      cursor: pointer;

      .chevron-icon {
        flex-shrink: 0;
      }
    }
  }

  .filter-submit-btn-mobile {
    width: 100%;
    height: 40px;
    background: #ff8a16;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 4px;
    transition: background 0.2s;

    &:hover {
      background: #e67508;
    }
  }
}

/* Section Titles (36px desktop / 18px mobile) */
.credits-section__title {
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

  &.comp-table-title {
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

/* Best Offers Grid (Desktop: 3-column; Mobile: 1-column stack) */
.best-offers-grid {
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

/* Best Offer Card (Figma: 380x192px desktop, 335x176px mobile) */
.best-offer-card {
  background: #fafafa;
  border-radius: 12px;
  padding: 24px 28px;
  min-height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 18px 20px;
    min-height: 168px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
  }

  &__logo-wrap {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__logo-img {
    max-height: 38px;
    width: auto;
    object-fit: contain;

    &.logo-sber {
      max-height: 28px;
    }
    &.logo-homecredit {
      max-height: 38px;
    }
    &.logo-alfabank {
      max-height: 36px;
    }
    &.logo-kviku {
      max-height: 36px;
    }

    @media (max-width: 767px) {
      max-height: 30px;

      &.logo-sber {
        max-height: 24px;
      }
      &.logo-homecredit {
        max-height: 32px;
      }
      &.logo-alfabank {
        max-height: 30px;
      }
      &.logo-kviku {
        max-height: 30px;
      }
    }
  }

  &__link {
    font-size: 14px;
    font-weight: 500;
    color: #ff8a16;
    text-decoration: underline;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  &__btn-mobile {
    background: #ff8a16;
    color: #ffffff;
    border-radius: 4px;
    padding: 7px 14px;
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
  }
}

/* Card Divider */
.card-divider {
  height: 1px;
  background: #ececec;
  margin: 14px 0 16px 0;

  @media (max-width: 767px) {
    margin: 12px 0 14px 0;
  }
}

/* Card Specs Grid (2 columns with bullets) */
.card-specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 16px;

  @media (max-width: 767px) {
    gap: 6px 12px;
  }

  .specs-col {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 767px) {
      gap: 6px;
    }
  }

  .spec-line {
    display: flex;
    align-items: baseline;
    gap: 6px;
    font-size: 13.5px;
    color: #000000;
    line-height: 1.3;

    @media (max-width: 767px) {
      font-size: 12px;
    }

    .bullet {
      font-size: 11px;
      color: #000000;
      flex-shrink: 0;
    }

    strong {
      font-weight: 700;
      color: #000000;
    }
  }
}

/* Comparison Cards Grid (3-columns desktop / 1-column mobile) */
.comparison-grid {
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

.comparison-card {
  background: #fafafa;
  border-radius: 12px;
  padding: 24px 28px;
  min-height: 205px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 767px) {
    padding: 18px 20px;
    min-height: 160px;
  }

  &__bank {
    font-size: 18px;
    font-weight: 700;
    color: #ff8a16;
    margin: 0 0 6px 0;
    line-height: 1.2;

    @media (max-width: 767px) {
      font-size: 18px;
    }
  }

  &__subtitle {
    font-size: 12px;
    font-weight: 400;
    color: #000000;
    margin: 0;
    line-height: 1.35;
    min-height: 32px;

    @media (max-width: 767px) {
      font-size: 10px;
      min-height: 24px;
    }
  }
}

/* Pagination (Figma 1, 2, 3 ... 30) */
.credits-pagination-wrap {
  display: flex;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-top: 24px;
    margin-bottom: 28px;
  }

  .pagination-buttons {
    display: flex;
    align-items: center;
    gap: 6px;

    .page-btn {
      width: 31px;
      height: 30px;
      border: 1px solid #d6d6d6;
      border-radius: 2px;
      background: #ffffff;
      font-size: 15px;
      font-weight: 500;
      color: #b0b0b0;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;

      &.active {
        border-color: #ff8a16;
        color: #ff8a16;
        background: #ffffff;
      }

      &:hover:not(.active) {
        border-color: #999999;
        color: #666666;
      }

      &.page-btn-wide {
        width: 43px;
      }
    }

    .page-dots {
      color: #b0b0b0;
      font-size: 15px;
      padding: 0 4px;
    }
  }

  .pagination-counter {
    font-size: 12px;
    color: #b0b0b0;
    margin-left: 20px;

    @media (max-width: 767px) {
      margin-left: 0;
      color: #b8b8b8;
    }
  }
}

/* Bottom SEO Section */
.credits-seo-section {
  margin-top: 20px;
  margin-bottom: 60px;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }

  .seo-paragraph {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: #000000;
    margin: 0 0 14px 0;

    @media (max-width: 767px) {
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 12px;
    }
  }

  .seo-more-link {
    display: inline-block;
    color: #ff8a16;
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
    margin-top: 4px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 767px) {
      font-size: 14px;
    }
  }
}

/* Responsive Visibility Helpers */
.desktop-only {
  @media (max-width: 991px) {
    display: none !important;
  }
}

.mobile-only {
  @media (min-width: 992px) {
    display: none !important;
  }
}
</style>

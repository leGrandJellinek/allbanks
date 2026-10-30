<template>
  <div class="deposit-filters">
    <!-- Desktop Filter Controls (Figma Frame 53) -->
    <div class="deposit-filters__desktop desktop-only">
      <!-- Row 1 -->
      <div class="deposit-filters__row">
        <!-- Валюта -->
        <div
          class="deposit-filters__dropdown"
          :class="{ 'deposit-filters__dropdown--open': activeDropdown === 'currency' }"
        >
          <button class="deposit-filters__pill" @click="toggleDropdown('currency')">
            <span class="deposit-filters__pill-text">{{ selectedCurrencyLabel }}</span>
            <svg
              class="deposit-filters__chevron"
              :class="{ 'deposit-filters__chevron--open': activeDropdown === 'currency' }"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#FF8A16"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div v-if="activeDropdown === 'currency'" class="deposit-filters__menu">
            <div
              v-for="curr in currencyOptions"
              :key="curr.value"
              class="deposit-filters__item"
              :class="{ 'deposit-filters__item--active': selectedCurrency === curr.value }"
              @click="selectCurrency(curr.value)"
            >
              {{ curr.label }}
            </div>
          </div>
        </div>

        <!-- Сумма -->
        <div
          class="deposit-filters__dropdown"
          :class="{ 'deposit-filters__dropdown--open': activeDropdown === 'amount' }"
        >
          <button class="deposit-filters__pill" @click="toggleDropdown('amount')">
            <span class="deposit-filters__pill-text">{{ selectedAmountLabel }}</span>
          </button>
          <div v-if="activeDropdown === 'amount'" class="deposit-filters__menu">
            <div
              v-for="amt in amountOptions"
              :key="amt.value"
              class="deposit-filters__item"
              :class="{ 'deposit-filters__item--active': selectedAmount === amt.value }"
              @click="selectAmount(amt.value)"
            >
              {{ amt.label }}
            </div>
          </div>
        </div>

        <!-- Срок, мес. -->
        <div
          class="deposit-filters__dropdown"
          :class="{ 'deposit-filters__dropdown--open': activeDropdown === 'term' }"
        >
          <button class="deposit-filters__pill" @click="toggleDropdown('term')">
            <span class="deposit-filters__pill-text">{{ selectedTermLabel }}</span>
            <svg
              class="deposit-filters__chevron"
              :class="{ 'deposit-filters__chevron--open': activeDropdown === 'term' }"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#FF8A16"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div v-if="activeDropdown === 'term'" class="deposit-filters__menu">
            <div
              v-for="t in termOptions"
              :key="t.value"
              class="deposit-filters__item"
              :class="{ 'deposit-filters__item--active': selectedTerm === t.value }"
              @click="selectTerm(t.value)"
            >
              {{ t.label }}
            </div>
          </div>
        </div>

        <!-- Пополнение -->
        <div
          class="deposit-filters__dropdown"
          :class="{ 'deposit-filters__dropdown--open': activeDropdown === 'replenishment' }"
        >
          <button class="deposit-filters__pill" @click="toggleDropdown('replenishment')">
            <span class="deposit-filters__pill-text">{{ selectedReplenishmentLabel }}</span>
            <svg
              class="deposit-filters__chevron"
              :class="{ 'deposit-filters__chevron--open': activeDropdown === 'replenishment' }"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#FF8A16"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div v-if="activeDropdown === 'replenishment'" class="deposit-filters__menu">
            <div
              v-for="rep in replenishmentOptions"
              :key="rep.value"
              class="deposit-filters__item"
              :class="{ 'deposit-filters__item--active': selectedReplenishment === rep.value }"
              @click="selectReplenishment(rep.value)"
            >
              {{ rep.label }}
            </div>
          </div>
        </div>

        <!-- Част. снятие -->
        <div
          class="deposit-filters__dropdown"
          :class="{ 'deposit-filters__dropdown--open': activeDropdown === 'withdrawal' }"
        >
          <button class="deposit-filters__pill" @click="toggleDropdown('withdrawal')">
            <span class="deposit-filters__pill-text">{{ selectedWithdrawalLabel }}</span>
            <svg
              class="deposit-filters__chevron"
              :class="{ 'deposit-filters__chevron--open': activeDropdown === 'withdrawal' }"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#FF8A16"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div v-if="activeDropdown === 'withdrawal'" class="deposit-filters__menu">
            <div
              v-for="w in withdrawalOptions"
              :key="w.value"
              class="deposit-filters__item"
              :class="{ 'deposit-filters__item--active': selectedWithdrawal === w.value }"
              @click="selectWithdrawal(w.value)"
            >
              {{ w.label }}
            </div>
          </div>
        </div>

        <!-- Город -->
        <div
          class="deposit-filters__dropdown"
          :class="{ 'deposit-filters__dropdown--open': activeDropdown === 'city' }"
        >
          <button class="deposit-filters__pill" @click="toggleDropdown('city')">
            <span class="deposit-filters__pill-text">{{ selectedCityLabel }}</span>
            <svg
              class="deposit-filters__chevron"
              :class="{ 'deposit-filters__chevron--open': activeDropdown === 'city' }"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#FF8A16"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div v-if="activeDropdown === 'city'" class="deposit-filters__menu">
            <div
              v-for="city in cityOptions"
              :key="city"
              class="deposit-filters__item"
              :class="{ 'deposit-filters__item--active': selectedCity === city }"
              @click="selectCity(city)"
            >
              {{ city }}
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2 -->
      <div class="deposit-filters__row">
        <!-- Мульт. вклад -->
        <div
          class="deposit-filters__dropdown"
          :class="{ 'deposit-filters__dropdown--open': activeDropdown === 'multi' }"
        >
          <button class="deposit-filters__pill" @click="toggleDropdown('multi')">
            <span class="deposit-filters__pill-text">{{ selectedMultiLabel }}</span>
            <svg
              class="deposit-filters__chevron"
              :class="{ 'deposit-filters__chevron--open': activeDropdown === 'multi' }"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#FF8A16"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div v-if="activeDropdown === 'multi'" class="deposit-filters__menu">
            <div
              v-for="m in multiOptions"
              :key="m.value"
              class="deposit-filters__item"
              :class="{ 'deposit-filters__item--active': selectedMulti === m.value }"
              @click="selectMulti(m.value)"
            >
              {{ m.label }}
            </div>
          </div>
        </div>

        <!-- Пенсионный -->
        <div
          class="deposit-filters__dropdown"
          :class="{ 'deposit-filters__dropdown--open': activeDropdown === 'pension' }"
        >
          <button class="deposit-filters__pill" @click="toggleDropdown('pension')">
            <span class="deposit-filters__pill-text">{{ selectedPensionLabel }}</span>
            <svg
              class="deposit-filters__chevron"
              :class="{ 'deposit-filters__chevron--open': activeDropdown === 'pension' }"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M1 1.5L6 6.5L11 1.5"
                stroke="#FF8A16"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div v-if="activeDropdown === 'pension'" class="deposit-filters__menu">
            <div
              v-for="p in pensionOptions"
              :key="p.value"
              class="deposit-filters__item"
              :class="{ 'deposit-filters__item--active': selectedPension === p.value }"
              @click="selectPension(p.value)"
            >
              {{ p.label }}
            </div>
          </div>
        </div>

        <!-- Найти депозит button -->
        <button class="deposit-filters__submit" @click="handleSubmit">Найти депозит</button>
      </div>
    </div>

    <!-- Mobile Filter Controls (Figma Mobile Frame 325:2242) -->
    <div class="deposit-filters__mobile mobile-only">
      <!-- Row 1: Валюта | Сумма -->
      <div class="deposit-filters__row">
        <button class="deposit-filters__pill" @click="toggleDropdown('currency')">
          <span class="deposit-filters__pill-text">{{ selectedCurrencyLabel }}</span>
          <svg
            class="deposit-filters__chevron"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#FF8A16"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="deposit-filters__pill" @click="toggleDropdown('amount')">
          <span class="deposit-filters__pill-text">{{ selectedAmountLabel }}</span>
        </button>
      </div>

      <!-- Row 2: Срок, мес. | Пополнение -->
      <div class="deposit-filters__row">
        <button class="deposit-filters__pill" @click="toggleDropdown('term')">
          <span class="deposit-filters__pill-text">{{ selectedTermLabel }}</span>
          <svg
            class="deposit-filters__chevron"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#FF8A16"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="deposit-filters__pill" @click="toggleDropdown('replenishment')">
          <span class="deposit-filters__pill-text">{{ selectedReplenishmentLabel }}</span>
          <svg
            class="deposit-filters__chevron"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#FF8A16"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- Row 3: Част. снятие | Город -->
      <div class="deposit-filters__row">
        <button class="deposit-filters__pill" @click="toggleDropdown('withdrawal')">
          <span class="deposit-filters__pill-text">{{ selectedWithdrawalLabel }}</span>
          <svg
            class="deposit-filters__chevron"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#FF8A16"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="deposit-filters__pill" @click="toggleDropdown('city')">
          <span class="deposit-filters__pill-text">{{ selectedCityLabel }}</span>
          <svg
            class="deposit-filters__chevron"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#FF8A16"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- Row 4: Мульт. вклад | Пенсионный -->
      <div class="deposit-filters__row">
        <button class="deposit-filters__pill" @click="toggleDropdown('multi')">
          <span class="deposit-filters__pill-text">{{ selectedMultiLabel }}</span>
          <svg
            class="deposit-filters__chevron"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#FF8A16"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="deposit-filters__pill" @click="toggleDropdown('pension')">
          <span class="deposit-filters__pill-text">{{ selectedPensionLabel }}</span>
          <svg
            class="deposit-filters__chevron"
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1.5L6 6.5L11 1.5"
              stroke="#FF8A16"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <!-- Row 5: Найти депозит -->
      <button class="deposit-filters__submit deposit-filters__submit--mobile" @click="handleSubmit">
        Найти депозит
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  (e: 'search', filters: Record<string, string>): void
}>()

const activeDropdown = ref<string | null>(null)

function toggleDropdown(name: string) {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

function closeDropdowns(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (!target.closest('.deposit-filters__dropdown') && !target.closest('.deposit-filters__pill')) {
    activeDropdown.value = null
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  window.removeEventListener('click', closeDropdowns)
})

// Currency
const selectedCurrency = ref('all')
const currencyOptions = [
  { value: 'all', label: 'Валюта' },
  { value: 'KZT', label: 'KZT (Тенге)' },
  { value: 'USD', label: 'USD (Доллар)' },
  { value: 'EUR', label: 'EUR (Евро)' }
]
const selectedCurrencyLabel = computed(() => {
  const found = currencyOptions.find((o) => o.value === selectedCurrency.value)
  return found ? found.label : 'Валюта'
})
function selectCurrency(val: string) {
  selectedCurrency.value = val
  activeDropdown.value = null
}

// Amount
const selectedAmount = ref('all')
const amountOptions = [
  { value: 'all', label: 'Сумма' },
  { value: '100k', label: 'от 100 000 ₸' },
  { value: '500k', label: 'от 500 000 ₸' },
  { value: '1m', label: 'от 1 млн ₸' },
  { value: '5m', label: 'от 5 млн ₸' }
]
const selectedAmountLabel = computed(() => {
  const found = amountOptions.find((o) => o.value === selectedAmount.value)
  return found ? found.label : 'Сумма'
})
function selectAmount(val: string) {
  selectedAmount.value = val
  activeDropdown.value = null
}

// Term
const selectedTerm = ref('all')
const termOptions = [
  { value: 'all', label: 'Срок, мес.' },
  { value: '3', label: '3 месяца' },
  { value: '6', label: '6 месяцев' },
  { value: '12', label: '12 месяцев' },
  { value: '24', label: '24 месяца' },
  { value: '36', label: '36 месяцев' }
]
const selectedTermLabel = computed(() => {
  const found = termOptions.find((o) => o.value === selectedTerm.value)
  return found ? found.label : 'Срок, мес.'
})
function selectTerm(val: string) {
  selectedTerm.value = val
  activeDropdown.value = null
}

// Replenishment
const selectedReplenishment = ref('all')
const replenishmentOptions = [
  { value: 'all', label: 'Пополнение' },
  { value: 'yes', label: 'С пополнением' },
  { value: 'no', label: 'Без пополнения' }
]
const selectedReplenishmentLabel = computed(() => {
  const found = replenishmentOptions.find((o) => o.value === selectedReplenishment.value)
  return found ? found.label : 'Пополнение'
})
function selectReplenishment(val: string) {
  selectedReplenishment.value = val
  activeDropdown.value = null
}

// Withdrawal
const selectedWithdrawal = ref('all')
const withdrawalOptions = [
  { value: 'all', label: 'Част. снятие' },
  { value: 'yes', label: 'С частичным снятием' },
  { value: 'no', label: 'Без снятия' }
]
const selectedWithdrawalLabel = computed(() => {
  const found = withdrawalOptions.find((o) => o.value === selectedWithdrawal.value)
  return found ? found.label : 'Част. снятие'
})
function selectWithdrawal(val: string) {
  selectedWithdrawal.value = val
  activeDropdown.value = null
}

// City
const selectedCity = ref('all')
const cityOptions = ['Город', 'Алматы', 'Астана', 'Шымкент', 'Караганда', 'Актобе']
const selectedCityLabel = computed(() => {
  return selectedCity.value === 'all' ? 'Город' : selectedCity.value
})
function selectCity(city: string) {
  selectedCity.value = city === 'Город' ? 'all' : city
  activeDropdown.value = null
}

// Multi
const selectedMulti = ref('all')
const multiOptions = [
  { value: 'all', label: 'Мульт. вклад' },
  { value: 'yes', label: 'Мультивалютный' },
  { value: 'no', label: 'Обычный' }
]
const selectedMultiLabel = computed(() => {
  const found = multiOptions.find((o) => o.value === selectedMulti.value)
  return found ? found.label : 'Мульт. вклад'
})
function selectMulti(val: string) {
  selectedMulti.value = val
  activeDropdown.value = null
}

// Pension
const selectedPension = ref('all')
const pensionOptions = [
  { value: 'all', label: 'Пенсионный' },
  { value: 'yes', label: 'Пенсионный вклад' },
  { value: 'no', label: 'Стандартный' }
]
const selectedPensionLabel = computed(() => {
  const found = pensionOptions.find((o) => o.value === selectedPension.value)
  return found ? found.label : 'Пенсионный'
})
function selectPension(val: string) {
  selectedPension.value = val
  activeDropdown.value = null
}

function handleSubmit() {
  emit('search', {
    currency: selectedCurrency.value,
    amount: selectedAmount.value,
    term: selectedTerm.value,
    replenishment: selectedReplenishment.value,
    withdrawal: selectedWithdrawal.value,
    city: selectedCity.value,
    multi: selectedMulti.value,
    pension: selectedPension.value
  })
}
</script>

<style lang="scss" scoped>
.deposit-filters {
  margin-bottom: 30px;

  &__desktop {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__row {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  }

  &__dropdown {
    position: relative;
  }

  &__pill {
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
  }

  &__pill-text {
    white-space: nowrap;
  }

  &__chevron {
    flex-shrink: 0;
    transition: transform 0.2s;

    &--open {
      transform: rotate(180deg);
    }
  }

  &__menu {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    min-width: 150px;
    z-index: 100;
    overflow: hidden;
  }

  &__item {
    padding: 9px 14px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
    transition: background 0.15s;

    &:hover,
    &--active {
      background: #fef2e3;
      color: #ff8a16;
      font-weight: 500;
    }
  }

  &__submit {
    background: #ff8a16;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    height: 37px;
    padding: 0 16px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    white-space: nowrap;

    &:hover {
      background: #e67508;
    }

    &--mobile {
      width: 100%;
      height: 35px;
      margin-top: 4px;
    }
  }

  &__mobile {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    .deposit-filters__row {
      display: flex;
      gap: 10px;
      flex-wrap: nowrap;
    }

    .deposit-filters__pill {
      flex: 1;
      height: 31px;
      font-size: 14px;
      padding: 0 12px;
    }
  }
}

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

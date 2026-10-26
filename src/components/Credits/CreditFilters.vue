<template>
  <div class="credit-filters">
    <!-- Desktop Filter Controls (Figma Group 254) -->
    <div class="credit-filters__desktop desktop-only">
      <!-- Currency Dropdown -->
      <div 
        class="credit-filters__dropdown" 
        :class="{ 'credit-filters__dropdown--open': activeDropdown === 'currency' }"
      >
        <button class="credit-filters__pill" @click="toggleDropdown('currency')">
          <span class="credit-filters__pill-text">{{ selectedCurrencyLabel }}</span>
          <svg 
            class="credit-filters__chevron" 
            :class="{ 'credit-filters__chevron--open': activeDropdown === 'currency' }"
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none"
          >
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div v-if="activeDropdown === 'currency'" class="credit-filters__menu">
          <div 
            v-for="curr in currencyOptions" 
            :key="curr.value" 
            class="credit-filters__item"
            :class="{ 'credit-filters__item--active': selectedCurrency === curr.value }"
            @click="selectCurrency(curr.value)"
          >
            {{ curr.label }}
          </div>
        </div>
      </div>

      <!-- Amount Dropdown -->
      <div 
        class="credit-filters__dropdown" 
        :class="{ 'credit-filters__dropdown--open': activeDropdown === 'amount' }"
      >
        <button class="credit-filters__pill" @click="toggleDropdown('amount')">
          <span class="credit-filters__pill-text">{{ selectedAmountLabel }}</span>
          <svg 
            class="credit-filters__chevron" 
            :class="{ 'credit-filters__chevron--open': activeDropdown === 'amount' }"
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none"
          >
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div v-if="activeDropdown === 'amount'" class="credit-filters__menu">
          <div 
            v-for="amt in amountOptions" 
            :key="amt.value" 
            class="credit-filters__item"
            :class="{ 'credit-filters__item--active': selectedAmount === amt.value }"
            @click="selectAmount(amt.value)"
          >
            {{ amt.label }}
          </div>
        </div>
      </div>

      <!-- Collateral Dropdown -->
      <div 
        class="credit-filters__dropdown" 
        :class="{ 'credit-filters__dropdown--open': activeDropdown === 'collateral' }"
      >
        <button class="credit-filters__pill" @click="toggleDropdown('collateral')">
          <span class="credit-filters__pill-text">{{ selectedCollateralLabel }}</span>
          <svg 
            class="credit-filters__chevron" 
            :class="{ 'credit-filters__chevron--open': activeDropdown === 'collateral' }"
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none"
          >
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div v-if="activeDropdown === 'collateral'" class="credit-filters__menu">
          <div 
            v-for="col in collateralOptions" 
            :key="col.value" 
            class="credit-filters__item"
            :class="{ 'credit-filters__item--active': selectedCollateral === col.value }"
            @click="selectCollateral(col.value)"
          >
            {{ col.label }}
          </div>
        </div>
      </div>

      <!-- City Dropdown -->
      <div 
        class="credit-filters__dropdown" 
        :class="{ 'credit-filters__dropdown--open': activeDropdown === 'city' }"
      >
        <button class="credit-filters__pill" @click="toggleDropdown('city')">
          <span class="credit-filters__pill-text">{{ selectedCityLabel }}</span>
          <svg 
            class="credit-filters__chevron" 
            :class="{ 'credit-filters__chevron--open': activeDropdown === 'city' }"
            width="12" 
            height="8" 
            viewBox="0 0 12 8" 
            fill="none"
          >
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div v-if="activeDropdown === 'city'" class="credit-filters__menu">
          <div 
            v-for="city in cityOptions" 
            :key="city" 
            class="credit-filters__item"
            :class="{ 'credit-filters__item--active': selectedCity === city }"
            @click="selectCity(city)"
          >
            {{ city }}
          </div>
        </div>
      </div>

      <!-- Submit Button -->
      <button class="credit-filters__submit" @click="handleSubmit">
        Найти кредит
      </button>
    </div>

    <!-- Mobile Filter Controls (Figma Mobile Frame 284:660) -->
    <div class="credit-filters__mobile mobile-only">
      <div class="credit-filters__row">
        <button class="credit-filters__pill" @click="toggleDropdown('currency')">
          <span class="credit-filters__pill-text">{{ selectedCurrencyLabel }}</span>
          <svg class="credit-filters__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="credit-filters__pill" @click="toggleDropdown('amount')">
          <span class="credit-filters__pill-text">{{ selectedAmountLabel }}</span>
          <svg class="credit-filters__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="credit-filters__row">
        <button class="credit-filters__pill" @click="toggleDropdown('collateral')">
          <span class="credit-filters__pill-text">{{ selectedCollateralLabel }}</span>
          <svg class="credit-filters__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <button class="credit-filters__pill" @click="toggleDropdown('city')">
          <span class="credit-filters__pill-text">{{ selectedCityLabel }}</span>
          <svg class="credit-filters__chevron" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <button class="credit-filters__submit credit-filters__submit--mobile" @click="handleSubmit">
        Найти кредит
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  (e: 'search', filters: { currency: string, amount: string, collateral: string, city: string }): void
}>()

const activeDropdown = ref<string | null>(null)

function toggleDropdown(name: string) {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

function closeDropdowns(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (!target.closest('.credit-filters__dropdown') && !target.closest('.credit-filters__pill')) {
    activeDropdown.value = null
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropdowns)
})

onUnmounted(() => {
  window.removeEventListener('click', closeDropdowns)
})

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

function handleSubmit() {
  emit('search', {
    currency: selectedCurrency.value,
    amount: selectedAmount.value,
    collateral: selectedCollateral.value,
    city: selectedCity.value
  })
}
</script>

<style lang="scss" scoped>
.credit-filters {
  &__desktop {
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
    min-width: 140px;
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

    &--mobile {
      width: 100%;
      height: 40px;
      margin-top: 4px;
    }
  }

  &__mobile {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    .credit-filters__pill {
      flex: 1;
      font-size: 14px;
    }
  }

  &__row {
    display: flex;
    gap: 10px;
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

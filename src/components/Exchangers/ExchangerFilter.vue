<template>
  <section class="exchanger-filter">
    <h2 class="exchanger-filter__title">Фильтр</h2>

    <div class="exchanger-filter__body">
      <!-- Select Controls -->
      <div class="exchanger-filter__controls">
        <!-- Район -->
        <div class="exchanger-filter__select-wrap exchanger-filter__select-wrap--district">
          <select v-model="district" class="exchanger-filter__select">
            <option value="all">Район</option>
            <option value="almaly">Алмалинский</option>
            <option value="bostandyk">Бостандыкский</option>
            <option value="medeu">Медеуский</option>
            <option value="auezov">Ауэзовский</option>
            <option value="zhetysu">Жетысуский</option>
          </select>
          <svg class="exchanger-filter__arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Улица -->
        <div class="exchanger-filter__select-wrap exchanger-filter__select-wrap--street">
          <select v-model="street" class="exchanger-filter__select">
            <option value="all">Улица</option>
            <option value="auezov">Ауэзова</option>
            <option value="tolebi">Толе би</option>
            <option value="abai">Абая</option>
            <option value="dostyk">Достык</option>
            <option value="ainabulak">Айнабулак</option>
          </select>
          <svg class="exchanger-filter__arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Только лучшие курсы -->
        <div class="exchanger-filter__select-wrap exchanger-filter__select-wrap--best">
          <select v-model="onlyBest" class="exchanger-filter__select">
            <option value="all">Только лучшие курсы</option>
            <option value="yes">Да</option>
            <option value="no">Нет</option>
          </select>
          <svg class="exchanger-filter__arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Оптимальные курсы -->
        <div class="exchanger-filter__select-wrap exchanger-filter__select-wrap--optimal">
          <select v-model="optimal" class="exchanger-filter__select">
            <option value="all">Оптимальные курсы</option>
            <option value="yes">Да</option>
            <option value="no">Нет</option>
          </select>
          <svg class="exchanger-filter__arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#FF8A16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>

      <!-- Action Button & Links -->
      <div class="exchanger-filter__actions">
        <button 
          type="button" 
          class="exchanger-filter__submit-btn" 
          @click="handleSelect"
        >
          Выбрать
        </button>

        <div class="exchanger-filter__links-row">
          <a 
            href="#map" 
            class="exchanger-filter__map-link" 
            @click.prevent="handleShowMap"
          >
            Показать на карте
          </a>

          <!-- Mobile Reset Link -->
          <button 
            type="button" 
            class="exchanger-filter__reset-btn" 
            @click="handleReset"
          >
            Сбросить
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'filter', payload: { district: string; street: string; onlyBest: string; optimal: string }): void
  (e: 'show-map'): void
  (e: 'reset'): void
}>()

const district = ref('all')
const street = ref('all')
const onlyBest = ref('all')
const optimal = ref('all')

function handleSelect() {
  emit('filter', {
    district: district.value,
    street: street.value,
    onlyBest: onlyBest.value,
    optimal: optimal.value
  })
}

function handleShowMap() {
  emit('show-map')
}

function handleReset() {
  district.value = 'all'
  street.value = 'all'
  onlyBest.value = 'all'
  optimal.value = 'all'
  emit('reset')
}
</script>

<style lang="scss" scoped>
.exchanger-filter {
  margin-top: 40px;
  margin-bottom: 40px;

  &__title {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 36px;
    line-height: 1.0;
    color: #000000;
    margin: 0 0 20px 0;
  }

  &__body {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
  }

  &__select-wrap {
    position: relative;
    background: #FEF2E3;
    border-radius: 4px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;

    &--district {
      width: 111px;
    }

    &--street {
      width: 111px;
    }

    &--best {
      width: 220px;
    }

    &--optimal {
      width: 207px;
    }
  }

  &__select {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    padding: 0 32px 0 16px;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: #000000;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;
  }

  &__arrow {
    position: absolute;
    right: 14px;
    pointer-events: none;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__links-row {
    display: contents;
  }

  &__submit-btn {
    background: #FF8A16;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    height: 38px;
    padding: 0 20px;
    min-width: 103px;
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.0;
    cursor: pointer;
    transition: background-color 0.2s;
    box-sizing: border-box;

    &:hover {
      background: #e67507;
    }
  }

  &__map-link {
    font-family: 'Gotham Pro', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.0;
    color: #FF8A16;
    text-decoration: underline;
    transition: opacity 0.2s;
    white-space: nowrap;

    &:hover {
      opacity: 0.8;
    }
  }

  &__reset-btn {
    display: none;
  }

  /* Responsive Mobile Styles matching Frame 292:1399 */
  @media (max-width: 991px) {
    margin-top: 24px;
    margin-bottom: 24px;

    &__title {
      font-size: 18px;
      margin-bottom: 12px;
    }

    &__body {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    &__controls {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      width: 100%;
    }

    &__select-wrap {
      width: 100% !important;
      height: 32px;
    }

    &__select {
      font-size: 12.5px;
      padding: 0 24px 0 10px;
    }

    &__arrow {
      right: 8px;
    }

    &__actions {
      flex-direction: column;
      align-items: stretch;
      gap: 12px;
      width: 100%;
    }

    &__submit-btn {
      width: 100%;
      height: 38px;
      font-size: 15px;
    }

    &__links-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 2px;
    }

    &__map-link {
      font-size: 14px;
    }

    &__reset-btn {
      display: inline-block;
      background: none;
      border: none;
      padding: 0;
      font-family: 'Gotham Pro', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: #A0A0A0;
      cursor: pointer;

      &:hover {
        color: #666666;
      }
    }
  }
}
</style>

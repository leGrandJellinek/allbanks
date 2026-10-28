<template>
  <article class="microloan-card">
    <div class="microloan-card__head">
      <div class="microloan-card__logo-wrap">
        <img :src="item.logo" :alt="item.name" class="microloan-card__logo" />
      </div>
      <router-link to="/credits/apply" class="microloan-card__action">
        Получить кредит
      </router-link>
    </div>

    <div class="microloan-card__divider"></div>

    <div class="microloan-card__specs">
      <div class="microloan-card__spec-col">
        <div class="microloan-card__spec-item">
          <span class="microloan-card__dot"></span>
          <span class="microloan-card__text">Возраст от <strong>{{ item.age }}</strong> года</span>
        </div>
        <div class="microloan-card__spec-item">
          <span class="microloan-card__dot"></span>
          <span class="microloan-card__text">Сумма до <strong>{{ item.sum }}</strong></span>
        </div>
        <div class="microloan-card__spec-item">
          <span class="microloan-card__dot"></span>
          <span class="microloan-card__text">Срок до <strong>{{ item.termDays }}</strong> дня</span>
        </div>
      </div>

      <div class="microloan-card__spec-col">
        <div class="microloan-card__spec-item">
          <span class="microloan-card__dot"></span>
          <span class="microloan-card__text">От {{ item.rate }} в день</span>
        </div>
        <div class="microloan-card__spec-item">
          <span class="microloan-card__dot"></span>
          <span class="microloan-card__text">Срок до <strong>{{ item.termMonths }}</strong> мес.</span>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
export interface MicroloanItem {
  id: number
  name: string
  logo: string
  age: string
  sum: string
  termDays: string
  rate: string
  termMonths: string
}

defineProps<{
  item: MicroloanItem
}>()
</script>

<style lang="scss" scoped>
.microloan-card {
  width: 100%;
  max-width: 377px;
  min-height: 192px;
  background: #f9f9f9;
  border-radius: 14px;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
  }

  &__logo-wrap {
    height: 42px;
    display: flex;
    align-items: center;
    max-width: 130px;
  }

  &__logo {
    max-height: 42px;
    max-width: 100%;
    object-fit: contain;
    object-position: left center;
  }

  &__action {
    font-family: 'GP', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #ff8a16;
    text-decoration: underline;
    line-height: 1;
    white-space: nowrap;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }
  }

  &__divider {
    height: 1px;
    background-color: #9e9e9e;
    opacity: 0.5;
    margin: 16px 0 20px 0;
  }

  &__specs {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  &__spec-col {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__spec-item {
    display: flex;
    align-items: center;
    font-family: 'GP', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 13.4px;
    color: #000000;
    white-space: nowrap;
  }

  &__dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #000000;
    margin-right: 8px;
    flex-shrink: 0;
  }

  &__text {
    strong {
      font-weight: 700;
    }
  }

  @media (max-width: 767px) {
    max-width: 100%;
    min-height: auto;
    padding: 18px 20px;

    &__head {
      height: 36px;
    }

    &__logo-wrap {
      height: 36px;
      max-width: 110px;
    }

    &__logo {
      max-height: 36px;
    }

    &__action {
      font-size: 13px;
    }

    &__divider {
      margin: 14px 0 16px 0;
    }

    &__specs {
      gap: 10px;
    }

    &__spec-item {
      font-size: 11.5px;
      line-height: 12px;
    }

    &__dot {
      width: 3px;
      height: 3px;
      margin-right: 6px;
    }

    &__spec-col {
      gap: 10px;
    }
  }
}
</style>

<template>
  <div class="credit-pagination">
    <div class="credit-pagination__list">
      <button
        class="credit-pagination__btn"
        :class="{ 'credit-pagination__btn--active': currentPage === 1 }"
        @click="$emit('change', 1)"
      >
        1
      </button>
      <button
        class="credit-pagination__btn"
        :class="{ 'credit-pagination__btn--active': currentPage === 2 }"
        @click="$emit('change', 2)"
      >
        2
      </button>
      <button
        class="credit-pagination__btn"
        :class="{ 'credit-pagination__btn--active': currentPage === 3 }"
        @click="$emit('change', 3)"
      >
        3
      </button>
      <span class="credit-pagination__dots">...</span>
      <button
        class="credit-pagination__btn credit-pagination__btn--wide"
        :class="{ 'credit-pagination__btn--active': currentPage === totalPages }"
        @click="$emit('change', totalPages)"
      >
        {{ totalPages }}
      </button>
    </div>
    <span class="credit-pagination__counter">{{ counterText }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    currentPage?: number
    totalPages?: number
    counterText?: string
  }>(),
  {
    currentPage: 1,
    totalPages: 30,
    counterText: 'Кредитов 1—17 из 68'
  }
)

defineEmits<{
  (e: 'change', page: number): void
}>()
</script>

<style lang="scss" scoped>
.credit-pagination {
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

  &__list {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__btn {
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

    &--active {
      border-color: #ff8a16;
      color: #ff8a16;
      background: #ffffff;
    }

    &:hover:not(&--active) {
      border-color: #999999;
      color: #666666;
    }

    &--wide {
      width: 43px;
    }
  }

  &__dots {
    color: #b0b0b0;
    font-size: 15px;
    padding: 0 4px;
  }

  &__counter {
    font-size: 12px;
    color: #b0b0b0;
    margin-left: 20px;

    @media (max-width: 767px) {
      margin-left: 0;
      color: #b8b8b8;
    }
  }
}
</style>

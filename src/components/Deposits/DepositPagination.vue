<template>
  <div class="deposit-pagination">
    <!-- Buttons -->
    <div class="deposit-pagination__list">
      <button
        class="deposit-pagination__btn"
        :class="{ 'deposit-pagination__btn--active': currentPage === 1 }"
        @click="$emit('change', 1)"
      >
        1
      </button>
      <button
        class="deposit-pagination__btn"
        :class="{ 'deposit-pagination__btn--active': currentPage === 2 }"
        @click="$emit('change', 2)"
      >
        2
      </button>
      <button
        class="deposit-pagination__btn"
        :class="{ 'deposit-pagination__btn--active': currentPage === 3 }"
        @click="$emit('change', 3)"
      >
        3
      </button>
      <!-- Mobile-only continuation dots and 30 -->
      <span class="deposit-pagination__dots mobile-only">...</span>
      <button
        class="deposit-pagination__btn deposit-pagination__btn--wide mobile-only"
        :class="{ 'deposit-pagination__btn--active': currentPage === 30 }"
        @click="$emit('change', 30)"
      >
        30
      </button>
    </div>

    <!-- Mobile-only counter -->
    <span class="deposit-pagination__counter mobile-only">Вкладов 1—15 из 426</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    currentPage?: number
  }>(),
  {
    currentPage: 1
  }
)

defineEmits<{
  (e: 'change', page: number): void
}>()
</script>

<style lang="scss" scoped>
.deposit-pagination {
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
    color: #b8b8b8;
    margin-top: 2px;
  }
}

.mobile-only {
  @media (min-width: 768px) {
    display: none !important;
  }
}
</style>

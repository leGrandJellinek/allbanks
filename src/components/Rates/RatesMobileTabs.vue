<template>
  <div class="rates-mobile-tabs mobile-only">
    <button
      class="mobile-tab-btn"
      :class="{ active: modelValue === 'USD' }"
      @click="emit('update:modelValue', 'USD')"
    >
      <div class="tab-icon usd">$</div>
      <span class="tab-label">USD</span>
      <div class="tab-underline"></div>
    </button>

    <button
      class="mobile-tab-btn"
      :class="{ active: modelValue === 'EUR' }"
      @click="emit('update:modelValue', 'EUR')"
    >
      <div class="tab-icon eur">€</div>
      <span class="tab-label">EUR</span>
      <div class="tab-underline"></div>
    </button>

    <button
      class="mobile-tab-btn"
      :class="{ active: modelValue === 'RUR' }"
      @click="emit('update:modelValue', 'RUR')"
    >
      <div class="tab-icon rur">₽</div>
      <span class="tab-label">RUR</span>
      <div class="tab-underline"></div>
    </button>
  </div>
</template>

<script setup lang="ts">
export type RateCurrency = 'USD' | 'EUR' | 'RUR'

defineProps<{
  modelValue: RateCurrency
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: RateCurrency): void
}>()
</script>

<style lang="scss" scoped>
.mobile-only {
  display: none;
  @media (max-width: 991px) {
    display: flex;
  }
}

.rates-mobile-tabs {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #b8b8b8;

  .mobile-tab-btn {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding-bottom: 10px;
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    margin-bottom: -1px;

    .tab-icon {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #b8b8b8;
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      flex-shrink: 0;
    }

    .tab-label {
      font-size: 14px;
      font-weight: 500;
      color: #b8b8b8;
      line-height: 1;
    }

    .tab-underline {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: #b8b8b8;
    }

    &.active {
      .tab-icon {
        background: #ff8a16;
      }

      .tab-label {
        color: #ff8a16;
        font-weight: 700;
      }

      .tab-underline {
        background: #ff8a16;
        height: 2px;
      }
    }
  }
}
</style>

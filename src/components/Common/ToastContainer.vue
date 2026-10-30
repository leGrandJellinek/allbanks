<template>
  <Teleport to="body">
    <div class="toast-container" aria-live="polite">
      <TransitionGroup name="toast" tag="div" class="toast-list">
        <div
          v-for="toast in toastStore.toasts"
          :key="toast.id"
          class="toast-item"
          :class="`toast-item--${toast.type}`"
        >
          <div class="toast-item__icon">
            <span v-if="toast.type === 'success'">✓</span>
            <span v-else-if="toast.type === 'error'">✕</span>
            <span v-else-if="toast.type === 'warning'">!</span>
            <span v-else>ℹ</span>
          </div>

          <p class="toast-item__msg">{{ toast.message }}</p>

          <button
            type="button"
            class="toast-item__close"
            aria-label="Закрыть уведомление"
            @click="toastStore.remove(toast.id)"
          >
            ✕
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToastStore } from '@/stores/toast'

const toastStore = useToastStore()
</script>

<style lang="scss" scoped>
.toast-container {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 10000000;
  pointer-events: none;
  max-width: 420px;
  width: calc(100vw - 32px);

  @media (max-width: 576px) {
    top: 16px;
    right: 16px;
    left: 16px;
    width: auto;
  }
}

.toast-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toast-item {
  pointer-events: auto;
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  color: #1e1e1e;
  padding: 14px 18px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.06);
  border-left: 5px solid #ff8a16;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.4;

  &--success {
    border-left-color: #27ae60;
    .toast-item__icon {
      background: #e8f8ee;
      color: #27ae60;
    }
  }

  &--info {
    border-left-color: #ff8a16;
    .toast-item__icon {
      background: #fff4e8;
      color: #ff8a16;
    }
  }

  &--warning {
    border-left-color: #f2994a;
    .toast-item__icon {
      background: #fef5ea;
      color: #f2994a;
    }
  }

  &--error {
    border-left-color: #eb5757;
    .toast-item__icon {
      background: #fdeeee;
      color: #eb5757;
    }
  }

  &__icon {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
  }

  &__msg {
    margin: 0;
    flex: 1;
    word-break: break-word;
  }

  &__close {
    flex-shrink: 0;
    background: none;
    border: none;
    color: #a0a0a0;
    cursor: pointer;
    font-size: 12px;
    padding: 4px;
    line-height: 1;
    transition: color 0.2s;

    &:hover {
      color: #1e1e1e;
    }
  }
}

// Transitions
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(-16px) scale(0.95);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ToastType = 'success' | 'info' | 'warning' | 'error'

export interface ToastItem {
  id: number
  message: string
  type: ToastType
  duration: number
}

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<ToastItem[]>([])

  function show(message: string, type: ToastType = 'info', duration = 3500) {
    const id = Date.now() + Math.random()
    const item: ToastItem = { id, message, type, duration }
    toasts.value.push(item)

    if (duration > 0) {
      setTimeout(() => {
        remove(id)
      }, duration)
    }
  }

  function success(message: string, duration = 3500) {
    show(message, 'success', duration)
  }

  function info(message: string, duration = 3500) {
    show(message, 'info', duration)
  }

  function warning(message: string, duration = 3500) {
    show(message, 'warning', duration)
  }

  function error(message: string, duration = 4000) {
    show(message, 'error', duration)
  }

  function remove(id: number) {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return {
    toasts,
    show,
    success,
    info,
    warning,
    error,
    remove
  }
})

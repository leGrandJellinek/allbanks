import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import ToastContainer from '@/components/Common/ToastContainer.vue'
import { useToastStore } from '@/stores/toast'

describe('ToastContainer Component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    document.body.innerHTML = ''
  })

  it('renders nothing when there are no toasts', () => {
    mount(ToastContainer, { attachTo: document.body })
    const items = document.querySelectorAll('.toast-item')
    expect(items.length).toBe(0)
  })

  it('renders toast message and handles close button click', async () => {
    const toast = useToastStore()
    mount(ToastContainer, { attachTo: document.body })

    toast.success('Успешное действие!')
    await new Promise((r) => setTimeout(r, 0))

    const item = document.querySelector('.toast-item')
    expect(item).not.toBeNull()
    expect(item?.textContent).toContain('Успешное действие!')

    const closeBtn = document.querySelector<HTMLButtonElement>('.toast-item__close')
    expect(closeBtn).not.toBeNull()
    closeBtn?.click()
    await new Promise((r) => setTimeout(r, 0))

    expect(toast.toasts.length).toBe(0)
  })
})

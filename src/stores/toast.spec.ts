import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useToastStore } from '@/stores/toast'

describe('Toast Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('initializes with empty toasts', () => {
    const toast = useToastStore()
    expect(toast.toasts).toEqual([])
  })

  it('adds success toast with custom duration', () => {
    const toast = useToastStore()
    const id = toast.success('Operatsiya uspeshna', 3000)

    expect(toast.toasts).toHaveLength(1)
    expect(toast.toasts[0]).toEqual({
      id,
      message: 'Operatsiya uspeshna',
      type: 'success',
      duration: 3000
    })
  })

  it('adds error and info toasts', () => {
    const toast = useToastStore()
    toast.error('Oshibka')
    toast.info('Informatsiya')

    expect(toast.toasts).toHaveLength(2)
    expect(toast.toasts[0].type).toBe('error')
    expect(toast.toasts[1].type).toBe('info')
  })

  it('auto-dismisses toast after duration expires', () => {
    const toast = useToastStore()
    toast.info('Vremennoe soobschenie', 2000)

    expect(toast.toasts).toHaveLength(1)

    vi.advanceTimersByTime(2000)

    expect(toast.toasts).toHaveLength(0)
  })

  it('removes toast manually by id', () => {
    const toast = useToastStore()
    const id1 = toast.info('Toast 1')
    const id2 = toast.info('Toast 2')

    expect(toast.toasts).toHaveLength(2)

    toast.removeToast(id1)

    expect(toast.toasts).toHaveLength(1)
    expect(toast.toasts[0].id).toBe(id2)
  })
})

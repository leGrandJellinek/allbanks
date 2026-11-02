import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCreditsStore } from '@/stores/credits'

describe('Credits Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('contains expected default credit offers', () => {
    const store = useCreditsStore()
    expect(store.creditOffers.length).toBeGreaterThanOrEqual(4)

    const names = store.creditOffers.map((o) => o.name)
    expect(names).toContain('Сбербанк')
    expect(names).toContain('Kaspi.kz')
    expect(names).toContain('Bank RBK')
    expect(names).toContain('Kviku')
  })

  it('retrieves credit offer by numeric id', () => {
    const store = useCreditsStore()
    const offer = store.getCreditById(2)

    expect(offer).toBeDefined()
    expect(offer?.name).toBe('Kaspi.kz')
  })

  it('retrieves credit offer by string id', () => {
    const store = useCreditsStore()
    const offer = store.getCreditById('3')

    expect(offer).toBeDefined()
    expect(offer?.name).toBe('Bank RBK')
  })

  it('returns undefined for non-existent credit id', () => {
    const store = useCreditsStore()
    const offer = store.getCreditById(9999)

    expect(offer).toBeUndefined()
  })
})

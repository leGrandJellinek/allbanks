import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useBanksStore } from '@/stores/banks'

describe('Banks Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('contains catalog of 9 Kazakhstan banks', () => {
    const store = useBanksStore()
    expect(store.banks).toHaveLength(9)

    const bankNames = store.banks.map((b) => b.name)
    expect(bankNames).toContain('Altyn Bank')
    expect(bankNames).toContain('Bank RBK')
    expect(bankNames).toContain('ForteBank')
    expect(bankNames).toContain('Halyk Bank')
    expect(bankNames).toContain('Банк ЦентрКредит')
    expect(bankNames).toContain('Kaspi Bank')
  })

  it('fetches a bank by numeric id', () => {
    const store = useBanksStore()
    const halyk = store.getBankById(5)

    expect(halyk).toBeDefined()
    expect(halyk?.name).toBe('Halyk Bank')
    expect(halyk?.icon).toBe('halyk_logo.svg')
    expect(halyk?.website).toBe('halykbank.kz')
  })

  it('fetches a bank by string id', () => {
    const store = useBanksStore()
    const forte = store.getBankById('4')

    expect(forte).toBeDefined()
    expect(forte?.name).toBe('ForteBank')
    expect(forte?.icon).toBe('forte_bank.png')
  })

  it('returns undefined for non-existent bank id', () => {
    const store = useBanksStore()
    const unknown = store.getBankById(9999)

    expect(unknown).toBeUndefined()
  })
})

import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCurrenciesStore } from '@/stores/currencies'

describe('Currencies Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('contains USD, EUR, and RUR currency configurations', () => {
    const store = useCurrenciesStore()
    const codes = store.currencyList.map((c) => c.currencySymbol)

    expect(codes).toContain('USD')
    expect(codes).toContain('EUR')
    expect(codes).toContain('RUR')
  })

  it('switches currency tabs between exchangers and banks', () => {
    const store = useCurrenciesStore()
    expect(store.activeCurrencyTab).toBe('banks')

    store.setCurrencyTab('exchangers')
    expect(store.activeCurrencyTab).toBe('exchangers')

    store.setCurrencyTab('banks')
    expect(store.activeCurrencyTab).toBe('banks')
  })

  it('finds currency by code via getter', () => {
    const store = useCurrenciesStore()
    const usd = store.getCurrencyByCode('usd')

    expect(usd).toBeDefined()
    expect(usd?.currencySymbol).toBe('USD')
    expect(usd?.symbol).toBe('$')
  })
})

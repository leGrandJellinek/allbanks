import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useAppStore } from '@/stores/app'

describe('App Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with default city and navigation items', () => {
    const app = useAppStore()
    expect(app.selectedCity).toBe('Алматы')
    expect(app.isCityDropdownOpen).toBe(false)
    expect(app.cities).toContain('Алматы')
    expect(app.menuList.length).toBeGreaterThan(0)
    expect(app.categoriesList.length).toBeGreaterThan(0)
  })

  it('updates selected city and closes dropdown on setCity', () => {
    const app = useAppStore()
    app.isCityDropdownOpen = true

    app.setCity('Шымкент')

    expect(app.selectedCity).toBe('Шымкент')
    expect(app.isCityDropdownOpen).toBe(false)
  })

  it('toggles city dropdown visibility', () => {
    const app = useAppStore()
    expect(app.isCityDropdownOpen).toBe(false)

    app.toggleCityDropdown()
    expect(app.isCityDropdownOpen).toBe(true)

    app.toggleCityDropdown()
    expect(app.isCityDropdownOpen).toBe(false)
  })
})

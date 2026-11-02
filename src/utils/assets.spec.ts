import { describe, it, expect } from 'vitest'
import { getMainImage, getIconImage, getHeaderImage } from '@/utils/assets'

describe('Asset Path Utilities', () => {
  it('resolves existing main image URL correctly', () => {
    const url = getMainImage('rubl.png')
    expect(url).toBeDefined()
    expect(url).not.toContain('undefined')
  })

  it('resolves existing icon image URL or data URI correctly', () => {
    const url = getIconImage('menu-burger.svg')
    expect(url).toBeDefined()
    expect(url.length).toBeGreaterThan(0)
  })

  it('resolves existing header image URL correctly', () => {
    const url = getHeaderImage('header__content-bg.png')
    expect(url).toBeDefined()
    expect(url).not.toContain('undefined')
  })
})

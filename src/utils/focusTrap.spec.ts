import { describe, it, expect, beforeEach } from 'vitest'
import { trapFocus } from '@/utils/focusTrap'

describe('Focus Trap Utility', () => {
  let container: HTMLDivElement
  let btn1: HTMLButtonElement
  let btn2: HTMLButtonElement

  beforeEach(() => {
    container = document.createElement('div')
    btn1 = document.createElement('button')
    btn2 = document.createElement('button')

    btn1.textContent = 'Button 1'
    btn2.textContent = 'Button 2'

    container.appendChild(btn1)
    container.appendChild(btn2)
    document.body.appendChild(container)
  })

  it('ignores non-Tab key events', () => {
    btn1.focus()
    const event = new KeyboardEvent('keydown', { key: 'Enter', cancelable: true })
    trapFocus(container, event)

    expect(event.defaultPrevented).toBe(false)
  })

  it('wraps focus to first element when Tab is pressed on last element', () => {
    btn2.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: false, cancelable: true })

    trapFocus(container, event)

    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(btn1)
  })

  it('wraps focus to last element when Shift+Tab is pressed on first element', () => {
    btn1.focus()
    const event = new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, cancelable: true })

    trapFocus(container, event)

    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(btn2)
  })
})

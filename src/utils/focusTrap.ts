/**
 * Focus Trap Utility for Accessible Modal Dialogs and Slide-over Drawers.
 * Conforms to WAI-ARIA Dialog (Modal) Pattern.
 */
export function trapFocus(container: HTMLElement, event: KeyboardEvent): void {
  if (event.key !== 'Tab') return

  const focusableElements = container.querySelectorAll<HTMLElement>(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )

  const focusable = Array.from(focusableElements).filter((el) => {
    if (el.hasAttribute('disabled') || el.getAttribute('aria-hidden') === 'true') {
      return false
    }
    if (typeof window !== 'undefined') {
      const style = window.getComputedStyle(el)
      if (style.display === 'none' || style.visibility === 'hidden') {
        return false
      }
    }
    return true
  })

  if (focusable.length === 0) {
    event.preventDefault()
    return
  }

  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey) {
    if (document.activeElement === first || !container.contains(document.activeElement)) {
      last.focus()
      event.preventDefault()
    }
  } else {
    if (document.activeElement === last || !container.contains(document.activeElement)) {
      first.focus()
      event.preventDefault()
    }
  }
}

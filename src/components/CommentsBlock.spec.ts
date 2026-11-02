import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { setActivePinia, createPinia } from 'pinia'
import CommentsBlock from '@/components/CommentsBlock.vue'
import { useToastStore } from '@/stores/toast'

describe('CommentsBlock Component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders initial reviews list', () => {
    const wrapper = mount(CommentsBlock)
    const reviewItems = wrapper.findAll('.review-item')

    expect(reviewItems.length).toBeGreaterThanOrEqual(3)
    expect(wrapper.text()).toContain('Динара')
    expect(wrapper.text()).toContain('Сандугаш')
  })

  it('pre-fills comment textarea when reply button is clicked', async () => {
    const wrapper = mount(CommentsBlock)
    const replyBtns = wrapper.findAll('.review-reply-btn')

    expect(replyBtns.length).toBeGreaterThan(0)
    await replyBtns[0].trigger('click')

    const textarea = wrapper.find<HTMLTextAreaElement>('#comment-text')
    expect(textarea.element.value).toBe('@Динара, ')
  })

  it('submits a new comment and resets form inputs', async () => {
    const toast = useToastStore()
    const wrapper = mount(CommentsBlock)

    const nameInput = wrapper.find<HTMLInputElement>('#comment-name')
    const emailInput = wrapper.find<HTMLInputElement>('#comment-email')
    const commentInput = wrapper.find<HTMLTextAreaElement>('#comment-text')

    await nameInput.setValue('Алихан')
    await emailInput.setValue('alikhan@example.com')
    await commentInput.setValue('Отличные условия по кредитованию!')

    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.text()).toContain('Алихан')
    expect(wrapper.text()).toContain('Отличные условия по кредитованию!')

    // Form inputs should reset
    expect(nameInput.element.value).toBe('')
    expect(commentInput.element.value).toBe('')

    // Success toast notification
    expect(toast.toasts.length).toBeGreaterThan(0)
    expect(toast.toasts[0].message).toContain('Ваш комментарий успешно опубликован!')
  })
})

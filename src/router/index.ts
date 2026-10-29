import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const PAGE_TITLES: Record<string, string> = {
  '/': 'AllBanks.kz - Все банки Казахстана, курсы валют и кредиты',
  '/banks': 'Банки Казахстана - AllBanks.kz',
  '/rates': 'Курсы валют в банках Казахстана - AllBanks.kz',
  '/exchangers': 'Курсы валют в обменниках Казахстана - AllBanks.kz',
  '/nbk': 'Курсы валют Национального Банка РК (НБК) - AllBanks.kz',
  '/credits': 'Кредиты в банках Казахстана - AllBanks.kz',
  '/credits/apply': 'Подать заявку на кредит - AllBanks.kz',
  '/credits/mortgage': 'Кредиты под залог недвижимости - AllBanks.kz',
  '/credits/cash': 'Кредиты наличными - AllBanks.kz',
  '/microloans': 'Займы и микрокредиты онлайн в Казахстане - AllBanks.kz',
  '/deposits': 'Вклады для физических лиц в банках Казахстана - AllBanks.kz',
  '/news': 'Новости банков и финансового рынка - AllBanks.kz',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const customTitle = PAGE_TITLES[to.path]
  if (customTitle) {
    document.title = customTitle
  } else if (to.path.startsWith('/banks/')) {
    document.title = 'Информация о банке - AllBanks.kz'
  } else if (to.path.startsWith('/news/')) {
    document.title = 'Новость - AllBanks.kz'
  } else if (to.path.startsWith('/credits/')) {
    document.title = 'Кредитное предложение - AllBanks.kz'
  } else if (to.path.startsWith('/deposits/')) {
    document.title = 'Депозит - AllBanks.kz'
  } else {
    document.title = 'AllBanks.kz - Все банки Казахстана'
  }
})

export default router

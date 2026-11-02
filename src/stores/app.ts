import { defineStore } from 'pinia'

export interface MenuItem {
  id: number
  title: string
  path: string
}

export interface CategoryItem {
  id: number
  title: string
  bgcolor: string
  img: string
  path: string
}

export const useAppStore = defineStore('app', {
  state: () => ({
    selectedCity: 'Алматы',
    isCityDropdownOpen: false,
    cities: ['Алматы', 'Караганда', 'Шымкент', 'Нур - Султан', 'Темиртау', 'Актау'],
    menuList: [
      { id: 1, title: 'Банки Казахстана', path: '/banks' },
      { id: 2, title: 'Курсы в банках', path: '/rates' },
      { id: 3, title: 'Обменники', path: '/exchangers' },
      { id: 4, title: 'НБК', path: '/nbk' },
      { id: 5, title: 'Кредиты', path: '/credits' },
      { id: 6, title: 'Микрозаймы', path: '/microloans' },
      { id: 7, title: 'Вклады физлиц', path: '/deposits' },
      { id: 8, title: 'Новости', path: '/news' }
    ] as MenuItem[],
    categoriesList: [
      {
        id: 1,
        title: 'Курсы валют',
        bgcolor: '#FEF1E2',
        img: 'rubl.png',
        path: '/rates'
      },
      {
        id: 2,
        title: 'Микрозаймы',
        bgcolor: '#F1FED5',
        img: 'bag.png',
        path: '/microloans'
      },
      {
        id: 3,
        title: 'Кредиты',
        bgcolor: 'rgba(213, 254, 252, 0.7)',
        img: 'credit_card.png',
        path: '/credits'
      },
      {
        id: 4,
        title: 'Депозиты',
        bgcolor: '#E2EDFE',
        img: 'safe_and_coin.png',
        path: '/deposits'
      },
      {
        id: 5,
        title: 'Новости',
        bgcolor: '#FEE2E2',
        img: 'megaphone.png',
        path: '/news'
      },
      {
        id: 6,
        title: 'Банки РК',
        bgcolor: 'rgba(214, 213, 254, 0.7)',
        img: 'bank.png',
        path: '/banks'
      }
    ] as CategoryItem[]
  }),

  getters: {
    getMenuList: (state) => state.menuList,
    getCategoriesList: (state) => state.categoriesList,
    getCities: (state) => state.cities
  },

  actions: {
    setCity(city: string) {
      this.selectedCity = city
      this.isCityDropdownOpen = false
    },
    toggleCityDropdown() {
      this.isCityDropdownOpen = !this.isCityDropdownOpen
    },
    closeCityDropdown() {
      this.isCityDropdownOpen = false
    }
  }
})

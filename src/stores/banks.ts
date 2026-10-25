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

export interface CurrencyItem {
  id: number
  currencyName: string
  currencySymbol: string
  img: string
  symbol: string
  color: string
  sellPrice: string
  buyPrice: string
}

export interface BankItem {
  id: number
  name: string
  icon: string
  license: string
  location: string
  phoneNumber: string
  website: string
  usdBuy?: string
  usdSell?: string
  eurBuy?: string
  eurSell?: string
  rubBuy?: string
  rubSell?: string
}

export interface CreditOffer {
  id: number
  name: string
  logoText?: string
  logoColor?: string
  bgcolor?: string
  age: string
  sum: string
  term: string
  rate: string
  responseTime: string
}

export interface ExchangerItem {
  id: number
  name: string
  address: string
  usdBuy: string
  usdSell: string
  eurBuy: string
  eurSell: string
  rubBuy: string
  rubSell: string
}

export const useBanksStore = defineStore('banks', {
  state: () => ({
    selectedCity: 'Алматы',
    isCityDropdownOpen: false,
    activeCurrencyTab: 'exchangers' as 'exchangers' | 'banks',
    cities: [
      'Алматы',
      'Караганда',
      'Шымкент',
      'Нур - Султан',
      'Темиртау',
      'Актау'
    ],
    menuList: [
      { id: 1, title: 'Банки Казахстана', path: '/banks' },
      { id: 2, title: 'Курсы в банках', path: '/rates' },
      { id: 3, title: 'Обменники', path: '/exchangers' },
      { id: 4, title: 'НБК', path: '/nbk' },
      { id: 5, title: 'Кредиты', path: '/credits' },
      { id: 6, title: 'Микрозаймы', path: '/microloans' },
      { id: 7, title: 'Вклады физлиц', path: '/deposits' },
      { id: 8, title: 'Новости', path: '/news' },
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
      },
    ] as CategoryItem[],

    currencyList: [
      {
        id: 1,
        currencyName: 'Доллар',
        currencySymbol: 'USD',
        img: 'dollar.svg',
        symbol: '$',
        color: '#FF8A16',
        buyPrice: '430.50',
        sellPrice: '437.50',
      },
      {
        id: 2,
        currencyName: 'Евро',
        currencySymbol: 'EUR',
        img: 'euro.svg',
        symbol: '€',
        color: '#D92365',
        buyPrice: '430.50',
        sellPrice: '437.50',
      },
      {
        id: 3,
        currencyName: 'Рубль',
        currencySymbol: 'RUB',
        img: 'ruble.svg',
        symbol: '₽',
        color: '#DE251D',
        buyPrice: '430.50',
        sellPrice: '437.50',
      },
    ] as CurrencyItem[],

    creditOffers: [
      {
        id: 1,
        name: 'Сбербанк',
        logoText: 'СБЕР БАНК',
        logoColor: '#21A038',
        bgcolor: '#EAF8E6',
        age: 'от 23 лет',
        sum: '8 000 000 ₸',
        term: '60 мес',
        rate: '8,00 %',
        responseTime: '30 мин'
      },
      {
        id: 2,
        name: 'Home Credit',
        logoText: 'HOME CREDIT',
        logoColor: '#DE251D',
        bgcolor: '#FDF2F2',
        age: 'от 23 лет',
        sum: '8 000 000 ₸',
        term: '60 мес',
        rate: '8,00 %',
        responseTime: '30 мин'
      },
      {
        id: 3,
        name: 'MoneyMan',
        logoText: 'MONEYMAN',
        logoColor: '#5FB451',
        bgcolor: '#FDF2F2',
        age: 'от 23 лет',
        sum: '8 000 000 ₸',
        term: '60 мес',
        rate: '8,00 %',
        responseTime: '30 мин'
      },
      {
        id: 4,
        name: 'Kviku',
        logoText: 'KVIKU',
        logoColor: '#0094FF',
        bgcolor: '#EBF5FE',
        age: 'от 23 лет',
        sum: '8 000 000 ₸',
        term: '60 мес',
        rate: '8,00 %',
        responseTime: '30 мин'
      }
    ] as CreditOffer[],

    banks: [
      {
        id: 1,
        name: 'Altyn Bank',
        icon: 'altyn_bank.png',
        license: 'лицензия №1.2.23/194/33',
        location: 'Республика Казахстан, A05A1B9, Алматы, пр. Абая 109 «В»',
        phoneNumber: '+7(727)35-65-777',
        website: 'altynbank.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 2,
        name: 'Bank RBK',
        icon: 'rbk_bank.png',
        license: 'лицензия №1.2.23/194/33',
        location: 'Республика Казахстан, г. Алматы, Бостандыкский район, Площадь Республики, дом № 15, 050013 (A15X3C7)',
        phoneNumber: '8 (727) 330-90-30',
        website: 'bankrbk.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 3,
        name: 'Jýsan Bank',
        icon: 'jusan_bank.png',
        license: 'лицензия №1.2.23/194/33',
        location: 'Алматы, просп. Аль-Фараби, 15, блок 4В',
        phoneNumber: '+7(727)2587711 с городского, 7711 с мобильного',
        website: 'jysanbank.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 4,
        name: 'ForteBank',
        icon: 'forte_bank.png',
        license: 'лицензия №1.2.29/197/36',
        location: 'Нур-Султан (Астана), ул. Достык, 8/1',
        phoneNumber: '8 8000 800 819, 7575 звонок бесплатный',
        website: 'forte.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 5,
        name: 'Halyk Bank',
        icon: 'rbk_bank.png',
        license: 'лицензия №1.2.47/230/38',
        location: 'Алматы, пр. Аль-Фараби, 40',
        phoneNumber: '7111 с мобильного',
        website: 'halykbank.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 6,
        name: 'Сбербанк Россия',
        icon: 'bank.png',
        license: 'лицензия №1.2.199/93/31',
        location: 'Алматы, ул. Розыбакиева, 263',
        phoneNumber: '+7 (727) 250-30-20',
        website: 'sberbank.kz',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
    ] as BankItem[],

    exchangers: [
      {
        id: 1,
        name: 'TOO "Som Exchange"',
        address: 'ул. Абая 50, угол Байтурсынова',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 2,
        name: 'MIRVAN LTD',
        address: 'пр. Достык 42',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 3,
        name: 'БАНКА Exchange',
        address: 'ул. Гоголя 84',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      },
      {
        id: 4,
        name: 'Som Exchange 2',
        address: 'ул. Тимирязева 17',
        usdBuy: '430.50',
        usdSell: '437.50',
        eurBuy: '430.50',
        eurSell: '437.50',
        rubBuy: '430.50',
        rubSell: '437.50'
      }
    ] as ExchangerItem[],
  }),

  getters: {
    getMenuList: (state) => state.menuList,
    getCategoriesList: (state) => state.categoriesList,
    getCurrencyList: (state) => state.currencyList,
    getBanksList: (state) => state.banks,
    getCreditOffers: (state) => state.creditOffers,
    getExchangersList: (state) => state.exchangers,
  },

  actions: {
    setCity(city: string) {
      this.selectedCity = city
      this.isCityDropdownOpen = false
    },
    toggleCityDropdown() {
      this.isCityDropdownOpen = !this.isCityDropdownOpen
    },
    setCurrencyTab(tab: 'exchangers' | 'banks') {
      this.activeCurrencyTab = tab
    }
  }
})

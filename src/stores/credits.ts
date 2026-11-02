import { defineStore } from 'pinia'

export interface CreditOffer {
  id: number
  name: string
  logoText?: string
  logoImg?: string
  logoColor?: string
  bgcolor?: string
  age: string
  sum: string
  term: string
  rate: string
  responseTime: string
}

export const useCreditsStore = defineStore('credits', {
  state: () => ({
    creditOffers: [
      {
        id: 1,
        name: 'Сбербанк',
        logoText: 'СБЕР БАНК',
        logoImg: 'sber_logo.png',
        logoColor: '#21A038',
        bgcolor: '#EAF8E6',
        age: 'от 23 лет',
        sum: '8 000 000',
        term: '60 мес',
        rate: '8,00 %',
        responseTime: '30 мин'
      },
      {
        id: 2,
        name: 'Kaspi.kz',
        logoText: 'Kaspi.kz',
        logoImg: 'kaspi_logo.png',
        logoColor: '#DE251D',
        bgcolor: '#FDF2F2',
        age: 'от 23 лет',
        sum: '8 000 000',
        term: '60 мес',
        rate: '8,00 %',
        responseTime: '30 мин'
      },
      {
        id: 3,
        name: 'Bank RBK',
        logoText: 'BANK RBK',
        logoImg: 'rbk_logo.png',
        logoColor: '#00A896',
        bgcolor: '#E2F8F8',
        age: 'от 23 лет',
        sum: '8 000 000',
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
        sum: '8 000 000',
        term: '60 мес',
        rate: '8,00 %',
        responseTime: '30 мин'
      }
    ] as CreditOffer[]
  }),

  getters: {
    getCreditOffers: (state) => state.creditOffers,
    getCreditById: (state) => (id: number | string) => {
      const numId = typeof id === 'string' ? parseInt(id, 10) : id
      return state.creditOffers.find((item) => item.id === numId)
    }
  }
})
